export default function RightPanel() {
  return (
    <div className="flex flex-col gap-4">
      {/* Tarjeta negra */}
      <div className="bg-gray-900 text-white rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🏅</span>
          <h3 className="font-semibold text-sm">Potencia Inigualable</h3>
        </div>
        <p className="text-xs text-gray-300 leading-relaxed">
          Un V8 supercargado de 650 hp libera un torrente de 650 lb-ft de torque.
          Un estilo agresivo envuelve tecnologías avanzadas.
        </p>
      </div>

      {/* Link vpc-accessories */}
      <a href="#" className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-900 transition-colors">
        <span className="text-lg">∞</span>
        vpc-accessories
      </a>
    </div>
  );
}