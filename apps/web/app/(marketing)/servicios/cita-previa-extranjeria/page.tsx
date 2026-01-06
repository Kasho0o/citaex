import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cita Previa Extranjería 2026 - Todas las Provincias | CitaEx',
  description:
    'Consigue tu cita previa extranjería en 24-48h. Sistema automático 24/7 para todas las provincias de España. Sin pago por adelantado. ¡Contacta ahora!',
  keywords: [
    'cita previa extranjería',
    'cita extranjería online',
    'conseguir cita extranjería',
    'cita previa extranjería madrid',
    'cita previa extranjería barcelona',
    'cita extranjería 2026',
    'oficina de extranjería cita',
    'pedir cita extranjería',
  ],
  openGraph: {
    title: 'Cita Previa Extranjería 2026 - Todas las Provincias | CitaEx',
    description:
      'Consigue tu cita previa extranjería en 24-48h. Sistema automático 24/7 para todas las provincias de España. Sin pago por adelantado.',
    url: 'https://citaex.com/servicios/cita-previa-extranjeria',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://citaex.com/og/cita-previa-extranjeria.jpg',
        width: 1200,
        height: 630,
        alt: 'Cita Previa Extranjería España 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cita Previa Extranjería 2026 | CitaEx',
    description:
      'Consigue tu cita previa extranjería en 24-48h. Sistema automático 24/7.',
  },
  alternates: {
    canonical: 'https://citaex.com/servicios/cita-previa-extranjeria',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// FAQ Schema for Rich Snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Por qué es tan difícil conseguir cita previa en extranjería?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La alta demanda de trámites migratorios, el número limitado de citas disponibles y la liberación de citas en horarios variables hacen que sea extremadamente difícil conseguir cita manualmente. Miles de personas intentan acceder al sistema simultáneamente, agotando las citas en segundos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo tarda CitaEx en conseguir mi cita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Normalmente conseguimos citas en un plazo de 24 a 72 horas, dependiendo de la provincia y el tipo de trámite. Nuestro sistema monitorea la disponibilidad 24/7 y reserva automáticamente cuando se libera una cita.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El servicio de CitaEx es legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, completamente legal. CitaEx utiliza el sistema oficial de cita previa del gobierno español. No hacemos nada ilegal ni usamos accesos no autorizados. Simplemente monitoreamos la disponibilidad de citas y las reservamos en tu nombre cuando están disponibles.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si no consiguen mi cita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En CitaEx trabajamos con política de "Sin pago por adelantado". Solo pagas después de verificar tu cita confirmada. Si por alguna razón no conseguimos tu cita, no tienes que pagar nada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo elegir la fecha y hora de mi cita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puedes indicarnos tus preferencias de fecha y franja horaria. Haremos todo lo posible por conseguir una cita que se ajuste a tus necesidades, aunque la disponibilidad final depende de las citas que libere el sistema.',
      },
    },
  ],
};

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cita Previa Extranjería',
  description:
    'Servicio de obtención de cita previa en oficinas de extranjería de toda España mediante sistema automatizado de monitoreo 24/7.',
  provider: {
    '@type': 'Organization',
    name: 'CitaEx',
    url: 'https://citaex.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'España',
  },
  serviceType: 'Gestión de citas administrativas',
};

