import type { ReactNode } from "react";

const GAP = 16;

export default function Carousel({
  children,
  offset,
}: {
  children: ReactNode;
  offset: number;
}) {
  return (
    <div className="overflow-hidden flex-1">
      <div
        className="flex"
        style={{
          gap: GAP,
          transform: `translateX(${-offset}px)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}
