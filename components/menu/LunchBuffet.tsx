"use client";

import { useMemo, useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
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
    [active],
  );

  return (
    <section className="w-full bg-[oklch(0.97_0_0)]">
      <div className="bg-emerald-100 px-4 pb-8 pt-10 text-center text-primary">
        <h1 className="mt-1 text-6xl font-bold md:text-8xl tracking-tight">
          LOUNAS BUFFET
        </h1>
        <p className="mt-3 text-lg">Hinta 13.50 € • Arkisin klo 10:30 –14:30</p>
        <p className="text-base text-muted-foreground">
          Eläkeläisen hinta 12.00 € klo 13.00 –14.30
        </p>
      </div>

      <div className="sticky top-20 z-40 bg-white border-b">
        <div className="mx-auto max-w-4xl flex overflow-x-auto whitespace-nowrap font-medium">
          {lunchData.map((day) => (
            <button
              key={day.day}
              onClick={() => setActive(day.day)}
              className={`relative px-6 py-4 text-base transition ${
                active === day.day
                  ? "text-emerald-600"
                  : "text-muted-foreground"
              }`}
            >
              <span className="md:hidden">{shortWeekdayLabel[day.day]}</span>
              <span className="hidden md:inline">
                {day.label.split(" ")[0]}
              </span>

              {active === day.day && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-emerald-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-10">
        <Tabs value={active}>
          <TabsContent value={active}>
            <div className="bg-white rounded-xl border p-6">
              <h2 className="text-lg font-bold text-emerald-600 mb-6 flex justify-center">
                {activeData?.label}
              </h2>

              <div className="space-y-4 text-center">
                {activeData?.items.map((item, index) => (
                  <div
                    key={index}
                    className="text-base md:text-base flex justify-center"
                  >
                    <span className="max-w-2xl">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t text-sm text-muted-foreground space-y-1 flex flex-col items-center">
                <p className="text-center">
                  Lounas sisältää tuoreen salaatin, keiton, lämpimän ruoan,
                  jälkiruoan sekä teen ja kahvin.
                </p>
                <p className="text-center">
                  M = Maidoton • VL = Vähälaktoosinen • L = Laktoositon • G =
                  Gluteeniton • VE = Vegaaninen • VS = Sis. valkosipuli
                </p>
                <p className="text-center">
                  Kysythän lisätietoja allergioista henkilökunnalta.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
