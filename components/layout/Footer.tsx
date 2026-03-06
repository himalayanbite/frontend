import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const FooterSimple = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
               <Image src="/logo.png" alt={"Logo"} width={150} height={150} />
                
              </div>
              <h2 className="text-2xl font-serif font-bold text-white">
                Himalayan Bite
              </h2>
            </div>
            <p className="text-sm text-gray-300/80 max-w-md">
              Healthy Bites, Endless Vibes <br /> Terveelliset herkut, fiilis katossa.
            </p>
            
            <div className="flex items-center space-x-4 mt-6">
              <Link
                href="https://www.facebook.com/profile.php?id=61588447144700"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/himalayanbiteoffical/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#E4405F] rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://tiktok.com/@himalayan.bite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#000000] rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Koti', 'À LA CARTE', 'Lounas Buffet', 'Ota yhteyttä'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Ota yhteyttä</h3>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-emerald-400" />
                Karjalantie 11, 57200 Savonlinna
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-emerald-400" />
                <a href="tel:+358413254900" className="hover:text-emerald-400">
                  +358 41 325 4900
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-emerald-400" />
                <a href="mailto:bitehimalayan@gmail.com" className="hover:text-emerald-400">
                  bitehimalayan@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-400">
          © {currentYear} Himalayan Bite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSimple;