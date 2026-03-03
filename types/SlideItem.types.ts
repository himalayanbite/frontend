// types/slider.ts
export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  originalPrice?: string;
  discountedPrice: string;
  description: string;
  image: string;
  bgColor: string;
  menuLink: string;  // Added for dynamic menu links
  buttonText?: string; // Optional custom button text
}

export type Slides = Slide[];