import { DefaultSession, DefaultUser } from "next-auth";

// Extend the User interface to include `role`
declare module "next-auth" {
  interface Session {
    user: {
      role: "Admin" | "User";
    } & DefaultSession["user"]; // Include default user properties
  }

  interface User extends DefaultUser {
    role: "Admin" | "User";
  }
}

// Extend the JWT interface to include `role`
declare module "next-auth/jwt" {
  interface JWT {
    role: "Admin" | "User";
  }
}
