"use client";

interface SliderDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

const SliderDots = ({ total, current, onDotClick }: SliderDotsProps) => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`transition-all duration-300 rounded-full ${
            index === current
              ? "w-8 bg-white"
              : "w-2 bg-white/50 hover:bg-white/80"
          } h-2`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SliderDots;