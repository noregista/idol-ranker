"use client";

import { useState, useEffect, useCallback, use, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Header from "@/components/Header";
import MemberCard from "@/components/MemberCard";
import VoteHistory from "@/components/VoteHistory";
import AdPlaceholder from "@/components/AdPlaceholder";
import AuthModal from "@/components/AuthModal";
import { groups, getGroupById, getMemberById } from "@/data/members";
import { supabase, getMemberVotes, hasVotedToday, castVote, getVoteHistory } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import type { VoteHistoryItem } from "@/components/VoteHistory";

interface PageProps {
    params: Promise<{ groupId: string }>;
}

type SortType = "votes" | "name" | "generation";

export default function GroupPage({ params }: PageProps) {
    const t = useTranslations("group");
    const tCommon = useTranslations("common");
    const locale = useLocale();
    const resolvedParams = use(params);
    const group = getGroupById(resolvedParams.groupId);

    const [user, setUser] = useState<User | null>(null);
    const [voteCounts, setVoteCounts] = useState<Record<string, number>>({});
    const [hasVoted, setHasVoted] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [voteHistory, setVoteHistory] = useState<VoteHistoryItem[]>([]);
    const [historyLoading, setHistoryLoading] = useState(true);

    // ソート・検索用の状態
    const [sortType, setSortType] = useState<SortType>("votes");
    const [searchQuery, setSearchQuery] = useState("");

    // 投票データを取得
    const fetchVotes = useCallback(async () => {
        if (!group) return;
        const counts = await getMemberVotes(group.id);
        setVoteCounts(counts);
    }, [group]);

    // 投票履歴を取得
    const fetchVoteHistory = useCallback(async () => {
        if (!group) return;
        setHistoryLoading(true);

        const history = await getVoteHistory(group.id, 50);

        // 履歴データを整形
        const formattedHistory: VoteHistoryItem[] = history.map((vote) => {
            const member = getMemberById(vote.member_id);
            return {
                id: vote.id,
                memberName: member?.name || "不明",
                memberGeneration: member?.generation || "",
                userName: vote.user_nickname || vote.user_id.substring(0, 8) + "...",
                votedAt: vote.voted_at,
            };
        });

        setVoteHistory(formattedHistory);
        setHistoryLoading(false);
    }, [group]);

    // ユーザーの投票状態をチェック
    const checkVoteStatus = useCallback(async (userId: string) => {
        if (!group) return;
        const voted = await hasVotedToday(userId, group.id);
        setHasVoted(voted);
    }, [group]);

    useEffect(() => {
        // 初期データ取得
        fetchVotes();
        fetchVoteHistory();

        // ユーザー状態取得
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
            if (user) {
                checkVoteStatus(user.id);
            }
            setLoading(false);
        });

        // 認証状態変化を監視
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            const currentUser = session?.user ?? null;
            setUser(currentUser);
            if (currentUser) {
                checkVoteStatus(currentUser.id);
            } else {
                setHasVoted(false);
            }
        });

        // Realtime更新をサブスクライブ
        const channel = supabase
            .channel("votes-changes")
            .on(
                "postgres_changes",
                { event: "INSERT", schema: "public", table: "votes" },
                () => {
                    fetchVotes();
                    fetchVoteHistory();
                }
            )
            .subscribe();

        return () => {
            subscription.unsubscribe();
            supabase.removeChannel(channel);
        };
    }, [fetchVotes, fetchVoteHistory, checkVoteStatus]);

    // 投票処理
    const handleVote = async (memberId: string) => {
        if (!user || !group) return;

        const result = await castVote(user.id, memberId, group.id);
        if (result.success) {
            setHasVoted(true);
            fetchVotes();
            fetchVoteHistory();
        } else {
            alert(result.error);
        }
    };

    // フィルタリングとソートを適用したメンバーリスト
    const filteredAndSortedMembers = useMemo(() => {
        if (!group) return [];

        let members = [...group.members];

        // 検索フィルタ
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            members = members.filter(
                (member) =>
                    member.name.toLowerCase().includes(query) ||
                    member.generation.toLowerCase().includes(query)
            );
        }

        // ソート
        switch (sortType) {
            case "votes":
                members.sort((a, b) => {
                    const votesA = voteCounts[a.id] || 0;
                    const votesB = voteCounts[b.id] || 0;
                    return votesB - votesA;
                });
                break;
            case "name":
                if (locale === "en") {
                    members.sort((a, b) => (a.nameEn || a.name).localeCompare(b.nameEn || b.name));
                } else {
                    members.sort((a, b) => a.nameKana.localeCompare(b.nameKana, "ja"));
                }
                break;
            case "generation":
                members.sort((a, b) => {
                    // 期数でソート（例: "3期生" → 3）
                    const genA = parseInt(a.generation.replace(/\D/g, "")) || 999;
                    const genB = parseInt(b.generation.replace(/\D/g, "")) || 999;
                    if (genA !== genB) return genA - genB;
                    // 同じ期なら名前でソート
                    if (locale === "en") {
                        return (a.nameEn || a.name).localeCompare(b.nameEn || b.name);
                    }
                    return a.name.localeCompare(b.name, "ja");
                });
                break;
        }

        return members;
    }, [group, searchQuery, sortType, voteCounts, locale]);

    // ユニークな期のリストを取得
    const generations = useMemo(() => {
        if (!group) return [];
        const gens = new Set(group.members.map((m) => m.generation).filter(Boolean));
        return Array.from(gens).sort();
    }, [group]);

    if (!group) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-purple-50">
                <div className="text-center">
                    <span className="text-6xl mb-4 block">😵</span>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Group not found
                    </h1>
                    <Link
                        href="/"
                        className="text-pink-500 hover:text-pink-600 underline"
                    >
                        {tCommon("back")}
                    </Link>
                </div>
            </div>
        );
    }

    // 最大投票数（プログレスバー用）
    const maxVotes = Math.max(...Object.values(voteCounts), 1);

    // 現在の月を取得
    const currentMonth = new Date().toLocaleDateString(locale === "en" ? "en-US" : "ja-JP", {
        year: "numeric",
        month: "long",
    });

    // アイコンが画像かどうか
    const isImageIcon = group.icon.includes("/") || group.icon.endsWith(".png");

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
            <Header />

            {/* Back Button & Title */}
            <div
                className="py-8"
                style={{
                    background: `linear-gradient(135deg, ${group.color}20 0%, ${group.color}05 100%)`,
                }}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-4"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        ホームに戻る
                    </Link>

                    <div className="flex items-center gap-4">
                        <motion.div
                            className={`w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg ${isImageIcon ? "bg-white p-2" : ""
                                }`}
                            style={{
                                background: isImageIcon
                                    ? "white"
                                    : `linear-gradient(135deg, ${group.color} 0%, ${adjustColor(group.color, -20)} 100%)`,
                            }}
                            animate={{ rotate: [0, -3, 3, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            {isImageIcon ? (
                                <div className="relative w-full h-full">
                                    <Image
                                        src={group.icon}
                                        alt={group.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <span className="text-5xl text-white">{group.icon}</span>
                            )}
                        </motion.div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                                {group.name}
                            </h1>
                            <p className="text-gray-600">
                                メンバーランキング • {group.members.length}名
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ad Placeholder */}
            <div className="max-w-6xl mx-auto px-4 py-4">
                <AdPlaceholder size="medium" />
            </div>

            {/* Main Content - Two Column Layout */}
            <main className="max-w-6xl mx-auto px-4 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Rankings */}
                    <div className="lg:col-span-2">
                        {/* Ranking Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                                <span
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg"
                                    style={{ backgroundColor: group.color }}
                                >
                                    🏆
                                </span>
                                {currentMonth}のランキング
                            </h2>

                            {!loading && (
                                <div className="text-sm">
                                    {user ? (
                                        hasVoted ? (
                                            <span className="text-green-500 flex items-center gap-1 bg-green-50 px-3 py-1.5 rounded-full">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                本日投票済み
                                            </span>
                                        ) : (
                                            <span className="text-white font-medium px-3 py-1.5 rounded-full" style={{ backgroundColor: group.color }}>
                                                💖 投票可能
                                            </span>
                                        )
                                    ) : (
                                        <span className="text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                                            ログインで投票
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Search & Sort Controls */}
                        <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Search Input */}
                                <div className="flex-1 relative">
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="メンバー名・期で検索..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery("")}
                                            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                </div>

                                {/* Sort Dropdown */}
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500 whitespace-nowrap">並び替え:</span>
                                    <select
                                        value={sortType}
                                        onChange={(e) => setSortType(e.target.value as SortType)}
                                        className="px-4 py-2.5 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all cursor-pointer"
                                    >
                                        <option value="votes">🏆 人気順</option>
                                        <option value="name">あ 名前順</option>
                                        <option value="generation">📅 期別</option>
                                    </select>
                                </div>
                            </div>

                            {/* Search Results Info */}
                            {searchQuery && (
                                <div className="mt-3 text-sm text-gray-500">
                                    「{searchQuery}」の検索結果: {filteredAndSortedMembers.length}件
                                </div>
                            )}
                        </div>

                        {/* Member List */}
                        <div className="space-y-3">
                            {filteredAndSortedMembers.length === 0 ? (
                                <div className="text-center py-12 bg-white rounded-2xl shadow-md">
                                    <span className="text-5xl mb-4 block">🔍</span>
                                    <p className="text-gray-500 text-lg">該当するメンバーが見つかりません</p>
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="mt-4 text-pink-500 hover:text-pink-600 underline"
                                    >
                                        検索をクリア
                                    </button>
                                </div>
                            ) : (
                                filteredAndSortedMembers.map((member, index) => {
                                    // 広告を5位と10位の後に挿入（ソートがvotesの場合のみ）
                                    const showAd = sortType === "votes" && (index === 5 || index === 10);
                                    // ランク表示（ソートがvotesの場合のみ実際のランクを表示、それ以外はインデックス+1）
                                    const displayRank = sortType === "votes"
                                        ? group.members.findIndex((m) => m.id === member.id) !== -1
                                            ? [...group.members].sort((a, b) => (voteCounts[b.id] || 0) - (voteCounts[a.id] || 0)).findIndex((m) => m.id === member.id) + 1
                                            : index + 1
                                        : index + 1;

                                    return (
                                        <div key={member.id}>
                                            {showAd && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    className="my-4"
                                                >
                                                    <AdPlaceholder size="small" />
                                                </motion.div>
                                            )}
                                            <MemberCard
                                                member={member}
                                                rank={displayRank}
                                                voteCount={voteCounts[member.id] || 0}
                                                maxVotes={maxVotes}
                                                groupColor={group.color}
                                                canVote={!hasVoted}
                                                isLoggedIn={!!user}
                                                showRank={sortType === "votes"}
                                                onVote={handleVote}
                                                onLoginRequired={() => setShowAuthModal(true)}
                                            />
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>

                    {/* Right Column - Vote History */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <VoteHistory
                                votes={voteHistory}
                                groupColor={group.color}
                                isLoading={historyLoading}
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* Ad Placeholder - Footer上 */}
            <div className="max-w-6xl mx-auto px-4 pb-8">
                <AdPlaceholder size="large" />
            </div>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-6">
                <div className="max-w-6xl mx-auto px-4 text-center text-white">
                    <p className="font-bold">👑 アイドル総選挙</p>
                    <p className="text-sm text-white/80 mt-1">© {new Date().getFullYear()}</p>
                </div>
            </footer>

            {/* Auth Modal */}
            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
            />
        </div>
    );
}

// 色を調整するヘルパー関数
function adjustColor(color: string, amount: number): string {
    const hex = color.replace("#", "");
    const r = Math.max(0, Math.min(255, parseInt(hex.substring(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substring(2, 4), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substring(4, 6), 16) + amount));
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
