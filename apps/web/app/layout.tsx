import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { StructuredData } from "../components/structured-data";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CitaEx - Cita Previa Extranjería España | Consigue tu Cita Fácilmente",
    template: "%s | CitaEx - Cita Extranjería",
  },
  description:
    "Plataforma inteligente para conseguir citas de extranjería en España. Monitoreo automático 24/7, alertas instantáneas por WhatsApp y soporte con IA. NIE, TIE, asilo, arraigo, nacionalidad y más. Miles de usuarios ya consiguieron su cita.",
  keywords: [
    "cita extranjería",
    "cita previa extranjería",
    "NIE España",
    "TIE renovación",
    "cita NIE",
    "cita TIE",
    "renovar permiso residencia",
    "cita policía extranjería",
    "asilo España",
    "reagrupación familiar",
    "arraigo social",
    "nacionalidad española",
    "estudiantes extranjeros",
    "toma de huellas",
    "cita extranjería Madrid",
    "cita extranjería Barcelona",
    "cita extranjería Valencia",
    "solicitar NIE",
    "renovar TIE",
    "protección internacional",
  ],
  authors: [{ name: "CitaEx" }],
  creator: "CitaEx",
  publisher: "CitaEx",
  metadataBase: new URL("https://micitaextranjeria.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://micitaextranjeria.com",
    siteName: "CitaEx - Cita Extranjería",
    title: "CitaEx - Cita Previa Extranjería España | Consigue tu Cita Fácilmente",
    description:
      "Monitoreo automático 24/7 para citas de extranjería en España. Alertas instantáneas por WhatsApp y soporte con IA. NIE, TIE, asilo, arraigo, nacionalidad y más.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CitaEx - Cita Previa Extranjería España",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CitaEx - Cita Previa Extranjería España",
    description:
      "Monitoreo automático 24/7 para citas de extranjería. Alertas instantáneas por WhatsApp. NIE, TIE, asilo, arraigo y más.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token_here",
  },
  category: "Immigration Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <StructuredData />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-30EMBXLTDN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-30EMBXLTDN');
          `}
        </Script>
      </head>
      <body className={geist.className}>{children}</body>
    </html>
  );
}
