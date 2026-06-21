"use client";

import { useState } from "react";
import ModelCarImage from "@/components/ModelCarImage";
import Sidebar from "@/components/Sidebar";
import RightPanel from "@/components/RightPanel";
import FeatureHighlights from "@/components/FeatureHighlights";

export default function CarPageContent() {
  const [selectedColor, setSelectedColor] = useState(3);

  return (
    <main>
      <div className="grid grid-cols-[180px_1fr_280px] gap-6 px-8 py-6">
        <Sidebar />
        <ModelCarImage selectedColor={selectedColor} />
        <RightPanel />
      </div>
      
      <FeatureHighlights selectedColor={selectedColor} onColorChange={setSelectedColor} />
    </main>
  );
}
