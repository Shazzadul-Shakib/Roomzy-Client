import Image from "next/image";
import Link from "next/link";

const RoomCard: React.FC = () => {
  return (
    <div className="h-[420px] w-[350px] rounded-lg border border-gray-200 shadow-lg">
      <div className="relative h-[260px] w-full overflow-hidden rounded-t-lg">
        <Image src="/hero.jpg" alt="Room image" fill className="object-cover" />
      </div>
      <div className="space-y-2 p-4">
        <h1 className="text-xl font-semibold text-gray-800">Cozy Room</h1>
        <p className="text-lg text-gray-500">$100 / night</p>
        <Link href={`rooms/${1}`}>
          <button className="mt-4 w-full rounded-lg bg-blue-500 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
