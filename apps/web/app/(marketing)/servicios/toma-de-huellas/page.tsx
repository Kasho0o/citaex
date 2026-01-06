import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cita Toma de Huellas Extranjería 2026 | CitaEx',
  description:
    'Consigue cita para toma de huellas y expedición del TIE en 24-48h. Sistema automático 24/7 en todas las provincias. Sin pago por adelantado. ¡Solicita ahora!',
  keywords: [
    'toma de huellas extranjería',
    'cita huellas nie',
    'cita huellas tie',
    'expedición tie',
    'cita toma de huellas',
    'huellas dactilares extranjería',
    'tarjeta identidad extranjero',
    'cita huellas madrid',
    'cita huellas barcelona',
  ],
  openGraph: {
    title: 'Cita Toma de Huellas Extranjería 2026 | CitaEx',
    description:
      'Consigue cita para toma de huellas y expedición del TIE en 24-48h. Sistema automático 24/7 en todas las provincias.',
    url: 'https://citaex.com/servicios/toma-de-huellas',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://citaex.com/og/toma-de-huellas.jpg',
        width: 1200,
        height: 630,
        alt: 'Cita Toma de Huellas Extranjería España 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cita Toma de Huellas Extranjería 2026 | CitaEx',
    description:
      'Consigue cita para toma de huellas y expedición del TIE en 24-48h.',
  },
  alternates: {
    canonical: 'https://citaex.com/servicios/toma-de-huellas',
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
      name: '¿Qué es la toma de huellas en extranjería?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La toma de huellas es el trámite obligatorio donde se registran tus huellas dactilares para la expedición de la Tarjeta de Identidad de Extranjero (TIE). Es el paso final después de obtener una resolución favorable de tu autorización de residencia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo necesito cita para toma de huellas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Necesitas cita de toma de huellas cuando: has recibido resolución favorable de residencia, vas a renovar tu TIE, has perdido o te han robado tu tarjeta, o tu tarjeta está deteriorada y necesitas reexpedición.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en llegar el TIE después de la toma de huellas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Normalmente el TIE tarda entre 30 y 45 días en estar listo después de la toma de huellas. Recibirás un SMS o podrás consultar el estado en la sede electrónica. Te darán un resguardo válido mientras tanto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué documentos necesito para la toma de huellas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Necesitas: pasaporte original en vigor, resolución favorable, justificante de cita, tasa 790-012 pagada (aproximadamente 16€), fotografía tamaño carné reciente, y formulario EX-17 cumplimentado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo trabajar mientras espero el TIE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, con el resguardo de la toma de huellas puedes trabajar legalmente si tu autorización incluye permiso de trabajo. El resguardo junto con tu pasaporte acredita tu situación regular mientras esperas la tarjeta física.',
      },
    },
  ],
};

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cita Toma de Huellas',
  description:
    'Servicio de obtención de cita para toma de huellas dactilares y expedición del TIE en oficinas de extranjería de toda España.',
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

// Breadcrumb Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: 'https://citaex.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Servicios',
      item: 'https://citaex.com/servicios',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Toma de Huellas',
      item: 'https://citaex.com/servicios/toma-de-huellas',
    },
  ],
};

