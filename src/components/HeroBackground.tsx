interface HeroBackgroundProps {
  accentColor?: string;
  glowPosition?: { x: number; y: number };
}

export default function HeroBackground({
  accentColor = "rgba(220, 90, 20, 0.4)",
  glowPosition = { x: 20, y: 25 },
}: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base layer: dark carbon to pure black */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0d0d0d, #000000)",
        }}
      />

      {/* Secondary light: static, subtle glow at bottom-right */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 75% 80%, ${accentColor.replace(
            "0.4",
            "0.15"
          )}, transparent 60%)`,
        }}
      />

      {/* Main light: static spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at ${glowPosition.x}% ${glowPosition.y}%, ${accentColor}, transparent 50%)`,
        }}
      />

      {/* Reflective floor: dark gradient at bottom */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "35%",
          background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
        }}
      />
    </div>
  );
}
