import { AllergenInfo, AllergenTag } from "@/types/Menu.types";

export const ALLERGENS: Record<AllergenTag, AllergenInfo> = {
  VE: { label: "VE", description: "Vegan", color: "bg-emerald-100 text-emerald-800" },
  VL: { label: "VL", description: "Vegetarian (contains dairy)", color: "bg-green-100 text-green-800" },
  L: { label: "L", description: "Contains lactose / dairy", color: "bg-yellow-100 text-yellow-800" },
  G: { label: "G", description: "Contains gluten", color: "bg-orange-100 text-orange-800" },
  VS: { label: "VS", description: "Very spicy option available", color: "bg-red-100 text-red-800" },
  M: { label: "M", description: "Contains mustard / soy", color: "bg-amber-100 text-amber-800" },
  "contains nuts": { label: "NUTS", description: "Contains nuts", color: "bg-purple-100 text-purple-800" },
};