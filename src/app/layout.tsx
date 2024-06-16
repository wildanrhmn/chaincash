import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";

import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ChainCash - Revolutionary web app that leverages blockchain",
    template: "%s | ChainCash",
  },
  description: `ChainCash is a revolutionary web app that leverages blockchain technology to provide fast, secure, and low-cost cross-border cash transfers. 
    With ChainCash, you can send and receive money globally with real-time tracking, minimal fees, and top-tier security.`,
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://chaincash.netlify.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1B1B1F]`}>
        <Web3ModalProvider initialState={initialState}>
          <Header />
          <main className="min-h-screen pt-[60px] pb-[100px]">
            {children}
          </main>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
