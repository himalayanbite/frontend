// components/LocationMap.tsx
"use client";

import { MapPin, Phone, Clock } from "lucide-react";

const LocationMap = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="h-[400px] w-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.567123456789!2d28.7465!3d61.8685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjHCsDUyJzA2LjYiTiAyOMKwNDQnNDcuNCJF!5e0!3m2!1sen!2sfi!4v1234567890!5m2!1sen!2sfi"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Location"
          className="absolute inset-0"
        />
      </div>

      {/* Info */}
      <div className="p-8">
        <h3 className="text-2xl font-serif text-emerald-900 mb-6">
          Restaurant Info
        </h3>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">Address</p>
              <p className="text-gray-600">Karjalantie 11<br />57200 Savonlinna</p>
              <a 
                href="https://goo.gl/maps/your-actual-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-emerald-600 hover:text-emerald-700 mt-1 inline-block"
              >
                View on Google Maps →
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">Phone</p>
              <p className="text-gray-600">+358 41 325 4900</p>
              <p className="text-sm text-gray-500 mt-1">Call for reservations</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">Opening Hours</p>
              <div className="text-gray-600 space-y-1">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>10:30 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>11:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>12:00 - 18:00</span>
                </div>
              </div>
              <p className="text-sm text-emerald-600 mt-2">Kitchen closes 30min before closing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;