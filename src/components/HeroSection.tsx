"use client";

import Image from "next/image";
import { useState } from "react";
import { hotspots, colorOptions } from "@/data/carData";

export default function HeroSection({ selectedColor }: { selectedColor: number }) {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <section className="px-8 py-6">
      {/* Título principal */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-2">
          Mercedes-Benz
          <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500 cursor-pointer">i</span>
        </h1>
        <p className="text-lg text-gray-500 mt-1">AMG C 63 S Coupe - 2023</p>
      </div>

      {/* Contenedor imagen + hotspots */}
      <div className="relative w-full max-w-4xl mx-auto">
        <Image
          src={colorOptions[selectedColor].image}
          alt="Mercedes-AMG C63 S Coupe"
          width={800}
          height={400}
          className="w-full h-auto rounded-2xl"
          priority
        />

        {/* Hotspots */}
        {hotspots.map((spot, i) => (
          <div
            key={spot.name}
            className="absolute cursor-pointer group"
            style={{ top: spot.top, left: spot.left }}
            onMouseEnter={() => setActiveHotspot(i)}
            onMouseLeave={() => setActiveHotspot(null)}
          >
            <div className={`w-4 h-4 bg-gray-900 rounded-full border-2 border-white shadow-md transition-transform ${activeHotspot === i ? 'scale-150' : ''}`} />
            {activeHotspot === i && (
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-gray-900 whitespace-nowrap shadow-lg border border-white/50">
                {spot.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}