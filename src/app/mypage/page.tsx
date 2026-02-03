"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

export default function MyPage() {
    const t = useTranslations("common");
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const [nickname, setNickname] = useState("");
    const [hometown, setHometown] = useState("");
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (!isLoading && !user) {
            router.push("/");
            return;
        }

        if (user) {
            fetchProfile();
        }
    }, [user, isLoading, router]);

    const fetchProfile = async () => {
        if (!user) return;
        const { data, error } = await supabase
            .from("profiles")
            .select("nickname, hometown")
            .eq("id", user.id)
            .single();

        if (data) {
            setNickname(data.nickname || "");
            setHometown(data.hometown || "");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage("");

        if (!user) return;

        const updates = {
            id: user.id,
            nickname,
            hometown,
            updated_at: new Date().toISOString(),
        };

        const { error } = await supabase.from("profiles").upsert(updates);

        if (error) {
            setMessage("エラーが発生しました。");
        } else {
            setMessage("プロフィールを更新しました！");
            // update user metadata as well for faster access if needed, though profile table is authoritative
        }
        setSaving(false);
    };

    if (isLoading || !user) {
        return <div className="min-h-screen bg-pink-50 flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
            <Header />

            <main className="max-w-2xl mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-8"
                >
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        👤 マイページ
                    </h1>

                    <div className="mb-8 p-4 bg-gray-50 rounded-xl">
                        <p className="text-sm text-gray-500 mb-1">メールアドレス</p>
                        <p className="font-bold text-gray-800">{user.email}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                ニックネーム
                            </label>
                            <input
                                type="text"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                placeholder="例: アイドル大好き"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                サイト内で表示される名前です。
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                出身地
                            </label>
                            <select
                                value={hometown}
                                onChange={(e) => setHometown(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                            >
                                <option value="">選択してください</option>
                                <option value="北海道">北海道</option>
                                <option value="青森県">青森県</option>
                                <option value="岩手県">岩手県</option>
                                <option value="宮城県">宮城県</option>
                                <option value="秋田県">秋田県</option>
                                <option value="山形県">山形県</option>
                                <option value="福島県">福島県</option>
                                <option value="茨城県">茨城県</option>
                                <option value="栃木県">栃木県</option>
                                <option value="群馬県">群馬県</option>
                                <option value="埼玉県">埼玉県</option>
                                <option value="千葉県">千葉県</option>
                                <option value="東京都">東京都</option>
                                <option value="神奈川県">神奈川県</option>
                                <option value="新潟県">新潟県</option>
                                <option value="富山県">富山県</option>
                                <option value="石川県">石川県</option>
                                <option value="福井県">福井県</option>
                                <option value="山梨県">山梨県</option>
                                <option value="長野県">長野県</option>
                                <option value="岐阜県">岐阜県</option>
                                <option value="静岡県">静岡県</option>
                                <option value="愛知県">愛知県</option>
                                <option value="三重県">三重県</option>
                                <option value="滋賀県">滋賀県</option>
                                <option value="京都府">京都府</option>
                                <option value="大阪府">大阪府</option>
                                <option value="兵庫県">兵庫県</option>
                                <option value="奈良県">奈良県</option>
                                <option value="和歌山県">和歌山県</option>
                                <option value="鳥取県">鳥取県</option>
                                <option value="島根県">島根県</option>
                                <option value="岡山県">岡山県</option>
                                <option value="広島県">広島県</option>
                                <option value="山口県">山口県</option>
                                <option value="徳島県">徳島県</option>
                                <option value="香川県">香川県</option>
                                <option value="愛媛県">愛媛県</option>
                                <option value="高知県">高知県</option>
                                <option value="福岡県">福岡県</option>
                                <option value="佐賀県">佐賀県</option>
                                <option value="長崎県">長崎県</option>
                                <option value="熊本県">熊本県</option>
                                <option value="大分県">大分県</option>
                                <option value="宮崎県">宮崎県</option>
                                <option value="鹿児島県">鹿児島県</option>
                                <option value="沖縄県">沖縄県</option>
                                <option value="海外">海外</option>
                            </select>
                        </div>

                        {message && (
                            <div className={`p-4 rounded-lg ${message.includes("エラー") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
                                {message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                            {saving ? "保存中..." : "保存する"}
                        </button>
                    </form>
                </motion.div>
            </main>
        </div>
    );
}
