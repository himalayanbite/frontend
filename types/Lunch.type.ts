export type Weekday =
  | "maanantai"
  | "tiistai"
  | "keskiviikko"
  | "torstai"
  | "perjantai";

export interface LunchMenuItem {
  name: string;
  description?: string;
}

export interface LunchDay {
  day: Weekday;
  label: string;
  items: LunchMenuItem[];
}