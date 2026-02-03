"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";

export default function ChangelogPage() {
    const tCommon = useTranslations("common");

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
            <Header />

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
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
                        {tCommon("back")}
                    </Link>

                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                        <span className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-xl">
                            📋
                        </span>
                        改版履歴
                    </h1>
                    <p className="text-gray-600 mt-2">
                        サイトの更新履歴・変更ログ
                    </p>
                </motion.div>

                {/* Changelog List */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    {/* Empty State */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                        <span className="text-6xl mb-4 block">📝</span>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                            まだ更新履歴はありません
                        </h2>
                        <p className="text-gray-500">
                            今後のアップデート情報がここに表示されます
                        </p>
                    </div>

                    {/* Template for future entries (commented out)
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-sm font-bold text-pink-500">v1.0.0</div>
                <div className="text-xs text-gray-400">2026/02/02</div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-2">リリースタイトル</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 変更内容1</li>
                  <li>• 変更内容2</li>
                </ul>
              </div>
            </div>
          </div>
          */}
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-6 mt-16">
                <div className="max-w-6xl mx-auto px-4 text-center text-white">
                    <p className="font-bold">👑 {tCommon("siteName")}</p>
                    <p className="text-sm text-white/80 mt-1">© {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    );
}
