import { Header } from "@/components/header";
import { ServiceBreadcrumb } from "@/components/breadcrumb";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-full bg-white">
      {/* Header stays solid on all service pages */}
      <Header solid />

      {/* Breadcrumb for all service pages */}
      <div className="pt-24">
        <ServiceBreadcrumb />
      </div>

      <section className="pb-12">{children}</section>
    </main>
  );
}
