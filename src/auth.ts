import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToMongoDB } from "./lib/db";
import User from "./models/user.model";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  ...authConfig,
  providers: [
      CredentialsProvider({
      credentials: {
        email: { },
        password: { },
      },
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
