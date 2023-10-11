import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// components
import HomepageLayout from "@/components/features/HomepageLayout";
import ToastProvider from "@/providers/ToastProvider";
import { SessionProvider } from "@/providers/SessionProvider";

import { COMPANY_NAME, COMPANY_META_DESCRIPTION } from "@/constants/staticText";

export const metadata: Metadata = {
  title: COMPANY_NAME,
  description: COMPANY_META_DESCRIPTION,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <ToastProvider />
          <HomepageLayout>{children}</HomepageLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