export default function TomaDeHuellasPage() {
  const situacionesHuellas = [
    {
      titulo: 'Primera expedición del TIE',
      descripcion:
        'Has recibido resolución favorable de tu primera autorización de residencia y necesitas obtener tu tarjeta física.',
      icono: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      titulo: 'Renovación del TIE',
      descripcion:
        'Tu tarjeta actual está próxima a caducar o ya ha caducado y has solicitado la renovación con resolución favorable.',
      icono: (
        <svg
          className="w-8 h-8"
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
      ),
    },
    {
      titulo: 'Pérdida o robo',
      descripcion:
        'Has perdido tu TIE o te lo han robado y necesitas solicitar un duplicado con denuncia policial.',
      icono: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      titulo: 'Tarjeta deteriorada',
      descripcion:
        'Tu TIE está dañado, ilegible o deteriorado y necesitas una nueva tarjeta por reexpedición.',
      icono: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      ),
    },
    {
      titulo: 'Modificación de datos',
      descripcion:
        'Has cambiado de domicilio, nombre u otros datos personales que aparecen en tu tarjeta.',
      icono: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      titulo: 'Reagrupación familiar',
      descripcion:
        'Tus familiares han llegado a España por reagrupación y necesitan tramitar su TIE.',
      icono: (
        <svg
          className="w-8 h-8"
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
      ),
    },
  ];

  const pasosHuellas = [
    {
      numero: 1,
      titulo: 'Resolución favorable',
      descripcion:
        'Primero debes tener la resolución favorable de tu autorización de residencia. Sin ella, no puedes pedir cita de huellas.',
    },
    {
      numero: 2,
      titulo: 'Pagar la tasa',
      descripcion:
        'Debes abonar la tasa 790 código 012 (aproximadamente 16€) antes de la cita. Guarda el justificante de pago.',
    },
    {
      numero: 3,
      titulo: 'Solicitar cita',
      descripcion:
        'Pide cita de "Policía - Toma de huellas" o "Expedición de tarjeta". Aquí es donde CitaEx te ayuda.',
    },
    {
      numero: 4,
      titulo: 'Acudir a la cita',
      descripcion:
        'Ve a la comisaría con toda la documentación. Te tomarán las huellas y una foto.',
    },
    {
      numero: 5,
      titulo: 'Recibir resguardo',
      descripcion:
        'Te darán un resguardo que acredita tu situación mientras fabrican tu TIE.',
    },
    {
      numero: 6,
      titulo: 'Recoger TIE',
      descripcion:
        'En 30-45 días recibirás un SMS para recoger tu tarjeta. A veces requiere nueva cita.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                  Toma de Huellas
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
                    Citas disponibles en toda España
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                  Cita Toma de Huellas
                  <span className="block text-[#FFC400] mt-2">
                    Expedición TIE 2026
                  </span>
                </h1>

                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  ¿Has recibido la resolución favorable de tu residencia y ahora
                  necesitas <strong>cita para toma de huellas</strong>? Sabemos
                  lo frustrante que es intentar conseguir cita en la comisaría.
                  Nuestro sistema automático monitorea la disponibilidad 24/7 y
                  te consigue tu cita para la expedición del TIE.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/923221430630?text=Hola,%20necesito%20cita%20para%20toma%20de%20huellas"
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
                    Todas las comisarías
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="w-32 h-32 bg-[#FFC400]/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-[#FFC400]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">
                    Tarjeta de Identidad de Extranjero
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-gray-300">Validez TIE</span>
                      <span className="text-[#FFC400] font-medium">
                        1-5 años
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-gray-300">Tiempo fabricación</span>
                      <span className="text-[#FFC400] font-medium">
                        30-45 días
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-gray-300">Tasa 790-012</span>
                      <span className="text-[#FFC400] font-medium">~16€</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-300">Conseguimos cita en</span>
                      <span className="text-[#FFC400] font-medium">
                        24-48h
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Qué es la toma de huellas? */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-[#004A8F]/10 text-[#004A8F] px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Información esencial
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  ¿Qué es la toma de huellas en extranjería?
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="leading-relaxed mb-4">
                    La <strong>toma de huellas</strong> es el trámite obligatorio
                    que deben realizar todos los extranjeros que residen
                    legalmente en España para obtener su{' '}
                    <strong>Tarjeta de Identidad de Extranjero (TIE)</strong>.
                    Esta tarjeta es el documento físico que acredita tu
                    autorización de residencia en España.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Durante la cita de toma de huellas, un funcionario de la
                    Policía Nacional registrará tus huellas dactilares mediante
                    un escáner digital. También te tomarán una fotografía si no
                    has aportado una válida. Este proceso biométrico es
                    necesario para la fabricación de tu TIE, que incluye un chip
                    con tus datos.
                  </p>
                  <p className="leading-relaxed">
                    Es importante entender que la{' '}
                    <strong>toma de huellas no es la autorización de residencia</strong>{' '}
                    en sí misma. Es simplemente el paso administrativo para
                    obtener el documento físico después de que tu solicitud de
                    residencia haya sido aprobada.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#004A8F]/5 to-[#004A8F]/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Diferencia entre NIE y TIE
                </h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-[#004A8F] text-white rounded-lg p-2 mr-4">
                        <span className="font-bold text-sm">NIE</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Número de Identidad de Extranjero
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Es un número único que te identifica en España para
                          trámites fiscales, bancarios y administrativos. Es
                          solo un número, no un documento físico de residencia.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex items-start">
                      <div className="bg-[#C60B1E] text-white rounded-lg p-2 mr-4">
                        <span className="font-bold text-sm">TIE</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Tarjeta de Identidad de Extranjero
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Es la tarjeta física que acredita tu residencia legal
                          en España. Incluye tu NIE, foto, huellas dactilares y
                          el tipo de autorización que tienes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-[#FFC400] rounded-r-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Importante:</strong> El TIE es obligatorio para
                    estancias superiores a 6 meses. Sin él, aunque tengas
                    autorización, puedes tener problemas para trabajar, alquilar
                    vivienda o realizar trámites bancarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Situaciones que requieren huellas */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                ¿Cuándo necesitas cita para toma de huellas?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Existen varias situaciones en las que necesitarás solicitar una
                cita de toma de huellas en la comisaría de Policía Nacional.
                Identifica tu caso:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {situacionesHuellas.map((situacion, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="text-[#004A8F] mb-4">{situacion.icono}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {situacion.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {situacion.descripcion}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ¿No sabes si necesitas cita de huellas?
                  </h3>
                  <p className="text-gray-600">
                    Cuéntanos tu situación y te ayudamos a determinar qué tipo
                    de cita necesitas.
                  </p>
                </div>
                <a
                  href="https://wa.me/923221430630?text=Hola,%20tengo%20dudas%20sobre%20si%20necesito%20cita%20de%20huellas"
                  className="inline-flex items-center bg-[#004A8F] hover:bg-[#003366] text-white px-6 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Consultar mi caso
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso paso a paso */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Proceso completo de toma de huellas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Desde que recibes tu resolución favorable hasta que tienes tu
                TIE en mano, estos son todos los pasos que debes seguir:
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#004A8F] via-[#FFC400] to-[#C60B1E]"></div>

              <div className="space-y-12">
                {pasosHuellas.map((paso, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                    >
                      <div
                        className={`bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 ${
                          index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                        }`}
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {paso.titulo}
                        </h3>
                        <p className="text-gray-600">{paso.descripcion}</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#004A8F] to-[#003366] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {paso.numero}
                      </div>
                    </div>

                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center justify-center mb-3">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-green-800 font-medium">
                  CitaEx te ayuda con el paso 3: conseguir la cita para toma de
                  huellas
                </p>
                <p className="text-green-600 text-sm mt-1">
                  Sin estrés, sin esperas, sin perder tiempo refrescando la
                  página
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Documentos necesarios */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Documentos necesarios para la toma de huellas
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Es fundamental que lleves toda la documentación completa el
                  día de tu cita. Si falta algún documento, no podrán atenderte
                  y perderás la cita. Prepara todo con antelación siguiendo esta
                  lista:
                </p>

                <div className="bg-red-50 border-l-4 border-[#C60B1E] p-6 rounded-r-xl mb-6">
                  <div className="flex">
                    <svg
                      className="w-6 h-6 text-[#C60B1E] mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        ¡Atención!
                      </h4>
                      <p className="text-gray-700 text-sm">
                        La tasa debe estar pagada ANTES de la cita. No podrás
                        pagarla en la comisaría. Asegúrate de pagar el modelo
                        790 código 012 con al menos 24 horas de antelación.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#004A8F] p-6 rounded-r-xl">
                  <div className="flex">
                    <svg
                      className="w-6 h-6 text-[#004A8F] mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Consejo
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Lleva siempre originales Y fotocopias de todos los
                        documentos. Aunque legalmente solo necesitas originales,
                        muchas oficinas piden copias para su archivo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg
                    className="w-6 h-6 text-[#004A8F] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Checklist de documentos
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Pasaporte original en vigor
                      </span>
                      <p className="text-sm text-gray-600">
                        Con al menos 3 meses de validez restante
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Resolución favorable
                      </span>
                      <p className="text-sm text-gray-600">
                        Original de la resolución de tu autorización de
                        residencia
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Formulario EX-17 cumplimentado
                      </span>
                      <p className="text-sm text-gray-600">
                        Descargable de la web del Ministerio, firmado
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Tasa 790 código 012 pagada
                      </span>
                      <p className="text-sm text-gray-600">
                        Justificante de pago (aproximadamente 16€)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Fotografía tamaño carné
                      </span>
                      <p className="text-sm text-gray-600">
                        Fondo blanco, reciente, sin gafas ni cubrecabezas
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Justificante de cita
                      </span>
                      <p className="text-sm text-gray-600">
                        El que te proporcionamos con fecha, hora y lugar
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="w-4 h-4 text-yellow-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Certificado de empadronamiento (según provincia)
                      </span>
                      <p className="text-sm text-gray-600">
                        Algunas oficinas lo requieren, otras no
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Plazos importantes */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Plazos importantes que debes conocer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cumplir los plazos legales es fundamental para mantener tu
                situación regular en España. Presta atención a estas fechas:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#004A8F] to-[#003366] rounded-2xl p-8 text-white">
                <div className="text-5xl font-bold text-[#FFC400] mb-4">1</div>
                <h3 className="text-xl font-bold mb-3">mes</h3>
                <p className="text-gray-200 leading-relaxed">
                  Plazo para solicitar el TIE desde que recibes la resolución
                  favorable. No esperes al último día, las citas están muy
                  demandadas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#C60B1E] to-[#a00a18] rounded-2xl p-8 text-white">
                <div className="text-5xl font-bold text-[#FFC400] mb-4">
                  30-45
                </div>
                <h3 className="text-xl font-bold mb-3">días</h3>
                <p className="text-gray-200 leading-relaxed">
                  Tiempo aproximado de fabricación del TIE después de la toma de
                  huellas. Recibirás SMS cuando esté listo para recoger.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 text-white">
                <div className="text-5xl font-bold text-[#FFC400] mb-4">60</div>
                <h3 className="text-xl font-bold mb-3">días</h3>
                <p className="text-gray-200 leading-relaxed">
                  Validez del resguardo de toma de huellas. Aunque el TIE tarde
                  más, el resguardo te acredita durante este periodo.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-600 mr-4 flex-shrink-0 mt-1"
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
                  <h4 className="font-bold text-gray-900 mb-2">
                    ¿Qué pasa si no pido la cita a tiempo?
                  </h4>
                  <p className="text-gray-700">
                    Si no solicitas el TIE en el plazo de 1 mes, podrías
                    enfrentarte a una sanción administrativa. Además, sin el TIE
                    tendrás dificultades para trabajar, abrir cuentas bancarias
                    o realizar otros trámites. Por eso es tan importante
                    conseguir cita cuanto antes, y por eso CitaEx puede ser tu
                    mejor aliado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Preguntas frecuentes sobre toma de huellas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Resolvemos las dudas más comunes sobre el proceso de toma de
                huellas y expedición del TIE en España.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué es la toma de huellas en extranjería?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    La toma de huellas es el trámite obligatorio donde se
                    registran tus huellas dactilares para la expedición de la
                    Tarjeta de Identidad de Extranjero (TIE). Es el paso final
                    después de obtener una resolución favorable de tu
                    autorización de residencia. Durante la cita, un funcionario
                    de la Policía Nacional escaneará tus huellas digitalmente y
                    verificará tu documentación.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cuándo necesito cita para toma de huellas?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Necesitas cita de toma de huellas cuando: has recibido
                    resolución favorable de residencia (primera autorización),
                    vas a renovar tu TIE porque está próximo a caducar o ya
                    caducó, has perdido o te han robado tu tarjeta y necesitas
                    un duplicado, tu tarjeta está deteriorada y necesitas
                    reexpedición, o has cambiado datos personales que aparecen
                    en la tarjeta.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cuánto tarda en llegar el TIE después de la toma de
                    huellas?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Normalmente el TIE tarda entre 30 y 45 días en estar listo
                    después de la toma de huellas. Una vez fabricado, recibirás
                    un SMS al número que proporcionaste indicando que puedes
                    recogerlo. También puedes consultar el estado en la sede
                    electrónica del Ministerio. Mientras tanto, el resguardo que
                    te dan en la cita de huellas es válido para acreditar tu
                    situación.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Qué documentos necesito para la toma de huellas?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Para la cita de toma de huellas necesitas: pasaporte
                    original en vigor, resolución favorable de tu autorización,
                    justificante de cita impreso, tasa 790 código 012 pagada
                    (aproximadamente 16€), una fotografía tamaño carné reciente
                    con fondo blanco, y el formulario EX-17 cumplimentado y
                    firmado. Algunas oficinas también piden certificado de
                    empadronamiento.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Puedo trabajar mientras espero el TIE?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sí, con el resguardo de la toma de huellas puedes trabajar
                    legalmente si tu autorización incluye permiso de trabajo. El
                    resguardo junto con tu pasaporte acredita tu situación
                    regular mientras esperas la tarjeta física. Los empleadores
                    pueden verificar tu situación con estos documentos, y la
                    Seguridad Social te permitirá darte de alta con el
                    resguardo.
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
                ¿Necesitas cita para toma de huellas?
              </h2>
              <p className="text-xl text-red-100 mb-4 max-w-2xl mx-auto">
                No dejes pasar el plazo de 1 mes. Te conseguimos cita en la
                comisaría en 24-48 horas.
              </p>
              <p className="text-lg text-[#FFC400] font-semibold mb-8">
                Sin pago por adelantado - Pague después de verificar su cita
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://wa.me/923221430630?text=Hola,%20necesito%20cita%20para%20toma%20de%20huellas%20y%20expedici%C3%B3n%20del%20TIE"
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
                  Todas las comisarías de España
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
                  Monitoreo 24/7
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
                Otros trámites de extranjería para los que podemos ayudarte
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/servicios/cita-previa-extranjeria"
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#004A8F] transition-all duration-300 border border-gray-100"
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white">
                  Cita Previa Extranjería
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Citas para todos los trámites en oficinas de extranjería
                </p>
              </Link>

              <Link
                href="/servicios/renovacion-nie-tie"
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#004A8F] transition-all duration-300 border border-gray-100"
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
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#004A8F] transition-all duration-300 border border-gray-100"
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
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#004A8F] transition-all duration-300 border border-gray-100"
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
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#004A8F] transition-all duration-300 border border-gray-100"
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
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#004A8F] transition-all duration-300 border border-gray-100"
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
                  Recibe alertas de disponibilidad de citas y consejos sobre
                  trámites de extranjería
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
