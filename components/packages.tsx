"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Packages() {
  const packages = [
    {
      name: "Pack Standard",
      price: "1 500 000 FCFA",
      description: "Avec petit déjeuner",
      features: [
        "Billet d’avion A/R inclus",
        "Hôtel : Voco Makkah by IHG – 6 nuits",
        "Hôtel : Areak Taibah – 4 nuits",
        "Transports privés entre les villes saintes",
        "Guide religieux expérimenté",
        "Visa & assurance inclus",
      ],
      popular: false,
    },
    {
      name: "Pack Confort",
      price: "1 900 000 FCFA",
      description: "En demi-pension",
      features: [
        "Billet d’avion A/R inclus",
        "Hôtel : Al Shohada Makkah (5★) – 6 nuits",
        "Hôtel : Al Ritz Al Madina (4★) – 4 nuits",
        "Transports privés entre les villes saintes",
        "Guide religieux expérimenté",
        "Visa & assurance inclus",
      ],
      popular: true,
    },
    {
      name: "Pack VIP",
      price: "2 400 000 FCFA",
      description: "En demi-pension",
      features: [
        "Billet d’avion A/R inclus",
        "Hôtel : Swissôtel Al Maqam Makkah (5★) – 6 nuits",
        "Hôtel : Peninsula Worth Madinah (5★) – 4 nuits",
        "Transports privés exclusifs",
        "Guide religieux expérimenté",
        "Visa & assurance inclus",
      ],
      popular: false,
    },
  ];

  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2740] mb-4">
            Nos Formules Umrah Rajab 2025 & 2026
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos packs exclusifs pour un voyage spirituel inoubliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`flex flex-col transition-all duration-300 hover:shadow-lg border ${
                pkg.popular
                  ? "border-[#D4AF37] md:scale-105 shadow-xl"
                  : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="bg-[#D4AF37] text-[#0A2740] text-center py-2 font-semibold text-sm rounded-t-lg">
                  Le Plus Populaire
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {pkg.description}
                </CardDescription>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#D4AF37]">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    / personne
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col gap-6">
                <ul className="space-y-3 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-semibold ${
                    pkg.popular
                      ? "bg-[#D4AF37] hover:bg-[#b8942f] text-[#0A2740]"
                      : "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                  }`}
                >
                  Réserver Maintenant
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
