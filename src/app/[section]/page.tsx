import { notFound } from "next/navigation";
import { navigationItems } from "@/data/carData";

export function generateStaticParams() {
  return navigationItems
    .filter((item) => item.slug)
    .map((item) => ({ section: item.slug }));
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const item = navigationItems.find((item) => item.slug === section);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900">{item.label}</h1>
    </div>
  );
}
