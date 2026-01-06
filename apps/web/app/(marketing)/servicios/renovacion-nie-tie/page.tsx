import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Renovación NIE y TIE 2026 - Guía Completa | CitaEx',
  description: 'Guía completa para renovar tu NIE y TIE en España 2026. Plazos, documentos, formulario EX-17, Tasa 790-012. Conseguimos tu cita de renovación. ¡Consulta gratis!',
  keywords: [
    'renovar nie',
    'renovar tie',
    'renovación tarjeta extranjero',
    'renovación nie españa',
    'renovar tarjeta residencia',
    'ex-17',
    'tasa 790-012',
    'renovar permiso residencia',
    'cita renovación nie',
    'cita renovación tie',
    'prórroga nie',
    'renovar nie caducado',
    'renovar tie caducado',
    'documentos renovación nie'
  ],
  openGraph: {
    title: 'Renovación NIE y TIE 2026 - Guía Completa | CitaEx',
    description: 'Guía completa para renovar tu NIE y TIE en España 2026. Plazos, documentos, formulario EX-17, Tasa 790-012. ¡Conseguimos tu cita!',
    url: 'https://citaex.com/servicios/renovacion-nie-tie',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://citaex.com/og/renovacion-nie-tie.png',
        width: 1200,
        height: 630,
        alt: 'Renovación NIE y TIE en España - CitaEx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renovación NIE y TIE 2026 - Guía Completa | CitaEx',
    description: 'Guía completa para renovar tu NIE y TIE en España 2026. Plazos, documentos y requisitos actualizados.',
  },
  alternates: {
    canonical: 'https://citaex.com/servicios/renovacion-nie-tie',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuándo debo solicitar la renovación de mi NIE/TIE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Debes solicitar la renovación durante los 60 días anteriores a la fecha de expiración de tu tarjeta. También puedes hacerlo hasta 90 días después de que haya caducado sin que se considere una nueva solicitud, aunque durante ese período no tendrás la documentación en regla.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia hay entre el NIE y el TIE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El NIE (Número de Identificación de Extranjero) es un número único que te identifica en España y es permanente. El TIE (Tarjeta de Identidad de Extranjero) es la tarjeta física que contiene tu NIE, foto, huellas y datos personales. El NIE nunca cambia, pero el TIE debe renovarse periódicamente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta renovar el TIE en 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las tasas principales son: Tasa 790-012 (expedición de tarjeta): 16,08€. Dependiendo del tipo de autorización, puede ser necesario pagar también la Tasa 790-052 (residencia temporal) de unos 16,32€ o Tasa 790-062 (residencia de larga duración) de unos 22,14€.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si mi TIE está caducado y no he renovado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tienes hasta 90 días después de la caducidad para solicitar la renovación. Pasado ese plazo, se considera que has perdido tu autorización de residencia y deberás iniciar un nuevo procedimiento. Durante el período de caducidad, técnicamente estás en situación irregular, lo que puede afectar a tu trabajo y otros trámites.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo viajar con el TIE caducado mientras espero la renovación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si has solicitado la renovación dentro del plazo y tienes el resguardo de la solicitud, puedes permanecer legalmente en España. Sin embargo, para viajar fuera del espacio Schengen, necesitarás una autorización de regreso. Consulta siempre con extranjería antes de viajar con el TIE caducado.',
      },
    },
  ],
};

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Servicio de Cita para Renovación NIE y TIE',
  description: 'Conseguimos tu cita previa para renovar el NIE y TIE en cualquier oficina de extranjería de España.',
  provider: {
    '@type': 'Organization',
    name: 'CitaEx',
    url: 'https://citaex.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'España',
  },
  serviceType: 'Gestión de citas de extranjería',
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
      name: 'Renovación NIE y TIE',
      item: 'https://citaex.com/servicios/renovacion-nie-tie',
    },
  ],
};

