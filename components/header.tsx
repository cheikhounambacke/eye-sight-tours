"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  Package,
  Image as ImageIcon,
  Phone,
  ChevronDown,
  Plane,
  Users,
  Shield,
  Handshake,
  PartyPopper,
  Building,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function Header({ solid = false }) {
  const router = useRouter();
  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // ---- SCROLL BEHAVIOR ON HOME PAGE ----
  useEffect(() => {
    if (path !== "/") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / total) * 100);

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
        if (el && window.scrollY >= el.offsetTop - 200) current = sec;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [path]);

  // ---- SMART NAVIGATION ----
  const navigateTo = (id: string) => {
    if (id === "home") {
      if (path === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
      setIsOpen(false);
      return;
    }

    if (id === "packages") {
      if (path === "/") {
        document
          .getElementById("packages")
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/?scroll=packages");
      }
      setIsOpen(false);
      return;
    }

    if (path === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/?scroll=${id}`);
    }

    setIsOpen(false);
  };

  const navItems = [
    { label: "Accueil", id: "home", icon: <Home className="w-5 h-5" /> },
    { label: "À propos", id: "about", icon: <Info className="w-5 h-5" /> },
    {
      label: "Nos Formules",
      id: "packages",
      icon: <Package className="w-5 h-5" />,
    },
    {
      label: "Galerie",
      id: "gallery",
      icon: <ImageIcon className="w-5 h-5" />,
    },
    { label: "FAQ", id: "faq", icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          solid || isScrolled
            ? "bg-[#0A2740] shadow-xl border-b border-[#D4AF37]/20 h-16"
            : "bg-transparent h-20"
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-[#D4AF37]"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigateTo("home")}
            >
              <Image
                src="/logo.png"
                alt="Eyesight Tours"
                width={isScrolled ? 50 : 100}
                height={isScrolled ? 50 : 100}
                className="transition-all duration-300"
              />
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`relative text-white font-medium transition-colors ${
                    activeSection === item.id && path === "/"
                      ? "text-[#D4AF37]"
                      : "hover:text-[#D4AF37]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </div>

                  <span
                    className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                      activeSection === item.id && path === "/"
                        ? "w-full"
                        : "w-0"
                    }`}
                  />
                </button>
              ))}

              {/* NOS SERVICES DROPDOWN */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white font-medium hover:text-[#D4AF37] flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Nos Services
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-60 bg-[#0A2740] border border-[#D4AF37]/30 text-white rounded-xl shadow-xl">
                  <DropdownMenuItem asChild>
                    <Link
                      href="/services/tourisme-religieux"
                      className="flex gap-2 p-2 hover:bg-[#D4AF37]/20"
                    >
                      <Plane className="w-4 h-4 text-[#D4AF37]" /> Tourisme
                      Religieux
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/services/colonie-de-vacances"
                      className="flex gap-2 p-2 hover:bg-[#D4AF37]/20"
                    >
                      <Users className="w-4 h-4 text-[#D4AF37]" /> Colonie de
                      Vacances
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/services/voyages-organises"
                      className="flex gap-2 p-2 hover:bg-[#D4AF37]/20"
                    >
                      <Plane className="w-4 h-4 text-[#D4AF37]" /> Voyages
                      Organisés
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/services/assurance"
                      className="flex gap-2 p-2 hover:bg-[#D4AF37]/20"
                    >
                      <Shield className="w-4 h-4 text-[#D4AF37]" /> Assurance
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/services/protocole"
                      className="flex gap-2 p-2 hover:bg-[#D4AF37]/20"
                    >
                      <Handshake className="w-4 h-4 text-[#D4AF37]" /> Protocole
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/services/evenementiel"
                      className="flex gap-2 p-2 hover:bg-[#D4AF37]/20"
                    >
                      <PartyPopper className="w-4 h-4 text-[#D4AF37]" />{" "}
                      Événementiel
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/services/team-building"
                      className="flex gap-2 p-2 hover:bg-[#D4AF37]/20"
                    >
                      <Building className="w-4 h-4 text-[#D4AF37]" /> Team
                      Building
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* CONTACT BUTTON */}
              <button
                onClick={() => navigateTo("contact")}
                className="bg-[#D4AF37] text-[#0A2740] font-semibold px-5 py-2 rounded-full hover:bg-[#caa032] transition"
              >
                Réserver
              </button>
            </nav>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-[#D4AF37]/20 transition"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* ---------------- MOBILE MENU ---------------- */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-[#0A2740] shadow-xl border-b border-[#D4AF37]/20 z-40">
          <div className="flex flex-col p-4 text-white space-y-4">
            {/* Basic nav items */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className="flex items-center gap-3 text-lg font-medium py-2 hover:text-[#D4AF37]"
              >
                {item.icon}
                {item.label}
              </button>
            ))}

            {/* Nos Services */}
            <div className="border-t border-[#D4AF37]/30 pt-4">
              <p className="text-sm uppercase tracking-wide text-gray-300 mb-2">
                Nos Services
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href="/services/tourisme-religieux"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 hover:text-[#D4AF37]"
                >
                  <Plane className="w-5 h-5 text-[#D4AF37]" /> Tourisme
                  Religieux
                </Link>

                <Link
                  href="/services/colonie-de-vacances"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 hover:text-[#D4AF37]"
                >
                  <Users className="w-5 h-5 text-[#D4AF37]" /> Colonie de
                  Vacances
                </Link>

                <Link
                  href="/services/voyages-organises"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 hover:text-[#D4AF37]"
                >
                  <Plane className="w-5 h-5 text-[#D4AF37]" /> Voyages Organisés
                </Link>

                <Link
                  href="/services/assurance"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 hover:text-[#D4AF37]"
                >
                  <Shield className="w-5 h-5 text-[#D4AF37]" /> Assurance
                </Link>

                <Link
                  href="/services/protocole"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 hover:text-[#D4AF37]"
                >
                  <Handshake className="w-5 h-5 text-[#D4AF37]" /> Protocole
                </Link>

                <Link
                  href="/services/evenementiel"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 hover:text-[#D4AF37]"
                >
                  <PartyPopper className="w-5 h-5 text-[#D4AF37]" />{" "}
                  Événementiel
                </Link>

                <Link
                  href="/services/team-building"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 hover:text-[#D4AF37]"
                >
                  <Building className="w-5 h-5 text-[#D4AF37]" /> Team Building
                </Link>
              </div>
            </div>

            {/* Réserver button */}
            <button
              onClick={() => navigateTo("contact")}
              className="bg-[#D4AF37] text-[#0A2740] font-semibold py-3 rounded-lg mt-4 hover:bg-[#caa032] transition"
            >
              Réserver
            </button>
          </div>
        </div>
      )}
    </>
  );
}
