"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Flame, Zap, Info } from "lucide-react";
import { AllergenInfo, AllergenTag, MenuItem } from "@/types/Menu.types";
import { ALLERGENS } from "@/data/AllergiesInfo";
import { menuData } from "@/data/menu";

function AllergenBadge({ tag }: { tag: AllergenTag }) {
  const info = ALLERGENS[tag];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide ${info.color}`}
    >
      {info.label}
    </span>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="group flex gap-4 rounded-2xl border border-[oklch(0.922_0_0)] bg-white p-4 transition-shadow hover:shadow-md">
      <div className="flex-1 min-w-0">
        {/* Name row */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-[oklch(0.205_0_0)] leading-tight">
            {item.name}
          </span>
          {item.spicy && (
            <span className="inline-flex items-center gap-0.5 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600">
              <Flame className="h-3 w-3" /> Spicy
            </span>
          )}
          {item.sizzler && (
            <span className="inline-flex items-center gap-0.5 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600">
              <Zap className="h-3 w-3" /> Sizzler
            </span>
          )}
        </div>

        {/* Description */}
        {item.desc && (
          <p className="mt-1 text-sm text-[oklch(0.556_0_0)] leading-relaxed">
            {item.desc}
          </p>
        )}

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {item.tags.map((tag) => (
              <AllergenBadge key={tag} tag={tag} />
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="shrink-0 text-right">
        <span className="text-base font-bold text-[oklch(50.8%_0.118_165.612)]">
          {item.price}
        </span>
      </div>
    </div>
  );
}

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState<string>(
    menuData[0].category,
  );
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const tabsRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const isScrollingToSection = useRef(false);

  const updateArrows = useCallback(() => {
    const el = tabsRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollTabs = (dir: "left" | "right") => {
    tabsRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const STICKY_HEIGHT = 120;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingToSection.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.getAttribute("data-category") ?? "");
          }
        });
      },
      { rootMargin: `-${STICKY_HEIGHT}px 0px -60% 0px`, threshold: 0 },
    );

    menuData.forEach(({ category }) => {
      const el = sectionRefs.current[category];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (category: string) => {
    setActiveCategory(category);
    const el = sectionRefs.current[category];
    if (!el) return;

    isScrollingToSection.current = true;
    const STICKY_HEIGHT = 150;
    const top = el.getBoundingClientRect().top + window.scrollY - STICKY_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });

    // Scroll active tab into view
    const tabEl = tabsRef.current?.querySelector(
      `[data-tab="${category}"]`,
    ) as HTMLElement | null;
    tabEl?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setTimeout(() => {
      isScrollingToSection.current = false;
    }, 800);
  };

  useEffect(() => {
    const tabEl = tabsRef.current?.querySelector(
      `[data-tab="${activeCategory}"]`,
    ) as HTMLElement | null;
    tabEl?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[oklch(0.97_0_0)] font-sans">
      <div className="bg-emerald-100 px-4 pb-8 pt-10 text-center text-primary">
        <h1 className="mt-1 text-8xl font-bold tracking-tight">À LA CARTE</h1>
      </div>

      <div className="border-b  w-full px-4 py-4 ">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {(Object.entries(ALLERGENS) as [AllergenTag, AllergenInfo][]).map(
              ([tag, info]) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 text-sm text-[oklch(0.205_0_0)]"
                >
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${info.color}`}
                  >
                    {info.label}
                  </span>
                  <span className="text-[oklch(0.556_0_0)]">
                    {info.description}
                  </span>
                </div>
              ),
            )}
            <div className="flex items-center gap-2 text-sm text-[oklch(0.205_0_0)]">
              <span className="inline-flex shrink-0 items-center gap-0.5 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600">
                <Flame className="h-3 w-3" /> Spicy
              </span>
              <span className="text-[oklch(0.556_0_0)]">
                Contains chili heat
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[oklch(0.205_0_0)]">
              <span className="inline-flex shrink-0 items-center gap-0.5 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-600">
                <Zap className="h-3 w-3" /> Sizzler
              </span>
              <span className="text-[oklch(0.556_0_0)]">
                Served on sizzling plate
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-20 z-30 border-b border-[oklch(0.922_0_0)] bg-white shadow-sm">
        <div className="relative mx-auto flex max-w-5xl items-center">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scrollTabs("left")}
              className="absolute left-0 z-10 flex h-full items-center bg-gradient-to-r from-white via-white to-transparent px-2 text-[oklch(0.556_0_0)] transition hover:text-[oklch(50.8%_0.118_165.612)]"
              aria-label="Scroll tabs left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Tabs */}
          <div
            ref={tabsRef}
            className="flex w-full gap-0 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {menuData.map(({ category }) => (
              <button
                key={category}
                data-tab={category}
                onClick={() => handleTabClick(category)}
                className={`relative shrink-0 whitespace-nowrap px-4 py-4 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "text-[oklch(50.8%_0.118_165.612)]"
                    : "text-[oklch(0.556_0_0)] hover:text-[oklch(0.205_0_0)]"
                }`}
              >
                {category}
                {/* Active underline */}
                {activeCategory === category && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[oklch(50.8%_0.118_165.612)]" />
                )}
              </button>
            ))}
          </div>

          {/* Right arrow */}
          {canScrollRight && (
            <button
              onClick={() => scrollTabs("right")}
              className="absolute right-0 z-10 flex h-full items-center bg-gradient-to-l from-white via-white to-transparent px-2 text-[oklch(0.556_0_0)] transition hover:text-[oklch(50.8%_0.118_165.612)]"
              aria-label="Scroll tabs right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* ── Menu sections ── */}
      <main className="mx-auto max-w-3xl px-4 pb-20 pt-8 space-y-14">
        {menuData.map(({ category, items }) => (
          <section
            key={category}
            data-category={category}
            ref={(el) => {
              sectionRefs.current[category] = el;
            }}
          >
            {/* Category heading */}
            <div className="mb-5 flex items-center gap-3">
              <h2 className="text-xl font-bold text-[oklch(0.205_0_0)]">
                {category}
              </h2>
              <span className="h-px flex-1 bg-[oklch(0.922_0_0)]" />
              <span className="text-xs font-medium text-[oklch(0.556_0_0)]">
                {items.length} {items.length === 1 ? "item" : "items"}
              </span>
            </div>

            {/* Items grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <MenuItemCard key={item.name} item={item} />
              ))}
            </div>
          </section>
        ))}

     
      </main>
    </div>
  );
}
