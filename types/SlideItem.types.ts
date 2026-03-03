export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  originalPrice?: string;
  discountedPrice: string;
  description: string;
  image: string;
  bgColor: string;
  menuLink: string;  
  buttonText?: string; 
}

export type Slides = Slide[];