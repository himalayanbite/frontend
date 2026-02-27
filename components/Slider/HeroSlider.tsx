import Link from "next/link";
import { Button } from "../ui/button";

const HeroSlider = () => {
  return (
    <section className="w-full flex justify-center pt-4 md:pt-8">
      <div
        className="
        relative
        w-full sm:w-[90%]
        h-[55vh] sm:h-[60vh] md:h-[70vh]
        rounded-xl
        overflow-hidden
        shadow-xl
        bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-400
      "
      >
        <div className="h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 text-left">
          <span className="inline-block w-fit px-4 py-1 mb-5 text-xs sm:text-sm font-semibold tracking-wide bg-white/20 text-white backdrop-blur-sm rounded-full border border-white/30">
            SPECIAL OFFER
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide">
            LOUNAS BUFFET
          </h1>

          <div className="mt-4 flex items-baseline gap-4">
            <span className="text-xl sm:text-2xl text-white/70 line-through">
              13,50€
            </span>
            <span className="text-4xl sm:text-5xl font-bold text-white">
              10€
            </span>
          </div>

          <p className="mt-4 text-sm sm:text-base text-white/90">
            VOIMASSA 9.3. – 13.3.2026 <br />
            AVAJAISTARJOUS!
          </p>

          <p className="mt-3 text-xs sm:text-sm text-white/70">
            Karjalantie 11, 57200, Savonlinna <br />
            +358 41 325 4900
          </p>

          <Button className="mt-6 w-fit bg-white text-emerald-900 hover:bg-white/90 font-semibold px-6 py-5 rounded-lg shadow-md">
            <Link href={"/menu"}>View Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
