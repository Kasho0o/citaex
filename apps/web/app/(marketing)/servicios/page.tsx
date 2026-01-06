import type { Metadata } from "next";
import { Calendar, Fingerprint, RefreshCw, Shield, Home, Flag, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios de Extranjería - CitaEx",
  description: "Todos nuestros servicios de gestión de citas de extranjería: NIE, TIE, renovación, asilo, arraigo, nacionalidad y más. Monitoreo automático 24/7.",
  keywords: ["servicios extranjería", "cita nie", "cita tie", "renovación", "asilo", "arraigo", "nacionalidad"],
};

const services = [
  {
    title: "Cita Previa Extranjería",
    icon: Calendar,
    description: "Sistema automático de monitoreo 24/7 para conseguir cita previa en oficinas de extranjería. Alertas instantáneas por WhatsApp.",
    href: "/servicios/cita-previa-extranjeria",
    features: ["Monitoreo 24/7", "Alertas WhatsApp", "Todas las provincias"],
    color: "bg-blue-50 border-blue-200 hover:border-blue-400",
    iconColor: "text-blue-600",
  },
  {
    title: "Toma de Huellas",
    icon: Fingerprint,
    description: "Consigue tu cita para la toma de huellas dactilares necesaria para la expedición de tu TIE en cualquier provincia.",
    href: "/servicios/toma-de-huellas",
    features: ["Rápido y fácil", "Sin esperas", "Gestión completa"],
    color: "bg-purple-50 border-purple-200 hover:border-purple-400",
    iconColor: "text-purple-600",
  },
  {
    title: "Renovación NIE/TIE",
    icon: RefreshCw,
    description: "Asistencia completa para renovar tu Número de Identidad de Extranjero o Tarjeta de Identidad de Extranjero.",
    href: "/servicios/renovacion-nie-tie",
    features: ["Asesoría incluida", "Documentación", "Seguimiento"],
    color: "bg-green-50 border-green-200 hover:border-green-400",
    iconColor: "text-green-600",
  },
  {
    title: "Asilo y Protección Internacional",
    icon: Shield,
    description: "Asesoramiento y gestión de citas para solicitudes de asilo y protección internacional en España.",
    href: "/servicios/asilo",
    features: ["Asesoría legal", "Soporte continuo", "Confidencialidad"],
    color: "bg-red-50 border-red-200 hover:border-red-400",
    iconColor: "text-red-600",
  },
  {
    title: "Arraigo Social",
    icon: Home,
    description: "Gestión de solicitudes de arraigo social, laboral y familiar. Te ayudamos con toda la documentación necesaria.",
    href: "/servicios/arraigo",
    features: ["3 tipos de arraigo", "Documentación", "Alta tasa de éxito"],
    color: "bg-orange-50 border-orange-200 hover:border-orange-400",
    iconColor: "text-orange-600",
  },
  {
    title: "Nacionalidad Española",
    icon: Flag,
    description: "Asistencia para obtener la nacionalidad española por residencia, matrimonio u otras vías legales.",
    href: "/servicios/nacionalidad",
    features: ["Varias vías", "Preparación examen", "Seguimiento completo"],
    color: "bg-yellow-50 border-yellow-200 hover:border-yellow-400",
    iconColor: "text-yellow-600",
  },
  {
    title: "Estudiantes Extranjeros",
    icon: GraduationCap,
    description: "Servicios especializados para estudiantes internacionales: visados de estudiante, renovaciones y autorizaciones de trabajo.",
    href: "/servicios/estudiantes",
    features: ["Visado estudiante", "Renovaciones", "Autorización trabajo"],
    color: "bg-indigo-50 border-indigo-200 hover:border-indigo-400",
    iconColor: "text-indigo-600",
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#004A8F] to-[#0066CC] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Nuestros Servicios de Extranjería
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Soluciones completas para todos tus trámites de extranjería en España. Monitoreo automático 24/7 y soporte personalizado.
            </p>
            <a
              href="https://wa.me/923221430630"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#20BA5A] hover:shadow-xl"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Todos los Servicios que Necesitas
              </h2>
              <p className="text-lg text-gray-600">
                Desde citas previas hasta tramitación completa de documentos
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <a
                    key={index}
                    href={service.href}
                    className={`group rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl ${service.color}`}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className={`rounded-lg bg-white p-3 shadow-sm ${service.iconColor}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#C60B1E]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mb-4 text-gray-700">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className={`h-1.5 w-1.5 rounded-full ${service.iconColor.replace('text-', 'bg-')}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#C60B1E]">
                      Más información
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-[#004A8F] to-[#0066CC] p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="mb-4 text-3xl font-bold">
              ¿No estás seguro qué servicio necesitas?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Contáctanos por WhatsApp y te ayudaremos a elegir el servicio adecuado para tu situación
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/923221430630"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#20BA5A] hover:shadow-xl"
              >
                Contactar WhatsApp
              </a>
              <a
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#004A8F]"
              >
                Ver Guías
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
