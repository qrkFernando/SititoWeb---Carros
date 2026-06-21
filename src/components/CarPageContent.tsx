"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Sidebar from "@/components/Sidebar";
import RightPanel from "@/components/RightPanel";
import FeatureHighlights from "@/components/FeatureHighlights";

export default function CarPageContent() {
  const [selectedColor, setSelectedColor] = useState(3);

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <div className="grid grid-cols-[180px_1fr_280px] gap-6 px-8 py-6">
        <Sidebar />
        <HeroSection selectedColor={selectedColor} />
        <RightPanel />
      </div>
      
      <FeatureHighlights selectedColor={selectedColor} onColorChange={setSelectedColor} />
    </main>
  );
}
