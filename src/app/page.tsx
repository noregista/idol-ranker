"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import GroupCard from "@/components/GroupCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import { groups, getAllMembers } from "@/data/members";
import { useFavoriteGroups } from "@/hooks/useFavoriteGroups";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");
  const allMembers = getAllMembers();
  const { user } = useAuth();

  // 検索とフィルター状態
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"default" | "name-asc" | "name-desc" | "members-desc" | "members-asc" | "favorites">("default");

  // お気に入り機能
  const { favoriteGroups, isFavorite, toggleFavorite } = useFavoriteGroups(user?.id ?? null);

  // フィルタリング・ソートされたグループ
  const filteredGroups = useMemo(() => {
    let result = [...groups];

    // 検索フィルター
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(group =>
        group.name.toLowerCase().includes(query) ||
        group.id.toLowerCase().includes(query)
      );
    }

    // お気に入りフィルター
    if (showFavoritesOnly && user) {
      result = result.filter(group => isFavorite(group.id));
    }

    // ソート
    switch (sortBy) {
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name, "ja"));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name, "ja"));
        break;
      case "members-desc":
        result.sort((a, b) => b.members.length - a.members.length);
        break;
      case "members-asc":
        result.sort((a, b) => a.members.length - b.members.length);
        break;
      case "favorites":
        result.sort((a, b) => {
          const aFav = isFavorite(a.id) ? 1 : 0;
          const bFav = isFavorite(b.id) ? 1 : 0;
          return bFav - aFav;
        });
        break;
      default:
        // デフォルト順（元の順番）
        break;
    }

    return result;
  }, [searchQuery, showFavoritesOnly, user, isFavorite, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <Header />

      {/* Ad Placeholder - Header下 */}
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <AdPlaceholder size="medium" />
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-6xl">👑</span>
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t("title")}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* Groups Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-lg">
              🎤
            </span>
            {t("selectGroup")}
          </h2>

          {/* 検索バーとフィルター */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            {/* 検索バー */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="グループを検索..."
                className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none bg-white shadow-sm transition-colors"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* 並び替え */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="appearance-none px-4 py-3 pr-10 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none bg-white shadow-sm transition-colors cursor-pointer font-medium text-gray-700"
              >
                <option value="default">📋 デフォルト</option>
                <option value="name-asc">🔤 名前 A→Z</option>
                <option value="name-desc">🔤 名前 Z→A</option>
                <option value="members-desc">👥 メンバー多い順</option>
                <option value="members-asc">👥 メンバー少ない順</option>
                {user && <option value="favorites">💖 お気に入り優先</option>}
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* お気に入りフィルター */}
            {user && (
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-sm ${showFavoritesOnly
                  ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:border-pink-400"
                  }`}
              >
                <span>{showFavoritesOnly ? "💖" : "🤍"}</span>
                お気に入り
                {showFavoritesOnly && favoriteGroups.length > 0 && (
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">
                    {favoriteGroups.length}
                  </span>
                )}
              </button>
            )}
          </div>

          {/* 検索結果件数 */}
          {(searchQuery || showFavoritesOnly) && (
            <p className="text-sm text-gray-500 mb-4">
              {filteredGroups.length}件のグループが見つかりました
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group, index) => (
              <GroupCard
                key={group.id}
                group={group}
                index={index}
                isFavorite={isFavorite(group.id)}
                onToggleFavorite={() => toggleFavorite(group.id)}
                showFavoriteButton={!!user}
              />
            ))}
          </div>

          {/* グループが見つからない場合 */}
          {filteredGroups.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-gray-500"
            >
              <span className="text-4xl block mb-4">🔍</span>
              <p>該当するグループが見つかりませんでした</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setShowFavoritesOnly(false);
                }}
                className="mt-4 text-pink-500 hover:text-pink-600 font-medium"
              >
                フィルターをリセット
              </button>
            </motion.div>
          )}

          {/* Overall Ranking Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Link href="/ranking">
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">🏆</span>
                    <div>
                      <h3 className="text-xl font-bold">{t("overallRanking")}</h3>
                      <p className="text-white/80 text-sm">{t("overallRankingDesc")}</p>
                    </div>
                  </div>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* How to Vote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white text-lg">
              ❓
            </span>
            {t("howToVote")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: t("step1Title"),
                desc: t("step1Desc"),
                icon: "👆",
              },
              {
                step: "2",
                title: t("step2Title"),
                desc: t("step2Desc"),
                icon: "🔍",
              },
              {
                step: "3",
                title: t("step3Title"),
                desc: t("step3Desc"),
                icon: "💖",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="relative bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold flex items-center justify-center shadow-lg">
                  {item.step}
                </div>
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Ad Placeholder - Footer上 */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <AdPlaceholder size="large" />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <p className="text-lg font-bold mb-2">
            👑 {tCommon("siteName")}
          </p>
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} {tCommon("siteName")}
          </p>
        </div>
      </footer>
    </div>
  );
}
