"use client";

import { useEffect } from "react";

import { Hero } from "@/components/hero";
import { Packages } from "@/components/packages";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { About } from "@/components/about";
import { Header } from "@/components/header";

export default function Home() {
  // ⭐ Auto-scroll when redirected with ?scroll=
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("scroll");

    if (section) {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <main className="w-full">
      <Header />
      <Hero />
      <About />
      <Packages />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
