import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_KR({
  variable: "--font-sans",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leanflow.kr"),
  title: {
    default: "LeanAI | AX 변혁 파트너",
    template: "%s | LeanAI",
  },
  description:
    "LeanAI는 프로세스 진단부터 AI 도입, 팀 교육까지 완전한 AX 변혁을 지원하는 파트너입니다.",
  keywords: [
    "LeanAI",
    "AX 변혁",
    "AI 자동화",
    "프로세스 진단",
    "조직 변화 관리",
  ],
  openGraph: {
    title: "LeanAI | AX 변혁 파트너",
    description:
      "AI 자동화를 통해 프로세스를 혁신하고 팀의 변화를 이끄는 LeanAI의 AX 변혁 서비스.",
    url: "https://leanflow.kr",
    siteName: "LeanAI",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeanAI | AX 변혁 파트너",
    description:
      "AI 자동화를 통해 프로세스를 혁신하고 팀의 변화를 이끄는 LeanAI의 AX 변혁 서비스.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${notoSans.variable} bg-background font-sans text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
