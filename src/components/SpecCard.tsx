"use client";

import type { SpecCardData } from "@/data/specCards";

export default function SpecCard({ card }: { card: SpecCardData }) {
  const s = card.style || {};

  return (
    <div
      className="flex flex-col shrink-0"
      style={{
        backgroundColor: "#F4F4F6",
        borderRadius: s.outerRadius ?? 26,
        padding: 20,
        height: s.cardHeight ?? 180,
        border: "1px solid #ECECEF",
        width: s.cardWidth ?? 240,
      }}
    >
      <div className="flex items-start justify-between mb-0.5">
        <div
          className="flex items-center justify-center rounded-full"
          style={{ width: 40, height: 40, border: "1px solid #D9D9DE" }}
        >
          <span className="scale-75">{card.icon}</span>
        </div>
        <span
          className="text-right leading-tight whitespace-nowrap"
          style={{ color: "#C7C7CC", fontSize: s.labelSize ?? 18, fontWeight: 500 }}
        >
          {card.label}
        </span>
      </div>

      {card.bigValue && (
        <div className="flex items-baseline gap-1 mt-auto">
          <span
            style={{
              color: "#0A0A0A",
              fontSize: s.bigValueSize ?? 40,
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            {card.bigValue}
          </span>
          {card.bigUnit && (
            <span style={{ color: "#A0A0A6", fontSize: 18, fontWeight: 400 }}>
              {card.bigUnit}
            </span>
          )}
        </div>
      )}

      <div className="mt-auto">
        {card.sub1 && (
          <p style={{ color: "#A0A0A6", fontSize: 14, fontWeight: 400 }}>{card.sub1}</p>
        )}
        {card.sub2 && (
          <p style={{ color: "#0A0A0A", fontSize: 16, fontWeight: 600 }}>{card.sub2}</p>
        )}
      </div>

      {card.highlightBlock && (
        <div
          style={{
            backgroundColor: "#0A0A0A",
            borderRadius: s.innerBlockRadius ?? 18,
            padding: "14px 16px",
            margin: "12px -6px 0 -6px",
          }}
        >
          <p style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 800, lineHeight: 1.2 }}>
            {card.highlightBlock.brand}
          </p>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 400, marginTop: 1 }}>
            {card.highlightBlock.detail}
          </p>
        </div>
      )}
    </div>
  );
}
