"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ServiceBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  // ["services", "assurance"]

  const segment = segments[1]; // second part after /services/

  const map: Record<string, string> = {
    "tourisme-religieux": "Tourisme Religieux",
    "colonie-de-vacances": "Colonie de Vacances",
    "voyages-organises": "Voyages Organisés",
    assurance: "Assurance",
    protocole: "Protocole",
    evenementiel: "Événementiel",
    "team-building": "Team Building",
  };

  const page = map[segment] || "Service";

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-sm text-gray-600 py-4 flex items-center gap-2">
        <Link href="/" className="text-[#0A2740] hover:text-[#D4AF37]">
          Accueil
        </Link>
        <span>/</span>

        <Link href="/services" className="text-[#0A2740] hover:text-[#D4AF37]">
          Nos Services
        </Link>
        <span>/</span>

        <span className="text-[#D4AF37] font-semibold">{page}</span>
      </div>
    </div>
  );
}
