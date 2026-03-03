export type Weekday =
  | "maanantai"
  | "tiistai"
  | "keskiviikko"
  | "torstai"
  | "perjantai";

export interface LunchDay {
  day: Weekday;
  label: string;
  items: string[];
}
