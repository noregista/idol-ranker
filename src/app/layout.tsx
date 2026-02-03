import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://idol-ranker.vercel.app"),
  title: {
    default: "アイドル総選挙 | 推しメンに投票しよう！",
    template: "%s | アイドル総選挙",
  },
  description: "日本のアイドルグループのメンバー人気投票プラットフォーム。乃木坂46、櫻坂46、日向坂46、Snow Man、SixTONESのメンバーに投票して推しを応援しよう！毎月リセットのランキングで推しメンを1位に！",
  keywords: ["アイドル", "総選挙", "投票", "ランキング", "乃木坂46", "櫻坂46", "日向坂46", "Snow Man", "SixTONES", "人気投票", "推しメン"],
  authors: [{ name: "IDOL POP RANKER" }],
  creator: "IDOL POP RANKER",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "アイドル総選挙 | 推しメンに投票しよう！",
    description: "日本のアイドルグループのメンバー人気投票プラットフォーム。毎月リセットのランキングで推しを応援！",
    type: "website",
    locale: "ja_JP",
    alternateLocale: "en_US",
    siteName: "アイドル総選挙",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "アイドル総選挙 - 推しメンに投票しよう！",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "アイドル総選挙 | 推しメンに投票しよう！",
    description: "日本のアイドルグループのメンバー人気投票プラットフォーム",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

