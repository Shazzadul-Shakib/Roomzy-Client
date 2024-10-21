"use client";
import { useState } from "react";
import { ImageUp } from "lucide-react";
import Image from "next/image";

const Page: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Function to handle file input
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
      setUploadedFile(file);
    }
  };

  // Function to handle save
  const handleSave = () => {
    if (uploadedFile) {
      // Handle save action (e.g., upload to server)
      console.log("Image saved:", uploadedFile);
      // Clear the input after saving
      setSelectedImage(null);
      setUploadedFile(null);
    }
  };

  // Function to handle discard
  const handleDiscard = () => {
    setSelectedImage(null);
    setUploadedFile(null);
  };

  return (
    <div className="mx-auto w-[80%] p-3">
      {/* Image section */}
      <div>
        <h1 className="mb-3 text-2xl font-semibold">Room Picture</h1>
        <div className="flex gap-4">
          {/* Display uploaded image or default image */}
          <div className="relative h-[200px] w-[350px]">
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt="Uploaded room"
                fill
                className="rounded-md object-cover"
              />
            ) : (
              <Image
                src="/hero.jpg"
                alt="Default room"
                fill
                className="rounded-md object-cover"
              />
            )}
          </div>

          {/* Image uploader */}
          <div className="flex h-[200px] w-[350px] items-center justify-center rounded-md border">
            <div className="flex flex-col items-center gap-2">
              <label
                htmlFor="file-upload"
                className="flex cursor-pointer flex-col items-center justify-center"
              >
                <ImageUp />
                <h1>Add Image</h1>
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>

        {/* Save and Discard buttons */}
        {selectedImage && (
          <div className="mt-4 flex gap-4">
            <button
              onClick={handleSave}
              className="rounded-md bg-green-500 px-4 py-2 text-white"
            >
              Save
            </button>
            <button
              onClick={handleDiscard}
              className="rounded-md bg-red-500 px-4 py-2 text-white"
            >
              Discard
            </button>
          </div>
        )}
      </div>

      {/* Details section */}
      <div>
        <div className="my-4">
          <h1 className="mb-3 text-2xl font-semibold">Room in Luxury Home</h1>
          <p className="text-sm">Rosewood City, Sector-10, Dhaka</p>
        </div>

        <div className="mt-6 space-y-2 md:mt-8">
          <h2 className="mb-3 text-2xl font-semibold">$100</h2>
          <p className="text-sm">
            There is weekly housekeeping to keep your room and home clean.
          </p>
        </div>

        <div className="mt-6 space-y-2 md:mt-8">
          <h2 className="mb-3 text-2xl font-semibold">Amenities</h2>
          <ul className="flex flex-wrap gap-4 text-sm text-gray-600">
            <li className="rounded-lg bg-gray-100 px-3 py-1">Free Wi-Fi</li>
            <li className="rounded-lg bg-gray-100 px-3 py-1">AC</li>
            <li className="rounded-lg bg-gray-100 px-3 py-1">CCTV</li>
            <li className="rounded-lg bg-gray-100 px-3 py-1">
              Washing Machine
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
