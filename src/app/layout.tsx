import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// components
import HomepageLayout from "@/components/features/HomepageLayout";
import ClientProvider from "@/providers/ClientProvider";
import { SessionProvider } from "@/providers/SessionProvider";

// context or store

// constants and functions
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
      <body>
        <SessionProvider>
          <ClientProvider />
          <HomepageLayout>{children}</HomepageLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
