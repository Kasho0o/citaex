import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nacionalidad Española  2026 - Requisitos y Trámites | CitaEx',
  description: 'Guía completa para obtener la nacionalidad española  2026. Requisitos, exámenes CCSE y DELE, documentación y proceso paso a paso. Te ayudamos sin pago adelantado.',
  keywords: [
    'nacionalidad española',
    'ciudadanía española',
    'obtener nacionalidad española',
    'nacionalidad española por residencia',
    'examen CCSE',
    'examen DELE',
    'requisitos nacionalidad española',
    'solicitar nacionalidad española',
    'nacionalidad española  2026',
    'tramitar nacionalidad española',
  ],
  openGraph: {
    title: 'Nacionalidad Española  2026 - Requisitos y Trámites | CitaEx',
    description: 'Guía completa para obtener la nacionalidad española  2026. Requisitos, exámenes CCSE y DELE, documentación y proceso paso a paso.',
    url: 'https://citaex.com/servicios/nacionalidad',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://citaex.com/og/nacionalidad.png',
        width: 1200,
        height: 630,
        alt: 'Nacionalidad Española - CitaEx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nacionalidad Española  2026 - Requisitos y Trámites | CitaEx',
    description: 'Guía completa para obtener la nacionalidad española. Requisitos, exámenes y documentación.',
  },
  alternates: {
    canonical: 'https://citaex.com/servicios/nacionalidad',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuántos años de residencia necesito para obtener la nacionalidad española?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende de tu situación: 10 años como norma general, 5 años para refugiados, 2 años para nacionales de países iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial, Portugal o sefardíes, y 1 año para nacidos en España, casados con español/a, viudos de español/a o nacidos fuera de padres españoles.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué exámenes necesito aprobar para la nacionalidad española?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Necesitas aprobar dos exámenes del Instituto Cervantes: el CCSE (Conocimientos Constitucionales y Socioculturales de España) que tiene 25 preguntas sobre cultura, sociedad y gobierno español, y el DELE A2 o superior para acreditar tu nivel de español, aunque este último no es necesario si eres de un país hispanohablante.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda el proceso de nacionalidad española?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El plazo legal máximo es de 1 año para resolver, pero en la práctica puede tardar entre 1 y 3 años dependiendo del volumen de solicitudes. Si no recibes respuesta en 1 año, se considera silencio administrativo positivo y puedes reclamar la concesión.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo tener doble nacionalidad con España?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'España permite la doble nacionalidad solo con países iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial y Portugal. Si eres de otro país, tendrás que renunciar a tu nacionalidad anterior, aunque algunos países no reconocen esta renuncia y podrías mantener ambas de facto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta solicitar la nacionalidad española?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tasa oficial (Tasa 790-026) es de aproximadamente 104€. Además, debes pagar los exámenes CCSE (85€) y DELE A2 (130€ aproximadamente), más los costes de obtener certificados como antecedentes penales, partida de nacimiento apostillada, etc.',
      },
    },
  ],
};

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
      name: 'Nacionalidad Española',
      item: 'https://citaex.com/servicios/nacionalidad',
    },
  ],
};

