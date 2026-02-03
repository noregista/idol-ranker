import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export const locales = ['ja', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ja';

// 翻訳ファイルのインポート
import ja from '../../messages/ja.json';
import en from '../../messages/en.json';

const messages = {
    ja,
    en,
} as const;

export default getRequestConfig(async () => {
    // クッキーから言語設定を取得（デフォルトは日本語）
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('locale')?.value;
    const locale: Locale = cookieLocale === 'en' ? 'en' : 'ja';

    return {
        locale,
        messages: messages[locale],
    };
});
