"use server";

import bcrypt from "bcryptjs";
import { connectToMongoDB } from "../db";
import User from "@/models/user.model";
import { LoginFormData } from "@/types/all-types";

export async function loginUser(data: LoginFormData) {
  try {
    // Connect to the database
    await connectToMongoDB();

    const user = await User.findOne({ email: data.email });
    if (!user) {
      throw new Error("User Not Found.");
    }

    const isOk = await bcrypt.compare(data.password, user.password);
    console.log("isOk:", isOk);
    if (!isOk) {
      throw new Error("Invalid email or password");
    }
    return { success: true };
  } catch (error) {
    console.error("Login Error:", error);
    return { error: "Login failed. Please try again." };
  }
}
