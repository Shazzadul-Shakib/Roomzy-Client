import RoomDetails from "@/components/room/RoomDetails";
import RoomImages from "@/components/room/RoomImages";
import { RoomPageProps } from "@/types/all-types";
import Link from "next/link";

const RoomPage: React.FC<RoomPageProps> = ({ params }) => {
  console.log(params);
  return (
    <div className="mx-auto my-10 w-[90%] md:my-14 lg:w-[80%]">
      <div className="mb-6">
        <Link href="/" className="px-2 py-1 text-xs text-gray-500">
          Back to home
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <RoomImages />
        <RoomDetails />
      </div>
    </div>
  );
};

export default RoomPage;
