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

const User = models.User || model("User", UserRegisterSchema);
export default User;
