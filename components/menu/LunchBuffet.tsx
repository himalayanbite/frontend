"use client";

import { useMemo, useState } from "react";
import { Weekday } from "@/types/Lunch.type";
import { lunchData } from "@/data/LunchData";

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
    [active]
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-6 text-center md:mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-emerald-700 md:text-6xl">
            Lounas Buffet
          </h1>
          <p className="mt-2 text-sm md:mt-3 md:text-lg">
            Hinta 13.50 € • Arkisin klo 10:30 – 14:30
          </p>
          <p className="text-xs text-muted-foreground md:text-sm">
            Eläkeläisen hinta 12.00 €
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4 md:gap-8">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto md:flex-col md:gap-3 md:overflow-visible">
            {lunchData.map((day) => (
              <button
                key={day.day}
                onClick={() => setActive(day.day)}
                className={`snap-start whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition md:rounded-xl md:px-4 md:py-3 md:text-sm ${
                  active === day.day
                    ? "bg-emerald-600 text-white shadow-md"
                    : "border bg-white text-gray-600 hover:bg-emerald-50"
                }`}
              >
                <span className="md:hidden">{shortWeekdayLabel[day.day]}</span>
                <span className="hidden md:inline">{day.label}</span>
              </button>
            ))}
          </div>

          <div className="md:col-span-3">
            <div className="rounded-2xl border bg-white p-4 shadow-lg md:p-6">
              <h2 className="mb-4 text-center text-lg font-bold text-emerald-600 md:mb-6 md:text-2xl">
                {activeData?.label}
              </h2>

              <div className="grid gap-4">
                {activeData?.items.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 transition hover:bg-emerald-100"
                  >
                    <h3 className="text-base font-semibold text-gray-900 md:text-lg">
                       {item.name}
                    </h3>

                    {item.description && (
                      <p className="mt-2 text-sm leading-6 text-gray-600 md:text-base">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2 border-t pt-4 text-center text-xs text-muted-foreground md:mt-8 md:pt-6 md:text-sm">
                <p>
                  Lounas sisältää salaatin, keiton, lämpimän ruoan, jälkiruoan
                  sekä teen ja kahvin.
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