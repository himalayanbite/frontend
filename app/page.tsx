import LocationMap from "@/components/Home/LocationMap";
import HeroSlider from "@/components/Slider/HeroSlider";

export default function Home() {
  return (
    <main className="w-full">
        <HeroSlider />
        <LocationMap />

    </main>
  );
}