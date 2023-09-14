import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// components
import HomepageLayout from "@/components/features/HomepageLayout";
import ToastProvider from "@/providers/ToastProvider";

export const metadata: Metadata = {
  title: "HeatMaps",
  description:
    "Easily view your consistency with tasks and work with heatmaps!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />

        <HomepageLayout>{children}</HomepageLayout>
      </body>
    </html>
  );
}
