
"use client";

import {
  useState,
  useEffect,
  useCallback,
} from "react";
import SlideContent from "./SlideContent";
import { slides } from "@/lib/heroslides";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const handleChange = () => {
      setReduceMotion(mediaQuery.matches);
    };

    // Subscribe to changes in the system preference
    mediaQuery.addEventListener("change", handleChange);

    // Initial preference is read in an event callback
    // rather than synchronously in the effect body.
    const initialCheck = window.requestAnimationFrame(
      handleChange
    );

    return () => {
      window.cancelAnimationFrame(initialCheck);
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      (prev + 1) % slides.length
    );
  }, []);

  useEffect(() => {
    if (
      isPaused ||
      reduceMotion ||
      slides.length <= 1
    ) {
      return;
    }

    const timer = window.setInterval(
      nextSlide,
      6500
    );

    return () => window.clearInterval(timer);
  }, [nextSlide, isPaused, reduceMotion]);

  if (slides.length === 0) return null;

  return (
    <section
      aria-label="Himalayan Bite - Esittely"
      className="relative w-full overflow-hidden bg-[#FFFBF4]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget as Node | null
          )
        ) {
          setIsPaused(false);
        }
      }}
    >
      {/* Active Slide */}
      <div
        key={slides[currentSlide].id}
        className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500"
      >
        <SlideContent
          slide={slides[currentSlide]}
          priority={currentSlide === 0}
        />
      </div>

      {/* Navigation Dots */}
      {slides.length > 1 && (
        <div
          className="relative z-10 flex items-center justify-center gap-3 pb-8 md:pb-12"
          aria-label="Valitse dia"
        >
          {slides.map((slide, index) => {
            const active = index === currentSlide;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Näytä dia ${index + 1}`}
                aria-current={active ? "true" : undefined}
                className="flex h-8 min-w-8 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    active
                      ? "w-8 bg-emerald-800"
                      : "w-2 bg-emerald-200 hover:bg-emerald-500"
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
