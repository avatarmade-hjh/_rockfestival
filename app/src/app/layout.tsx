import type { Metadata } from "next";
import { Rock_Salt } from "next/font/google";
import "./globals.css";

const rockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rock-salt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "히어로락페스티벌 x 트리헌드레드",
  description: "Rock Saves Trees - 우리가 좋아하는 것들이 모여 숲이 됩니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={rockSalt.variable}>
      <body>{children}</body>
    </html>
  );
}
