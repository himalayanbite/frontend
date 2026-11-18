
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/constant/Navbar";
import {
  Menu,
  X,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const logoImage = "/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:h-24 sm:px-6 lg:px-8">

          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Himalayan Bite - Etusivu"
            className="flex shrink-0 items-center"
          >
            <Image
              src={logoImage}
              alt="Himalayan Bite"
              width={180}
              height={90}
              priority
              className="h-auto w-32 object-contain transition-transform duration-300 hover:scale-105 sm:w-40 lg:w-44"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex xl:gap-2"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-300 xl:px-4 ${
                    active
                      ? "text-emerald-800"
                      : "text-gray-700 hover:text-emerald-800"
                  }`}
                >
                  {item.icon && (
                    <item.icon
                      className={`h-4 w-4 ${
                        active
                          ? "text-amber-600"
                          : "text-emerald-700/70 group-hover:text-amber-600"
                      }`}
                    />
                  )}

                  <span>{item.label}</span>

                  <span
                    className={`absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-amber-500 transition-transform duration-300 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 lg:flex">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg"
            >
              Ruokalista
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Avaa valikko"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-900/10 bg-emerald-50 text-emerald-900 transition-colors hover:bg-emerald-100 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <aside
        id="mobile-navigation"
        role="dialog"
        aria-modal={isOpen ? true : undefined}
        aria-label="Mobiilivalikko"
        inert={!isOpen}
        className={`fixed inset-y-0 right-0 z-[70] flex w-[min(88vw,360px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "translate-x-0"
            : "pointer-events-none translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-900">
            Valikko
          </span>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Sulje valikko"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-emerald-900 transition-colors hover:bg-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav
          aria-label="Mobile navigation"
          className="flex-1 space-y-2 overflow-y-auto px-5 py-6"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-4 rounded-xl px-4 py-4 text-base font-medium transition-all duration-200 ${
                  active
                    ? "bg-emerald-900 text-white shadow-sm"
                    : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-900"
                }`}
              >
                {item.icon && (
                  <item.icon className="h-5 w-5 shrink-0" />
                )}

                <span>{item.label}</span>

                <ArrowUpRight className="ml-auto h-4 w-4 opacity-50" />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Bottom CTA */}
        <div className="border-t border-gray-100 bg-emerald-50/60 p-5">
          <Link
            href="/a-la-carte"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-900 px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
          >
            Tutustu ruokalistaan
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span>Savonlinna, Suomi</span>
          </div>
        </div>
      </aside>
    </>
  );
}
