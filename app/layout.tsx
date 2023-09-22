import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next PWA",
  description: "Next.js PWA with TypeScript, Tailwind CSS, and Preact",
  manifest: "/manifest.json",
  authors: [{ name: "Muhammad Irvan Shandika" }],
  themeColor: { color: "#FFF" },
  icons: { icon: "/icon-192x192.png", apple: "/icon-192x192.png" },
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
