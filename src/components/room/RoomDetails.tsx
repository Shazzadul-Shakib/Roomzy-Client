import { DatePickerWithRange } from "./DatePicker";

const RoomDetails: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md md:p-10">
      <div className="space-y-2 md:space-y-4">
        {/* Room Title and Location */}
        <h1 className="text-2xl font-bold text-gray-900 md:text-4xl">
          Room in Luxury Home
        </h1>
        <p className="text-sm text-gray-600 md:text-lg">
          Rosewood City, Sector-10, Dhaka
        </p>
      </div>

      {/* Price Section */}
      <div className="mt-6 space-y-2 md:mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl">
          $100
        </h2>
        <p className="text-sm text-gray-600 md:text-lg">
          There is weekly housekeeping to keep your room and home clean.
        </p>
      </div>

      {/* Amenities Section */}
      <div className="mt-6 space-y-2 md:mt-8">
        <h2 className="text-xl font-semibold text-gray-900 md:text-3xl">
          Amenities
        </h2>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-600 md:text-lg">
          <li className="rounded-lg bg-gray-100 px-3 py-1">Free Wi-Fi</li>
          <li className="rounded-lg bg-gray-100 px-3 py-1">AC</li>
          <li className="rounded-lg bg-gray-100 px-3 py-1">CCTV</li>
          <li className="rounded-lg bg-gray-100 px-3 py-1">Washing Machine</li>
        </ul>
      </div>

      {/* Date picker */}
      <div className="mt-6 space-y-2 md:mt-8">
        <h1 className="pb-4 text-xl font-semibold text-gray-900 md:text-3xl">
          Select Check in and check out date
        </h1>
        <DatePickerWithRange />
      </div>

      {/* Book Now Button */}
      <div className="mt-8">
        <button className="w-full rounded-lg bg-blue-600 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
