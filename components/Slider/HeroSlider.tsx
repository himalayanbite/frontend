import Image from "next/image";

const HeroSlider = () => {
  return (
    <section className="lg:mt-20 md:mt-20 sm:mt-10 mb-30 w-full h-dvh flex justify-center">
      <div className="relative w-[95%] md:w-[90%] lg:w-[85%] h-3/5 rounded-md overflow-hidden">
      
        <Image
          src="/heroslider4.png"
          alt="Image Slider"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSlider;