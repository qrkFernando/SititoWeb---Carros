import { navigationItems } from "@/data/carData";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-gray-900">Car.</span>
        <span className="text-sm text-gray-500">Centro de Venta de Autos</span>
      </div>

      {/* Navegación */}
      <nav className="hidden lg:flex items-center gap-1">
        {navigationItems.map((item, index) => (
          <a
            key={item}
            href="#"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              index === 0
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Íconos derecha */}
      <div className="flex items-center gap-4 text-gray-600">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}