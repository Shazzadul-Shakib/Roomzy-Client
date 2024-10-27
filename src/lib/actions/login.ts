"use server";

import { signIn } from "@/auth";
import { LoginFormData } from "@/types/all-types";

export async function loginUser(data: LoginFormData) {
  try {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    return response;
  } catch (error) {
    console.error("Login Error:", error);
    return { error: "Login failed. Please try again." };
  }
}
