import type { ReactNode } from "react";
import Image from "next/image";
import Script from "next/script";
import MadridClock from "@/components/MadridClock";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";
import { CookieConsent } from "@/components/cookie-consent";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {/* GA4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WXNDG0RGPS"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WXNDG0RGPS');
        `}
      </Script>

      <div className="flex min-h-screen flex-col">
        {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-[#004A8F]/20 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between gap-4 md:h-24">
            {/* Left: Logo */}
            <a href="/" className="flex items-center gap-2 hover:opacity-80 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="MiCitaExtranjería"
                width={160}
                height={80}
                className="h-[60px] w-auto object-contain md:h-[80px]"
                priority
              />
            </a>

            {/* Center: Navigation Links */}
            <div className="hidden gap-6 lg:flex flex-1 justify-center">
              <a
                href="/"
                className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap"
              >
                Inicio
              </a>
              <a
                href="/servicios"
                className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap"
              >
                Servicios
              </a>
              <a
                href="/provincias"
                className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap"
              >
                Provincias
              </a>
              <a
                href="/precios"
                className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap"
              >
                Precios
              </a>
              <a
                href="/blog"
                className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap"
              >
                Blog
              </a>
              <a
                href="/contacto"
                className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap"
              >
                Contacto
              </a>
            </div>

            {/* Right: Clock and CTA */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="hidden md:block">
                <MadridClock />
              </div>
              <a
                href="/solicitar-cita"
                className="rounded-lg bg-[#C60B1E] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#A00919] hover:shadow-lg whitespace-nowrap"
              >
                SOLICITAR CITA
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton />

      {/* Cookie Consent */}
      <CookieConsent />

      {/* Footer */}
      <footer className="border-t border-[#004A8F]/20 bg-[#004A8F] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl">🇪🇸</span>
                <span className="text-lg font-bold text-[#FFC400]">
                  CitaEx
                </span>
              </div>
              <p className="mb-4 text-sm text-white/80">
                Servicio profesional de gestión de citas para trámites de
                extranjería en España.
              </p>
            </div>

            {/* Trámites Section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#FFC400]">
                Trámites
              </h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="/servicios/cita-previa-extranjeria" className="hover:text-white">
                    Cita Previa
                  </a>
                </li>
                <li>
                  <a href="/servicios/toma-de-huellas" className="hover:text-white">
                    Toma de Huellas
                  </a>
                </li>
                <li>
                  <a href="/servicios/renovacion-nie-tie" className="hover:text-white">
                    Renovación NIE/TIE
                  </a>
                </li>
                <li>
                  <a href="/servicios/asilo" className="hover:text-white">
                    Asilo
                  </a>
                </li>
                <li>
                  <a href="/servicios/arraigo" className="hover:text-white">
                    Arraigo
                  </a>
                </li>
                <li>
                  <a href="/servicios/nacionalidad" className="hover:text-white">
                    Nacionalidad
                  </a>
                </li>
                <li>
                  <a href="/servicios/estudiantes" className="hover:text-white">
                    Estudiantes
                  </a>
                </li>
              </ul>
            </div>

            {/* Provincias Populares Section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#FFC400]">
                Provincias Populares
              </h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="/provincias/madrid" className="hover:text-white">
                    Madrid
                  </a>
                </li>
                <li>
                  <a href="/provincias/barcelona" className="hover:text-white">
                    Barcelona
                  </a>
                </li>
                <li>
                  <a href="/provincias/valencia" className="hover:text-white">
                    Valencia
                  </a>
                </li>
                <li>
                  <a href="/provincias/sevilla" className="hover:text-white">
                    Sevilla
                  </a>
                </li>
                <li>
                  <a href="/provincias/malaga" className="hover:text-white">
                    Málaga
                  </a>
                </li>
                <li>
                  <a href="/provincias/alicante" className="hover:text-white">
                    Alicante
                  </a>
                </li>
                <li>
                  <a href="/provincias/bilbao" className="hover:text-white">
                    Bilbao
                  </a>
                </li>
                <li>
                  <a href="/provincias" className="hover:text-white font-semibold">
                    Ver todas las 52 provincias →
                  </a>
                </li>
              </ul>
            </div>

            {/* Ayuda y legales Section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#FFC400]">
                Ayuda y legales
              </h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="/precios" className="hover:text-white">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="/politica-privacidad" className="hover:text-white">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="/terminos-uso" className="hover:text-white">
                    Términos de Uso
                  </a>
                </li>
                <li>
                  <a href="/politica-cookies" className="hover:text-white">
                    Política de Cookies
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#FFC400]">
                Contacto
              </h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <a href="https://wa.me/923221430630" target="_blank" rel="noopener noreferrer" className="hover:text-white block">
                      WhatsApp: +92 322 143 0630
                    </a>
                    <a href="tel:+34663939048" className="hover:text-white block mt-1">
                      España: +34 663 939 048
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:info@citaex.com"
                    className="hover:text-white"
                  >
                    info@citaex.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <a
                    href="https://t.me/extranjeria_citaex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 border-t border-white/20 pt-8">
            <div className="mx-auto max-w-4xl text-center text-xs text-white/60 leading-relaxed">
              <p className="mb-2">
                <strong className="text-white/80">Aviso Legal:</strong> CitaEx es un servicio privado e independiente. No estamos afiliados con el Gobierno de España, el Ministerio del Interior, la Policía Nacional ni ninguna otra administración pública. Las citas se obtienen siempre en las plataformas oficiales del gobierno. Nuestro servicio es opcional y consiste en ayudar a localizar citas disponibles.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center text-sm text-white/60">
            <p>
              © 2026 CitaEx. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
