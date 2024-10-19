import { RoomPageProps } from "@/types/all-types";

const RoomPage: React.FC<RoomPageProps> = ({ params }) => {
  return <div>Room ID: {params.id}</div>;
};

export default RoomPage;
