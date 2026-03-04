import { IconType } from "react-icons/lib";

export type NavItem = {
  label: string
  href: string
  type: "link"
  icon?: IconType;
}
