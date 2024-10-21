import { CardCloseProps } from "@/types/all-types";
import { CircleX } from "lucide-react";

const BookingModal: React.FC<CardCloseProps> = ({ onClose }) => {
  return (
    <div className="relative w-96 rounded-lg bg-background p-8 shadow-lg">
      <div
        className="absolute right-3 top-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md"
        onClick={onClose}
      >
        <CircleX />
      </div>
      <h2 className="mb-4 pt-4 text-xl font-semibold">Update Booking Status</h2>
      <p className="py-4">
        Current Status: <strong>Pending</strong>
      </p>
      <div className="flex justify-between py-4">
        <button className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          Confirm
        </button>
        <button className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
