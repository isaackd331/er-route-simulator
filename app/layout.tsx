import "./globals.css";
import type { Metadata } from "next";

import Providers from "@/queries/providers";

export const metadata: Metadata = {
  title: "Eternal Return Route Simulator",
  description:
    "이터널 리턴 루트 시뮬레이터입니다. 특정 영웅 아이템 세트에서부터 랜덤한 아이템과 획득한 크레딧으로 최종 아이템 빌드를 설계하고, 평가해보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`h-full antialiased`}>
      <body className="min-h-full relative">
        <Providers>
          <div>{children}</div>
          <div id="modalPortal" />
        </Providers>
      </body>
    </html>
  );
}
