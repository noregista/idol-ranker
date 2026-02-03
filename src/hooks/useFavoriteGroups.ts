"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

interface UseFavoriteGroupsResult {
    favoriteGroups: string[];
    isLoading: boolean;
    isFavorite: (groupId: string) => boolean;
    toggleFavorite: (groupId: string) => Promise<void>;
}

export function useFavoriteGroups(userId: string | null): UseFavoriteGroupsResult {
    const [favoriteGroups, setFavoriteGroups] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // お気に入りグループを取得
    const fetchFavorites = useCallback(async () => {
        if (!userId) {
            setFavoriteGroups([]);
            setIsLoading(false);
            return;
        }

        try {
            const { data, error } = await supabase
                .from("favorite_groups")
                .select("group_id")
                .eq("user_id", userId);

            if (error) throw error;

            setFavoriteGroups(data?.map(item => item.group_id) || []);
        } catch (error) {
            console.error("Error fetching favorites:", error);
        } finally {
            setIsLoading(false);
        }
    }, [userId]);

    useEffect(() => {
        fetchFavorites();
    }, [fetchFavorites]);

    // 指定したグループがお気に入りかどうか
    const isFavorite = useCallback((groupId: string) => {
        return favoriteGroups.includes(groupId);
    }, [favoriteGroups]);

    // お気に入りの追加/削除をトグル
    const toggleFavorite = useCallback(async (groupId: string) => {
        if (!userId) return;

        const isCurrentlyFavorite = favoriteGroups.includes(groupId);

        try {
            if (isCurrentlyFavorite) {
                // 削除
                const { error } = await supabase
                    .from("favorite_groups")
                    .delete()
                    .eq("user_id", userId)
                    .eq("group_id", groupId);

                if (error) throw error;
                setFavoriteGroups(prev => prev.filter(id => id !== groupId));
            } else {
                // 追加
                const { error } = await supabase
                    .from("favorite_groups")
                    .insert({ user_id: userId, group_id: groupId });

                if (error) throw error;
                setFavoriteGroups(prev => [...prev, groupId]);
            }
        } catch (error) {
            console.error("Error toggling favorite:", error);
        }
    }, [userId, favoriteGroups]);

    return {
        favoriteGroups,
        isLoading,
        isFavorite,
        toggleFavorite,
    };
}
