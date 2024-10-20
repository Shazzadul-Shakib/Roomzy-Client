import Image from "next/image";

const RoomImages: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="col-span-1 h-[250px] overflow-hidden rounded-lg md:col-span-2 md:h-[350px]">
        <div className="relative h-[350px] w-full overflow-hidden rounded-t-lg">
          <Image
            src="/hero.jpg"
            alt="Room image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="grid h-[150px] grid-cols-2 gap-4 overflow-hidden rounded-lg md:h-full md:grid-cols-1 md:grid-rows-2">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/hero.jpg"
            alt="Room image"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/hero.jpg"
            alt="Room image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RoomImages;
