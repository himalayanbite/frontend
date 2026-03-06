"use client";

import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const LocationMap = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="h-[450px] lg:h-[500px] w-full relative order-2 lg:order-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959998.8027059439!2d27.714403468352696!3d61.969233048879715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469a507857f71da5%3A0xad159d48cd67bc4e!2sSavonlinna!5e0!3m2!1sen!2sfi!4v1772567158318!5m2!1sen!2sfi"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ravintola Kripa Savonlinna Location"
          className="absolute inset-0"
        />

        <div className="absolute bottom-4 left-4 right-4 lg:hidden">
          <a
            href="https://maps.google.com/?q=Ravintola+Kripa+Savonlinna"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-colors w-full backdrop-blur-sm bg-opacity-90"
          >
            <Navigation className="w-5 h-5" />
            Get Directions
          </a>
        </div>
      </div>

      <div className="p-8 lg:p-10 order-1 lg:order-2 flex flex-col justify-center">
        <div className="max-w-md mx-auto lg:mx-0 w-full">
          <div className="space-y-8">
            <div className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-emerald-600 uppercase tracking-wider mb-1">
                  osoite
                </p>
                <p className="text-gray-900 font-medium">Karjalantie 11</p>
                <p className="text-gray-600">57200 Savonlinna, Finland</p>
                <a
                  href="https://maps.google.com/?q=Ravintola+Kripa+Savonlinna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700 mt-2 group/link"
                >
                  <span>avaa Google Mapsissa</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-emerald-600 uppercase tracking-wider mb-1">
                  puhelin
                </p>
                <p className="text-gray-900 font-medium">+358 41 325 4900</p>
                <p className="text-sm text-gray-500 mt-1">
                  Soita varauksia tai tiedusteluja varten
                </p>
                <a
                  href="tel:+358413254900"
                  className="inline-flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700 mt-2 group/link"
                >
                  <span>Soita nyt</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-emerald-600 uppercase tracking-wider mb-3">
                  Avoinna
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-700">maanantai - perjantai</span>
                    <span className="font-medium text-gray-900">
                      10:30 - 19:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-700">
                      lauantai (Vain À LA CARTE )
                    </span>
                    <span className="font-medium text-gray-900">
                      12:00 - 20:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      sunnuntai (Vain À LA CARTE)
                    </span>
                    <span className="font-medium text-gray-900">
                      12:00 - 18:00
                    </span>
                  </div>
                </div>
                <p className="text-sm text-emerald-600 mt-4 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Keittiö sulkeutuu 30 minuuttia ennen sulkemisaikaa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
