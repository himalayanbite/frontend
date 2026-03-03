"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import SlideContent from "./SlideContent";
import { slides } from "@/lib/heroslides";
import SliderArrows from "../ui/arrows";
import SliderDots from "../ui/dots";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="w-full relative">
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} opacity-80`}
              />
            </div>

            <SlideContent slide={slide} />
          </div>
        ))}

        <SliderArrows onPrev={prevSlide} onNext={nextSlide} />

        <SliderDots
          total={slides.length}
          current={currentSlide}
          onDotClick={goToSlide}
        />
      </div>

      <div className="absolute bottom-6 right-6 z-20 text-white/70 text-sm font-medium bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
};

export default HeroSlider;