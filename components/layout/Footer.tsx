
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const footerLinks = [
  { label: "Etusivu", href: "/" },
  { label: "Lounas", href: "/lunch" },
  { label: "À la Carte", href: "/menu" },
  { label: "Ota yhteyttä", href: " tel:+358413254900"},
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61588447144700",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/himalayanbiteoffical/",
    icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@himalayan.bite",
    icon: FaTiktok,
  },
];

export default function FooterSimple() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FFFBF4]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* Restaurant Information */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-4"
              aria-label="Himalayan Bite - Etusivu"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-sm ring-1 ring-emerald-900/5">
                <Image
                  src="/logo.png"
                  alt="Himalayan Bite"
                  width={100}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="font-serif text-2xl font-semibold text-emerald-950 sm:text-3xl">
                  Himalayan Bite
                </h2>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                  Authentic Nepalese Cuisine
                </p>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-7 text-gray-600 sm:text-base">
              Koe Himalajan aidot maut Savonlinnan
              sydämessä. Tarjoamme herkullisia
              nepalilaisia makuja, lämpimiä kohtaamisia
              ja unohtumattomia makuelämyksiä.
            </p>

            <p className="mt-3 text-sm italic text-emerald-800">
              Healthy Bites, Endless Vibes.
            </p>

            {/* Social Media */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-900/10 bg-white text-emerald-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-800 hover:bg-emerald-800 hover:text-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 font-serif text-xl font-semibold text-emerald-950">
              Pikalinkit
            </h3>

            <div className="mb-6 h-0.5 w-10 bg-amber-500" />

            <nav aria-label="Footer navigation">
              <ul className="space-y-4">
                {footerLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-emerald-800 sm:text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h3 className="mb-5 font-serif text-xl font-semibold text-emerald-950">
              Ota yhteyttä
            </h3>

            <div className="mb-6 h-0.5 w-10 bg-amber-500" />

            <address className="space-y-5 not-italic">
              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Karjalantie+11+57200+Savonlinna"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                  <FaMapMarkerAlt className="h-4 w-4" />
                </span>

                <span className="pt-1 text-sm leading-6 text-gray-600 transition-colors group-hover:text-emerald-800">
                  Karjalantie 11
                  <br />
                  57200 Savonlinna, Suomi
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+358413254900"
                className="group flex items-center gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                  <FaPhone className="h-4 w-4" />
                </span>

                <span className="text-sm text-gray-600 transition-colors group-hover:text-emerald-800">
                  +358 41 325 4900
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:bitehimalayan@gmail.com"
                className="group flex items-center gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                  <FaEnvelope className="h-4 w-4" />
                </span>

                <span className="min-w-0 break-all text-sm text-gray-600 transition-colors group-hover:text-emerald-800">
                  bitehimalayan@gmail.com
                </span>
              </a>
            </address>
          </div>
        </div>

        {/* Decorative Separator */}
        <div className="mt-14 h-px w-full bg-emerald-900/10 lg:mt-16" />

        {/* Footer Message */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-500">
            Himalajan makuja, Savonlinnan sydämessä.
          </p>

          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-full border border-emerald-800 px-6 py-2.5 text-sm font-semibold text-emerald-900 transition-colors hover:bg-emerald-800 hover:text-white"
          >
            Tutustu ruokalistaan
          </Link>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-emerald-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center sm:px-8 md:flex-row md:text-left lg:px-12">
          <p className="text-xs text-emerald-100/75 sm:text-sm">
            © {currentYear} Himalayan Bite.
            Kaikki oikeudet pidätetään.
          </p>

          <p className="text-xs text-amber-200/80">
            Made with care in Savonlinna, Finland
          </p>
        </div>
      </div>
    </footer>
  );
}
