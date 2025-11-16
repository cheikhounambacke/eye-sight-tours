import type React from "react";
import "./globals.css";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.eyesighttours.com"),
  title: {
    default: "Umrah 2025–2026 | Packages, Visa & Hôtels 5★ | EyeSight Tours",
    template: "%s | EyeSight Tours",
  },
  description:
    "Explorez nos formules Umrah 2025–2026 : Standard, Confort et VIP. Hôtels 4★ et 5★, vols A/R, visa, transport privé et guide religieux. Départs Sénégal et USA.",
  keywords: [
    "Umrah Sénégal",
    "Umrah 2025",
    "Umrah New York",
    "Voyage Umrah Sénégal",
    "Agence Umrah Dakar",
    "Umrah USA",
    "Prix Umrah Sénégal",
    "Hôtels Makkah",
    "Hôtels Madinah",
    "Umrah VIP",
  ],
  verification: {
    google: "TQXWYTn_e8kpZPK9ilCtu291wZJdGqzI_0dqmBaKOjI",
  },
  openGraph: {
    title: "Umrah 2025–2026 | Formules Premium | EyeSight Tours",
    description:
      "Réservez votre Umrah avec hôtels 5★, vols, visa, transport privé et guide religieux. Départs du Sénégal, New York et USA.",
    url: "https://www.eyesighttours.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
