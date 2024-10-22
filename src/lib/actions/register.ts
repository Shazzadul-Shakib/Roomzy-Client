"use server";

import bcrypt from "bcryptjs";
import { RegisterFormData } from "@/types/all-types";
import { connectToMongoDB } from "../db";
import User from "@/models/user.model";

export async function registerUser(data: RegisterFormData) {
  try {
    // Connect to the database
    await connectToMongoDB();

    // Check if the user already exists
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return { error: "User with this email already exists." };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create the user
    const newUser = new User({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });

    await newUser.save();

    return { success: true };
  } catch (error) {
    console.error("Registration Error:", error);
    return { error: "Registration failed. Please try again." };
  }
}
