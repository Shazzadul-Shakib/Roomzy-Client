import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        <Image
          alt="Mountains"
          src="/hero.jpg"
          quality={100}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
