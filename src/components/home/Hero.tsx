import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[70dvh]">
        <Image
          alt="Mountains"
          src="/hero.jpg"
          quality={100}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60">
          <div className="text-center text-xl font-bold text-white md:text-3xl lg:text-5xl xl:text-6xl">
            <p>Helping You Find The Most</p>
            <p className="py-2 md:py-5 lg:py-7 xl:py-14">Comfortable Place</p>
          </div>
          <div>
            <p className="mx-4 text-balance pt-4 text-center text-xs text-gray-300 sm:text-lg lg:text-xl xl:text-2xl">
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
