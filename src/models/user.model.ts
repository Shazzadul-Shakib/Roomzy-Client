import { connectToMongoDB } from "@/lib/db";
import { Schema, model, models } from "mongoose";

const UserRegisterSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["Admin", "User"], default: "User" },
  },
  {
    timestamps: true,
  },
);

// Define a function to ensure the connection is established
async function getUserModel() {
  await connectToMongoDB(); // Ensure the database connection
  return models.User || model("User", UserRegisterSchema);
}

export default await getUserModel();
