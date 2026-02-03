"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import { getAllMembers, getMembersByBirthMonth, getGroupById } from "@/data/members";
import type { Member } from "@/data/members";

export default function BirthdayNotification() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasNewBirthdays, setHasNewBirthdays] = useState(false);
    const locale = useLocale();

    // 今月誕生日のメンバーを取得
    const birthdayMembers = useMemo(() => {
        const currentMonth = new Date().getMonth() + 1;
        return getMembersByBirthMonth(currentMonth);
    }, []);

    useEffect(() => {
        // 最後に確認した月をローカルストレージでチェック
        const lastCheckedMonth = localStorage.getItem("lastBirthdayCheckMonth");
        const currentMonth = String(new Date().getMonth() + 1);

        if (lastCheckedMonth !== currentMonth && birthdayMembers.length > 0) {
            setHasNewBirthdays(true);
        }
    }, [birthdayMembers]);

    const handleOpen = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            // 開いた時にチェック済みとしてマーク
            localStorage.setItem("lastBirthdayCheckMonth", String(new Date().getMonth() + 1));
            setHasNewBirthdays(false);
        }
    };

    // 誕生日を日付順にソート
    const sortedBirthdayMembers = useMemo(() => {
        return [...birthdayMembers].sort((a, b) => {
            const dayA = a.birthday ? parseInt(a.birthday.split("-")[1]) : 99;
            const dayB = b.birthday ? parseInt(b.birthday.split("-")[1]) : 99;
            return dayA - dayB;
        });
    }, [birthdayMembers]);

    if (birthdayMembers.length === 0) return null;

    return (
        <div className="relative">
            {/* 通知ボタン */}
            <motion.button
                onClick={handleOpen}
                className="relative w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="text-lg">🎂</span>
                {hasNewBirthdays && (
                    <motion.span
                        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                    >
                        <span className="text-[10px] text-white font-bold">{birthdayMembers.length}</span>
                    </motion.span>
                )}
            </motion.button>

            {/* ドロップダウンメニュー */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* オーバーレイ */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
                        >
                            {/* ヘッダー */}
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-3 text-white flex items-center justify-between">
                                <h3 className="font-bold flex items-center gap-2">
                                    🎂 今月のお誕生日
                                    <span className="text-sm bg-white/20 px-2 py-0.5 rounded-full">
                                        {birthdayMembers.length}名
                                    </span>
                                </h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/80 hover:text-white transition-colors p-1"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* メンバーリスト */}
                            <div className="max-h-80 overflow-y-auto">
                                {sortedBirthdayMembers.map((member) => {
                                    const group = getGroupById(member.groupId);
                                    const day = member.birthday ? parseInt(member.birthday.split("-")[1]) : null;

                                    return (
                                        <Link
                                            key={member.id}
                                            href={`/group/${member.groupId}`}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                                        >

                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-gray-800 dark:text-white truncate">
                                                    {locale === "en" ? member.nameEn : member.name}
                                                    <span className="ml-2 text-sm font-normal text-gray-500">
                                                        ({parseInt(member.birthday?.split("-")[0] || "0")}月{parseInt(member.birthday?.split("-")[1] || "0")}日)
                                                    </span>
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{group?.name}</p>
                                            </div>
                                            <span className="text-lg">🎉</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
