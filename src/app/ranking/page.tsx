"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Header from "@/components/Header";
import AdPlaceholder from "@/components/AdPlaceholder";
import { getAllMembers, groups, getGroupById } from "@/data/members";
import { supabase, getMonthlyOverallRanking } from "@/lib/supabase";

export default function OverallRankingPage() {
    const t = useTranslations("ranking");
    const tGroups = useTranslations("groups");
    const locale = useLocale();
    const [voteCounts, setVoteCounts] = useState<Record<string, number>>({});
    const [loading, setLoading] = useState(true);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

    const allMembers = getAllMembers();

    const fetchRanking = useCallback(async () => {
        setLoading(true);
        const counts = await getMonthlyOverallRanking();
        setVoteCounts(counts);
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchRanking();

        // Realtime更新
        const channel = supabase
            .channel("overall-ranking-changes")
            .on(
                "postgres_changes",
                { event: "INSERT", schema: "public", table: "votes" },
                () => {
                    fetchRanking();
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [fetchRanking]);

    // ランキング順にソート
    const rankedMembers = [...allMembers]
        .map((member) => ({
            ...member,
            voteCount: voteCounts[member.id] || 0,
        }))
        .sort((a, b) => b.voteCount - a.voteCount)
        .slice(0, 100); // Top 100

    const currentMonth = new Date().toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
    });

    // 最大投票数
    const maxVotes = Math.max(...rankedMembers.map((m) => m.voteCount), 1);

    // ランクに応じた絵文字
    const getRankEmoji = (rank: number): string => {
        switch (rank) {
            case 1:
                return "👑";
            case 2:
                return "🥈";
            case 3:
                return "🥉";
            default:
                return "";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
            <Header />

            {/* Hero */}
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-12 text-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="text-6xl mb-4 block">🏆</span>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        全グループ総合ランキング
                    </h1>
                    <p className="text-white/80">{currentMonth}</p>
                </motion.div>
            </div>

            {/* Ad */}
            <div className="max-w-4xl mx-auto px-4 py-4">
                <AdPlaceholder size="medium" />
            </div>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 pb-8">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
                        <span className="text-3xl mb-2 block">🎤</span>
                        <div className="text-2xl font-bold text-gray-800">{groups.length}</div>
                        <div className="text-sm text-gray-500">グループ</div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
                        <span className="text-3xl mb-2 block">👥</span>
                        <div className="text-2xl font-bold text-gray-800">{allMembers.length}</div>
                        <div className="text-sm text-gray-500">メンバー</div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
                        <span className="text-3xl mb-2 block">💖</span>
                        <div className="text-2xl font-bold text-gray-800">
                            {Object.values(voteCounts).reduce((a, b) => a + b, 0).toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">月間投票数</div>
                    </div>
                </div>

                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-6"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    ホームに戻る
                </Link>

                {/* Ranking List */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    TOP 100 ランキング
                </h2>

                {loading ? (
                    <div className="space-y-3">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg p-4 animate-pulse">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-7 bg-gray-200 rounded" />
                                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                                    <div className="flex-1">
                                        <div className="h-5 bg-gray-200 rounded w-32 mb-2" />
                                        <div className="h-3 bg-gray-200 rounded w-full" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-3">
                        {rankedMembers.map((member, index) => {
                            const rank = index + 1;
                            const group = getGroupById(member.groupId);
                            const barWidth = maxVotes > 0 ? (member.voteCount / maxVotes) * 100 : 0;

                            // 広告を挿入
                            const showAd = index === 10 || index === 30 || index === 50;

                            return (
                                <div key={member.id}>
                                    {showAd && (
                                        <div className="my-4">
                                            <AdPlaceholder size="small" />
                                        </div>
                                    )}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: Math.min(index * 0.02, 0.5) }}
                                        className={`bg-white rounded-2xl shadow-lg p-4 relative overflow-hidden ${rank <= 3 ? "border-2" : ""
                                            }`}
                                        style={{
                                            borderColor: rank <= 3 ? group?.color : undefined,
                                        }}
                                    >
                                        <div className="flex items-center gap-4">
                                            {/* Rank */}
                                            <div className="flex-shrink-0 w-10 text-center">
                                                {rank <= 3 ? (
                                                    <span className="text-2xl">{getRankEmoji(rank)}</span>
                                                ) : (
                                                    <span className="text-xl font-bold text-gray-400">{rank}</span>
                                                )}
                                            </div>

                                            {/* Avatar Removed */}


                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                    <h3 className="text-lg font-bold text-gray-800 truncate">
                                                        {locale === "en" ? member.nameEn : member.name}
                                                    </h3>
                                                    <span
                                                        className="text-xs px-2 py-0.5 rounded-full text-white"
                                                        style={{ backgroundColor: member.groupColor }}
                                                    >
                                                        {tGroups(member.groupId)}
                                                    </span>
                                                    {member.generation && (
                                                        <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-500">
                                                            {member.generation}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Progress Bar */}
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${barWidth}%` }}
                                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                                            className="h-full rounded-full"
                                                            style={{
                                                                background: `linear-gradient(90deg, ${member.groupColor} 0%, ${adjustColor(member.groupColor, 30)} 100%)`,
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="flex-shrink-0 text-sm font-medium text-gray-600 min-w-[60px] text-right">
                                                        {member.voteCount.toLocaleString()}票
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Top 3 decoration */}
                                        {rank <= 3 && (
                                            <div
                                                className="absolute top-0 right-0 w-20 h-20 opacity-5 pointer-events-none"
                                                style={{
                                                    background: `radial-gradient(circle at top right, ${member.groupColor}, transparent)`,
                                                }}
                                            />
                                        )}
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-6">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <p className="font-bold">👑 アイドル総選挙</p>
                    <p className="text-sm text-white/80 mt-1">© {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    );
}

// 色調整
function adjustColor(color: string, amount: number): string {
    const hex = color.replace("#", "");
    const r = Math.max(0, Math.min(255, parseInt(hex.substring(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substring(2, 4), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substring(4, 6), 16) + amount));
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
