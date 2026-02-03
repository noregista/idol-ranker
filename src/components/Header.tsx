"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { supabase, signOut } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import AuthModal from "./AuthModal";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import BirthdayNotification from "./BirthdayNotification";

export default function Header() {
    const t = useTranslations("common");
    const locale = useLocale();
    const [user, setUser] = useState<User | null>(null);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const [nickname, setNickname] = useState<string | null>(null);

    useEffect(() => {
        // 初期ユーザー取得
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
            setLoading(false);
            if (user) fetchProfile(user.id);
        });

        // 認証状態の変化を監視
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                const currentUser = session?.user ?? null;
                setUser(currentUser);
                if (currentUser) fetchProfile(currentUser.id);
                else setNickname(null);
            }
        );

        return () => subscription.unsubscribe();
    }, []);

    const fetchProfile = async (userId: string) => {
        const { data } = await supabase
            .from("profiles")
            .select("nickname")
            .eq("id", userId)
            .single();
        if (data?.nickname) {
            setNickname(data.nickname);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut();
            setUser(null);
            setNickname(null);
        } catch (error) {
            console.error("Sign out error:", error);
        }
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg backdrop-blur-sm bg-opacity-95">
                <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center h-full py-3">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2"
                        >
                            <span className="text-3xl">👑</span>
                            <div className="flex flex-col leading-tight">
                                <span className="text-white font-bold text-lg tracking-tight">
                                    アイドル総選挙
                                </span>
                                <span className="text-white/70 text-xs font-medium hidden sm:block">
                                    IDOL POP RANKER
                                </span>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Right Side Controls */}
                    <div className="flex items-center gap-3">
                        {/* Birthday Notification */}
                        <BirthdayNotification />

                        {/* Theme Toggle */}
                        <div className="hidden sm:block">
                            <ThemeToggle />
                        </div>

                        {/* Language Switcher */}
                        <div className="hidden sm:block">
                            <LanguageSwitcher currentLocale={locale} />
                        </div>

                        {/* Auth */}
                        {loading ? (
                            <div className="w-20 h-10 bg-white/20 rounded-full animate-pulse" />
                        ) : user ? (
                            <div className="flex items-center gap-3">
                                <Link href="/mypage">
                                    <motion.div
                                        className="flex items-center gap-2 cursor-pointer hover:bg-white/10 px-2 py-1 rounded-full transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pink-500 font-bold text-lg shadow-md border-2 border-pink-200">
                                            {nickname ? nickname.charAt(0) : (user.email?.charAt(0).toUpperCase() || "U")}
                                        </div>
                                        <span className="text-sm text-white font-medium hidden md:block max-w-[100px] truncate">
                                            {nickname || user.email?.split("@")[0]}
                                        </span>
                                    </motion.div>
                                </Link>
                                <button
                                    onClick={handleSignOut}
                                    className="px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all border border-white/30"
                                >
                                    {t("logout")}
                                </button>
                            </div>
                        ) : (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowAuthModal(true)}
                                className="px-6 py-2.5 bg-white text-pink-600 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-pink-200"
                            >
                                {t("login")}
                            </motion.button>
                        )}
                    </div>
                </div>

                {/* Mobile Language Switcher */}
                <div className="sm:hidden px-4 pb-2">
                    <LanguageSwitcher currentLocale={locale} />
                </div>
            </header>

            {/* Auth Modal */}
            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
            />
        </>
    );
}
