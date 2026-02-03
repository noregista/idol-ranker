"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { motion } from "framer-motion";

interface LanguageSwitcherProps {
    currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const switchLocale = (newLocale: string) => {
        // クッキーに言語設定を保存
        document.cookie = `locale=${newLocale};path=/;max-age=${60 * 60 * 24 * 365}`;

        // ページをリフレッシュして新しい言語を適用
        startTransition(() => {
            router.refresh();
        });
    };

    return (
        <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => switchLocale("ja")}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${currentLocale === "ja"
                        ? "bg-white text-pink-600 shadow-md"
                        : "text-white/80 hover:text-white"
                    }`}
                disabled={isPending}
            >
                🇯🇵 日本語
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => switchLocale("en")}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${currentLocale === "en"
                        ? "bg-white text-pink-600 shadow-md"
                        : "text-white/80 hover:text-white"
                    }`}
                disabled={isPending}
            >
                🇺🇸 EN
            </motion.button>
        </div>
    );
}
