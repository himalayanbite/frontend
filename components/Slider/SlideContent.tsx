import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Slide } from "@/types/SlideItem.types";

interface SlideContentProps {
  slide: Slide;
}

const SlideContent = ({ slide }: SlideContentProps) => {
  return (
    <div className="relative h-full flex items-center z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <div className="sm:pl-8 md:pl-12 lg:pl-16">
            {slide.subtitle ? (
              <></>
            ) : (
              <span className="inline-block px-3 sm:px-4 py-1 mb-3 sm:mb-4 md:mb-5 text-xs sm:text-sm font-semibold tracking-wide bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                {slide.subtitle}
              </span>
            )}

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-wide mb-2 sm:mb-3 md:mb-4">
              {slide.title}
            </h1>

            <div className="flex items-baseline gap-3 sm:gap-4 mb-2 sm:mb-3 md:mb-4">
              {slide.originalPrice && (
                <span className="text-base sm:text-xl md:text-2xl text-white/70 line-through">
                  {slide.originalPrice}
                </span>
              )}
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                {slide.discountedPrice}
              </span>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-white/90 whitespace-pre-line mb-4 sm:mb-5 md:mb-6">
              {slide.description}
            </p>

            <Button
              size="lg"
              className="bg-white text-emerald-900 hover:bg-white/90 font-semibold px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 text-xs sm:text-sm md:text-base"
              asChild
            >
              <Link href={slide.menuLink}>
                {slide.buttonText || "View Menu"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
