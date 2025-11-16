"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Qu’est-ce qui est inclus dans les formules Umrah ?",
      answer:
        "Tous nos packs incluent : Billet d’avion A/R, hébergement à La Mecque et Médine, transports privés entre les villes saintes, guide religieux expérimenté, visa + assurance.",
    },
    {
      question: "Quels sont les prix des formules Umrah 2025 & 2026 ?",
      answer:
        "Pack Standard : 1 500 000 FCFA · Pack Confort : 1 900 000 FCFA · Pack VIP : 2 400 000 FCFA.",
    },
    {
      question: "Les hôtels sont-ils près de la mosquée ?",
      answer:
        "Oui. Tous nos hôtels sont situés à proximité de Masjid al-Haram et Masjid an-Nabawi, dont Swissôtel Al Maqam (VIP), Al Shohada (Confort) et Voco Makkah (Standard).",
    },
    {
      question: "Le visa Umrah est-il inclus ?",
      answer:
        "Oui, le visa Umrah ainsi que l’assurance sont inclus dans toutes nos formules.",
    },
    {
      question: "Dois-je verser un acompte pour réserver ?",
      answer:
        "Oui, un acompte est requis pour confirmer votre place. Le reste peut être payé avant le départ.",
    },
    {
      question: "Puis-je voyager en famille ?",
      answer:
        "Bien sûr. Nos packs sont conçus pour les familles, les couples, et les groupes. Les enfants sont acceptés.",
    },
    {
      question: "Avez-vous un guide pendant tout le voyage ?",
      answer:
        "Oui. Un guide religieux expérimenté accompagne le groupe du début à la fin du séjour.",
    },
    {
      question: "Comment puis-je réserver ma place ?",
      answer:
        "Vous pouvez nous contacter directement via WhatsApp ou remplir le formulaire sur notre site dans la section Contact.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2740] mb-4">
            Foire Aux Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquentes sur nos
            voyages Umrah.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#D4AF37]/30 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-[#0A2740] text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#D4AF37] transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 bg-[#0A2740]/5">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
