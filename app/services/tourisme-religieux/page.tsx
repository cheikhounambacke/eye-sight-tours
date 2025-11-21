import { Header } from "@/components/header";
import { ServiceBreadcrumb } from "@/components/breadcrumb";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-white">
      {/* FIXED HEADER */}
      <Header solid />

      {/* PAGE CONTENT */}
      <section className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-[#0A2740] mb-4">
          Tourisme Religieux
        </h1>
        <p className="text-gray-600 text-lg">
          Cette page est en construction. Revenez bientôt pour plus
          d'informations.
        </p>
      </section>
    </main>
  );
}
