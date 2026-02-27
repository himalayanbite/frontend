const HeroSlider = () => {
  return (
    <section className="w-full flex justify-center pt-4 md:pt-8">

      <div
        className="
        relative
        w-full sm:w-[90%] md:w-[90%] lg:w-[90%]
        h-[55vh] sm:h-[60vh] md:h-[70vh]
        rounded-xl
        overflow-hidden
        shadow-xl
        bg-gradient-to-br from-emerald-900 via-emerald-600 to-emerald-300
      "
      >
        <div className="h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 text-left">

          <span className="inline-block w-fit px-4 py-1 mb-4 text-xs sm:text-sm font-semibold tracking-wide bg-yellow-400 text-green-900 rounded-full">
            OFFER !!
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide">
            LOUNAS BUFFET
          </h1>

          <div className="mt-3 flex items-baseline gap-4">
            <span className="text-xl sm:text-2xl text-white/60 line-through">
              13,50€
            </span>
            <span className="text-4xl sm:text-5xl font-bold text-yellow-300">
              10€
            </span>
          </div>

          <p className="mt-4 text-sm sm:text-base text-white/90">
            VOIMASSA 9.3. – 13.3.2026 <br />
            AVAJAISTARJOUS!
          </p>

          <p className="mt-3 text-xs sm:text-sm text-white/80">
            Karjalantie 11, 57200, Savonlinna <br />
            +358 41 325 4900
          </p>

          {/* Button */}
          <button
            className="
            mt-6 w-fit
            px-6 py-3
            bg-white text-emrald-800
            rounded-full
            font-semibold
            text-sm sm:text-base
            hover:bg-yellow-300 hover:text-emerald-900
            transition duration-300
          "
          >
            View Menu
          </button>

        </div>
      </div>

    </section>
  );
};

export default HeroSlider;