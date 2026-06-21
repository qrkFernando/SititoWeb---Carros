import HeroBackground from "@/components/HeroBackground";

export default function HeroInicio() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeroBackground />

      {/* Texto LEGENDS */}
      <h1
        className="
          absolute inset-x-0 top-[12%]
          flex justify-center
          font-[family-name:var(--font-anton)]
          uppercase leading-none
          text-[clamp(80px,14vw,220px)]
          tracking-[0.06em]
          bg-gradient-to-b from-[rgba(255,255,255,1)] via-[rgba(180,180,180,0.5)] to-[rgba(25,25,25,0.06)]
          bg-clip-text text-transparent
          select-none pointer-events-none
        "
      >
        LEGENDS
      </h1>

      {/* Automóvil */}
      <div className="absolute inset-0 z-10 flex items-end justify-center overflow-visible">
        <div className="relative w-[90%] -mb-[-3%]">
          <img
            src="/images/Imagenes-inicio/carroSinFondo.png"
            alt="Mustang"
            className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.85)]"
          />
        </div>
      </div>
    </div>
  );
}
