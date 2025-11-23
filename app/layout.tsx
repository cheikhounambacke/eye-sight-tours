import type React from "react";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
      <body className={poppins.className}>
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/221781030606"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-xl transition z-50 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16.72 15.03c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.12-1.31-.78-.7-1.31-1.57-1.46-1.84-.15-.27-.02-.42.11-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34a3.03 3.03 0 0 0-.98 2.26c0 1.33.98 2.62 1.12 2.8.14.18 1.93 3.02 4.79 4.12.67.27 1.19.43 1.6.55.67.21 1.28.18 1.76.11.54-.08 1.62-.66 1.85-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32Z" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </a>

        {children}

        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#0A2740",
              color: "white",
              borderRadius: "10px",
              padding: "12px 16px",
              border: "1px solid #D4AF37",
              fontSize: "15px",
              fontWeight: 500,
            },
            success: {
              iconTheme: {
                primary: "#D4AF37",
                secondary: "#0A2740",
              },
            },
            error: {
              iconTheme: {
                primary: "#D9534F",
                secondary: "#0A2740",
              },
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
