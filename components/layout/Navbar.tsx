"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constant/Navbar";
import { Menu, X } from "lucide-react";

const logoImage = "/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    "block px-3 py-2 rounded-md text-emerald-900 font-medium hover:text-white hover:bg-emerald-700 transition-colors";

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src={logoImage}
            alt="Himalayan Bite"
            width={200}
            height={200}
            className="object-cover"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={linkClasses}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-md shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-gray-200 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-3 px-6 py-4">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={linkClasses}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}