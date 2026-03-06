import LocationMap from "@/components/Home/LocationMap";
import HeroSlider from "@/components/Slider/HeroSlider";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSlider />

      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-emerald-900 mb-4">
              Löydä meidät täältä
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tule ravintolaamme Savonlinnan sydämessä
            </p>
          </div>
          <LocationMap />
        </div>
      </section>
    </main>
  );
}
