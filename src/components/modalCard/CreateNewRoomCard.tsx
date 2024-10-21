"use client";
import { useState } from "react";
import { CircleX, ImageUp } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardCloseProps, FormValues } from "@/types/all-types";
import { NewRoomSchema } from "@/validation/NewRoomSchema";

const RoomUploadCard: React.FC<CardCloseProps> = ({ onClose }) => {
  const [roomImage, setRoomImage] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(NewRoomSchema),
  });

  // Handle Image Upload and Preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setRoomImage(imageURL);
      setUploadedFile(file);
    }
  };

  // Handle form submission
  const onSubmit = (data: FormValues) => {
    if (uploadedFile) {
      console.log({
        image: uploadedFile,
        ...data,
        amenities: data.amenities.split(","),
      });
      alert("Room details submitted successfully!");

      // Reset form after submit
      reset();
      setRoomImage(null);
      setUploadedFile(null);
    } else {
      alert("Please upload an image!");
    }
  };

  return (
    <div className="h-[90dvh] w-[700px] overflow-y-auto rounded-lg border bg-background p-4 shadow-lg dark:bg-neutral-800 dark:text-neutral-100">
      <div className="relative flex items-center justify-center">
        <h1 className="mb-4 text-2xl font-semibold">Upload Room Details</h1>
        <div
          className="absolute right-0 top-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md"
          onClick={onClose}
        >
          <CircleX />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Image upload */}
        <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-lg border">
          {roomImage ? (
            <Image
              src={roomImage}
              alt="Room Preview"
              fill
              className="object-cover"
            />
          ) : (
            <label
              htmlFor="file-upload"
              className="flex cursor-pointer flex-col items-center justify-center"
            >
              <ImageUp />
              <h1 className="mt-2 text-gray-500">Add Image</h1>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>

        {/* Title input */}
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            className="w-full rounded-md border bg-white px-3 py-2 text-sm dark:bg-neutral-900 dark:text-neutral-200"
            placeholder="Room Title"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        {/* Price input */}
        <div>
          <label className="block text-sm font-medium">Price (in $)</label>
          <input
            type="text"
            className="w-full rounded-md border bg-white px-3 py-2 text-sm dark:bg-neutral-900 dark:text-neutral-200"
            placeholder="Price"
            {...register("price")}
          />
          {errors.price && (
            <p className="text-sm text-red-500">{errors.price.message}</p>
          )}
        </div>

        {/* Location input */}
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            className="w-full rounded-md border bg-white px-3 py-2 text-sm dark:bg-neutral-900 dark:text-neutral-200"
            placeholder="Location"
            {...register("location")}
          />
          {errors.location && (
            <p className="text-sm text-red-500">{errors.location.message}</p>
          )}
        </div>

        {/* Details textarea */}
        <div>
          <label className="block text-sm font-medium">Details</label>
          <textarea
            className="w-full rounded-md border bg-white px-3 py-2 text-sm dark:bg-neutral-900 dark:text-neutral-200"
            placeholder="Room Details"
            {...register("details")}
          />
          {errors.details && (
            <p className="text-sm text-red-500">{errors.details.message}</p>
          )}
        </div>

        {/* Amenities input */}
        <div>
          <label className="block text-sm font-medium">
            Amenities (comma separated)
          </label>
          <input
            type="text"
            className="w-full rounded-md border bg-white px-3 py-2 text-sm dark:bg-neutral-900 dark:text-neutral-200"
            placeholder="Free Wi-Fi, AC, CCTV"
            {...register("amenities")}
          />
          {errors.amenities && (
            <p className="text-sm text-red-500">{errors.amenities.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="rounded-md bg-green-500 px-4 py-2 text-white"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => {
              reset();
              setRoomImage(null);
              setUploadedFile(null);
            }}
            className="rounded-md bg-red-500 px-4 py-2 text-white"
          >
            Discard
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoomUploadCard;
