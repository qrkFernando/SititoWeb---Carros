"use client";

import { useState } from "react";
import specCards from "@/data/specCards";
import ColorSelector from "@/components/ColorSelector";
import Carousel from "@/components/Carousel";
import CarouselNav from "@/components/CarouselNav";
import SpecCard from "@/components/SpecCard";

const GAP = 16;

export default function FeatureHighlights({
  selectedColor,
  onColorChange,
}: {
  selectedColor: number;
  onColorChange: (i: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const maxIndex = 1;

  const widths = specCards.map((c) => c.style?.cardWidth ?? 240);
  const offset = widths.slice(0, index).reduce((a, b) => a + b + GAP, 0);

  return (
    <section className="px-12 py-8 bg-white">
      <div className="flex items-center justify-between mb-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <h2 className="text-[28px] font-extrabold tracking-tight" style={{ color: "#0A0A0A" }}>
            Destacados
          </h2>
          <div
            className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
            style={{ borderColor: "#D9D9DE" }}
          >
            <span className="text-xs font-medium" style={{ color: "#4A4A4F" }}>!</span>
          </div>
        </div>
        <ColorSelector selectedColor={selectedColor} onChange={onColorChange} />
      </div>

      <div className="flex gap-4 items-stretch max-w-7xl mx-auto">
        {index > 0 && <CarouselNav direction="left" onClick={() => setIndex(index - 1)} />}
        <Carousel offset={offset}>
          {specCards.map((card) => (
            <SpecCard key={card.id} card={card} />
          ))}
        </Carousel>
        {index < maxIndex && <CarouselNav direction="right" onClick={() => setIndex(index + 1)} />}
      </div>
    </section>
  )
}