export default function NacionalidadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/servicios" className="text-gray-500 hover:text-red-700">
                  Servicios
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-red-700 font-medium">Nacionalidad Española</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-700 via-red-800 to-yellow-600 text-white py-16 lg:py-24 relative overflow-hidden">
          {/* Spanish flag decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 right-0 h-1/4 bg-red-600"></div>
            <div className="absolute top-1/4 left-0 right-0 h-2/4 bg-yellow-500"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-red-600"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
                  <span className="text-yellow-200 text-sm font-medium">🇪🇸 Ciudadanía Española  2026</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Nacionalidad Española: Guía Completa de Requisitos y Trámites
                </h1>
                <p className="text-xl text-red-100 mb-8 leading-relaxed">
                  Obtener la <strong>nacionalidad española</strong> es el paso definitivo para integrarte 
                  plenamente en España. Te explicamos todas las vías, requisitos, exámenes CCSE y DELE, 
                  documentación necesaria y el proceso completo para convertirte en ciudadano español.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/923221430630?text=Hola%2C%20necesito%20información%20sobre%20nacionalidad%20española"
                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consulta Gratuita
                  </a>
                  <Link
                    href="/solicitar-cita"
                    className="inline-flex items-center justify-center bg-white text-red-700 font-semibold px-8 py-4 rounded-xl hover:bg-red-50 transition-all duration-200"
                  >
                    Solicitar Cita Ahora
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold mb-6 text-center">Tiempo de Residencia Requerido</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-red-100">Norma general</span>
                      <span className="text-2xl font-bold text-yellow-400">10 años</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-red-100">Refugiados</span>
                      <span className="text-2xl font-bold text-yellow-400">5 años</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-red-100">Iberoamericanos</span>
                      <span className="text-2xl font-bold text-green-400">2 años</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-red-100">Casados con español/a</span>
                      <span className="text-2xl font-bold text-green-400">1 año</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sin pago adelantado</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Asesoramiento completo</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Información actualizada  2026</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Atención WhatsApp inmediata</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content Area */}
              <div className="lg:col-span-2 space-y-12">
                {/* Qué es la nacionalidad */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    ¿Qué Significa Obtener la Nacionalidad Española?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4">
                      La <strong>nacionalidad española</strong> te convierte en ciudadano de pleno derecho 
                      de España y de la Unión Europea. Es el reconocimiento jurídico de tu pertenencia 
                      a la comunidad española, con todos los derechos y deberes que ello implica.
                    </p>
                    <p className="mb-4">
                      A diferencia de la residencia, que debe renovarse periódicamente y tiene limitaciones, 
                      la <strong>ciudadanía española</strong> es permanente e irrevocable (salvo casos muy 
                      excepcionales). Te permite votar, presentarte a elecciones, acceder a empleos públicos 
                      y moverte libremente por toda la Unión Europea.
                    </p>
                    <p>
                      El proceso para <strong>obtener la nacionalidad española en  2026</strong> está regulado 
                      por el Código Civil español y se gestiona principalmente a través del Ministerio de 
                      Justicia, aunque la solicitud se presenta de forma telemática.
                    </p>
                  </div>
                </div>

                {/* Beneficios de la nacionalidad */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Beneficios de Ser Ciudadano Español
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xl">🗳️</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Derecho al voto</h3>
                          <p className="text-sm text-gray-600">Votar en todas las elecciones y referéndums</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xl">🇪🇺</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Ciudadanía europea</h3>
                          <p className="text-sm text-gray-600">Vivir y trabajar en cualquier país de la UE</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xl">🏛️</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Empleo público</h3>
                          <p className="text-sm text-gray-600">Acceso a oposiciones y cargos públicos</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl">
                        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xl">✈️</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Pasaporte español</h3>
                          <p className="text-sm text-gray-600">Uno de los más potentes del mundo (190+ países)</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xl">👨‍👩‍👧</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Transmitir nacionalidad</h3>
                          <p className="text-sm text-gray-600">Tus hijos serán españoles de origen</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-xl">
                        <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xl">🛡️</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Protección consular</h3>
                          <p className="text-sm text-gray-600">Asistencia de embajadas españolas y de la UE</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-xl">
                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xl">🔄</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Sin renovaciones</h3>
                          <p className="text-sm text-gray-600">La nacionalidad es permanente y vitalicia</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xl">📜</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Derechos plenos</h3>
                          <p className="text-sm text-gray-600">Igualdad total con españoles de nacimiento</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vías de obtención */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Vías para Obtener la Nacionalidad Española
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Existen varias formas de adquirir la <strong>ciudadanía española</strong>, dependiendo 
                    de tu situación personal, origen y tiempo de residencia en España:
                  </p>
                  
                  <div className="space-y-6">
                    {/* Por residencia */}
                    <div className="border-2 border-red-200 rounded-xl overflow-hidden">
                      <div className="bg-red-50 p-4 border-b border-red-200">
                        <h3 className="text-xl font-bold text-red-900 flex items-center">
                          <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                          Nacionalidad por Residencia (la más común)
                        </h3>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-700 mb-4">
                          Es la vía más utilizada. Requiere haber residido en España de forma legal, 
                          continuada e inmediatamente anterior a la solicitud durante un período determinado:
                        </p>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="p-3 text-left font-semibold text-gray-900">Situación</th>
                                <th className="p-3 text-left font-semibold text-gray-900">Años requeridos</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr>
                                <td className="p-3 text-gray-700">Norma general (cualquier país)</td>
                                <td className="p-3 font-bold text-red-600">10 años</td>
                              </tr>
                              <tr>
                                <td className="p-3 text-gray-700">Refugiados con asilo concedido</td>
                                <td className="p-3 font-bold text-orange-600">5 años</td>
                              </tr>
                              <tr className="bg-green-50">
                                <td className="p-3 text-gray-700">
                                  <strong>Países iberoamericanos</strong>, Andorra, Filipinas, Guinea Ecuatorial, 
                                  Portugal, sefardíes
                                </td>
                                <td className="p-3 font-bold text-green-600">2 años</td>
                              </tr>
                              <tr className="bg-green-50">
                                <td className="p-3 text-gray-700">
                                  Casados con español/a (1 año de matrimonio + convivencia)
                                </td>
                                <td className="p-3 font-bold text-green-600">1 año</td>
                              </tr>
                              <tr className="bg-green-50">
                                <td className="p-3 text-gray-700">Nacidos en territorio español</td>
                                <td className="p-3 font-bold text-green-600">1 año</td>
                              </tr>
                              <tr className="bg-green-50">
                                <td className="p-3 text-gray-700">Viudos/as de español/a</td>
                                <td className="p-3 font-bold text-green-600">1 año</td>
                              </tr>
                              <tr className="bg-green-50">
                                <td className="p-3 text-gray-700">Nacidos fuera de España de padre o madre español de origen</td>
                                <td className="p-3 font-bold text-green-600">1 año</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                          <p className="text-blue-800">
                            <strong>Países iberoamericanos:</strong> Argentina, Bolivia, Brasil, Chile, Colombia, 
                            Costa Rica, Cuba, Ecuador, El Salvador, Guatemala, Honduras, México, Nicaragua, 
                            Panamá, Paraguay, Perú, Puerto Rico, República Dominicana, Uruguay y Venezuela.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Por opción */}
                    <div className="border-2 border-blue-200 rounded-xl overflow-hidden">
                      <div className="bg-blue-50 p-4 border-b border-blue-200">
                        <h3 className="text-xl font-bold text-blue-900 flex items-center">
                          <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                          Nacionalidad por Opción
                        </h3>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-700 mb-4">
                          Disponible para personas con vínculos especiales con España que pueden "optar" 
                          por la nacionalidad española:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span>Personas bajo patria potestad de un español</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span>Aquellos cuyo padre o madre hubiera sido originariamente español y nacido en España</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span>Personas cuya filiación o nacimiento en España se determine después de los 18 años</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span>Adoptados mayores de 18 años (2 años tras adopción)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Por carta de naturaleza */}
                    <div className="border-2 border-purple-200 rounded-xl overflow-hidden">
                      <div className="bg-purple-50 p-4 border-b border-purple-200">
                        <h3 className="text-xl font-bold text-purple-900 flex items-center">
                          <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                          Nacionalidad por Carta de Naturaleza
                        </h3>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-700">
                          Concedida por Real Decreto a personas que acrediten <strong>circunstancias 
                          excepcionales</strong> que justifiquen la concesión. Es discrecional y poco 
                          frecuente. Se ha utilizado para deportistas de élite, artistas destacados 
                          o personas con méritos extraordinarios para España.
                        </p>
                      </div>
                    </div>

                    {/* Por posesión de estado */}
                    <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-gray-50 p-4 border-b border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center">
                          <span className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                          Nacionalidad por Posesión de Estado
                        </h3>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-700">
                          Para quienes hayan utilizado la nacionalidad española de buena fe durante 
                          10 años, con base en un título inscrito en el Registro Civil (aunque luego 
                          resultara inexistente o viciado). Es un supuesto muy específico.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requisitos generales */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Requisitos para la Nacionalidad por Residencia
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 border-2 border-green-200 rounded-xl bg-green-50">
                        <h3 className="font-bold text-green-800 mb-2 flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          Residencia legal
                        </h3>
                        <p className="text-sm text-gray-700">
                          Haber residido en España de forma legal durante el tiempo requerido según tu caso 
                          (1, 2, 5 o 10 años). Debe ser residencia continuada e inmediatamente anterior a la solicitud.
                        </p>
                      </div>
                      <div className="p-4 border-2 border-green-200 rounded-xl bg-green-50">
                        <h3 className="font-bold text-green-800 mb-2 flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          Buena conducta cívica
                        </h3>
                        <p className="text-sm text-gray-700">
                          No tener antecedentes penales ni policiales en España ni en tu país de origen 
                          que impidan la concesión.
                        </p>
                      </div>
                      <div className="p-4 border-2 border-green-200 rounded-xl bg-green-50">
                        <h3 className="font-bold text-green-800 mb-2 flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          Suficiente integración
                        </h3>
                        <p className="text-sm text-gray-700">
                          Demostrar grado suficiente de integración en la sociedad española mediante 
                          los exámenes CCSE y DELE.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 border-2 border-blue-200 rounded-xl bg-blue-50">
                        <h3 className="font-bold text-blue-800 mb-2 flex items-center">
                          <span className="text-blue-600 mr-2">📝</span>
                          Examen CCSE
                        </h3>
                        <p className="text-sm text-gray-700">
                          Conocimientos Constitucionales y Socioculturales de España. 25 preguntas, 
                          aprobar con 60% (15 aciertos).
                        </p>
                      </div>
                      <div className="p-4 border-2 border-blue-200 rounded-xl bg-blue-50">
                        <h3 className="font-bold text-blue-800 mb-2 flex items-center">
                          <span className="text-blue-600 mr-2">🗣️</span>
                          Examen DELE A2 o superior
                        </h3>
                        <p className="text-sm text-gray-700">
                          Diploma de Español como Lengua Extranjera nivel A2 mínimo. <strong>Exentos:</strong> 
                          nacionales de países hispanohablantes.
                        </p>
                      </div>
                      <div className="p-4 border-2 border-yellow-200 rounded-xl bg-yellow-50">
                        <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
                          <span className="text-yellow-600 mr-2">⚠️</span>
                          Jurar/prometer la Constitución
                        </h3>
                        <p className="text-sm text-gray-700">
                          Al final del proceso, debes jurar o prometer fidelidad al Rey y obediencia 
                          a la Constitución y las leyes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exámenes CCSE y DELE */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
                  <h2 className="text-3xl font-bold mb-6">
                    Exámenes CCSE y DELE: Lo Que Necesitas Saber
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <span className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3 text-lg font-bold">📋</span>
                        Examen CCSE
                      </h3>
                      <ul className="space-y-3 text-blue-100">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span><strong>25 preguntas</strong> tipo test (máx. 45 minutos)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span><strong>Aprobar:</strong> mínimo 15 correctas (60%)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span><strong>Temas:</strong> Constitución, organización territorial, cultura, historia, sociedad española</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span><strong>Coste:</strong> 85€ aproximadamente</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span><strong>Validez:</strong> 4 años desde aprobación</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span><strong>Convocatorias:</strong> varias al año (Instituto Cervantes)</span>
                        </li>
                      </ul>
                      <a
                        href="https://examenes.cervantes.es/es/ccse/preparar-prueba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                      >
                        Preparar examen CCSE →
                      </a>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <span className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3 text-lg font-bold">🗣️</span>
                        Examen DELE A2
                      </h3>
                      <ul className="space-y-3 text-blue-100">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Diploma de Español como Lengua Extranjera</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span><strong>Nivel mínimo:</strong> A2 (básico-intermedio)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span><strong>Pruebas:</strong> comprensión lectora, auditiva, expresión escrita y oral</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span><strong>Coste:</strong> 130€ aproximadamente</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span><strong>Validez:</strong> indefinida (no caduca)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span className="text-yellow-300"><strong>Exentos:</strong> países hispanohablantes</span>
                        </li>
                      </ul>
                      <a
                        href="https://examenes.cervantes.es/es/dele/preparar-prueba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                      >
                        Preparar examen DELE →
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-400/20 rounded-xl border border-yellow-400/30">
                    <p className="text-yellow-100">
                      <strong>💡 Consejo:</strong> Prepara primero el CCSE y DELE antes de iniciar el trámite. 
                      Puedes presentarte varias veces si no apruebas. El Instituto Cervantes ofrece materiales 
                      de preparación gratuitos en su web.
                    </p>
                  </div>
                </div>

                {/* Documentación necesaria */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Documentación Necesaria para la Nacionalidad
                  </h2>
                  <p className="text-gray-700 mb-6">
                    La solicitud de nacionalidad española se presenta de forma telemática. Necesitarás 
                    tener escaneados y preparados los siguientes documentos:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                        Documentos de identidad
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          Pasaporte completo (todas las páginas)
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          NIE/TIE vigente
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          Certificado de empadronamiento histórico
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                        Documentos civiles
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600" readOnly />
                          Partida de nacimiento (apostillada y traducida)
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600" readOnly />
                          Certificado de matrimonio (si aplica)
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600" readOnly />
                          Libro de familia (si tienes hijos españoles)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                        Antecedentes y exámenes
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-green-600" readOnly />
                          Certificado de antecedentes penales del país de origen
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-green-600" readOnly />
                          Diploma CCSE (aprobado)
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-green-600" readOnly />
                          Diploma DELE A2 o superior (o exención)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                        Tasas y formularios
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-yellow-600" readOnly />
                          Tasa 790-026 (aproximadamente 104€)
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-yellow-600" readOnly />
                          Formulario de solicitud cumplimentado
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <p className="text-yellow-800">
                      <strong>⚠️ Importante:</strong> Todos los documentos extranjeros deben estar 
                      <strong> apostillados</strong> (o legalizados) y <strong>traducidos al español</strong> 
                      por traductor jurado si no están en español.
                    </p>
                  </div>
                </div>

                {/* Proceso paso a paso */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Proceso de Solicitud Paso a Paso
                  </h2>
                  <div className="space-y-6">
                    {/* Paso 1 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          1
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Preparar exámenes CCSE y DELE</h3>
                        <p className="text-gray-700">
                          Antes de solicitar, aprueba los exámenes del Instituto Cervantes. El CCSE tiene 
                          convocatorias cada 2 meses aproximadamente. El DELE puedes presentarte en varias 
                          fechas al año. Recomendamos prepararte con los materiales oficiales gratuitos.
                        </p>
                      </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          2
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Reunir la documentación</h3>
                        <p className="text-gray-700">
                          Solicita tu partida de nacimiento apostillada, antecedentes penales de tu país, 
                          certificado de empadronamiento histórico y demás documentos. Las apostillas y 
                          traducciones pueden tardar semanas, planifica con tiempo.
                        </p>
                      </div>
                    </div>

                    {/* Paso 3 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          3
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Presentar solicitud telemática</h3>
                        <p className="text-gray-700">
                          Accede a la <strong>Sede Electrónica del Ministerio de Justicia</strong> con certificado 
                          digital o Cl@ve. Cumplimenta el formulario, adjunta los documentos escaneados y 
                          paga la tasa 790-026. Recibirás un justificante de presentación.
                        </p>
                      </div>
                    </div>

                    {/* Paso 4 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          4
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Esperar resolución</h3>
                        <p className="text-gray-700">
                          El plazo legal máximo es de <strong>1 año</strong>. Puedes consultar el estado de 
                          tu expediente en la sede electrónica. Si pasa 1 año sin respuesta, se considera 
                          <strong> silencio administrativo positivo</strong> y puedes reclamar.
                        </p>
                      </div>
                    </div>

                    {/* Paso 5 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          5
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Resolución favorable</h3>
                        <p className="text-gray-700">
                          Si se concede, recibirás notificación. Tienes <strong>180 días</strong> para 
                          completar los siguientes pasos obligatorios, de lo contrario caduca la concesión.
                        </p>
                      </div>
                    </div>

                    {/* Paso 6 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          6
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Jura o promesa + inscripción</h3>
                        <p className="text-gray-700 mb-4">
                          Debes acudir al <strong>Registro Civil</strong> para:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Jurar o prometer fidelidad al Rey y obediencia a la Constitución</li>
                          <li>Renunciar a tu nacionalidad anterior (si no hay convenio de doble nacionalidad)</li>
                          <li>Inscribir tu nacionalidad en el Registro Civil</li>
                          <li>Solicitar tu DNI español</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doble nacionalidad */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Doble Nacionalidad con España
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                    <p>
                      España <strong>solo permite la doble nacionalidad</strong> con determinados países 
                      con los que existe tratado o vínculo histórico especial. Si eres de otro país, 
                      tendrás que <strong>renunciar formalmente</strong> a tu nacionalidad anterior en 
                      el acto de jura.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                      <h3 className="font-bold text-green-800 mb-4 flex items-center">
                        <span className="text-green-600 text-xl mr-2">✓</span>
                        Países con doble nacionalidad
                      </h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Iberoamérica:</strong> Argentina, Bolivia, Chile, Colombia, Costa Rica, Cuba, Ecuador, El Salvador, Guatemala, Honduras, México, Nicaragua, Panamá, Paraguay, Perú, Rep. Dominicana, Uruguay, Venezuela</li>
                        <li><strong>Otros:</strong> Andorra, Filipinas, Guinea Ecuatorial, Portugal</li>
                        <li><strong>Caso especial:</strong> Francia (menores de edad)</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                      <h3 className="font-bold text-red-800 mb-4 flex items-center">
                        <span className="text-red-600 text-xl mr-2">✗</span>
                        Países sin doble nacionalidad
                      </h3>
                      <p className="text-gray-700 text-sm mb-4">
                        El resto de países: Marruecos, China, Rusia, Ucrania, India, Pakistán, Bangladesh, 
                        Senegal, Nigeria, Rumania, Bulgaria, etc.
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>Nota:</strong> Aunque renuncies formalmente, algunos países no reconocen 
                        esta renuncia y podrías mantener ambas nacionalidades de facto.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Costes */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Costes del Proceso de Nacionalidad
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-4 text-left font-semibold text-gray-900">Concepto</th>
                          <th className="p-4 text-right font-semibold text-gray-900">Coste aproximado</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-4 text-gray-700">Tasa 790-026 (solicitud nacionalidad)</td>
                          <td className="p-4 text-right font-semibold">104,05€</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Examen CCSE (Instituto Cervantes)</td>
                          <td className="p-4 text-right font-semibold">85€</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Examen DELE A2 (si no eres hispanohablante)</td>
                          <td className="p-4 text-right font-semibold">130€</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Partida de nacimiento (apostilla + traducción)</td>
                          <td className="p-4 text-right font-semibold">50-150€</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Antecedentes penales (apostilla + traducción)</td>
                          <td className="p-4 text-right font-semibold">50-100€</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Certificado de empadronamiento histórico</td>
                          <td className="p-4 text-right font-semibold">Gratuito</td>
                        </tr>
                        <tr className="bg-yellow-50">
                          <td className="p-4 text-gray-900 font-bold">TOTAL APROXIMADO</td>
                          <td className="p-4 text-right font-bold text-red-600">420 - 570€</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    * Los precios pueden variar. Los costes de apostillas y traducciones dependen del país 
                    y del traductor jurado.
                  </p>
                </div>

                {/* Plazos */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Plazos del Proceso de Nacionalidad
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 rounded-xl">
                      <h3 className="font-bold text-blue-900 mb-4">Plazos legales</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex justify-between">
                          <span>Resolución máxima:</span>
                          <span className="font-bold">1 año</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Silencio positivo:</span>
                          <span className="font-bold text-green-600">Tras 1 año</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Jura/inscripción:</span>
                          <span className="font-bold">180 días tras concesión</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-yellow-50 rounded-xl">
                      <h3 className="font-bold text-yellow-900 mb-4">Plazos reales  2026</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex justify-between">
                          <span>Tiempo real resolución:</span>
                          <span className="font-bold text-yellow-600">1-3 años</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Preparar documentación:</span>
                          <span className="font-bold">1-3 meses</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Cita jura Registro Civil:</span>
                          <span className="font-bold">1-2 meses</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Preguntas Frecuentes sobre Nacionalidad Española
                  </h2>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Cuántos años de residencia necesito para obtener la nacionalidad española?
                      </h3>
                      <p className="text-gray-700">
                        Depende de tu situación: <strong>10 años</strong> como norma general, <strong>5 años</strong> para 
                        refugiados, <strong>2 años</strong> para nacionales de países iberoamericanos, Andorra, 
                        Filipinas, Guinea Ecuatorial, Portugal o sefardíes, y <strong>1 año</strong> para nacidos 
                        en España, casados con español/a, viudos de español/a o nacidos fuera de España de 
                        padre o madre español de origen.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Qué exámenes necesito aprobar para la nacionalidad española?
                      </h3>
                      <p className="text-gray-700">
                        Necesitas aprobar dos exámenes del Instituto Cervantes: el <strong>CCSE</strong> 
                        (Conocimientos Constitucionales y Socioculturales de España) que tiene 25 preguntas 
                        sobre cultura, sociedad y gobierno español, y el <strong>DELE A2</strong> o superior 
                        para acreditar tu nivel de español. Los nacionales de países hispanohablantes están 
                        exentos del DELE.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Cuánto tarda el proceso de nacionalidad española?
                      </h3>
                      <p className="text-gray-700">
                        El plazo legal máximo es de <strong>1 año</strong> para resolver, pero en la práctica 
                        puede tardar entre <strong>1 y 3 años</strong> dependiendo del volumen de solicitudes. 
                        Si no recibes respuesta en 1 año, se considera silencio administrativo positivo y 
                        puedes reclamar la concesión ante los tribunales.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Puedo tener doble nacionalidad con España?
                      </h3>
                      <p className="text-gray-700">
                        España permite la doble nacionalidad solo con <strong>países iberoamericanos</strong>, 
                        Andorra, Filipinas, Guinea Ecuatorial y Portugal. Si eres de otro país, tendrás que 
                        renunciar a tu nacionalidad anterior en el acto de jura, aunque algunos países no 
                        reconocen esta renuncia y podrías mantener ambas de facto.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Cuánto cuesta solicitar la nacionalidad española?
                      </h3>
                      <p className="text-gray-700">
                        La tasa oficial (Tasa 790-026) es de aproximadamente <strong>104€</strong>. Además, 
                        debes pagar los exámenes CCSE (85€) y DELE A2 (130€ aproximadamente si no eres 
                        hispanohablante), más los costes de obtener certificados como antecedentes penales, 
                        partida de nacimiento apostillada, etc. El total puede rondar los <strong>400-600€</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-red-700 to-yellow-600 rounded-2xl p-6 text-white sticky top-4">
                  <h3 className="text-xl font-bold mb-4">¿Listo para ser español?</h3>
                  <p className="text-red-100 mb-6">
                    Te ayudamos con la documentación y gestión de tu nacionalidad. Consulta gratuita sin compromiso.
                  </p>
                  <a
                    href="https://wa.me/923221430630?text=Hola%2C%20necesito%20ayuda%20para%20tramitar%20mi%20nacionalidad%20española"
                    className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl text-center transition-all duration-200 mb-3"
                  >
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Consultar por WhatsApp
                    </span>
                  </a>
                  <Link
                    href="/solicitar-cita"
                    className="block w-full bg-white text-red-700 font-semibold py-4 rounded-xl text-center hover:bg-red-50 transition-all duration-200"
                  >
                    Solicitar Cita
                  </Link>
                  <p className="text-sm text-red-200 text-center mt-4">
                    Sin pago adelantado · Pague después de verificar
                  </p>
                </div>

                {/* Quick Info */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Datos rápidos</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Tasa solicitud:</span>
                      <span className="font-bold text-gray-900">104,05€</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Plazo resolución:</span>
                      <span className="font-bold text-gray-900">1-3 años</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Exámenes:</span>
                      <span className="font-bold text-gray-900">CCSE + DELE</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Solicitud:</span>
                      <span className="font-bold text-green-600">Telemática</span>
                    </li>
                  </ul>
                </div>

                {/* Enlaces útiles */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Enlaces oficiales</h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://www.mjusticia.gob.es/es/ciudadania/nacionalidad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Ministerio de Justicia - Nacionalidad
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sede.mjusticia.gob.es/es/tramites/nacionalidad-espanola"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Sede Electrónica - Solicitud
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://examenes.cervantes.es/es/ccse/informacion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Instituto Cervantes - CCSE
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://examenes.cervantes.es/es/dele/informacion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Instituto Cervantes - DELE
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sede.policia.gob.es/Tasa790_026/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Tasa 790-026
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Países hispanohablantes */}
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-green-900 mb-4">🇪🇸 Países con beneficios</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Solo 2 años de residencia + exentos del DELE:
                  </p>
                  <div className="text-sm text-gray-600">
                    Argentina, Bolivia, Chile, Colombia, Costa Rica, Cuba, Ecuador, El Salvador, 
                    Guatemala, Honduras, México, Nicaragua, Panamá, Paraguay, Perú, Rep. Dominicana, 
                    Uruguay, Venezuela, Andorra, Filipinas, Guinea Ecuatorial, Portugal
                  </div>
                </div>

                {/* Servicios relacionados */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Servicios relacionados</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/servicios/cita-previa-extranjeria"
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-2xl mr-3">📋</span>
                        <div>
                          <div className="font-semibold text-gray-900">Cita Previa Extranjería</div>
                          <div className="text-sm text-gray-600">Para trámites previos</div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios/renovacion-nie-tie"
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-2xl mr-3">🔄</span>
                        <div>
                          <div className="font-semibold text-gray-900">Renovación NIE/TIE</div>
                          <div className="text-sm text-gray-600">Mantén tu residencia vigente</div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios/arraigo"
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-2xl mr-3">🏡</span>
                        <div>
                          <div className="font-semibold text-gray-900">Arraigo</div>
                          <div className="text-sm text-gray-600">Regularízate primero</div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios/toma-de-huellas"
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-2xl mr-3">👆</span>
                        <div>
                          <div className="font-semibold text-gray-900">Toma de Huellas</div>
                          <div className="text-sm text-gray-600">Para tu nueva tarjeta TIE</div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-16 bg-gradient-to-r from-red-700 via-red-800 to-red-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Listo para Convertirte en Ciudadano Español?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Te acompañamos en todo el proceso: preparación de exámenes, documentación y solicitud. 
              Sin pago por adelantado - Pague después de verificar su cita.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/923221430630?text=Hola%2C%20quiero%20información%20sobre%20nacionalidad%20española"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactar por WhatsApp
              </a>
              <Link
                href="/solicitar-cita"
                className="inline-flex items-center justify-center bg-white text-red-700 font-semibold px-8 py-4 rounded-xl hover:bg-red-50 transition-all duration-200 text-lg"
              >
                Solicitar Cita Ahora
              </Link>
            </div>
            <p className="text-red-200 mt-6 text-sm">
              Atención disponible de lunes a viernes de 9:00 a 20:00
            </p>
          </div>
        </section>

        {/* WhatsApp Channel Banner */}
        <section className="py-8 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Únete a nuestro canal de WhatsApp</h3>
                  <p className="text-sm text-gray-600">Recibe alertas sobre disponibilidad de citas y noticias de extranjería</p>
                </div>
              </div>
              <a
                href="https://whatsapp.com/channel/0029Vb6vC8KAYlUPnU8VcH2w"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Unirse al Canal
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
