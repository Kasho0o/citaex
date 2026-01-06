import type { Metadata } from "next";
import Link from "next/link";
import TrustBadges from "@/components/TrustBadges";
import StepExplainer from "@/components/StepExplainer";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import LeadCapture from "@/components/LeadCapture";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "CitaEx - Consigue tu Cita de Extranjería Sin Pago Adelantado",
  description: "Servicio profesional para conseguir citas de extranjería en toda España. Monitorización 24/7, sin pago por adelantado. Solo pagas cuando confirmas tu cita.",
};

export default function HomePage() {
  const whyCards = [
    {
      icon: "👨‍💼",
      title: "Soporte humano, no solo una web",
      description: "No eres un número en un formulario. Te atendemos por WhatsApp, resolvemos dudas y te explicamos el proceso paso a paso, además de buscar la cita por ti."
    },
    {
      icon: "🕒",
      title: "Nosotros vigilamos, tú sigues con tu vida",
      description: "No tienes que configurar monitores ni revisar alertas técnicas. Nuestro equipo se encarga del seguimiento 24/7 y solo te avisa cuando hay una cita real que puedes usar."
    },
    {
      icon: "💶",
      title: "Enfoque en citas, precio más accesible",
      description: "No te vendemos paquetes de gestoría completos si solo necesitas una cita. Nos centramos en conseguir tu turno rápido y a un precio cerrado y transparente."
    },
    {
      icon: "✅",
      title: "Sin pago adelantado, sin riesgo",
      description: "Empezamos a trabajar sin que adelantes dinero. Solo cobramos cuando te confirmamos una cita válida que tú aceptas. Si no la conseguimos, no pagas nuestros honorarios."
    }
  ];

  const services = [
    {
      title: "NIE (Número de Identidad de Extranjero)",
      description: "Te ayudamos a conseguir cita para obtener tu NIE por primera vez o actualizarlo según tu situación.",
      benefit: "Evitas retrasos y errores al iniciar tu vida en España.",
      link: "/servicios/renovacion-nie-tie"
    },
    {
      title: "TIE (Tarjeta de Identidad de Extranjero)",
      description: "Buscamos cita para solicitar o renovar tu TIE en la comisaría adecuada de tu provincia.",
      benefit: "Proteges tu situación legal evitando que caduque tu tarjeta.",
      link: "/servicios/renovacion-nie-tie"
    },
    {
      title: "Toma de Huellas",
      description: "Localizamos cita para la toma de huellas vinculada a tu TIE o a otros trámites aprobados.",
      benefit: "Cierras el proceso sin perder plazos por falta de cita.",
      link: "/servicios/toma-de-huellas"
    },
    {
      title: "Asilo y Protección Internacional",
      description: "Te apoyamos en la búsqueda de citas relacionadas con solicitudes o gestiones de asilo.",
      benefit: "Ganas tiempo y claridad en un proceso muy sensible y estresante.",
      link: "/servicios/asilo"
    },
    {
      title: "Arraigo (Social, Laboral, Familiar)",
      description: "Encontramos cita para tus trámites de arraigo, según tu modalidad y tu provincia.",
      benefit: "Aumentas tus opciones de regularizar tu situación sin perder oportunidades.",
      link: "/servicios/arraigo"
    },
    {
      title: "Nacionalidad Española",
      description: "Te ayudamos con citas para huellas y otros pasos presenciales vinculados a la nacionalidad.",
      benefit: "Avanzas en el proceso de nacionalidad sin que la cita sea un bloqueo.",
      link: "/servicios/nacionalidad"
    },
    {
      title: "Estudiantes Extranjeros",
      description: "Buscamos citas para autorizaciones, renovaciones y cambios de estancia por estudios.",
      benefit: "Te concentras en tus estudios mientras nosotros buscamos el turno que necesitas.",
      link: "/servicios/estudiantes"
    }
  ];

  const faqs = [
    {
      question: "¿Es legal este servicio?",
      answer: "CitaEx ofrece un servicio privado de ayuda para buscar y organizar citas de extranjería, igual que otros servicios de apoyo administrativo. No somos abogados ni una gestoría colegiada, pero actuamos de forma transparente y respetando las normas de uso de las páginas oficiales. Tú siempre decides si aceptas o no la cita que encontramos."
    },
    {
      question: "¿Cómo funciona exactamente?",
      answer: "Nos contactas, nos cuentas tu trámite, provincia y disponibilidad, y nuestro equipo empieza a buscar citas que encajen con tu caso. Cuando aparece una cita válida, te enviamos todos los datos para que revises la información. Si aceptas, te quedas con la cita y realizas el pago; si no encontramos nada útil, no pagas nuestro servicio."
    },
    {
      question: "¿Cuánto cuesta?",
      answer: "El precio depende del tipo de trámite y de la dificultad de tu provincia. Siempre te informamos del importe antes de empezar y no cobramos nada por adelantado. Solo pagas cuando te confirmamos una cita válida que tú aceptas. No hay suscripciones ni cargos ocultos."
    },
    {
      question: "¿Qué pasa si no consiguen mi cita?",
      answer: "Si después de buscar durante el periodo acordado no encontramos una cita que de verdad puedas aprovechar, no cobramos nuestros honorarios. Podremos proponerte ampliar la búsqueda o ajustar tus preferencias, pero si finalmente no hay cita útil, no tendrás que pagar por el intento."
    },
    {
      question: "¿Están afiliados al gobierno?",
      answer: "No. CitaEx es un servicio completamente independiente y no está afiliado ni relacionado con el Gobierno de España, el Ministerio del Interior, la Policía Nacional ni ninguna otra administración pública. Las citas se obtienen y se celebran siempre en las plataformas y oficinas oficiales del gobierno."
    },
    {
      question: "¿Cómo encuentran las citas?",
      answer: "Revisamos de forma frecuente las páginas oficiales y usamos nuestra experiencia para detectar cuándo suelen abrir nuevos cupos de citas en cada provincia. No utilizamos técnicas de bloqueo masivo ni revendemos citas retenidas; trabajamos con las mismas oportunidades que ve cualquier ciudadano, pero con más constancia y organización."
    },
    {
      question: "¿En qué provincias trabajan?",
      answer: "Trabajamos en las 52 provincias de España. Te ayudamos tanto en grandes ciudades como Madrid, Barcelona o Valencia, como en provincias con menos citas disponibles. Cuando nos contactas, te explicamos la situación real de tu zona y si podemos aceptar tu caso."
    },
    {
      question: "¿Cuánto tiempo tardan en conseguir una cita?",
      answer: "El tiempo varía mucho según el trámite y la provincia. En algunos lugares hay citas en pocos días; en otros, la espera puede ser más larga. Nunca prometemos plazos irreales. Desde el principio te hablamos con sinceridad de la dificultad y te mantenemos informado durante la búsqueda."
    }
  ];

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C60B1E] via-[#A00919] to-[#C60B1E] py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <TrustBadges />

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Consigue tu cita de extranjería con un servicio serio, humano y sin pago por adelantado
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-white/90 sm:text-xl">
              Buscamos tu cita en todas las provincias, monitorizamos 24/7 y solo pagas cuando te confirmamos una fecha y hora que de verdad te sirven.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/923221430630?text=Hola,%20necesito%20una%20cita%20de%20extranjería"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full overflow-hidden rounded-2xl bg-[#25D366] px-12 py-6 text-2xl font-bold text-white shadow-2xl transition-all hover:bg-[#20BD5A] hover:shadow-3xl sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Empieza ahora por WhatsApp
                </span>
              </a>

              <a
                href="#como-funciona"
                className="w-full rounded-xl border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
              >
                Ver cómo funciona
              </a>
            </div>

            <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-2xl mx-auto">
              CitaEx es un servicio independiente. No somos el Gobierno de España; las citas siempre se realizan en las plataformas oficiales.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-10">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#FFC400] blur-3xl"></div>
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>
      </section>

      {/* Step Explainer Section */}
      <div id="como-funciona">
        <StepExplainer />
      </div>

      {/* Why CitaEx Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              ¿Por qué elegir CitaEx?
            </h2>
            <p className="text-lg text-gray-600">
              Un servicio transparente que pone tus necesidades primero
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card, index) => (
              <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 text-4xl">{card.icon}</div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Trámites de extranjería con los que te ayudamos
            </h2>
            <p className="text-lg text-gray-600">
              Cubrimos todos los procedimientos principales de extranjería en España
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-[#C60B1E] transition-all"
              >
                <h3 className="mb-3 text-lg font-bold text-gray-900 group-hover:text-[#C60B1E]">
                  {service.title}
                </h3>
                <p className="mb-3 text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-sm font-medium text-[#004A8F]">
                  ✓ {service.benefit}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-xl bg-[#004A8F] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#003870] hover:shadow-xl"
            >
              Ver todos los servicios
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* Lead Capture */}
      <LeadCapture />

      {/* Legal Disclaimer */}
      <LegalDisclaimer />

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#004A8F] to-[#0066CC] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Deja de pelearte con el "no hay citas" y deja que CitaEx busque por ti
          </h2>
          <p className="mb-8 text-xl opacity-90">
            Trabajamos en todas las provincias, monitorizamos 24/7 y solo pagas cuando te confirmamos una cita válida para tu trámite.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <a
              href="https://wa.me/923221430630?text=Hola,%20necesito%20una%20cita%20de%20extranjería"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl bg-white px-10 py-4 text-lg font-bold text-[#004A8F] shadow-lg transition-all hover:bg-[#FFC400] hover:text-[#2C3E50] hover:shadow-xl sm:w-auto"
            >
              Empieza ahora sin pago adelantado
            </a>
          </div>
          <p className="mt-6 text-sm opacity-80">
            ✓ Más de 15.000 citas conseguidas · ✓ Sin pago por adelantado · ✓ Las 52 provincias
          </p>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
}
