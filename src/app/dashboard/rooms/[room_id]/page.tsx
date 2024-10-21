import { ImageUp } from "lucide-react";
import Image from "next/image";

const page: React.FC = () => {
  return (
    <div className="mx-auto w-[80%] p-3">
      {/* Image section */}
      <div>
        <h1 className="mb-3 text-2xl font-semibold">Room Picture</h1>
        <div className="flex gap-4">
          <div className="relative h-[200px] w-[350px]">
            <Image
              src="/hero.jpg"
              alt="room"
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex h-[200px] w-[350px] items-center justify-center rounded-md border">
            <div className="flex flex-col items-center gap-2">
              <ImageUp />
              <h1>Add Image</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Details section */}
      <div>
        <div className="my-4">
          {/* Room Title and Location */}
          <h1 className="mb-3 text-2xl font-semibold">Room in Luxury Home</h1>
          <p className="text-sm">Rosewood City, Sector-10, Dhaka</p>
        </div>

        {/* Price Section */}
        <div className="mt-6 space-y-2 md:mt-8">
          <h2 className="mb-3 text-2xl font-semibold">$100</h2>
          <p className="text-sm">
            There is weekly housekeeping to keep your room and home clean.
          </p>
        </div>

        {/* Amenities Section */}
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

export default page;
