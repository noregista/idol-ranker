"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signInWithGoogle, signInWithEmail } from "@/lib/supabase";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState("");

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error("Google login error:", error);
            setError("Googleログインに失敗しました");
        }
    };

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;

        setIsLoading(true);
        setError("");
        try {
            await signInWithEmail(email);
            setEmailSent(true);
        } catch (error) {
            console.error("Email login error:", error);
            setError("メール送信に失敗しました");
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setEmail("");
        setEmailSent(false);
        setError("");
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/50 z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl p-8 mx-4 relative">
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Header */}
                            <div className="text-center mb-6">
                                <motion.div
                                    className="text-5xl mb-4"
                                    animate={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                                >
                                    🎤
                                </motion.div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    ログイン
                                </h2>
                                <p className="text-gray-500 mt-2">
                                    SNSアカウントまたはメールで簡単ログイン
                                </p>
                            </div>

                            {emailSent ? (
                                /* Email Sent Confirmation */
                                <div className="text-center py-6">
                                    <div className="text-5xl mb-4">📧</div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        メールを送信しました
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4">
                                        {email} に<br />ログインリンクを送信しました。<br />メールを確認してください。
                                    </p>
                                    <button
                                        onClick={resetForm}
                                        className="text-pink-500 hover:text-pink-600 underline text-sm"
                                    >
                                        別のメールアドレスで試す
                                    </button>
                                </div>
                            ) : (
                                <>
                                    {/* Error Message */}
                                    {error && (
                                        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 mb-4">
                                            {error}
                                        </div>
                                    )}

                                    {/* SNS Login Buttons */}
                                    <div className="space-y-3 mb-6">
                                        {/* Google */}
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleGoogleLogin}
                                            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                <path
                                                    fill="#4285F4"
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                />
                                                <path
                                                    fill="#34A853"
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                />
                                                <path
                                                    fill="#FBBC05"
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                />
                                                <path
                                                    fill="#EA4335"
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                />
                                            </svg>
                                            Googleでログイン
                                        </motion.button>
                                    </div>

                                    {/* Divider */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex-1 h-px bg-gray-200"></div>
                                        <span className="text-sm text-gray-400">または</span>
                                        <div className="flex-1 h-px bg-gray-200"></div>
                                    </div>

                                    {/* Email Login Form */}
                                    <form onSubmit={handleEmailLogin} className="space-y-3">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="メールアドレス"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-pink-400 transition-colors"
                                            required
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isLoading || !email.trim()}
                                            className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-medium text-white hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? "送信中..." : "📧 メールでログイン"}
                                        </motion.button>
                                    </form>

                                    {/* Notice */}
                                    <p className="text-xs text-gray-400 text-center mt-6">
                                        ログインすることで、各グループごとに1日1回投票できます
                                    </p>
                                </>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
