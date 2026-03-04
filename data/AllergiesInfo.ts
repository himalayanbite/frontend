import { AllergenInfo, AllergenTag } from "@/types/Menu.types";

export const ALLERGENS: Record<AllergenTag, AllergenInfo> = {
  VE: { label: "VE", description: "Vegaaninen", color: "bg-emerald-100 text-emerald-800" },
  VL: { label: "VL", description: "vähälaktoosinen", color: "bg-green-100 text-green-800" },
  L: { label: "L", description: "Laktoositon", color: "bg-yellow-100 text-yellow-800" },
  G: { label: "G", description: "gluteeniton", color: "bg-orange-100 text-orange-800" },
  VS: { label: "VS", description: "Sis.valkosipuli", color: "bg-red-100 text-red-800" },
  M: { label: "M", description: "Maidoton", color: "bg-amber-100 text-amber-800" },
  "contains nuts": { label: "NUTS", description: "Contains nuts", color: "bg-purple-100 text-purple-800" },
};
