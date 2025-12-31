import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio - Consigue tu Cita de Extranjería Fácilmente",
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="spanish-gradient relative overflow-hidden py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#004A8F]/10 px-5 py-2 text-sm font-semibold text-[#004A8F]">
              <span className="text-lg">🇪🇸</span>
              <span>Más de 15,000 citas conseguidas</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#2C3E50] sm:text-7xl">
              Tu Cita de Extranjería,{" "}
              <span className="text-[#C60B1E]">Sin Complicaciones</span>
            </h1>

            {/* Subheading */}
            <p className="mb-10 text-xl leading-8 text-[#2C3E50]/80 sm:text-2xl">
              Servicio profesional de gestión de citas para todos los trámites
              de extranjería en España
            </p>

            {/* Payment Trust Badge - NEW */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-2xl border-2 border-green-600 bg-green-50 px-6 py-4 shadow-lg">
              <svg
                className="h-8 w-8 flex-shrink-0 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="text-left">
                <p className="text-lg font-bold text-green-900 sm:text-xl">
                  Sin pago por adelantado
                </p>
                <p className="text-sm font-medium text-green-800 sm:text-base">
                  Pague después de verificar su cita
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center justify-center gap-4">
              <a
                href="/solicitar-cita"
                className="animate-pulse-slow group relative w-full overflow-hidden rounded-xl bg-[#C60B1E] px-12 py-5 text-xl font-bold text-white shadow-2xl transition-all hover:bg-[#A00919] hover:shadow-3xl sm:w-auto"
              >
                <span className="relative z-10">SOLICITAR CITA AHORA</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              </a>

              <div className="flex items-center gap-2 text-sm text-[#2C3E50]/70">
                <svg
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-medium">
                  Respuesta en menos de 2 horas
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-5">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#C60B1E] blur-3xl"></div>
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-[#FFC400] blur-3xl"></div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              ¿Cansado de buscar citas manualmente?
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Sabemos lo frustrante que es entrar cada hora al portal de
              extranjería para ver si hay citas disponibles. Nosotros lo hacemos
              por ti.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-red-50 p-8">
              <div className="mb-4 text-4xl">😰</div>
              <h3 className="mb-3 text-xl font-bold text-red-900">
                El Problema
              </h3>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-start gap-2">
                  <span>❌</span>
                  <span>Las citas desaparecen en minutos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>❌</span>
                  <span>Revisar la web cada hora es agotador</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>❌</span>
                  <span>Los trámites se retrasan meses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>❌</span>
                  <span>El estrés y la incertidumbre</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-green-50 p-8">
              <div className="mb-4 text-4xl">🎉</div>
              <h3 className="mb-3 text-xl font-bold text-green-900">
                Nuestra Solución
              </h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <span>✅</span>
                  <span>Monitoreo automático 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✅</span>
                  <span>Alertas instantáneas por WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✅</span>
                  <span>Consigues tu cita en días, no meses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✅</span>
                  <span>Tranquilidad y tiempo para ti</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              ¿Cómo Funciona?
            </h2>
            <p className="text-lg text-gray-600">
              En 3 simples pasos consigues tu cita
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl font-bold text-blue-600">
                1
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Solicita tu Cita
              </h3>
              <p className="text-gray-600">
                Completa el formulario con tu provincia, oficina y tipo de trámite.
                Solo toma 2 minutos.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl font-bold text-green-600">
                2
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Te Contactamos
              </h3>
              <p className="text-gray-600">
                Nuestro equipo te contacta por WhatsApp para confirmar los
                detalles y comenzar la búsqueda.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl font-bold text-orange-600">
                3
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Consigues tu Cita
              </h3>
              <p className="text-gray-600">
                Te avisamos al instante cuando encontremos una cita disponible y te
                ayudamos a reservarla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals / Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Miles de Personas Ya Confían en Nosotros
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-blue-600">
                  15,000+
                </div>
                <div className="text-lg font-medium text-gray-900">
                  Citas Conseguidas
                </div>
                <div className="text-sm text-gray-600">
                  Usuarios satisfechos que lograron su cita
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-green-600">
                  95%
                </div>
                <div className="text-lg font-medium text-gray-900">
                  Tasa de Éxito
                </div>
                <div className="text-sm text-gray-600">
                  Conseguimos cita en menos de 7 días
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-orange-600">
                  24/7
                </div>
                <div className="text-lg font-medium text-gray-900">
                  Monitoreo Continuo
                </div>
                <div className="text-sm text-gray-600">
                  Nunca dormimos, siempre vigilando
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="border-y bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Servicio Personalizado
            </h2>
            <p className="text-lg text-gray-600">
              Te ayudamos a conseguir tu cita sin complicaciones
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-xl">
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  ¿Cómo funciona nuestro servicio?
                </h3>
                <p className="text-gray-600">
                  Proceso simple y directo para conseguir tu cita
                </p>
              </div>

              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <div>
                    <strong className="text-gray-900">Solicitud gratuita:</strong>
                    <span className="text-gray-600">
                      {" "}
                      Completa el formulario sin ningún costo
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <div>
                    <strong className="text-gray-900">
                      Contacto inmediato:
                    </strong>
                    <span className="text-gray-600">
                      {" "}
                      Te contactamos por WhatsApp en menos de 1 hora
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <div>
                    <strong className="text-gray-900">Búsqueda activa:</strong>
                    <span className="text-gray-600">
                      {" "}
                      Monitoreamos disponibilidad 24/7
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <div>
                    <strong className="text-gray-900">
                      Notificación instantánea:
                    </strong>
                    <span className="text-gray-600">
                      {" "}
                      Te avisamos cuando encontremos tu cita
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  <div>
                    <strong className="text-gray-900">
                      Asistencia completa:
                    </strong>
                    <span className="text-gray-600">
                      {" "}
                      Te ayudamos con todo el proceso de reserva
                    </span>
                  </div>
                </li>
              </ul>

              <a
                href="/solicitar-cita"
                className="block rounded-lg bg-blue-600 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Solicitar Cita Ahora →
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ¿Preguntas sobre precios?{" "}
              <a
                href="https://wa.me/923221430630"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline"
              >
                Contáctanos por WhatsApp
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#C60B1E] to-[#A00919] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            ¿Listo para Conseguir tu Cita?
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Únete a miles de personas que ya consiguieron su cita
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <a
              href="/solicitar-cita"
              className="w-full rounded-xl bg-white px-10 py-4 text-lg font-bold text-[#C60B1E] shadow-lg transition-all hover:bg-[#FFC400] hover:text-[#2C3E50] hover:shadow-xl sm:w-auto"
            >
              SOLICITAR CITA AHORA →
            </a>
          </div>
          <p className="mt-6 text-sm opacity-80">
            ✓ Respuesta en menos de 2 horas · ✓ Atención personalizada · ✓ Profesional y seguro
          </p>
        </div>
      </section>
    </div>
  );
}
