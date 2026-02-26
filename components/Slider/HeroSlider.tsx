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
             <div className="relative h-[35vh] md:h-[80vh]  lg:h-[85vh] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden lg:flex left-4" />
<CarouselNext className="hidden lg:flex right-4" />
      </Carousel>
    </section>

    )
}

export default HeroSlider;