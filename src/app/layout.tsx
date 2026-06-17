import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "黄瀚扬 | 个人主页",
  description: "黄瀚扬 - 视觉算法工程师 | 个人介绍网站",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
