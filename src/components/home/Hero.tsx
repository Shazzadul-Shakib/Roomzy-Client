import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[70dvh] ">
        <Image
          alt="Mountains"
          src="/hero.jpg"
          quality={100}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute flex-col inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="text-white text-xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center">
            <p>Helping You Find The Most</p>
            <p className=" py-2 md:py-5 lg:py-7 xl:py-14">Comfortable Place</p>
          </div>
          <div>
            <p className="text-gray-300 mx-4 pt-4 text-xs text-balance text-center sm:text-lg lg:text-xl xl:text-2xl">
              Discover homes and spaces that fit your lifestyle and make you
              feel at home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
