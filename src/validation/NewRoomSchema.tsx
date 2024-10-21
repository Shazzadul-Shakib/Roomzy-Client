import { z } from "zod";

// Validation schema with Zod
export const NewRoomSchema = z.object({
  title: z.string().min(1, "Title is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine((value) => !isNaN(Number(value)), {
      message: "Price must be a number",
    })
    .refine((value) => Number(value) > 0, {
      message: "Price must be positive",
    }),
  location: z.string().min(1, "Location is required"),
  details: z.string().min(1, "Details are required"),
  amenities: z.string().min(1, "At least one amenity is required"),
});
