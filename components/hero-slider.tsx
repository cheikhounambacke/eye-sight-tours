"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const sliderImages = [
  {
    src: "/alritz-hotel.jpg",
    alt: "Al Ritz Al Madinah Hotel",
    title: "Séjour Confort à Médine",
    subtitle:
      "Profitez d’un hôtel 5★ à quelques pas de la Mosquée du Prophète ﷺ.",
  },
  {
    src: "/Shuhada-hotel.jpg",
    alt: "Al Shohada Hotel Makkah",
    title: "Hôtels Sélectionnés Avec Soin",
    subtitle:
      "Un confort exceptionnel pour un voyage spirituel en toute sérénité.",
  },
  {
    src: "/SWISS-hotel.jpg",
    alt: "Swissotel Al Maqam Makkah",
    title: "Vivez La Kaaba Depuis Votre Fenêtre",
    subtitle:
      "Des chambres luxueuses face au Haram — une expérience qui marque une vie.",
  },
  {
    src: "/penisula-hotel.jpg",
    alt: "Madinah Luxury Room",
    title: "Un Confort Qui Inspire La Sérénité",
    subtitle: "Rechargez votre âme dans des espaces modernes et apaisants.",
  },
  {
    src: "/swissotel.jpg",
    alt: "Kaaba View – Luxury Room",
    title: "Votre Umrah, Votre Meilleur Souvenir",
    subtitle:
      "Nous organisons votre voyage, vous savourez chaque instant sacré.",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleViewPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMore = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const slide = sliderImages[currentSlide];

  return (
    <div className="relative w-full h-96 sm:h-[500px] md:h-[600px] overflow-hidden shadow-2xl">
      {/* Slides */}
      <div className="relative w-full h-full">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover bg-black"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2740]/60 via-black/40 to-black/60" />

      {/* Content (Animated) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center px-4 max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-200 mb-6"
          >
            {slide.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              onClick={handleViewPackages}
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#b8942f] text-[#0A2740] font-semibold shadow-xl"
            >
              Voir nos formules
            </Button>

            <Button
              onClick={handleLearnMore}
              size="lg"
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/20 hover:text-white transition font-semibold"
            >
              Nous contacter
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#D4AF37] w-8"
                : "bg-[#D4AF37]/40 hover:bg-[#D4AF37]/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
