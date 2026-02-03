"use client";

import { motion, AnimatePresence } from "framer-motion";

export interface VoteHistoryItem {
    id: string;
    memberName: string;
    memberGeneration: string;
    userName: string;
    votedAt: string;
}

interface VoteHistoryProps {
    votes: VoteHistoryItem[];
    groupColor: string;
    isLoading?: boolean;
}

export default function VoteHistory({ votes, groupColor, isLoading }: VoteHistoryProps) {
    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);

        if (diffMins < 1) return "たった今";
        if (diffMins < 60) return `${diffMins}分前`;
        if (diffHours < 24) return `${diffHours}時間前`;

        return date.toLocaleDateString("ja-JP", { month: "short", day: "numeric" });
    };

    if (isLoading) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gray-200 animate-pulse" />
                    <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="space-y-3">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl animate-pulse">
                            <div className="flex-1">
                                <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                                <div className="h-3 w-16 bg-gray-200 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
                    style={{ backgroundColor: groupColor }}
                >
                    📜
                </div>
                <h3 className="text-lg font-bold text-gray-800">投票履歴</h3>
                <span className="text-sm text-gray-400 ml-auto">リアルタイム更新</span>
            </div>

            {/* Vote List */}
            {votes.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                    <span className="text-4xl mb-3 block">🗳️</span>
                    <p>まだ投票がありません</p>
                    <p className="text-sm">最初の投票者になりましょう！</p>
                </div>
            ) : (
                <div className="space-y-2 max-h-[400px] overflow-y-auto custom-scrollbar">
                    <AnimatePresence mode="popLayout">
                        {votes.map((vote, index) => (
                            <motion.div
                                key={vote.id}
                                initial={{ opacity: 0, x: -20, height: 0 }}
                                animate={{ opacity: 1, x: 0, height: "auto" }}
                                exit={{ opacity: 0, x: 20, height: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1 flex-wrap">
                                        <span className="font-medium text-gray-800 text-sm">
                                            {vote.userName}
                                        </span>
                                        <span className="text-gray-400 text-sm">→</span>
                                        <span className="font-bold text-sm" style={{ color: groupColor }}>
                                            {vote.memberName}
                                        </span>
                                        {vote.memberGeneration && (
                                            <span className="text-xs text-gray-400">
                                                ({vote.memberGeneration})
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        {formatTime(vote.votedAt)}
                                    </div>
                                </div>

                                {/* Vote Icon */}
                                <div className="text-lg">💖</div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}

            {/* Summary */}
            {votes.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <span>合計 {votes.length} 票</span>
                    <span>最新50件を表示</span>
                </div>
            )}
        </div>
    );
}
