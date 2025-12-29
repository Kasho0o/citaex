import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Cita Extranjería - Consigue tu Cita Fácilmente con IA",
    template: "%s | Cita Extranjería",
  },
  description:
    "Plataforma inteligente para conseguir citas de extranjería en España. Monitoreo automático 24/7, alertas instantáneas por WhatsApp y soporte con IA. Miles de usuarios ya consiguieron su cita.",
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
  ],
  authors: [{ name: "Cita Extranjería" }],
  creator: "Cita Extranjería",
  publisher: "Cita Extranjería",
  metadataBase: new URL("https://micitaextranjeria.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://micitaextranjeria.com",
    siteName: "Cita Extranjería",
    title: "Cita Extranjería - Consigue tu Cita Fácilmente",
    description:
      "Monitoreo automático 24/7 para citas de extranjería en España. Alertas instantáneas y soporte con IA.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cita Extranjería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cita Extranjería - Consigue tu Cita Fácilmente",
    description:
      "Monitoreo automático 24/7 para citas de extranjería. Alertas por WhatsApp.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={geist.className}>{children}</body>
    </html>
  );
}
