"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    package: "",
    travelers: "",
    date: "",
    room: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      package: "",
      travelers: "",
      date: "",
      room: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A2740]/5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2740] mb-4">
            Contactez Eyesight Tours
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prêt pour votre voyage spirituel ? Contactez-nous dès aujourd’hui et
            notre équipe vous guidera !
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE — Contact Info + Map */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-[#0A2740]">
              Informations de Contact
            </h3>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0A2740]">Téléphone</h4>
                <p className="text-gray-700">
                  +221 77 605 39 09
                  <br />
                  +221 33 870 51 73
                  <br />
                  +221 77 633 89 92
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0A2740]">Email</h4>
                <p className="text-gray-700">eyesighttours2r@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0A2740]">Adresse</h4>
                <p className="text-gray-700">
                  5, Rue Caillé x Dagorne
                  <br />
                  Place Kermel, Dakar
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.885699480836!2d-17.442865424891327!3d14.666269375267662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfcf9c2e6df8b14f%3A0x72f34b91bfdd07c7!2s5%20Rue%20Caill%C3%A9%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2ssn!4v1731612780000!5m2!1sfr!2ssn"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE — Booking Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl border border-[#D4AF37]/30 shadow-md"
          >
            {/* BASIC INFO */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#0A2740] mb-2">
                  Prénom
                </label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  className="border border-[#D4AF37]/40"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0A2740] mb-2">
                  Nom
                </label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="border border-[#D4AF37]/40"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#0A2740] mb-2">
                Email
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="exemple@gmail.com"
                className="border border-[#D4AF37]/40"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[#0A2740] mb-2">
                Numéro de téléphone
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+221 XX XXX XX XX"
                className="border border-[#D4AF37]/40"
                required
              />
            </div>

            {/* PACKAGE */}
            <div>
              <label className="block text-sm font-medium text-[#0A2740] mb-2">
                Choix du Forfait
              </label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-[#D4AF37]/40 bg-white text-[#0A2740] focus:ring-2 focus:ring-[#D4AF37]"
                required
              >
                <option value="">Sélectionnez un forfait</option>
                <option value="Standard – 1.500.000 FCFA">
                  Standard – 1.500.000 FCFA
                </option>
                <option value="Confort – 1.900.000 FCFA">
                  Confort – 1.900.000 FCFA
                </option>
                <option value="VIP – 2.400.000 FCFA">
                  VIP – 2.400.000 FCFA
                </option>
              </select>
            </div>

            {/* Travelers */}
            <div>
              <label className="block text-sm font-medium text-[#0A2740] mb-2">
                Nombre de voyageurs
              </label>
              <Input
                name="travelers"
                type="number"
                value={formData.travelers}
                onChange={handleChange}
                placeholder="1, 2, 3..."
                className="border border-[#D4AF37]/40"
                required
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-[#0A2740] mb-2">
                Date de départ souhaitée
              </label>
              <Input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="border border-[#D4AF37]/40"
                required
              />
            </div>

            {/* Room */}
            <div>
              <label className="block text-sm font-medium text-[#0A2740] mb-2">
                Type de chambre
              </label>
              <select
                name="room"
                value={formData.room}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-[#D4AF37]/40 bg-white text-[#0A2740] focus:ring-2 focus:ring-[#D4AF37]"
                required
              >
                <option value="">Sélectionnez une option</option>
                <option value="Double (2 personnes)">
                  Double (2 personnes)
                </option>
                <option value="Triple (3 personnes)">
                  Triple (3 personnes)
                </option>
                <option value="Quadruple (4 personnes)">
                  Quadruple (4 personnes)
                </option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-[#0A2740] mb-2">
                Message (optionnel)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Informations supplémentaires (facultatif)"
                className="w-full px-4 py-2 rounded-md border border-[#D4AF37]/40 focus:ring-2 focus:ring-[#D4AF37]"
                rows={5}
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-[#D4AF37] hover:bg-[#b8942f] text-[#0A2740] font-semibold py-3 text-lg shadow-md"
            >
              Envoyer la Demande de Réservation
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
