"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const themes = [
        { value: "light" as const, icon: "☀️", label: "ライト" },
        { value: "dark" as const, icon: "🌙", label: "ダーク" },
        { value: "system" as const, icon: "💻", label: "システム" },
    ];

    return (
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            {themes.map((t) => (
                <motion.button
                    key={t.value}
                    onClick={() => setTheme(t.value)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${theme === t.value
                            ? "bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-sm"
                            : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                        }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="mr-1">{t.icon}</span>
                    <span className="hidden sm:inline">{t.label}</span>
                </motion.button>
            ))}
        </div>
    );
}
