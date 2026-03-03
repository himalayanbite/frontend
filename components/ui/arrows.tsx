// components/ui/arrows.tsx
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

const SliderArrows = ({ onPrev, onNext }: SliderArrowsProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 lg:p-3 rounded-full transition-colors backdrop-blur-sm flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 lg:p-3 rounded-full transition-colors backdrop-blur-sm flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
    </>
  );
};

export default SliderArrows;