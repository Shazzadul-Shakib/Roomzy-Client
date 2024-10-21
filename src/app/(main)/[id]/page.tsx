import Image from "next/image";

const BookingHistory: React.FC = () => {
  const bookings = [
    {
      id: 1,
      image: "/hero.jpg",
      title: "Luxury Room",
      status: "Confirmed",
      details: "A luxurious room with a great view",
      bookingDateFrom: "2024-10-10 to 2024-10-12",
      bookingDateTo: "2024-10-15",
    },
    {
      id: 2,
      image: "/hero.jpg",
      title: "Deluxe Room",
      status: "Pending",
      details: "A comfortable room with all modern amenities",
      bookingDateFrom: "2024-10-10 to 2024-10-12",
      bookingDateTo: "2024-09-20",
    },
    {
      id: 3,
      image: "/hero.jpg",
      title: "Deluxe Room",
      status: "Canceled",
      details: "A comfortable room with all modern amenities",
      bookingDateFrom: "2024-10-10 to 2024-10-12",
      bookingDateTo: "2024-09-20",
    },
  ];

  return (
    <div className="mx-auto my-10 w-[90%] md:my-14 lg:w-[80%]">
      <div className="w-full rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Booking History
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Image
                </th>
                <th className="hidden px-4 py-2 text-left text-sm font-medium text-gray-700 md:table-cell">
                  Title
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="hidden px-4 py-2 text-left text-sm font-medium text-gray-700 md:table-cell">
                  Booked For
                </th>
                <th className="hidden px-4 py-2 text-left text-sm font-medium text-gray-700 md:table-cell">
                  Booking Date
                </th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-t">
                  <td className="px-4 py-2">
                    <div className="relative h-20 w-20">
                      <Image
                        src={booking.image}
                        alt={booking.title}
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                  </td>
                  <td className="hidden px-4 py-2 text-sm md:table-cell">
                    {booking.title}
                  </td>
                  <td
                    className={`px-4 py-2 text-sm font-medium ${
                      booking.status === "Confirmed"
                        ? "text-green-500"
                        : booking.status === "Pending"
                          ? "text-yellow-500"
                          : "text-red-500"
                    }`}
                  >
                    {booking.status}
                  </td>
                  <td className="hidden px-4 py-2 text-sm md:table-cell">
                    {booking.bookingDateFrom}
                  </td>
                  <td className="hidden px-4 py-2 text-sm md:table-cell">
                    {booking.bookingDateTo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
