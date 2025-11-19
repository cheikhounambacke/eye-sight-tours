"use client";

import type React from "react";
import { useState } from "react";
import toast from "react-hot-toast"; // <-- NEW
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelType: "",
    package: "",
    travelers: "",
    date: "",
    room: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const sendPromise = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(async (res) => {
      const result = await res.json();
      if (!result.success) throw new Error("Erreur");
    });

    toast.promise(sendPromise, {
      loading: "Envoi de votre demande...",
      success: "Votre message a été envoyé avec succès !",
      error: "Une erreur est survenue. Veuillez réessayer.",
    });

    try {
      await sendPromise;

      // Reset form after success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        travelType: "",
        package: "",
        travelers: "",
        date: "",
        room: "",
        message: "",
      });
    } catch (e) {
      console.error("Erreur d'envoi:", e);
    }

    setLoading(false);
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
            Prêt pour votre voyage spirituel (Umrah ou Hajj) ? Contactez-nous
            dès aujourd’hui et notre équipe vous assistera !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE — Contact Info + Map */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-[#0A2740]">
              Informations de Contact
            </h3>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0A2740]">Téléphone</h4>
                <p className="text-gray-700">
                  +221 78 103 06 06 <br /> +221 77 605 39 09
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0A2740]">Email</h4>
                <p className="text-gray-700">eyesighttours2r@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0A2740]">Adresse</h4>
                <p className="text-gray-700">
                  5, Rue Caillé x Dagorne <br /> Place Kermel, Dakar
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.885699480836!2d-17.442865424891327!3d14.666269375267662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfcf9c2e6df8b14f%3A0x72f34b91bfdd07c7!2s5%20Rue%20Caill%C3%A9%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2ssn!4v1731612780000!5m2!1sfr!2ssn"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* RIGHT SIDE — Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl border border-[#D4AF37]/30 shadow-md"
          >
            {/* BASIC INFO */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-[#0A2740] mb-2 block">
                  Prénom
                </label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#0A2740] mb-2 block">
                  Nom
                </label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-[#0A2740] mb-2 block">
                Email
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-[#0A2740] mb-2 block">
                Téléphone
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* TRAVEL TYPE */}
            <div>
              <label className="text-sm font-medium text-[#0A2740] mb-2 block">
                Type de voyage
              </label>
              <select
                name="travelType"
                value={formData.travelType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-[#D4AF37]/40"
                required
              >
                <option value="">Sélectionnez</option>
                <option value="Umrah">Umrah</option>
                <option value="Hajj">Hajj</option>
              </select>
            </div>

            {/* PACKAGE */}
            <div>
              <label className="text-sm font-medium text-[#0A2740] mb-2 block">
                Choix du Forfait
              </label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-[#D4AF37]/40"
                required
              >
                <option value="">Sélectionnez un forfait</option>

                {/* UMRAH PACKAGES */}
                <option value="Umrah - Standard – 1.500.000 FCFA">
                  Umrah – Pack Standard – 1.500.000 FCFA
                </option>
                <option value="Umrah - Standard Plus – 1.650.000 FCFA">
                  Umrah – Pack Standard Plus – 1.650.000 FCFA
                </option>
                <option value="Umrah - Confort – 1.900.000 FCFA">
                  Umrah – Pack Confort – 1.900.000 FCFA
                </option>
                <option value="Umrah - VIP – 2.400.000 FCFA">
                  Umrah – Pack VIP – 2.400.000 FCFA
                </option>

                {/* HAJJ PACKAGES */}
                <option value="Hajj 2026 – Départ Sénégal – 5.300.000 FCFA">
                  Hajj 2026 – Départ Sénégal – 5.300.000 FCFA
                </option>
                <option value="Hajj 2026 – Départ Paris – 7.200 €">
                  Hajj 2026 – Départ Paris – 7.200 €
                </option>
              </select>
            </div>

            {/* Travelers */}
            <div>
              <label className="text-sm font-medium text-[#0A2740] mb-2 block">
                Nombre de voyageurs
              </label>
              <Input
                name="travelers"
                type="number"
                value={formData.travelers}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date */}
            <div>
              <label className="text-sm font-medium text-[#0A2740] mb-2 block">
                Date de départ souhaitée
              </label>
              <Input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            {/* Room */}
            <div>
              <label className="text-sm font-medium text-[#0A2740] mb-2 block">
                Type de chambre
              </label>
              <select
                name="room"
                value={formData.room}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-[#D4AF37]/40"
                required
              >
                <option value="">Sélectionnez</option>
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
              <label className="text-sm font-medium text-[#0A2740] mb-2 block">
                Message (optionnel)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-md border border-[#D4AF37]/40"
                placeholder="Informations supplémentaires"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D4AF37] hover:bg-[#b8942f] text-[#0A2740] font-semibold py-3 text-lg shadow-md"
            >
              {loading
                ? "Envoi en cours..."
                : "Envoyer la Demande de Réservation"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
