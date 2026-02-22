import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { heroslides } from "@/lib/heroslides"

const HeroSlider = () => {
    return(
        <section className="relative w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {heroslides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[80vh] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h2 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>

    )
}

export default HeroSlider;