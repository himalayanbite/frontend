"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { navItems } from "@/constant/Navbar";

const logoImage = "/logo.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">

        <Link href="/" className="flex items-center">
          <Image
            src= {logoImage} 
            alt="Himalayan Bite"
            width={200}
            height={200}
            priority
            className="object-cover"
          />
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map((item) =>
            item.type === "button" ? (
              <Button key={item.label} asChild>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

      </div>
    </header>
  );
}
