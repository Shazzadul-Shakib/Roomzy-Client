import RoomDetails from "@/components/room/RoomDetails";
import RoomImages from "@/components/room/RoomImages";
import { RoomPageProps } from "@/types/all-types";

const RoomPage: React.FC<RoomPageProps> = ({ params }) => {
  console.log(params);
  return (
    <div className="mx-auto my-10 w-[90%] md:my-14 lg:w-[80%]">
      <div className="grid grid-cols-1 gap-6 pt-8">
        <RoomImages />
        <RoomDetails />
      </div>
    </div>
  );
};

export default RoomPage;
