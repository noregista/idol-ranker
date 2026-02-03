"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function ContactPage() {
    const t = useTranslations("common");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        setStatus("success");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
            <Header />

            <main className="max-w-2xl mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-8"
                >
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        お問い合わせ
                    </h1>

                    {status === "success" ? (
                        <div className="text-center py-10">
                            <span className="text-4xl block mb-4">✅</span>
                            <h2 className="text-xl font-bold text-gray-800 mb-2">送信完了</h2>
                            <p className="text-gray-600">お問い合わせありがとうございます。<br />内容を確認の上、ご連絡いたします。</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    お名前
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    メールアドレス
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    お問い合わせ内容
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
                            >
                                {status === "submitting" ? "送信中..." : "送信する"}
                            </button>
                        </form>
                    )}
                </motion.div>
            </main>

            <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-6 mt-12">
                <div className="max-w-6xl mx-auto px-4 text-center text-white">
                    <p className="font-bold">👑 {t("siteName")}</p>
                    <p className="text-sm text-white/80 mt-1">© {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    );
}
