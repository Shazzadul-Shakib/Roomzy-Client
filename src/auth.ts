import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToMongoDB } from "./lib/db";
import User from "./models/user.model";
import bcrypt from "bcryptjs";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          await connectToMongoDB();
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isOk = await bcrypt.compare(
              credentials.password as string,
              user.password as string,
            );
            if (isOk) {
              return user;
            } else {
              throw new Error("Check your password");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (error) {
          throw new Error(error as string);
        }
      },
    }),
  ],
});
