import { loginSchema } from "@/validation/LoginSchema";
import { registerSchema } from "@/validation/RegisterSchema";
import { z } from "zod";

export type RoomPageProps = {
  params: {
    id: string;
  };
};
export type ModalBodyProps = {
  modal: React.ReactNode;
};
export type CardCloseProps = {
  onClose: () => void;
};
export type FormValues = {
  title: string;
  price: string;
  location: string;
  details: string;
  amenities: string;
};
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export interface User {
  name: string;
  email: string;
  role: "Admin" | "User";
  password: string;
}
