import type { ReactNode } from "react";
import Image from "next/image";
import { MadridClock } from "@/components/MadridClock";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";
import { CookieConsent } from "@/components/cookie-consent";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-[#004A8F]/20 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Left: Logo */}
            <a href="/" className="flex items-center gap-2 hover:opacity-80 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="MiCitaExtranjería"
                width={180}
                height={50}
                className="object-contain"
                style={{ height: '50px', width: 'auto', maxWidth: '180px' }}
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
                href="/formularios"
                className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap"
              >
                Formularios
              </a>
              <a
                href="/guias"
                className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap"
              >
                Guías
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
            <div className="flex items-center gap-4 flex-shrink-0">
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
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand Section */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl">🇪🇸</span>
                <span className="text-lg font-bold text-[#FFC400]">
                  MiCitaExtranjería
                </span>
              </div>
              <p className="mb-4 text-sm text-white/80">
                Servicio profesional de gestión de citas para trámites de
                extranjería en España.
              </p>
            </div>

            {/* Links Section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#FFC400]">
                Enlaces
              </h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="/" className="hover:text-white">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/servicios" className="hover:text-white">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="/precios" className="hover:text-white">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="/guias" className="hover:text-white">
                    Guías
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#FFC400]">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="/privacidad" className="hover:text-white">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="/terminos" className="hover:text-white">
                    Términos de Uso
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="hover:text-white">
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
                  <a href="https://wa.me/923221430630" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    WhatsApp: +92 322 1430630
                  </a>
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
                    href="mailto:soporte@micitaextranjeria.com"
                    className="hover:text-white"
                  >
                    soporte@micitaextranjeria.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} MiCitaExtranjería. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