export default function CitaPreviaExtranjeriaPage() {
  const provincias = [
    'Madrid',
    'Barcelona',
    'Valencia',
    'Sevilla',
    'Málaga',
    'Alicante',
    'Murcia',
    'Zaragoza',
    'Bilbao',
    'Las Palmas',
    'Tenerife',
    'Palma de Mallorca',
    'Granada',
    'Almería',
    'Tarragona',
    'Girona',
    'Castellón',
    'Cádiz',
    'Córdoba',
    'A Coruña',
  ];

  const tramites = [
    {
      nombre: 'Toma de huellas (TIE)',
      descripcion: 'Expedición de Tarjeta de Identidad de Extranjero',
      tiempo: '24-48h',
    },
    {
      nombre: 'Renovaciones NIE/TIE',
      descripcion: 'Renovación de permisos de residencia',
      tiempo: '24-72h',
    },
    {
      nombre: 'Autorizaciones iniciales',
      descripcion: 'Primera solicitud de residencia',
      tiempo: '48-96h',
    },
    {
      nombre: 'Modificaciones',
      descripcion: 'Cambios en autorizaciones existentes',
      tiempo: '24-72h',
    },
    {
      nombre: 'Recursos y reclamaciones',
      descripcion: 'Presentación de recursos administrativos',
      tiempo: '48-72h',
    },
    {
      nombre: 'Informes de arraigo',
      descripcion: 'Solicitud de informes municipales',
      tiempo: '48-96h',
    },
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav
          className="bg-white border-b border-gray-200"
          aria-label="Breadcrumb"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 py-4 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Inicio
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <span className="text-[#C60B1E] font-medium">
                  Cita Previa Extranjería
                </span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#004A8F] via-[#003366] to-[#002244] text-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  <span className="text-sm font-medium">
                    Sistema activo 24/7
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                  Cita Previa Extranjería 2026
                  <span className="block text-[#FFC400] mt-2">
                    Todas las Provincias
                  </span>
                </h1>

                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  ¿Llevas semanas intentando conseguir cita en extranjería sin
                  éxito? Nuestro sistema automático monitorea la disponibilidad{' '}
                  <strong>24 horas al día, 7 días a la semana</strong> y te
                  consigue tu cita previa extranjería en tiempo récord.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/923221430630?text=Hola,%20necesito%20una%20cita%20previa%20en%20extranjer%C3%ADa"
                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Contactar por WhatsApp
                  </a>
                  <Link
                    href="/solicitar-cita"
                    className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#004A8F] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Solicitar Cita Online
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="mt-8 flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Sin pago por adelantado
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Citas en 24-48h
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    100% legal
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold text-[#FFC400]">
                      +5.000
                    </div>
                    <div className="text-lg text-gray-200 mt-2">
                      Citas conseguidas en 2024
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span>Tiempo medio de espera</span>
                      <span className="font-semibold text-[#FFC400]">
                        24-48h
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span>Tasa de éxito</span>
                      <span className="font-semibold text-[#FFC400]">98%</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span>Provincias cubiertas</span>
                      <span className="font-semibold text-[#FFC400]">52</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span>Monitoreo</span>
                      <span className="font-semibold text-[#FFC400]">
                        24/7/365
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué es tan difícil conseguir cita previa en extranjería?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Si has intentado pedir cita previa en la oficina de extranjería,
                ya conoces la frustración. El sistema parece diseñado para hacer
                imposible conseguir una cita. Pero hay razones específicas
                detrás de esta dificultad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-[#C60B1E]">
                <div className="text-[#C60B1E] mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Horarios impredecibles
                </h3>
                <p className="text-gray-600 text-sm">
                  Las citas se liberan en horarios aleatorios: madrugada, fines
                  de semana, festivos. Es imposible estar pendiente 24/7.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-[#C60B1E]">
                <div className="text-[#C60B1E] mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Alta demanda
                </h3>
                <p className="text-gray-600 text-sm">
                  Miles de personas compiten por un número limitado de citas.
                  Las citas se agotan en segundos, literalmente.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-[#C60B1E]">
                <div className="text-[#C60B1E] mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Sistema saturado
                </h3>
                <p className="text-gray-600 text-sm">
                  La web de cita previa se cuelga constantemente por la cantidad
                  de accesos simultáneos. Errores y caídas son frecuentes.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-[#C60B1E]">
                <div className="text-[#C60B1E] mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Bots y revendedores
                </h3>
                <p className="text-gray-600 text-sm">
                  Sistemas automatizados acaparan citas antes de que los
                  usuarios normales puedan acceder a ellas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  La solución
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Cómo CitaEx te consigue tu cita previa extranjería
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nuestro sistema de monitoreo automático trabaja por ti las 24
                  horas del día. Mientras tú duermes, trabajas o disfrutas de tu
                  tiempo libre, nosotros vigilamos el sistema de citas y
                  reservamos tu cita al instante cuando hay disponibilidad.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#004A8F] rounded-xl flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Envíanos tus datos
                      </h3>
                      <p className="text-gray-600">
                        Nombre, NIE/pasaporte, provincia y tipo de trámite que
                        necesitas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#004A8F] rounded-xl flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Activamos el monitoreo
                      </h3>
                      <p className="text-gray-600">
                        Nuestro sistema comienza a vigilar la disponibilidad
                        cada segundo, 24/7.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#004A8F] rounded-xl flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Reservamos tu cita
                      </h3>
                      <p className="text-gray-600">
                        En el momento que aparece una cita disponible, la
                        reservamos automáticamente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Te notificamos por WhatsApp
                      </h3>
                      <p className="text-gray-600">
                        Recibes confirmación inmediata con fecha, hora y
                        justificante de tu cita.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Ventajas de usar CitaEx
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-green-50 rounded-xl">
                    <svg
                      className="w-8 h-8 text-green-500 mr-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Sin pago por adelantado
                      </span>
                      <p className="text-sm text-gray-600">
                        Solo pagas después de verificar tu cita
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                    <svg
                      className="w-8 h-8 text-[#004A8F] mr-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Monitoreo 24/7/365
                      </span>
                      <p className="text-sm text-gray-600">
                        Vigilamos el sistema sin descanso
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-yellow-50 rounded-xl">
                    <svg
                      className="w-8 h-8 text-[#FFC400] mr-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Citas en 24-72 horas
                      </span>
                      <p className="text-sm text-gray-600">
                        Resultados rápidos garantizados
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                    <svg
                      className="w-8 h-8 text-purple-500 mr-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Todas las provincias
                      </span>
                      <p className="text-sm text-gray-600">
                        Cobertura en toda España
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-red-50 rounded-xl">
                    <svg
                      className="w-8 h-8 text-[#C60B1E] mr-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">
                        100% legal y seguro
                      </span>
                      <p className="text-sm text-gray-600">
                        Usamos el sistema oficial
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trámites Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tipos de cita previa que gestionamos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En CitaEx te ayudamos a conseguir cita para cualquier trámite en
                la oficina de extranjería. Estos son los más solicitados:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tramites.map((tramite, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {tramite.nombre}
                    </h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                      {tramite.tiempo}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{tramite.descripcion}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                ¿No ves tu trámite en la lista? No te preocupes, gestionamos{' '}
                <strong>todos los tipos de cita</strong> en extranjería.
              </p>
              <a
                href="https://wa.me/923221430630?text=Hola,%20necesito%20una%20cita%20para%20un%20tr%C3%A1mite%20espec%C3%ADfico"
                className="inline-flex items-center text-[#004A8F] hover:text-[#003366] font-semibold"
              >
                Consulta tu caso por WhatsApp
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Provincias Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Cita previa extranjería en todas las provincias
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nuestro sistema de monitoreo cubre las{' '}
                <strong>52 provincias de España</strong>. Ya sea que necesites
                cita en Madrid, Barcelona, Valencia o cualquier otra ciudad,
                podemos ayudarte.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {provincias.map((provincia, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <span className="text-gray-700 font-medium">{provincia}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                + 32 provincias más. Cobertura total en España.
              </p>
            </div>
          </div>
        </section>

        {/* Document Checklist */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentos que necesitas para tu cita en extranjería
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Antes de acudir a tu cita en la oficina de extranjería, asegúrate
                  de tener preparada toda la documentación. Los requisitos varían
                  según el trámite, pero estos son los documentos más comunes:
                </p>

                <div className="bg-yellow-50 border-l-4 border-[#FFC400] p-6 rounded-r-xl">
                  <div className="flex">
                    <svg
                      className="w-6 h-6 text-[#FFC400] mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Importante
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Los requisitos exactos dependen de tu trámite específico.
                        Te enviaremos una lista personalizada cuando confirmemos
                        tu cita.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Documentación general requerida
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">
                        Pasaporte en vigor
                      </span>
                      <p className="text-sm text-gray-600">
                        Original y copia de todas las páginas con sellos
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">
                        Formulario oficial (EX-15, EX-17, etc.)
                      </span>
                      <p className="text-sm text-gray-600">
                        Rellenado y firmado según el trámite
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">
                        Tasa administrativa pagada
                      </span>
                      <p className="text-sm text-gray-600">
                        Modelo 790 código 012 o el que corresponda
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">
                        Fotografías tamaño carné
                      </span>
                      <p className="text-sm text-gray-600">
                        Fondo blanco, recientes (menos de 6 meses)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">
                        Justificante de domicilio
                      </span>
                      <p className="text-sm text-gray-600">
                        Empadronamiento o contrato de alquiler
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">
                        Justificante de cita
                      </span>
                      <p className="text-sm text-gray-600">
                        El que te proporcionamos cuando conseguimos tu cita
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Preguntas frecuentes sobre cita previa extranjería
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Resolvemos las dudas más comunes sobre el proceso de obtención de
                cita en las oficinas de extranjería de España.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Por qué es tan difícil conseguir cita previa en extranjería?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    La alta demanda de trámites migratorios, el número limitado de
                    citas disponibles y la liberación de citas en horarios
                    variables hacen que sea extremadamente difícil conseguir cita
                    manualmente. Miles de personas intentan acceder al sistema
                    simultáneamente, agotando las citas en segundos. Además, el
                    sistema web frecuentemente se satura y presenta errores,
                    complicando aún más el proceso.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cuánto tiempo tarda CitaEx en conseguir mi cita?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Normalmente conseguimos citas en un plazo de 24 a 72 horas,
                    dependiendo de la provincia y el tipo de trámite. Las
                    provincias con mayor demanda como Madrid y Barcelona pueden
                    tardar algo más, mientras que en provincias con menor
                    afluencia podemos conseguir citas incluso en el mismo día.
                    Nuestro sistema monitorea la disponibilidad 24/7 y reserva
                    automáticamente cuando se libera una cita.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿El servicio de CitaEx es legal?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sí, completamente legal. CitaEx utiliza el sistema oficial de
                    cita previa del gobierno español. No hacemos nada ilegal ni
                    usamos accesos no autorizados. Simplemente monitoreamos la
                    disponibilidad de citas constantemente y las reservamos en tu
                    nombre cuando están disponibles, siguiendo el procedimiento
                    estándar que cualquier ciudadano podría hacer manualmente.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué pasa si no consiguen mi cita?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    En CitaEx trabajamos con política de "Sin pago por adelantado".
                    Solo pagas después de verificar tu cita confirmada en el
                    sistema oficial. Si por alguna razón no conseguimos tu cita en
                    el plazo acordado, no tienes que pagar absolutamente nada.
                    Nuestra tasa de éxito es del 98%, pero tu satisfacción y
                    seguridad es nuestra prioridad.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Puedo elegir la fecha y hora de mi cita?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Puedes indicarnos tus preferencias de fecha y franja horaria
                    (mañana o tarde). Haremos todo lo posible por conseguir una
                    cita que se ajuste a tus necesidades, aunque la disponibilidad
                    final depende de las citas que libere el sistema. Si la primera
                    cita que conseguimos no te viene bien, podemos intentar buscar
                    otra alternativa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#C60B1E] via-[#a00a18] to-[#8a0915]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                ¿Necesitas tu cita previa en extranjería?
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Deja de perder tiempo intentando conseguir cita. Nuestro sistema
                automático trabaja por ti 24/7.
              </p>
              <p className="text-lg text-[#FFC400] font-semibold mb-8">
                Sin pago por adelantado - Pague después de verificar su cita
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://wa.me/923221430630?text=Hola,%20necesito%20una%20cita%20previa%20en%20extranjer%C3%ADa"
                  className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contactar por WhatsApp
                </a>
                <Link
                  href="/solicitar-cita"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#C60B1E] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Solicitar Cita Online
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Respuesta en menos de 1 hora
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +5.000 citas conseguidas
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  98% tasa de éxito
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Servicios relacionados
              </h2>
              <p className="text-lg text-gray-600">
                Otros trámites de extranjería para los que podemos conseguirte
                cita
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/servicios/toma-de-huellas"
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#004A8F] hover:text-white transition-all duration-300 border border-gray-100"
              >
                <div className="text-[#004A8F] group-hover:text-white mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white">
                  Toma de Huellas
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Cita para expedición del TIE tras resolución favorable
                </p>
              </Link>

              <Link
                href="/servicios/renovacion-nie-tie"
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#004A8F] hover:text-white transition-all duration-300 border border-gray-100"
              >
                <div className="text-[#004A8F] group-hover:text-white mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white">
                  Renovación NIE/TIE
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Renueva tu tarjeta de residencia antes de que caduque
                </p>
              </Link>

              <Link
                href="/servicios/arraigo"
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#004A8F] hover:text-white transition-all duration-300 border border-gray-100"
              >
                <div className="text-[#004A8F] group-hover:text-white mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white">
                  Arraigo
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Social, laboral o familiar - Regulariza tu situación
                </p>
              </Link>

              <Link
                href="/servicios/asilo"
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#004A8F] hover:text-white transition-all duration-300 border border-gray-100"
              >
                <div className="text-[#004A8F] group-hover:text-white mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white">
                  Asilo
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Protección internacional y tarjeta roja
                </p>
              </Link>

              <Link
                href="/servicios/nacionalidad"
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#004A8F] hover:text-white transition-all duration-300 border border-gray-100"
              >
                <div className="text-[#004A8F] group-hover:text-white mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white">
                  Nacionalidad
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Obtén la ciudadanía española
                </p>
              </Link>

              <Link
                href="/servicios/estudiantes"
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#004A8F] hover:text-white transition-all duration-300 border border-gray-100"
              >
                <div className="text-[#004A8F] group-hover:text-white mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white">
                  Estudiantes
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Visa de estudiante y renovaciones
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* WhatsApp Channel Banner */}
        <section className="py-12 bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
              <div className="text-white mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">
                  Únete a nuestro canal de WhatsApp
                </h3>
                <p className="text-green-100">
                  Recibe alertas de disponibilidad y consejos sobre trámites de
                  extranjería
                </p>
              </div>
              <a
                href="https://whatsapp.com/channel/0029Vb6vC8KAYlUPnU8VcH2w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Seguir Canal
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
