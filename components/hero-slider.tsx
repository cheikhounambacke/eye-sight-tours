"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const sliderData = [
  {
    title: "Voyages Organisés sur Mesure",
    subtitle: "Découvrez le monde avec élégance, confort et sécurité.",
  },
  {
    title: "Tourisme Religieux – Hajj & Umrah",
    subtitle: "Un accompagnement complet pour vos voyages spirituels.",
  },
  {
    title: "Événementiel Professionnel",
    subtitle: "Organisation haut de gamme pour vos événements.",
  },
  {
    title: "Team Building d’Entreprise",
    subtitle: "Renforcez la cohésion de votre équipe.",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Slow, smooth typing
  const typingSpeed = 160; // per letter
  const deletingSpeed = 110; // per letter
  const fullPause = 1200; // pause when full text is shown
  const emptyPause = 500; // pause before typing next title

  const title = sliderData[current].title;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText === title) {
      // FULL title is typed → pause → start deleting
      timeout = setTimeout(() => setIsDeleting(true), fullPause);
    } else if (isDeleting && typedText === "") {
      // FULL delete → go to next slide → type next title
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrent((prev) => (prev + 1) % sliderData.length);
      }, emptyPause);
    } else {
      // Typing forward
      if (!isDeleting) {
        timeout = setTimeout(() => {
          setTypedText(title.slice(0, typedText.length + 1));
        }, typingSpeed);
      }

      // Deleting backward
      if (isDeleting && typedText !== "") {
        timeout = setTimeout(() => {
          setTypedText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, title]);

  return (
    <div className="relative w-full h-[420px] sm:h-[520px] overflow-hidden bg-gradient-to-br from-[#0A2740] via-[#0C3A63] to-[#0A2740] flex items-center justify-center text-center px-6">
      {/* Gold Glow */}
      <motion.div
        key={current + "-circle"}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 0.18 }}
        transition={{ duration: 1.2 }}
        className="absolute top-20 -right-20 w-72 h-72 bg-[#D4AF37] rounded-full blur-3xl opacity-20"
      />

      {/* Wave Shape */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 0.3 }}
        transition={{ duration: 1.3 }}
        className="absolute bottom-0 left-0 w-full"
      >
        <svg viewBox="0 0 1440 320" className="w-full fill-blue-600/20">
          <path d="M0,192L60,170.7C120,149,240,107,360,80C480,53,600,43,720,64C840,85,960,139,1080,144C1200,149,1320,107,1380,85.3L1440,64V320H0Z" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4 min-h-[72px]">
          {typedText}
          <span className="border-r-2 ml-1 border-[#D4AF37] animate-pulse"></span>
        </h1>

        <motion.p
          key={current + "-subtitle"}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-200 text-lg sm:text-xl mb-8"
        >
          {sliderData[current].subtitle}
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#D4AF37] hover:bg-[#b8942f] text-[#0A2740] font-semibold shadow-xl"
          >
            Voir nos services
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/20 transition font-semibold"
          >
            Nous contacter
          </Button>
        </div>
      </div>
    </div>
  );
}
