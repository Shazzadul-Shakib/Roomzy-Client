import Hero from "@/components/home/Hero";
import RoomCard from "@/components/home/RoomCard";
import Navbar from "@/components/shared/Navbar";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />

      {/* Room Cards Section */}
      <section className="mx-auto my-10 w-[90%] md:my-14 lg:w-[80%]">
        <h1 className="mb-10 text-center text-xl font-semibold md:text-start md:text-3xl">
          Explore Amazing Rooms
        </h1>
        <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
          <RoomCard />
        </div>
      </section>
    </>
  );
};

export default HomePage;
