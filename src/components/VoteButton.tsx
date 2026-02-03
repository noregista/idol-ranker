"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import confetti from "canvas-confetti";

interface VoteButtonProps {
    onClick: () => void;
    disabled: boolean;
    isLoggedIn: boolean;
    onLoginRequired: () => void;
    groupColor: string;
}

export default function VoteButton({
    onClick,
    disabled,
    isLoggedIn,
    onLoginRequired,
    groupColor,
}: VoteButtonProps) {
    const t = useTranslations("group");
    const [isVoting, setIsVoting] = useState(false);

    const handleClick = async () => {
        if (!isLoggedIn) {
            onLoginRequired();
            return;
        }

        if (disabled || isVoting) return;

        setIsVoting(true);

        // 紙吹雪エフェクト
        const colors = [groupColor, "#FF4081", "#00B0FF", "#FFD700", "#00E676"];

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: colors,
        });

        // 少し遅延してから実際の投票処理
        await new Promise((resolve) => setTimeout(resolve, 300));
        onClick();

        setTimeout(() => {
            setIsVoting(false);
        }, 1000);
    };

    if (disabled && isLoggedIn) {
        return (
            <div className="px-4 py-2 text-sm text-gray-400 bg-gray-100 rounded-full">
                {t("voted")}
            </div>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            onClick={handleClick}
            disabled={isVoting}
            className={`relative px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base text-white transition-all duration-200 overflow-hidden ${isVoting ? "opacity-75" : ""
                }`}
            style={{
                background: `linear-gradient(135deg, ${groupColor} 0%, ${adjustColor(groupColor, -20)} 100%)`,
                boxShadow: `0 4px 15px ${groupColor}40`,
            }}
        >
            {isVoting ? (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                >
                    <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                        ✨
                    </motion.span>
                    ...
                </motion.span>
            ) : (
                <span className="flex items-center gap-1">
                    <span className="hidden md:inline">💖</span>
                    {t("voteButton")}
                </span>
            )}

            {/* Shine effect */}
            <motion.div
                className="absolute inset-0 bg-white opacity-0"
                animate={{
                    opacity: [0, 0.3, 0],
                    x: ["-100%", "100%"],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                }}
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                }}
            />
        </motion.button>
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
