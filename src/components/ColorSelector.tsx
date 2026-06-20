"use client";

import { colorOptions } from "@/data/carData";

export default function ColorSelector({
  selectedColor,
  onChange,
}: {
  selectedColor: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-3">
          <span className="text-[18px] font-semibold" style={{ color: "#0A0A0A" }}>Colores</span>
          
      {colorOptions.map((color, i) => (
        <button
          key={color.name}
          onClick={() => onChange(i)}
          className="relative rounded-full transition-transform hover:scale-105"
          style={{ width: 28, height: 28 }}
          title={color.name}
        >
          {selectedColor === i && (
            <span
              className="absolute inset-[-4px] rounded-full border-2"
              style={{ borderColor: "#E5E5E5" }}
            />
          )}
          <span
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: color.hex }}
          />
        </button>
      ))}
    </div>
  );
}
