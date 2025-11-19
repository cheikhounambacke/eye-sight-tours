"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // scroll indicator
      const total = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / total) * 100;
      setScrollProgress(progress);

      // section highlight
      const sections = [
        "home",
        "about",
        "packages",
        "gallery",
        "faq",
        "contact",
      ];
      let current = "home";

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const offsetTop = el.offsetTop - 200;
          if (window.scrollY >= offsetTop) current = sec;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Accueil", id: "home" },
    { label: "À propos", id: "about" },
    { label: "Nos Formules", id: "packages" },
    { label: "Galerie", id: "gallery" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A2740]/95 shadow-xl border-b border-[#D4AF37]/20 backdrop-blur-md h-16"
            : "bg-transparent h-20"
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-[#D4AF37] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div
              className="flex items-center gap-3 flex-shrink-0 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <Image
                src="/logo.png"
                alt="Eyesight Tours"
                width={isScrolled ? 50 : 100}
                height={isScrolled ? 50 : 100}
                className="transition-all duration-300"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-white font-medium transition-colors
                    ${
                      activeSection === item.id
                        ? "text-[#D4AF37]"
                        : "hover:text-[#D4AF37]"
                    }
                  `}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#D4AF37] transition-all duration-300
                      ${
                        activeSection === item.id
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </button>
              ))}

              {/* Booking Button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#D4AF37] text-[#0A2740] font-semibold px-5 py-2 rounded-full hover:bg-[#caa032] transition shadow-md"
              >
                Réserver
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-white hover:bg-[#D4AF37]/20 transition"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="pb-4 border-t border-[#D4AF37]/20 pt-4 flex flex-col gap-3 bg-[#0A2740]/95">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-white py-2 font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-[#D4AF37]"
                    : "hover:text-[#D4AF37]"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Booking Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 bg-[#D4AF37] text-[#0A2740] font-semibold py-2 rounded-md hover:bg-[#caa032] transition"
            >
              Réserver Maintenant
            </button>
          </nav>
        </div>
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/221781030606"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 shadow-xl hover:scale-110 transition transform p-4 rounded-full z-50"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={32}
          height={32}
        />
      </a>
    </>
  );
}
