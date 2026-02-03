import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window !== "undefined") { // クライアントサイドでのみ警告
        console.warn("Supabase credentials are missing. Please check your environment variables.");
    }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 投票データの型定義
export interface VoteRecord {
    id: string;
    member_id: string;
    group_id: string;
    user_id: string;
    voted_at: string;
}

// メンバーの投票数を取得
export async function getMemberVotes(groupId: string): Promise<Record<string, number>> {
    const { data, error } = await supabase
        .from("votes")
        .select("member_id")
        .eq("group_id", groupId);

    if (error) {
        console.error("Error fetching votes:", error);
        return {};
    }

    // メンバーごとの投票数を集計
    const voteCounts: Record<string, number> = {};
    data?.forEach((vote) => {
        voteCounts[vote.member_id] = (voteCounts[vote.member_id] || 0) + 1;
    });

    return voteCounts;
}

// ユーザーが今日そのグループに投票済みかチェック
export async function hasVotedToday(userId: string, groupId: string): Promise<boolean> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const { data, error } = await supabase
        .from("votes")
        .select("id")
        .eq("user_id", userId)
        .eq("group_id", groupId)
        .gte("voted_at", today.toISOString())
        .lt("voted_at", tomorrow.toISOString())
        .limit(1);

    if (error) {
        console.error("Error checking vote:", error);
        return false;
    }

    return (data?.length || 0) > 0;
}

// 投票を記録
export async function castVote(
    userId: string,
    memberId: string,
    groupId: string
): Promise<{ success: boolean; error?: string }> {
    // 今日すでに投票しているかチェック
    const alreadyVoted = await hasVotedToday(userId, groupId);
    if (alreadyVoted) {
        return { success: false, error: "本日はこのグループにすでに投票済みです" };
    }

    const { error } = await supabase.from("votes").insert({
        member_id: memberId,
        group_id: groupId,
        user_id: userId,
        voted_at: new Date().toISOString(),
    });

    if (error) {
        console.error("Error casting vote:", error);
        return { success: false, error: "投票に失敗しました" };
    }

    return { success: true };
}

// 認証状態を取得
export async function getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
        console.error("Error getting user:", error);
        return null;
    }
    return user;
}

// Google でログイン
export async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${window.location.origin}/`,
        },
    });
    if (error) {
        console.error("Error signing in with Google:", error);
        throw error;
    }
}

// Twitter でログイン
export async function signInWithTwitter() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: "twitter",
        options: {
            redirectTo: `${window.location.origin}/auth/callback`,
        },
    });
    if (error) {
        console.error("Error signing in with Twitter:", error);
        throw error;
    }
}

// ログアウト
export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error("Error signing out:", error);
        throw error;
    }
}

// メールでログイン（マジックリンク方式）
export async function signInWithEmail(email: string) {
    const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            emailRedirectTo: `${window.location.origin}/`,
        },
    });
    if (error) {
        console.error("Error signing in with email:", error);
        throw error;
    }
}

// グループの投票履歴を取得（最新50件）
export interface VoteHistoryRecord {
    id: string;
    member_id: string;
    group_id: string;
    user_id: string;
    voted_at: string;
    user_email?: string;
    user_nickname?: string;
}

export async function getVoteHistory(groupId: string, limit: number = 50): Promise<VoteHistoryRecord[]> {
    const { data: votes, error } = await supabase
        .from("votes")
        .select("*")
        .eq("group_id", groupId)
        .order("voted_at", { ascending: false })
        .limit(limit);

    if (error) {
        console.error("Error fetching vote history:", error);
        return [];
    }

    if (!votes || votes.length === 0) return [];

    // ユーザーIDリストを作成
    const userIds = Array.from(new Set(votes.map((v) => v.user_id)));

    // プロフィールを取得
    const { data: profiles } = await supabase
        .from("profiles")
        .select("id, nickname")
        .in("id", userIds);

    // プロフィールをマップ化
    const profileMap = new Map();
    profiles?.forEach((p) => {
        profileMap.set(p.id, p.nickname);
    });

    // ニックネームを結合
    return votes.map((vote) => ({
        ...vote,
        user_nickname: profileMap.get(vote.user_id)
    }));
}

// 全グループの月間ランキングを取得
export async function getMonthlyOverallRanking(): Promise<Record<string, number>> {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const { data, error } = await supabase
        .from("votes")
        .select("member_id")
        .gte("voted_at", startOfMonth.toISOString());

    if (error) {
        console.error("Error fetching monthly ranking:", error);
        return {};
    }

    // メンバーごとの投票数を集計
    const voteCounts: Record<string, number> = {};
    data?.forEach((vote) => {
        voteCounts[vote.member_id] = (voteCounts[vote.member_id] || 0) + 1;
    });

    return voteCounts;
}
