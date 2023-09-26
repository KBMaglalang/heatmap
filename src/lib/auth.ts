import type { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOODLE_ID!, // * note: the '!' shows that the value is going to be there assured
      clientSecret: process.env.GOOGLE_SECRET!, // * note: the '!' shows that the value is going to be there assured
    }),
  ],
  theme: {
    colorScheme: "light",
  },
};
