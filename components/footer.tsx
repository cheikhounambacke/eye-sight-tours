import { Heart, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0A2740] text-white py-14 px-4 sm:px-6 lg:px-8 border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand + Contact */}
          <div>
            {/* Brand */}
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Eyesight Tours"
                width={100}
                height={100}
                className="h-auto"
              />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour un voyage Umrah authentique,
              fluide et inoubliable.
            </p>

            {/* Contact */}
            <div className="space-y-4 text-sm">
              <a
                href="tel:+221776053909"
                className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                +221 77 605 39 09
              </a>

              <a
                href="mailto:eyesighttours2r@gmail.com"
                className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                eyesighttours2r@gmail.com
              </a>

              <div className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                5, Rue Caillé x Dagorne – Place Kermel, Dakar
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#D4AF37] text-lg mb-4">
              Liens Rapides
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#home" className="hover:text-[#D4AF37]">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#D4AF37]">
                  Nos Formules
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37]">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4AF37]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[#D4AF37] text-lg mb-4">
              Ressources
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#about" className="hover:text-[#D4AF37]">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-[#D4AF37] text-lg mb-4">
              Nous Suivre
            </h4>

            <p className="text-sm text-gray-300 mb-4">
              Suivez-nous pour des mises à jour, vidéos et moments en direct de
              nos voyages Umrah.
            </p>

            <div className="flex items-center gap-5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1CiNE4V7NW/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors"
              >
                <Facebook className="w-7 h-7 text-[#D4AF37]" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors"
              >
                <Instagram className="w-7 h-7 text-[#D4AF37]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
            <p>© 2025 Eyesight Tours. Tous droits réservés.</p>

            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              <span>pour votre voyage spirituel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
