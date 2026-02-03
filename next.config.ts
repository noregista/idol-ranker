import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Turbopackを無効化（日本語パスの問題を回避）
  // ビルド時にwebpackを使用
};

export default withNextIntl(nextConfig);
