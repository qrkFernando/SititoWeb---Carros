"use client";

import { useState } from "react";
import { colorOptions, specs } from "@/data/carData";
import Image from "next/image";

const specCards = [
  {
    icon: "💺",
    label: "Capacidad de Pasajeros",
    bigValue: "4",
    sub1: "Pasajero",
    sub2: "capacidad",
    hasImage: true,
  },
  {
    icon: "⚙️",
    label: "Motor",
    bigValue: "",
    sub1: "Artesanal",
    sub2: "AMG 4.0L V8 biturbo",
    highlight: false,
  },
  {
    icon: "⚡",
    label: "Potencia",
    bigValue: "503",
    bigUnit: "hp",
    sub1: "Potencia",
    sub2: "@ 5,500-6,250 rpm",
    highlight: false,
  },
  {
    icon: "🧑‍✈️",
    label: "Transmisión",
    bigValue: "",
    sub1: "Transmisión automática",
    sub2: "",
    highlightBlock: { brand: "AMG", detail: "SPEEDSHIFT® MCT 9-speed" },
  },
  {
    icon: "🏎️",
    label: "Aceleración",
    bigValue: "3.7",
    bigUnit: "seg",
    sub1: "Aceleración",
    sub2: "0-60 mph",
    partial: true,
  },
];

export default function FeatureHighlights({ selectedColor, onColorChange }: { selectedColor: number; onColorChange: (i: number) => void }) {
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <section className="px-8 py-8 bg-white border-t border-gray-100">
      {/* Header: Feature Highlights + Colors */}
      <div className="flex items-center justify-between mb-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-gray-900">Destacados</h2>
          <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-[10px] text-gray-500 cursor-pointer font-bold">!</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 font-medium">Colores</span>
          {colorOptions.map((color, i) => (
            <button
              key={color.name}
                onClick={() => onColorChange(i)}
              className={`w-6 h-6 rounded-full border-2 transition-all ${
                selectedColor === i
                  ? "border-gray-900 scale-110"
                  : "border-transparent hover:scale-105"
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Carrusel con navegación */}
      <div className="flex gap-4 items-start max-w-7xl mx-auto">
        {/* Botones de navegación */}
        <div className="flex flex-col gap-2 mt-12">
          <button
            onClick={() => setScrollIndex(Math.max(0, scrollIndex - 1))}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
          >
            →
          </button>
          <button
            onClick={() => setScrollIndex(Math.min(specCards.length - 3, scrollIndex + 1))}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
          >
            ←
          </button>
        </div>

        {/* Tarjetas */}
        <div className="flex gap-4 overflow-hidden flex-1">
          {specCards.slice(scrollIndex, scrollIndex + 3).map((card, i) => (
            <div
              key={card.label}
              className="min-w-[280px] bg-[#f5f5f7] rounded-2xl p-5 flex-1"
            >
              {/* Icono circular */}
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-base mb-3">
                {card.icon}
              </div>

              {/* Passenger Capacity: con imagen */}
              {card.hasImage && (
                <div className="relative mb-3 rounded-xl overflow-hidden">
                  <Image
                    src={colorOptions[selectedColor].image}
                    alt="Asiento"
                    width={200}
                    height={120}
                    className="w-full h-24 object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/60" />
                  <span className="absolute bottom-2 right-2 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center text-[10px]">▶</span>
                </div>
              )}

              {/* Engine / Transmission / Power / Acceleration */}
              {card.bigValue && (
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-900">{card.bigValue}</span>
                  {card.bigUnit && <span className="text-sm text-gray-400 ml-1">{card.bigUnit}</span>}
                </div>
              )}

              <p className="text-xs text-gray-400">{card.sub1}</p>
              <p className="text-sm font-semibold text-gray-900">{card.sub2}</p>

              {/* Bloque destacado de Transmission */}
              {card.highlightBlock && (
                <div className="mt-3 bg-gray-900 text-white rounded-xl px-4 py-3">
                  <p className="text-lg font-bold leading-tight">{card.highlightBlock.brand}</p>
                  <p className="text-[10px] text-gray-300">{card.highlightBlock.detail}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}