import Hero from "@/components/home/Hero";
import RoomCard from "@/components/home/RoomCard";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="mx-auto my-10 grid w-[90%] grid-cols-1 justify-items-center gap-10 md:my-14 md:grid-cols-2 lg:w-[80%] xl:grid-cols-3">
        <RoomCard />
      </section>
    </>
  );
};

export default HomePage;
