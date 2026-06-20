"use client";

export default function CarouselNav({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-50 shrink-0"
      style={{ width: 44, height: 44, border: "1px solid #E4E4E7", marginTop: 60 }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
      </svg>
    </button>
  );
}
