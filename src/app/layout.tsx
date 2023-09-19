import "./globals.css";
import type { Metadata } from "next";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// components
import HomepageLayout from "@/components/features/HomepageLayout";
import ToastProvider from "@/providers/ToastProvider";
// import { SessionProvider } from "@/providers/SessionProvider";
// import Login from "@/components/Login";

export const metadata: Metadata = {
  title: "HeatMaps",
  description:
    "Easily view your consistency with tasks and work with heatmaps!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <HomepageLayout>{children}</HomepageLayout>

        {/* <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <>
              <ToastProvider />
              <HomepageLayout>{children}</HomepageLayout>
            </>
          )}
        </SessionProvider> */}
      </body>
    </html>
  );
}
