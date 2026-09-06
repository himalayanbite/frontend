import { NavItem } from "@/types/NavItem.types";
import { FaHome, FaUtensils, FaConciergeBell,  FaWhatsapp, FaPhone } from 'react-icons/fa';

export const navItems: NavItem[] = [
   {
    label: "Koti",
    href: "/",
    type: "link",
    icon: FaHome, 
  },
  {
    label: "À LA CARTE",
    href: "/menu",
    type: "link",
    icon: FaUtensils, 
  },
    {
    label: "Lounas Buffet",
    href: "/lunch",
    type: "link",
    icon: FaConciergeBell, 
  },
  {
    label: "Ota yhteyttä",
    href: "tel:+358413254900",
    type: "link",
    icon: FaPhone,
  },
];