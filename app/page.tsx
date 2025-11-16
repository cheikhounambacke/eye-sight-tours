import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Packages } from "@/components/packages";
import { Gallery } from "@/components/gallery";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { About } from "@/components/about";
export default function Home() {
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
