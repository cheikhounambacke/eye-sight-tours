import { Header } from "@/components/header";
import { ServiceBreadcrumb } from "@/components/breadcrumb";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Header solid />

      <section className="max-w-5xl mx-auto text-center px-4 py-24">
        <h1 className="text-4xl font-bold text-[#0A2740] mb-4">
          Voyages Organisés
        </h1>
        <p className="text-gray-600 text-lg">Page en construction…</p>
      </section>
    </main>
  );
}
