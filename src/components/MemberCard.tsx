"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import type { Member } from "@/data/members";
import { isBirthdayMonth } from "@/data/members";
import VoteButton from "./VoteButton";

interface MemberCardProps {
    member: Member;
    rank: number;
    voteCount: number;
    maxVotes: number;
    groupColor: string;
    canVote: boolean;
    isLoggedIn: boolean;
    showRank?: boolean; // 人気順の時だけtrueにする
    onVote: (memberId: string) => void;
    onLoginRequired: () => void;
}

export default function MemberCard({
    member,
    rank,
    voteCount,
    maxVotes,
    groupColor,
    canVote,
    isLoggedIn,
    showRank = true,
    onVote,
    onLoginRequired,
}: MemberCardProps) {
    const t = useTranslations("group");
    const locale = useLocale();
    const [showShareMenu, setShowShareMenu] = useState(false);

    // ランクに応じた絵文字
    const getRankEmoji = (rank: number): string => {
        switch (rank) {
            case 1:
                return "🥇";
            case 2:
                return "🥈";
            case 3:
                return "🥉";
            default:
                return "";
        }
    };

    // シェア機能
    const handleShare = (platform: "twitter" | "line" | "copy") => {
        const shareText = `${displayName}に投票しました！ #アイドル総選挙 #${member.groupId}`;
        const shareUrl = typeof window !== "undefined" ? window.location.href : "";

        switch (platform) {
            case "twitter":
                window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
                    "_blank"
                );
                break;
            case "line":
                window.open(
                    `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
                    "_blank"
                );
                break;
            case "copy":
                navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
                alert("コピーしました！");
                break;
        }
        setShowShareMenu(false);
    };

    // バーの幅を計算
    const barWidth = maxVotes > 0 ? (voteCount / maxVotes) * 100 : 0;

    // 誕生日月かどうか
    const isBirthday = isBirthdayMonth(member.birthday);

    // 言語に応じた名前表示
    const displayName = locale === "en" ? member.nameEn : member.name;
    const subName = locale === "en" ? member.name : member.nameKana;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: Math.min(rank, 20) * 0.03 }}
            className={`bg-white rounded-2xl shadow-md p-4 md:p-5 relative overflow-hidden hover:shadow-lg transition-shadow ${showRank && rank <= 3 ? "ring-2" : ""
                }`}
            style={{
                borderColor: showRank && rank <= 3 ? groupColor : undefined,
            }}
        >
            <div className="flex items-center gap-3 md:gap-4">
                {/* Rank - 人気順の時だけ表示 */}
                {showRank && (
                    <div className="flex-shrink-0 w-10 md:w-12 text-center">
                        {rank <= 3 ? (
                            <motion.span
                                className="text-2xl md:text-3xl"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {getRankEmoji(rank)}
                            </motion.span>
                        ) : (
                            <span className="text-lg md:text-xl font-bold text-gray-400">
                                {rank}
                            </span>
                        )}
                    </div>
                )}

                {/* Info - アイコン削除、誕生日バッジはここに */}
                <div className="flex-1 min-w-0 relative">
                    {/* 誕生日バッジ */}
                    {isBirthday && (
                        <motion.div
                            className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-md border-2 border-white z-10"
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <span className="text-xs">🎂</span>
                        </motion.div>
                    )}

                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-800 truncate leading-tight">
                                {displayName}
                            </h3>
                            <span className="text-xs text-gray-400 font-normal">
                                {subName}
                            </span>
                        </div>
                        {member.generation && (
                            <span
                                className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full text-white font-medium"
                                style={{ backgroundColor: adjustColor(groupColor, 20) }}
                            >
                                {member.generation}
                            </span>
                        )}
                        {/* 誕生日月バッジ（テキスト版） */}
                        {isBirthday && (
                            <span className="flex-shrink-0 text-xs px-2 py-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-white font-medium">
                                🎂 {t("birthdayMonth")}
                            </span>
                        )}
                    </div>

                    {/* Vote Progress Bar */}
                    <div className="flex items-center gap-2">
                        <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${barWidth}%` }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="h-full rounded-full"
                                style={{
                                    background: `linear-gradient(90deg, ${groupColor} 0%, ${adjustColor(groupColor, 40)} 100%)`,
                                }}
                            />
                        </div>
                        <span className="flex-shrink-0 text-sm font-semibold text-gray-700 min-w-[50px] text-right">
                            {voteCount.toLocaleString()} {locale === "en" ? "votes" : "票"}
                        </span>
                    </div>
                </div>

                {/* Vote Button & Share Button */}
                <div className="flex-shrink-0 flex items-center gap-2">
                    <VoteButton
                        onClick={() => onVote(member.id)}
                        disabled={!canVote}
                        isLoggedIn={isLoggedIn}
                        onLoginRequired={onLoginRequired}
                        groupColor={groupColor}
                    />

                    {/* Share Button */}
                    <div className="relative">
                        <motion.button
                            onClick={() => setShowShareMenu(!showShareMenu)}
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </motion.button>

                        {/* Share Menu */}
                        {showShareMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute right-0 bottom-full mb-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-20"
                            >
                                <button
                                    onClick={() => handleShare("twitter")}
                                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 w-full text-left text-sm"
                                >
                                    <span className="text-blue-400">𝕏</span> X でシェア
                                </button>
                                <button
                                    onClick={() => handleShare("line")}
                                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 w-full text-left text-sm"
                                >
                                    <span className="text-green-500">💬</span> LINE でシェア
                                </button>
                                <button
                                    onClick={() => handleShare("copy")}
                                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 w-full text-left text-sm"
                                >
                                    <span className="text-gray-500">📋</span> コピー
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Rank 1-3 Background Decoration */}
            {rank <= 3 && (
                <div
                    className="absolute top-0 right-0 w-40 h-40 opacity-5 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at top right, ${groupColor}, transparent)`,
                    }}
                />
            )}
        </motion.div>
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
