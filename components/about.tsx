"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — IMAGE */}
        <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-xl border-2 border-[#D4AF37]">
          <Image
            src="/about.jpeg"
            alt="Eyesight Tours – Umrah"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* RIGHT — TEXT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2740] mb-6">
            Qui sommes-nous ?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Eyesight Tours est une agence spécialisée dans l’organisation de
            voyages Umrah, guidée par des valeurs de spiritualité, confiance et
            excellence. Nous accompagnons chaque pèlerin pour vivre une
            expérience inoubliable à La Mecque et Médine.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Grâce à notre expertise, nos hôtels soigneusement sélectionnés,
            notre encadrement professionnel et notre guide religieux
            expérimenté, votre voyage devient fluide, sécurisé et riche en
            spiritualité.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Notre mission est de simplifier chaque étape de votre Umrah afin que
            vous puissiez vous concentrer exclusivement sur votre adoration et
            votre connexion à Allah.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="p-4 bg-[#0A2740]/5 rounded-lg border border-[#D4AF37] shadow-sm">
              <h4 className="font-bold text-[#0A2740]">+ 5 ans d’expérience</h4>
              <p className="text-gray-600 text-sm">Dans l’organisation Umrah</p>
            </div>

            <div className="p-4 bg-[#0A2740]/5 rounded-lg border border-[#D4AF37] shadow-sm">
              <h4 className="font-bold text-[#0A2740]">1000+ pèlerins</h4>
              <p className="text-gray-600 text-sm">Déjà accompagnés</p>
            </div>

            <div className="p-4 bg-[#0A2740]/5 rounded-lg border border-[#D4AF37] shadow-sm">
              <h4 className="font-bold text-[#0A2740]">Guides experts</h4>
              <p className="text-gray-600 text-sm">Encadrement religieux</p>
            </div>

            <div className="p-4 bg-[#0A2740]/5 rounded-lg border border-[#D4AF37] shadow-sm">
              <h4 className="font-bold text-[#0A2740]">Service complet</h4>
              <p className="text-gray-600 text-sm">
                Visa, hôtels, transport...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
