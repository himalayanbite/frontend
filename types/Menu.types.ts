
export type AllergenTag = "VE" | "VL" | "L" | "G" | "VS" | "M" | "contains nuts";

export interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  tags?: AllergenTag[];
  spicy?: boolean;
  sizzler?: boolean;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface AllergenInfo {
  label: string;
  description: string;
  color: string; 
}

export type MenuData = MenuCategory[];