import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

/*
  ! fairly recent error - seems like copying a path from the documentation to creating the api path with cause an error in typeError and need to retype the path from the start
*/
