"use client";

import { useMemo, useState } from "react";
import { Weekday } from "@/types/Lunch.type";
import { lunchData } from "@/data/LunchData";

/* Short Finnish weekday labels */
const shortWeekdayLabel: Record<Weekday, string> = {
  maanantai: "Ma",
  tiistai: "Ti",
  keskiviikko: "Ke",
  torstai: "To",
  perjantai: "Pe",
};

function getToday(): Weekday {
  const day = new Date().getDay();
  const map: Record<number, Weekday> = {
    1: "maanantai",
    2: "tiistai",
    3: "keskiviikko",
    4: "torstai",
    5: "perjantai",
  };
  return map[day] ?? "maanantai";
}

export default function LunchBuffet() {
  const [active, setActive] = useState<Weekday>(getToday());

  const activeData = useMemo(
    () => lunchData.find((d) => d.day === active),
    [active],
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-6 md:py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-emerald-700">
            Lounas Buffet
          </h1>
          <p className="mt-2 md:mt-3 text-sm md:text-lg">
            Hinta 13.50 € • Arkisin klo 10:30 –14:30
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            Eläkeläisen hinta 12.00 € klo 13.00 –14.30
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-8">

          {/* Day Selector */}
          <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory">

            {lunchData.map((day) => (
              <button
                key={day.day}
                onClick={() => setActive(day.day)}
                className={`snap-start flex-shrink-0 px-4 py-2 md:px-4 md:py-3 rounded-full md:rounded-xl text-sm md:text-sm font-medium transition whitespace-nowrap
                ${
                  active === day.day
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-white border text-gray-600 hover:bg-emerald-50"
                }`}
              >
                <span className="md:hidden">
                  {shortWeekdayLabel[day.day]}
                </span>

                <span className="hidden md:inline">
                  {day.label}
                </span>
              </button>
            ))}

          </div>

          <div className="md:col-span-3">

            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border">

              <h2 className="text-lg md:text-2xl font-bold text-emerald-600 mb-4 md:mb-6 text-center">
                {activeData?.label}
              </h2>

              <div className="grid gap-3 md:gap-4">
                {activeData?.items.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 md:p-4 rounded-xl border bg-emerald-50 hover:bg-emerald-100 transition"
                  >
                    <p className="text-sm md:text-base font-medium text-center">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t text-xs md:text-sm text-muted-foreground space-y-2 text-center">
                <p>
                  Lounas sisältää salaatin, keiton, lämpimän ruoan,
                  jälkiruoan sekä teen ja kahvin.
                </p>
                <p>
                  M = Maidoton • VL = Vähälaktoosinen • L = Laktoositon • G =
                  Gluteeniton • VS = Sis. valkosipuli
                </p>
                <p>Kysythän allergioista henkilökunnalta.</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}