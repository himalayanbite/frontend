
import Link from "next/link";
import Image from "next/image";
import type { Slide } from "@/types/SlideItem.types";

interface SlideContentProps {
  slide: Slide;
  priority?: boolean;
}

export default function SlideContent({
  slide,
  priority = false,
}: SlideContentProps) {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-10 sm:px-8 sm:py-14 md:grid-cols-2 md:gap-12 md:py-20 lg:gap-16 lg:px-12">

      {/* Left: Text Content */}
      <div className="order-1 text-center md:text-left">
        {/* Subtitle */}
        <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
          <span className="h-px w-6 bg-amber-600" />

          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700 sm:text-xs">
            {slide.subtitle}
          </span>

          <span className="h-px w-6 bg-amber-600" />
        </div>

        {/* Title */}
        <h1 className="mb-5 font-serif text-4xl font-medium leading-[1.15] tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
          {slide.title}
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:mx-0 lg:text-lg">
          {slide.description}
        </p>

        {/* Menu Buttons */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">

          <Link
            href="/lunch"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-800 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
          >
            Katso lounaslista
          </Link>

          <Link
            href="/a-la-carte"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-emerald-800 bg-transparent px-8 py-3 text-sm font-semibold text-emerald-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
          >
            À la Carte
          </Link>
        </div>
      </div>

      {/* Right: Food Image */}
      <div className="order-2 w-full">
        <div className="relative mx-auto w-full max-w-xl">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 h-full w-full rounded-[2rem] bg-amber-100 sm:-bottom-5 sm:-right-5"
          />

          {/* Main photo */}
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem] bg-amber-50 shadow-xl md:aspect-[4/5] lg:aspect-[5/4]">
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority={priority}
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
