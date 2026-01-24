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
                alt="CitaEx"
                width={160}
                height={80}
                className="h-[60px] w-auto object-contain md:h-[80px]"
                priority
              />
            </a>

            {/* Center: Navigation Links */}
            <div className="hidden gap-6 lg:flex flex-1 justify-center">
              <a href="/" className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap">
                Inicio
              </a>
              <a href="/servicios" className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap">
                Servicios
              </a>
              <a href="/provincias" className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap">
                Provincias
              </a>
              <a href="/verificador" className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap">
                Verificador
              </a>
              <a href="/formularios" className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap">
                Formularios
              </a>
              <a href="/precios" className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap">
                Precios
              </a>
              <a href="/blog" className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap">
                Blog
              </a>
              <a href="/contacto" className="text-sm font-medium text-[#2C3E50] transition-colors hover:text-[#C60B1E] whitespace-nowrap">
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand Section */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-lg font-bold text-[#FFC400]">CitaEx</span>
              </div>
              <p className="mb-4 text-sm text-white/80">
                Servicio profesional de gestion de citas para tramites de extranjeria en Espana.
              </p>
            </div>

            {/* Tramites Section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#FFC400]">Tramites</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/servicios/cita-previa-extranjeria" className="hover:text-white">Cita Previa</a></li>
                <li><a href="/servicios/toma-de-huellas" className="hover:text-white">Toma de Huellas</a></li>
                <li><a href="/servicios/renovacion-nie-tie" className="hover:text-white">Renovacion NIE/TIE</a></li>
                <li><a href="/servicios/asilo" className="hover:text-white">Asilo</a></li>
                <li><a href="/servicios/arraigo" className="hover:text-white">Arraigo</a></li>
                <li><a href="/servicios/nacionalidad" className="hover:text-white">Nacionalidad</a></li>
                <li><a href="/servicios/estudiantes" className="hover:text-white">Estudiantes</a></li>
              </ul>
            </div>

            {/* Herramientas Section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#FFC400]">Herramientas</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/verificador" className="hover:text-white">Verificador de Documentos</a></li>
                <li><a href="/formularios" className="hover:text-white">Formularios PDF</a></li>
                <li><a href="/dejar-opinion" className="hover:text-white">Dejar Opinion</a></li>
                <li><a href="/blog" className="hover:text-white">Blog y Guias</a></li>
              </ul>
            </div>

            {/* Provincias Section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#FFC400]">Provincias Populares</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/provincias/madrid" className="hover:text-white">Madrid</a></li>
                <li><a href="/provincias/barcelona" className="hover:text-white">Barcelona</a></li>
                <li><a href="/provincias/valencia" className="hover:text-white">Valencia</a></li>
                <li><a href="/provincias/sevilla" className="hover:text-white">Sevilla</a></li>
                <li><a href="/provincias/malaga" className="hover:text-white">Malaga</a></li>
                <li><a href="/provincias" className="hover:text-white font-semibold">Ver 52 provincias</a></li>
              </ul>
            </div>

            {/* Ayuda Section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-[#FFC400]">Ayuda</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/precios" className="hover:text-white">Precios</a></li>
                <li><a href="/politica-privacidad" className="hover:text-white">Privacidad</a></li>
                <li><a href="/terminos-uso" className="hover:text-white">Terminos</a></li>
                <li><a href="/politica-cookies" className="hover:text-white">Cookies</a></li>
              </ul>
              <h4 className="mt-4 mb-2 text-sm font-semibold text-[#FFC400]">Contacto</h4>
              <ul className="space-y-1 text-sm text-white/80">
                <li><a href="https://wa.me/923221430630" className="hover:text-white">WhatsApp: +92 322 143 0630</a></li>
                <li><a href="tel:+34663939048" className="hover:text-white">Espana: +34 663 939 048</a></li>
                <li><a href="mailto:info@citaex.com" className="hover:text-white">info@citaex.com</a></li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 border-t border-white/20 pt-8">
            <p className="text-center text-xs text-white/60 max-w-4xl mx-auto">
              <strong className="text-white/80">Aviso Legal:</strong> CitaEx es un servicio privado e independiente. No estamos afiliados con el Gobierno de Espana ni ninguna administracion publica. Las citas se obtienen en las plataformas oficiales del gobierno.
            </p>
            <p className="mt-4 text-center text-sm text-white/60">© 2026 CitaEx. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