export default function RenovacionNieTiePage() {
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
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-red-700">
                  Inicio
                </Link>
              </li>
              <li>
                <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-500 hover:text-red-700">
                  Servicios
                </Link>
              </li>
              <li>
                <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-red-700 font-medium">
                Renovación NIE y TIE
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-yellow-400 text-blue-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                  GUÍA ACTUALIZADA 2026
                </span>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
                  Renovación <span className="text-yellow-400">NIE</span> y <span className="text-yellow-400">TIE</span> en España
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Guía completa para renovar tu Tarjeta de Identidad de Extranjero. 
                  Te explicamos plazos, documentos necesarios, formularios y tasas. 
                  <strong className="text-white"> Conseguimos tu cita cuando no hay disponibilidad.</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/923221430630?text=Hola,%20necesito%20ayuda%20para%20renovar%20mi%20NIE/TIE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Contactar por WhatsApp
                  </a>
                  <Link
                    href="/solicitar-cita"
                    className="inline-flex items-center justify-center bg-white text-blue-900 text-lg font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
                  >
                    Solicitar Cita Ahora
                  </Link>
                </div>
                <div className="mt-6 flex items-center text-blue-200">
                  <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Sin pago por adelantado - Pague después de verificar su cita
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-6">Plazos Importantes</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500 rounded-full p-2">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-lg">60 días antes</p>
                        <p className="text-blue-200">Período ideal para solicitar la renovación</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-500 rounded-full p-2">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-lg">Día de caducidad</p>
                        <p className="text-blue-200">Tu TIE deja de ser válido</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-500 rounded-full p-2">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-lg">90 días después</p>
                        <p className="text-blue-200">Último día para renovar sin perder la autorización</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-12">
                {/* Introduction */}
                <section className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    ¿Qué es la Renovación del NIE y TIE?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="lead text-xl">
                      La <strong>renovación del NIE y TIE</strong> es un trámite obligatorio para todos los extranjeros 
                      residentes en España que desean mantener su situación legal en el país. Este proceso debe 
                      realizarse antes de que expire tu tarjeta de residencia para evitar problemas legales y 
                      administrativos.
                    </p>
                    <p>
                      Es importante distinguir entre el <strong>NIE (Número de Identificación de Extranjero)</strong> 
                      y el <strong>TIE (Tarjeta de Identidad de Extranjero)</strong>. El NIE es tu número de 
                      identificación único que te acompaña durante toda tu estancia en España y nunca cambia. 
                      El TIE, en cambio, es la tarjeta física que acredita tu identidad y situación de residencia, 
                      y debe renovarse periódicamente según el tipo de autorización que tengas.
                    </p>
                    <p>
                      En CitaEx, entendemos lo frustrante que puede ser intentar conseguir una 
                      <strong> cita previa para renovación del TIE</strong> cuando el sistema muestra constantemente 
                      que no hay citas disponibles. Nuestro sistema de monitoreo automático busca citas las 24 horas 
                      del día, los 7 días de la semana, y te notifica inmediatamente cuando encontramos una 
                      disponibilidad en tu provincia.
                    </p>
                  </div>
                </section>

                {/* NIE vs TIE Explanation */}
                <section className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Diferencia entre NIE y TIE
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                          NIE
                        </div>
                        <h3 className="text-xl font-bold text-blue-900">Número de Identificación</h3>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Número único e intransferible</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Permanente - nunca cambia</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Formato: X-1234567-A</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>No requiere renovación</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                      <div className="flex items-center mb-4">
                        <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                          TIE
                        </div>
                        <h3 className="text-xl font-bold text-red-900">Tarjeta Física</h3>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Documento físico de identidad</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Tiene fecha de caducidad</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Contiene foto y huellas</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span><strong>Requiere renovación periódica</strong></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* When to Renew */}
                <section className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    ¿Cuándo Renovar tu TIE?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                    <p>
                      El momento adecuado para solicitar la <strong>renovación del TIE</strong> es fundamental 
                      para evitar problemas. La legislación española establece plazos específicos que debes conocer:
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 mb-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-800 mb-3">
                      ✅ Período Recomendado: 60 días antes de la caducidad
                    </h3>
                    <p className="text-green-700">
                      Este es el momento ideal para iniciar tu trámite de renovación. Tendrás tiempo suficiente 
                      para conseguir cita, reunir documentos y resolver cualquier imprevisto. Tu autorización 
                      seguirá siendo válida mientras se tramita la renovación.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 mb-6 border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-800 mb-3">
                      ⚠️ Período de Gracia: Hasta 90 días después de la caducidad
                    </h3>
                    <p className="text-yellow-700">
                      Si tu TIE ya ha caducado, todavía puedes solicitar la renovación durante los siguientes 
                      90 días. Sin embargo, durante este período técnicamente estás en situación irregular, 
                      lo que puede afectar a tu empleo y otros trámites. Evita llegar a esta situación.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-red-800 mb-3">
                      ❌ Después de 90 días: Pérdida de autorización
                    </h3>
                    <p className="text-red-700">
                      Si pasan más de 90 días desde la caducidad de tu TIE sin haber solicitado la renovación, 
                      se considera que has abandonado tu autorización de residencia. En este caso, deberás 
                      iniciar un nuevo procedimiento, lo cual es mucho más complejo y puede requerir que 
                      regreses a tu país de origen.
                    </p>
                  </div>
                </section>

                {/* Types of Renewal */}
                <section className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Tipos de Renovación según tu Autorización
                  </h2>
                  <div className="space-y-6">
                    <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                        Renovación por Residencia Temporal (1 año inicial)
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Si tienes una autorización de residencia temporal inicial (primer año), deberás renovarla 
                        antes de que expire. Generalmente se conceden renovaciones por 2 años adicionales.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Tasa aplicable:</strong> 790-052 + 790-012
                      </p>
                    </div>
                    
                    <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                        Renovación por Residencia y Trabajo
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Para quienes tienen autorización de residencia y trabajo por cuenta ajena o propia. 
                        Debes demostrar que sigues cumpliendo los requisitos que te dieron acceso a la autorización 
                        (contrato de trabajo, alta en Seguridad Social, etc.).
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Tasa aplicable:</strong> 790-052 + 790-012
                      </p>
                    </div>
                    
                    <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
                        Renovación por Residencia de Larga Duración
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Después de 5 años de residencia legal continuada en España, puedes solicitar la 
                        residencia de larga duración. Esta tarjeta tiene una validez de 5 años y se renueva 
                        automáticamente mientras sigas residiendo en España.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Tasa aplicable:</strong> 790-062 + 790-012
                      </p>
                    </div>
                    
                    <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">4</span>
                        Renovación por Reagrupación Familiar
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Si obtuviste tu residencia mediante reagrupación familiar, tu renovación dependerá 
                        de mantener el vínculo familiar con el reagrupante y de que este siga en situación 
                        regular en España.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Tasa aplicable:</strong> 790-052 + 790-012
                      </p>
                    </div>
                    
                    <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">5</span>
                        Renovación de TIE de Estudiante
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Los estudiantes deben renovar anualmente su TIE mientras continúen sus estudios. 
                        Es necesario demostrar progreso académico y medios económicos suficientes.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Tasa aplicable:</strong> 790-012
                      </p>
                    </div>
                  </div>
                </section>

                {/* Required Documents */}
                <section className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Documentos Necesarios para Renovar el TIE
                  </h2>
                  <p className="text-gray-700 mb-8">
                    La documentación requerida varía según el tipo de autorización que tengas. 
                    A continuación, te presentamos los documentos básicos que necesitarás:
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      📋 Documentos Obligatorios (Todos los casos)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Pasaporte completo en vigor (original y copia)',
                        'TIE actual (original y copia)',
                        'Formulario EX-17 cumplimentado y firmado',
                        'Tasa 790-012 pagada (16,08€)',
                        'Fotografía reciente tamaño carné',
                        'Empadronamiento actualizado',
                      ].map((doc, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      💼 Documentos Adicionales (Residencia y Trabajo)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Contrato de trabajo vigente',
                        'Informe de vida laboral actualizado',
                        'Últimas 3 nóminas',
                        'Tasa 790-052 pagada (16,32€)',
                        'Alta en Seguridad Social',
                        'Declaración de la renta (si aplica)',
                      ].map((doc, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">
                      📚 Documentos Adicionales (Estudiantes)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'Matrícula del nuevo curso',
                        'Certificado de aprovechamiento académico',
                        'Seguro médico privado vigente',
                        'Justificante de medios económicos',
                        'Carta de admisión (si cambia de centro)',
                      ].map((doc, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Forms and Fees */}
                <section className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Formularios y Tasas Oficiales 2026
                  </h2>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Formularios</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                        <div className="flex items-center mb-3">
                          <div className="bg-red-600 text-white rounded-lg px-3 py-1 font-bold mr-3">EX-17</div>
                          <span className="font-medium">Formulario Principal</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          Solicitud de Tarjeta de Identidad de Extranjero (TIE). 
                          Es el formulario obligatorio para renovar tu tarjeta física.
                        </p>
                        <a
                          href="https://www.inclusion.gob.es/documents/410169/2156469/17-Formulario_TIE.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                        >
                          Descargar PDF oficial
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                        <div className="flex items-center mb-3">
                          <div className="bg-blue-600 text-white rounded-lg px-3 py-1 font-bold mr-3">EX-00</div>
                          <span className="font-medium">Solicitud General</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          En algunos casos puede requerirse este formulario adicional para 
                          la renovación de la autorización de residencia.
                        </p>
                        <a
                          href="https://www.inclusion.gob.es/documents/410169/2156469/00-Formulario_general.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                        >
                          Descargar PDF oficial
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Tasas Oficiales</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="text-left p-4 font-bold border">Tasa</th>
                            <th className="text-left p-4 font-bold border">Concepto</th>
                            <th className="text-right p-4 font-bold border">Importe</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-green-50">
                            <td className="p-4 border font-medium">790-012</td>
                            <td className="p-4 border">Expedición de tarjeta de identidad de extranjero</td>
                            <td className="p-4 border text-right font-bold">16,08 €</td>
                          </tr>
                          <tr>
                            <td className="p-4 border font-medium">790-052</td>
                            <td className="p-4 border">Autorización de residencia temporal</td>
                            <td className="p-4 border text-right font-bold">16,32 €</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 border font-medium">790-062</td>
                            <td className="p-4 border">Autorización de residencia de larga duración</td>
                            <td className="p-4 border text-right font-bold">22,14 €</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      * Las tasas se pagan mediante el modelo correspondiente en cualquier entidad bancaria colaboradora. 
                      No se aceptan pagos en efectivo en las oficinas de extranjería.
                    </p>
                  </div>
                </section>

                {/* Step by Step Process */}
                <section className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Proceso de Renovación Paso a Paso
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg">
                          1
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Reúne la documentación</h3>
                        <p className="text-gray-700">
                          Comienza a reunir todos los documentos necesarios al menos 60 días antes de 
                          que expire tu TIE. Asegúrate de que tu pasaporte esté en vigor y solicita 
                          un empadronamiento actualizado.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg">
                          2
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Paga las tasas</h3>
                        <p className="text-gray-700">
                          Descarga los modelos de tasas correspondientes (790-012 y 790-052 o 790-062) 
                          y págalas en una entidad bancaria. Guarda el justificante de pago, lo necesitarás 
                          para presentar tu solicitud.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg">
                          3
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Consigue cita previa</h3>
                        <p className="text-gray-700 mb-3">
                          Solicita <strong>cita previa</strong> en la página web del Ministerio o 
                          a través de la sede electrónica. Si no hay citas disponibles, 
                          <strong> CitaEx puede ayudarte</strong> con nuestro sistema de monitoreo 24/7.
                        </p>
                        <a
                          href="https://wa.me/923221430630?text=Hola,%20necesito%20cita%20para%20renovar%20mi%20TIE"
                          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                        >
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Solicitar ayuda para conseguir cita
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg">
                          4
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Presenta la solicitud</h3>
                        <p className="text-gray-700">
                          Acude a tu cita en la oficina de extranjería con toda la documentación. 
                          Un funcionario revisará tus documentos y, si todo está correcto, te dará 
                          un resguardo de la solicitud que te permitirá seguir residiendo legalmente 
                          mientras se procesa.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg">
                          5
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Espera la resolución</h3>
                        <p className="text-gray-700">
                          El plazo de resolución es de aproximadamente 3 meses desde la presentación. 
                          Puedes consultar el estado de tu expediente a través de la sede electrónica 
                          del Ministerio con tu número de expediente.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg">
                          6
                        </div>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Cita para huellas y recogida</h3>
                        <p className="text-gray-700">
                          Una vez aprobada la renovación, deberás solicitar una nueva cita para la 
                          <Link href="/servicios/toma-de-huellas" className="text-blue-600 hover:text-blue-800 font-medium"> toma de huellas</Link> y 
                          posterior recogida de tu nueva tarjeta TIE.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Important Tips */}
                <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-8 border-2 border-yellow-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    💡 Consejos Importantes para tu Renovación
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">Mantén tu pasaporte vigente</h3>
                      <p className="text-gray-700 text-sm">
                        Tu pasaporte debe estar en vigor durante todo el proceso de renovación. 
                        Si está próximo a caducar, renuévalo primero en tu consulado.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">No abandones España más de 6 meses</h3>
                      <p className="text-gray-700 text-sm">
                        Ausencias superiores a 6 meses en un año pueden ser motivo de denegación 
                        de la renovación o pérdida de la residencia.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">Actualiza tu empadronamiento</h3>
                      <p className="text-gray-700 text-sm">
                        Asegúrate de estar empadronado en tu domicilio actual. El certificado de 
                        empadronamiento no debe tener más de 3 meses de antigüedad.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">Guarda copias de todo</h3>
                      <p className="text-gray-700 text-sm">
                        Haz fotocopias de todos los documentos que presentes y guarda el resguardo 
                        de la solicitud. Te servirá como justificante de tu situación legal.
                      </p>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Preguntas Frecuentes sobre Renovación NIE/TIE
                  </h2>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        ¿Cuándo debo solicitar la renovación de mi NIE/TIE?
                      </h3>
                      <p className="text-gray-700">
                        Debes solicitar la renovación durante los <strong>60 días anteriores</strong> a la fecha de 
                        expiración de tu tarjeta. También puedes hacerlo hasta <strong>90 días después</strong> de que 
                        haya caducado sin que se considere una nueva solicitud, aunque durante ese período 
                        no tendrás la documentación en regla y podrías enfrentar problemas laborales y administrativos.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        ¿Qué diferencia hay entre el NIE y el TIE?
                      </h3>
                      <p className="text-gray-700">
                        El <strong>NIE (Número de Identificación de Extranjero)</strong> es un número único que te 
                        identifica en España y es permanente, nunca cambia. El <strong>TIE (Tarjeta de Identidad 
                        de Extranjero)</strong> es la tarjeta física que contiene tu NIE, foto, huellas y datos 
                        personales. El NIE no se renueva, pero el TIE sí debe renovarse periódicamente según 
                        el tipo de autorización que tengas.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        ¿Cuánto cuesta renovar el TIE en 2026?
                      </h3>
                      <p className="text-gray-700">
                        Las tasas principales son: <strong>Tasa 790-012 (expedición de tarjeta): 16,08€</strong>. 
                        Dependiendo del tipo de autorización, puede ser necesario pagar también la 
                        <strong> Tasa 790-052 (residencia temporal)</strong> de unos 16,32€ o 
                        <strong> Tasa 790-062 (residencia de larga duración)</strong> de unos 22,14€. 
                        Los importes pueden actualizarse anualmente.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        ¿Qué pasa si mi TIE está caducado y no he renovado?
                      </h3>
                      <p className="text-gray-700">
                        Tienes hasta <strong>90 días después de la caducidad</strong> para solicitar la renovación. 
                        Pasado ese plazo, se considera que has perdido tu autorización de residencia y deberás 
                        iniciar un nuevo procedimiento desde cero. Durante el período de caducidad, técnicamente 
                        estás en situación irregular, lo que puede afectar a tu trabajo y otros trámites. 
                        Es crucial no llegar a esta situación.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        ¿Puedo viajar con el TIE caducado mientras espero la renovación?
                      </h3>
                      <p className="text-gray-700">
                        Si has solicitado la renovación dentro del plazo y tienes el resguardo de la solicitud, 
                        puedes permanecer legalmente en España. Sin embargo, <strong>para viajar fuera del espacio 
                        Schengen</strong>, necesitarás solicitar una <strong>autorización de regreso</strong> en la 
                        oficina de extranjería. Para viajes dentro del espacio Schengen, el resguardo junto con 
                        tu pasaporte válido debería ser suficiente, aunque algunos países pueden poner dificultades. 
                        Consulta siempre con extranjería antes de viajar con el TIE caducado.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-4 space-y-6">
                  {/* CTA Card */}
                  <div className="bg-gradient-to-br from-red-700 to-red-800 rounded-2xl shadow-xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-3">¿No encuentras cita?</h3>
                    <p className="text-red-100 mb-4 text-sm">
                      Nuestro sistema monitorea la disponibilidad de citas 24/7 y te notifica al instante cuando aparece una cita.
                    </p>
                    <a
                      href="https://wa.me/923221430630?text=Hola,%20necesito%20cita%20para%20renovar%20mi%20NIE/TIE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-bold py-3 px-4 rounded-xl transition-colors mb-3"
                    >
                      💬 Contactar WhatsApp
                    </a>
                    <Link
                      href="/solicitar-cita"
                      className="block w-full bg-white text-red-700 text-center font-bold py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      Solicitar Cita
                    </Link>
                    <p className="text-xs text-red-200 mt-3 text-center">
                      Sin pago por adelantado
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Enlaces Útiles</h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="https://sede.administracionespublicas.gob.es/icpplus/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Portal de Cita Previa
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.inclusion.gob.es/documents/410169/2156469/17-Formulario_TIE.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          Formulario EX-17
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://sede.policia.gob.es/Tasa790_012/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Tasa 790-012
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* WhatsApp Channel */}
                  <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">📱 Canal de WhatsApp</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Únete a nuestro canal para recibir alertas de disponibilidad de citas y consejos de extranjería.
                    </p>
                    <a
                      href="https://whatsapp.com/channel/0029Vb6vC8KAYlUPnU8VcH2w"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-3 px-4 rounded-xl transition-colors"
                    >
                      Unirse al Canal
                    </a>
                  </div>

                  {/* Related Services */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Servicios Relacionados</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/servicios/toma-de-huellas"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-2xl mr-3">👆</span>
                          <div>
                            <span className="font-medium text-gray-900 group-hover:text-red-700">Toma de Huellas</span>
                            <p className="text-xs text-gray-500">Cita para expedición TIE</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios/cita-previa-extranjeria"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-2xl mr-3">📅</span>
                          <div>
                            <span className="font-medium text-gray-900 group-hover:text-red-700">Cita Extranjería</span>
                            <p className="text-xs text-gray-500">Todas las provincias</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios/arraigo"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-2xl mr-3">🏠</span>
                          <div>
                            <span className="font-medium text-gray-900 group-hover:text-red-700">Arraigo</span>
                            <p className="text-xs text-gray-500">Social, laboral y familiar</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios/nacionalidad"
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-2xl mr-3">🇪🇸</span>
                          <div>
                            <span className="font-medium text-gray-900 group-hover:text-red-700">Nacionalidad</span>
                            <p className="text-xs text-gray-500">Ciudadanía española</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Main CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-700 via-red-800 to-red-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
              ¿Necesitas ayuda para renovar tu NIE/TIE?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Te conseguimos cita para la renovación de tu tarjeta de residencia en cualquier 
              oficina de extranjería de España. Monitoreo 24/7 y notificación instantánea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://wa.me/923221430630?text=Hola,%20necesito%20cita%20para%20renovar%20mi%20NIE/TIE.%20Mi%20TIE%20caduca%20el..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contactar por WhatsApp
              </a>
              <Link
                href="/solicitar-cita"
                className="inline-flex items-center justify-center bg-white text-red-700 text-lg font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
              >
                Solicitar Cita Ahora
              </Link>
            </div>
            <div className="flex items-center justify-center text-red-200">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Sin pago por adelantado - Pague después de verificar su cita
            </div>
          </div>
        </section>

        {/* Province Section for SEO */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Renovación de NIE/TIE en Todas las Provincias
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                'Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Málaga', 'Alicante',
                'Murcia', 'Palma de Mallorca', 'Las Palmas', 'Bilbao', 'Zaragoza', 'Granada',
                'Almería', 'Girona', 'Tarragona', 'Castellón', 'Tenerife', 'Córdoba',
              ].map((city) => (
                <div key={city} className="bg-white rounded-lg px-4 py-2 text-center text-sm text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-6 text-sm">
              Y todas las demás provincias de España. Consúltanos tu ubicación.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
