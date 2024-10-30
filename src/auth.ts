import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToMongoDB } from "./lib/db";
import User from "./models/user.model";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
import { AdapterUser } from "next-auth/adapters";

interface UserWithRole extends AdapterUser {
  role: "Admin" | "User";
}

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
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) return null;
        try {
          await connectToMongoDB();
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isOk = await bcrypt.compare(
              credentials.password as string,
              user.password as string,
            );
            if (isOk) {
              return {
                ...user.toObject(), // Convert mongoose document to plain object
                role: user.role, // Ensure role is included
              } as UserWithRole;
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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const userWithRole = user as UserWithRole;
        token.role = userWithRole.role || "User";
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = (token.role as "Admin" | "User") || "User"; // Corrected role assignment
      return session;
    },
  },
});
