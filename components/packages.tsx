"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  const [standardVersion, setStandardVersion] = useState<"standard" | "plus">(
    "standard"
  );
  const [pilgrimageType, setPilgrimageType] = useState<"umrah" | "hajj">(
    "umrah"
  );

  // Animation pour chaque carte
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // ---------- PACKS UMRAH ----------
  const umrahPackages =
    standardVersion === "standard"
      ? [
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
        ]
      : [
          {
            name: "Pack Standard Plus",
            price: "1 650 000 FCFA",
            description: "En demi-pension",
            features: [
              "Billet d’avion A/R inclus",
              "Hôtel : Voco Makkah by IHG – 6 nuits",
              "Hôtel : Areak Taibah – 4 nuits",
              "Demi-pension (petit déjeuner + dîner)",
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

  // ---------- PACKS HAJJ ----------
  const hajjPackages = [
    {
      name: "Hajj 2026 – Départ Sénégal",
      price: "5 300 000 FCFA",
      description: "En pension complète",
      features: [
        "Hébergement",
        "Pension complète (petit déjeuner, déjeuner, dîner)",
        "Billet d’avion + Visa",
        "Transferts complets",
      ],
      popular: true,
    },
    {
      name: "Hajj 2026 – Départ Paris",
      price: "7 200 €",
      description: "En demi-pension",
      features: [
        "Hébergement",
        "Demi-pension (petit déjeuner + dîner)",
        "Billet d’avion + Visa",
        "Transferts complets",
        "Masher (Mina)",
      ],
      popular: false,
    },
  ];

  const packages = pilgrimageType === "umrah" ? umrahPackages : hajjPackages;

  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Titre + Toggle Umrah / Hajj */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2740] mb-4">
            {pilgrimageType === "umrah"
              ? "Nos Formules Umrah 2025 & 2026"
              : "Nos Formules Hajj 2026"}
          </h2>

          <div className="flex justify-center mb-6">
            <div className="flex bg-muted rounded-full p-1">
              <button
                onClick={() => setPilgrimageType("umrah")}
                className={`px-5 py-1.5 rounded-full font-semibold transition ${
                  pilgrimageType === "umrah"
                    ? "bg-[#0A2740] text-white"
                    : "text-muted-foreground hover:text-[#0A2740]"
                }`}
              >
                Umrah
              </button>
              <button
                onClick={() => setPilgrimageType("hajj")}
                className={`px-5 py-1.5 rounded-full font-semibold transition ${
                  pilgrimageType === "hajj"
                    ? "bg-[#0A2740] text-white"
                    : "text-muted-foreground hover:text-[#0A2740]"
                }`}
              >
                Hajj
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name + pilgrimageType + index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <Card
                className={`flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border ${
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

                  {/* Toggle Standard / Plus → seulement pour Umrah & la première carte */}
                  {pilgrimageType === "umrah" && index === 0 && (
                    <div className="mt-4">
                      <p className="text-sm text-[#0A2740] font-medium mb-2">
                        Choisissez votre option :
                      </p>

                      <div className="flex bg-muted rounded-full p-1 w-fit">
                        <button
                          onClick={() => setStandardVersion("standard")}
                          className={`px-4 py-1 text-sm rounded-full font-semibold transition ${
                            standardVersion === "standard"
                              ? "bg-[#D4AF37] text-[#0A2740]"
                              : "text-muted-foreground hover:text-[#0A2740]"
                          }`}
                        >
                          Standard
                        </button>

                        <button
                          onClick={() => setStandardVersion("plus")}
                          className={`px-4 py-1 text-sm rounded-full font-semibold transition ${
                            standardVersion === "plus"
                              ? "bg-[#D4AF37] text-[#0A2740]"
                              : "text-muted-foreground hover:text-[#0A2740]"
                          }`}
                        >
                          Plus
                        </button>
                      </div>
                    </div>
                  )}

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
