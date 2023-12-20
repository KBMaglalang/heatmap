import type { NextAuthOptions } from 'next-auth';
// import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import { ensureUserExists } from './firebaseUser';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOODLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // This callback is called whenever a session is accessed.
      // We will ensure the user exists in Firestore here.
      await ensureUserExists(session);

      // Continue with the default session behavior
      return session;
    },
  },
  theme: {
    colorScheme: 'light',
  },
};
