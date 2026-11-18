
"use client";

import { useEffect } from "react";

const RestaurantGuruAward = () => {
  useEffect(() => {
    const stylesheetId = "restaurant-guru-2026-css";

    if (!document.getElementById(stylesheetId)) {
      const link = document.createElement("link");
      link.id = stylesheetId;
      link.rel = "stylesheet";
      link.href =
        "https://awards.infcdn.net/2026_new/r_gold.css";

      document.head.appendChild(link);
    }
  }, []);

  return (
    <section
      aria-labelledby="restaurant-award-title"
      className="w-full bg-gradient-to-b from-amber-50/70 to-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
        {/* Award description */}
        <div className="max-w-xl text-center lg:text-left">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 sm:text-sm">
            Restaurant Guru 2026
          </span>

          <h2
            id="restaurant-award-title"
            className="mb-4 font-serif text-3xl leading-tight text-emerald-900 sm:text-4xl lg:text-5xl"
          >
            Yksi Savonlinnan
            <span className="block text-amber-700">
              10 parhaasta ravintolasta
            </span>
          </h2>

          <p className="mx-auto max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base lg:mx-0">
            Himalayan Bite on saanut Restaurant Gurun
            tunnustuksen yhtenä Savonlinnan kymmenestä
            parhaasta ravintolasta vuonna 2026.
            Kiitos kaikille asiakkaillemme!
          </p>

          <a
            href="https://restaurantguru.com/Ravintola-Himalayan-Bite-Savonlinna"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-emerald-800 px-6 py-3 text-sm font-medium text-emerald-900 transition-colors hover:bg-emerald-900 hover:text-white"
          >
            Katso tunnustus
            <span className="ml-2" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        {/* Official Restaurant Guru badge */}
        <div className="flex w-full items-center justify-center lg:w-auto lg:shrink-0">
          <div
            id="rg-award-himalayan-bite"
            className="mx-auto box-border w-fit max-w-full"
          >
            <div
              id="rg26-b-gold"
              className="rg26-rg-award-lang-en_US"
            >
              <a
                href="https://restaurantguru.com/Ravintola-Himalayan-Bite-Savonlinna"
                className="rg26-b-gold_r-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ravintola Himalayan Bite
              </a>

              <p className="rg26-b-gold_center">
                A top 10 best restaurant in Savonlinna
              </p>

              <a
                href="https://restaurantguru.com"
                className="rg26-b-gold__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Restaurant Guru
              </a>

              <p className="rg26-b-gold_year">
                2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantGuruAward;
