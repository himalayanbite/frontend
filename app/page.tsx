
import RestaurantGuruAward from "@/components/Award/RestaurantGuruAward";
import LocationMap from "@/components/Home/LocationMap";
import HeroSlider from "@/components/Slider/HeroSlider";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSlider />

      <RestaurantGuruAward />

      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="mb-4 font-serif text-3xl text-emerald-900 md:text-4xl">
              Löydä meidät täältä
            </h2>

            <p className="mx-auto max-w-2xl text-gray-600">
              Tule ravintolaamme Savonlinnan sydämessä
            </p>
          </div>

          <LocationMap />
        </div>
      </section>
    </main>
  );
}
