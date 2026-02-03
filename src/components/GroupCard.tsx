"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { Group } from "@/data/members";

interface GroupCardProps {
    group: Group;
    index: number;
    isFavorite?: boolean;
    onToggleFavorite?: () => void;
    showFavoriteButton?: boolean;
}

export default function GroupCard({
    group,
    index,
    isFavorite = false,
    onToggleFavorite,
    showFavoriteButton = false
}: GroupCardProps) {
    const t = useTranslations("groups");

    // アイコンが画像ファイルかどうか判定（.pngなどで終わる、または/から始まる）
    const isImageIcon = group.icon.includes("/") || group.icon.endsWith(".png");

    // お気に入りボタンのクリックハンドラー
    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleFavorite?.();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/group/${group.slug}`}>
                <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden bg-white rounded-3xl shadow-lg cursor-pointer transition-all duration-300 group"
                    style={{
                        borderBottom: `4px solid ${group.color}`,
                    }}
                >
                    {/* Background Gradient */}
                    <div
                        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                        style={{
                            background: `linear-gradient(135deg, ${group.color} 0%, transparent 60%)`,
                        }}
                    />

                    {/* お気に入りボタン */}
                    {showFavoriteButton && (
                        <motion.button
                            onClick={handleFavoriteClick}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.span
                                key={isFavorite ? "filled" : "empty"}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-xl"
                            >
                                {isFavorite ? "💖" : "🤍"}
                            </motion.span>
                        </motion.button>
                    )}

                    <div className="relative p-6">
                        {/* Group Icon (Image or Emoji) */}
                        <motion.div
                            className="w-24 h-24 rounded-2xl mb-4 flex items-center justify-center shadow-lg overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, ${group.color} 0%, ${adjustColor(group.color, 30)} 100%)`,
                            }}
                            whileHover={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            {isImageIcon ? (
                                <div className="relative w-full h-full flex items-center justify-center p-2">
                                    <Image
                                        src={group.icon}
                                        alt={t(group.id)}
                                        width={80}
                                        height={80}
                                        className="object-contain drop-shadow-lg"
                                        style={{
                                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                                        }}
                                    />
                                </div>
                            ) : (
                                <span className="text-5xl">{group.icon}</span>
                            )}
                        </motion.div>

                        {/* Group Name */}
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {t(group.id)}
                        </h3>

                        {/* Member Count */}
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {[...Array(Math.min(4, group.members.length))].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-bold shadow-sm"
                                        style={{
                                            backgroundColor: group.color,
                                            opacity: 1 - i * 0.15,
                                        }}
                                    >
                                        {group.members[i]?.name.charAt(0)}
                                    </div>
                                ))}
                                {group.members.length > 4 && (
                                    <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-xs text-white font-bold shadow-sm">
                                        +{group.members.length - 4}
                                    </div>
                                )}
                            </div>
                            <span className="text-gray-500 text-sm font-medium">
                                {group.members.length}名
                            </span>
                        </div>

                        {/* Arrow Icon */}
                        <motion.div
                            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors"
                            whileHover={{ x: 3 }}
                        >
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}

// Helper to adjust color brightness
function adjustColor(color: string, amount: number): string {
    const hex = color.replace("#", "");
    const r = Math.max(0, Math.min(255, parseInt(hex.substring(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substring(2, 4), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substring(4, 6), 16) + amount));
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
