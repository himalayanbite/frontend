"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type OpeningPopupProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export default function OpeningPopup({
  imageSrc,
  imageAlt = "Popup image",
}: OpeningPopupProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (imageSrc) {
      setShow(true);
    }
  }, [imageSrc]);

  if (!imageSrc || !show) return null;

  return (
   <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4">
  <div className="relative w-full max-w-md flex items-center justify-center rounded-2xl bg-white shadow-2xl p-2">
    
    <button
      type="button"
      onClick={() => setShow(false)}
      aria-label="Close popup"
      className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-xl text-white hover:bg-black"
    >
      ×
    </button>

    <Image
      src={imageSrc}
      alt={imageAlt}
      width={800}
      height={900}
      priority
      className="w-full max-h-[85vh] object-contain"
    />
  </div>
</div>
  );
}