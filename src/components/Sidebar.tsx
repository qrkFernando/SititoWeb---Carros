import { sidebarCategories } from "@/data/carData";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-1">
      {sidebarCategories.map((cat, i) => (
        <button
          key={cat}
          className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
            i === 1
              ? "bg-gray-900 text-white"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </aside>
  );
}