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
        "Tous nos packs Umrah incluent : Billet d’avion A/R, hôtels à La Mecque et Médine, transports privés entre les villes saintes, guide religieux expérimenté, visa + assurance. Les repas dépendent du pack choisi (petit déjeuner, demi-pension).",
    },
    {
      question: "Qu’est-ce qui est inclus dans les formules Hajj 2026 ?",
      answer:
        "Nos packs Hajj incluent : Hébergement, pension complète ou demi-pension selon le pack, billet d’avion A/R, visa Hajj, transferts complets, et services sur les lieux saints (dont Masher/Mina pour le départ Paris).",
    },
    {
      question: "Quels sont les prix des formules Umrah 2025 & 2026 ?",
      answer:
        "Pack Standard : 1 500 000 FCFA · Pack Standard Plus : 1 650 000 FCFA · Pack Confort : 1 900 000 FCFA · Pack VIP : 2 400 000 FCFA.",
    },
    {
      question: "Quels sont les prix du Hajj 2026 ?",
      answer:
        "Hajj 2026 – Départ Sénégal : 5 300 000 FCFA (pension complète) · Hajj 2026 – Départ Paris : 7 200 € (demi-pension + Masher/Mina).",
    },
    {
      question: "Les hôtels sont-ils bien situés ?",
      answer:
        "Oui. Pour l’Umrah, nos hôtels sont proches du Masjid al-Haram et du Masjid an-Nabawi (Swissôtel Al Maqam, Al Shohada, Voco Makkah…). Pour le Hajj, l’hébergement officiel est organisé selon les standards saoudiens.",
    },
    {
      question: "Le visa est-il inclus ?",
      answer:
        "Oui. Le visa Umrah et le visa Hajj sont inclus ainsi que l’assurance obligatoire.",
    },
    {
      question: "Puis-je payer en plusieurs tranches ?",
      answer:
        "Oui. Nous offrons la possibilité de payer l’Umrah et le Hajj en plusieurs tranches selon les conditions établies.",
    },
    {
      question: "Puis-je voyager en famille ?",
      answer:
        "Oui. Nos packs sont adaptés aux familles, couples, groupes et personnes âgées. Les enfants sont acceptés.",
    },
    {
      question: "Avez-vous un guide pendant tout le voyage ?",
      answer:
        "Oui. Un guide religieux expérimenté accompagne les pèlerins du début à la fin pour l’Umrah et pour le Hajj.",
    },
    {
      question: "Comment réserver ?",
      answer:
        "Vous pouvez nous contacter via WhatsApp ou remplir le formulaire dans la section Contact. Un conseiller vous guidera.",
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
            voyages Umrah & Hajj.
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
