import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Asilo en España 2026 - Protección Internacional | CitaEx',
  description: 'Guía completa para solicitar asilo y protección internacional en España  2026. Tarjeta roja, derechos, plazos y documentación. Te ayudamos sin pago adelantado.',
  keywords: [
    'asilo españa',
    'solicitar asilo',
    'protección internacional',
    'refugiado españa',
    'tarjeta roja asilo',
    'asilo político españa',
    'solicitud asilo españa',
    'OAR asilo',
    'cita asilo españa',
    'derechos solicitante asilo',
  ],
  openGraph: {
    title: 'Asilo en España 2026 - Protección Internacional | CitaEx',
    description: 'Guía completa para solicitar asilo y protección internacional en España  2026. Tarjeta roja, derechos, plazos y documentación.',
    url: 'https://citaex.com/servicios/asilo',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://citaex.com/og/asilo.png',
        width: 1200,
        height: 630,
        alt: 'Asilo y Protección Internacional España - CitaEx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asilo en España  2026 - Protección Internacional | CitaEx',
    description: 'Guía completa para solicitar asilo en España. Tarjeta roja, derechos y documentación.',
  },
  alternates: {
    canonical: 'https://citaex.com/servicios/asilo',
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
      name: '¿Cuánto tiempo tengo para solicitar asilo en España?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si entras a España de forma regular, tienes 1 mes desde tu llegada para solicitar asilo. Si tu entrada fue irregular o te encuentras en territorio español, puedes solicitarlo en cualquier momento, aunque se recomienda hacerlo cuanto antes para fortalecer tu caso.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la tarjeta roja de asilo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tarjeta roja es el documento que acredita que has solicitado protección internacional en España. Te identifica como solicitante de asilo, te permite residir legalmente en España y, después de 6 meses, te autoriza a trabajar. Debe renovarse periódicamente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo trabajar mientras espero la resolución de mi asilo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, pero no inmediatamente. A partir de los 6 meses desde la admisión a trámite de tu solicitud, obtienes automáticamente autorización para trabajar en España. Esto se refleja en la renovación de tu tarjeta roja.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda el proceso de asilo en España?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El plazo legal es de 6 meses para resolver, pero en la práctica puede tardar entre 2 y 4 años debido al volumen de solicitudes. Durante este tiempo, mantienes tu estatus de solicitante con la tarjeta roja y puedes acceder a ayudas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si me deniegan el asilo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si te deniegan el asilo, puedes interponer recurso contencioso-administrativo en el plazo de 2 meses. Mientras se resuelve el recurso, en algunos casos puedes mantener tu estancia legal. También existen otras opciones como el arraigo si cumples los requisitos.',
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
      name: 'Asilo y Protección Internacional',
      item: 'https://citaex.com/servicios/asilo',
    },
  ],
};

export default function AsiloPage() {
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
              <li className="text-red-700 font-medium">Asilo</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
                  <span className="text-blue-200 text-sm font-medium">🛡️ Protección Internacional  2026</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Asilo en España: Guía Completa de Protección Internacional
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Si huyes de persecución, guerra o violencia, España puede ofrecerte protección. 
                  Te explicamos todo el proceso para solicitar asilo, obtener la tarjeta roja y 
                  conocer tus derechos como solicitante de protección internacional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/923221430630?text=Hola%2C%20necesito%20información%20sobre%20asilo%20en%20España"
                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consulta Gratuita
                  </a>
                  <Link
                    href="/solicitar-cita"
                    className="inline-flex items-center justify-center bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200"
                  >
                    Solicitar Cita Ahora
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold mb-6 text-center">Estadísticas de Asilo 2024</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-blue-200">Solicitudes recibidas</span>
                      <span className="text-2xl font-bold text-yellow-400">163.000+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-blue-200">Tasa de reconocimiento</span>
                      <span className="text-2xl font-bold text-green-400">12%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-blue-200">Tiempo promedio resolución</span>
                      <span className="text-2xl font-bold text-yellow-400">2-4 años</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-blue-200">Principal origen</span>
                      <span className="text-xl font-bold text-white">Venezuela, Colombia</span>
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
                <span>Orientación personalizada</span>
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
                {/* Qué es el Asilo */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    ¿Qué es el Asilo y la Protección Internacional?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4">
                      El <strong>asilo en España</strong> es un derecho fundamental reconocido por la Constitución 
                      Española y los tratados internacionales que permite a personas perseguidas encontrar 
                      refugio en territorio español. La <strong>protección internacional</strong> engloba dos 
                      estatutos diferenciados: el <strong>estatuto de refugiado</strong> y la <strong>protección 
                      subsidiaria</strong>.
                    </p>
                    <p className="mb-4">
                      España, como miembro de la Unión Europea y firmante de la Convención de Ginebra de 1951, 
                      tiene la obligación legal de examinar las solicitudes de protección internacional y 
                      proteger a quienes huyen de persecución, guerra, violencia generalizada o violaciones 
                      graves de derechos humanos.
                    </p>
                    <p>
                      El proceso de solicitud de <strong>asilo en España  2026</strong> está regulado por la 
                      Ley 12/2009 de derecho de asilo y de la protección subsidiaria, y es gestionado por 
                      la <strong>Oficina de Asilo y Refugio (OAR)</strong> del Ministerio del Interior.
                    </p>
                  </div>
                </div>

                {/* Diferencias entre estatutos */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Tipos de Protección Internacional
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-blue-900">Estatuto de Refugiado</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          Persecución por raza, religión, nacionalidad, opinión política o pertenencia a grupo social
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          Residencia inicial de 5 años renovable
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          Derecho a trabajar inmediatamente
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          Reagrupación familiar facilitada
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          Documento de viaje de la Convención de Ginebra
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-green-900">Protección Subsidiaria</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          Riesgo de daños graves: pena de muerte, tortura, violencia indiscriminada
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          Residencia inicial de 5 años renovable
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          Derecho a trabajar inmediatamente
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          Reagrupación familiar con requisitos
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          Título de viaje para extranjeros
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Quién puede solicitar asilo */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    ¿Quién Puede Solicitar Asilo en España?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                    <p>
                      Puede solicitar <strong>protección internacional en España</strong> cualquier persona 
                      extranjera (no ciudadano de la UE) que tenga fundados temores de ser perseguida o 
                      sufra un riesgo real de padecer daños graves en su país de origen o residencia habitual.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                        Motivos aceptados
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">→</span>
                          <span>Persecución por <strong>opiniones políticas</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">→</span>
                          <span>Persecución por <strong>religión o creencias</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">→</span>
                          <span>Persecución por <strong>raza, etnia o nacionalidad</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">→</span>
                          <span>Persecución por <strong>orientación sexual o identidad de género</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">→</span>
                          <span>Huir de <strong>conflictos armados</strong> o violencia generalizada</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">→</span>
                          <span>Riesgo de <strong>tortura o tratos inhumanos</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">→</span>
                          <span>Víctimas de <strong>trata de seres humanos</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">→</span>
                          <span>Persecución por <strong>violencia de género</strong></span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">✗</span>
                        Causas de inadmisión
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2 mt-1">→</span>
                          <span>Ya tienes protección en <strong>otro país de la UE</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2 mt-1">→</span>
                          <span>Vienes de un <strong>país seguro</strong> (norma Dublín)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2 mt-1">→</span>
                          <span>Has cometido <strong>crímenes de guerra</strong> o contra la humanidad</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2 mt-1">→</span>
                          <span>Presentas una <strong>solicitud manifiestamente infundada</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2 mt-1">→</span>
                          <span>Motivos puramente <strong>económicos o laborales</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2 mt-1">→</span>
                          <span>Ya tienes <strong>otra solicitud en trámite</strong> en España</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Proceso paso a paso */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Proceso de Solicitud de Asilo Paso a Paso
                  </h2>
                  <div className="space-y-6">
                    {/* Paso 1 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          1
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Manifestar la voluntad de solicitar asilo</h3>
                        <p className="text-gray-700 mb-3">
                          Puedes manifestar tu intención de solicitar asilo en varios lugares:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li><strong>En frontera:</strong> puestos fronterizos, aeropuertos, puertos</li>
                          <li><strong>En territorio:</strong> Oficinas de Extranjería, comisarías de Policía Nacional</li>
                          <li><strong>En CIE:</strong> si te encuentras en un Centro de Internamiento</li>
                        </ul>
                      </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          2
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Cita para formalizar la solicitud</h3>
                        <p className="text-gray-700 mb-3">
                          Recibirás una cita para la <strong>entrevista de formalización</strong> donde:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Explicarás los motivos de tu solicitud con intérprete si lo necesitas</li>
                          <li>Entregarás tu documentación (pasaporte, DNI, pruebas)</li>
                          <li>Se tomarán tus huellas dactilares</li>
                          <li>Firmarás el formulario de solicitud</li>
                        </ul>
                      </div>
                    </div>

                    {/* Paso 3 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          3
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Admisión a trámite</h3>
                        <p className="text-gray-700 mb-3">
                          La OAR decide si admite tu solicitud en un plazo de <strong>1 mes</strong>. Si es admitida:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Recibes la <strong>tarjeta roja</strong> (documento acreditativo)</li>
                          <li>Puedes residir legalmente en España</li>
                          <li>Tienes acceso a servicios sociales y sanitarios</li>
                          <li>Tras 6 meses, podrás trabajar legalmente</li>
                        </ul>
                      </div>
                    </div>

                    {/* Paso 4 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          4
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Instrucción del expediente</h3>
                        <p className="text-gray-700 mb-3">
                          La OAR estudia tu caso durante este período:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Pueden citarte para una <strong>segunda entrevista</strong></li>
                          <li>Verifican la información y documentación</li>
                          <li>Consultan informes de país de origen</li>
                          <li>Debes mantener actualizado tu domicilio</li>
                        </ul>
                      </div>
                    </div>

                    {/* Paso 5 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          5
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Resolución</h3>
                        <p className="text-gray-700 mb-3">
                          Hay tres posibles resultados:
                        </p>
                        <div className="grid sm:grid-cols-3 gap-3">
                          <div className="bg-green-100 p-3 rounded-lg">
                            <strong className="text-green-800">Concesión</strong>
                            <p className="text-sm text-green-700">Estatuto de refugiado o protección subsidiaria</p>
                          </div>
                          <div className="bg-red-100 p-3 rounded-lg">
                            <strong className="text-red-800">Denegación</strong>
                            <p className="text-sm text-red-700">Puedes recurrir en 2 meses</p>
                          </div>
                          <div className="bg-yellow-100 p-3 rounded-lg">
                            <strong className="text-yellow-800">Autorización residencia</strong>
                            <p className="text-sm text-yellow-700">Por razones humanitarias</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* La Tarjeta Roja */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-lg p-8 text-white">
                  <h2 className="text-3xl font-bold mb-6">
                    La Tarjeta Roja: Tu Documento Durante el Proceso
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">¿Qué es la tarjeta roja?</h3>
                      <p className="text-red-100 mb-4">
                        La <strong className="text-white">tarjeta roja</strong> es el documento que te identifica 
                        como solicitante de protección internacional en España. Es tu "DNI temporal" mientras 
                        se resuelve tu solicitud.
                      </p>
                      <ul className="space-y-2 text-red-100">
                        <li className="flex items-center">
                          <span className="mr-2">📄</span>
                          Te identifica legalmente en España
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">🏥</span>
                          Acceso a sanidad pública
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">🎓</span>
                          Acceso a educación
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">💼</span>
                          Autoriza trabajo (tras 6 meses)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Renovación de la tarjeta roja</h3>
                      <div className="bg-white/10 rounded-xl p-4">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">1</span>
                            <span>Primera tarjeta: válida 6 meses (sin trabajo)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">2</span>
                            <span>Primera renovación: 6 meses (CON trabajo)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">3</span>
                            <span>Renovaciones siguientes: cada 6 meses</span>
                          </li>
                        </ul>
                        <p className="mt-4 text-sm text-red-200">
                          ⚠️ Debes renovar ANTES de que caduque. Solicítala con 1 mes de antelación.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Derechos del solicitante */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Derechos de los Solicitantes de Asilo
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { icon: '🏠', title: 'Residencia legal', desc: 'Permanecer en España durante el procedimiento' },
                      { icon: '🏥', title: 'Asistencia sanitaria', desc: 'Acceso a la sanidad pública española' },
                      { icon: '📚', title: 'Educación', desc: 'Acceso a educación pública para menores' },
                      { icon: '💼', title: 'Trabajo', desc: 'Autorización laboral tras 6 meses' },
                      { icon: '🏡', title: 'Acogida', desc: 'Derecho a plaza en sistema de acogida' },
                      { icon: '💰', title: 'Ayudas económicas', desc: 'Prestaciones durante la acogida' },
                      { icon: '🗣️', title: 'Intérprete', desc: 'Asistencia gratuita de intérprete' },
                      { icon: '⚖️', title: 'Asistencia jurídica', desc: 'Abogado gratuito si lo necesitas' },
                      { icon: '👨‍👩‍👧', title: 'Unidad familiar', desc: 'Mantener a tu familia unida' },
                    ].map((derecho, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4">
                        <div className="text-3xl mb-2">{derecho.icon}</div>
                        <h3 className="font-semibold text-gray-900">{derecho.title}</h3>
                        <p className="text-sm text-gray-600">{derecho.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documentación necesaria */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Documentación para Solicitar Asilo
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Aunque el asilo puede solicitarse sin documentación (muchas personas huyen sin poder 
                    obtener documentos), es recomendable aportar todo lo que puedas para fortalecer tu caso:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">📋</span>
                        Documentos de identidad
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600" readOnly />
                          Pasaporte (si lo tienes)
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600" readOnly />
                          DNI o cédula de tu país
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600" readOnly />
                          Partida de nacimiento
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600" readOnly />
                          Libro de familia / actas matrimonio
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">📁</span>
                        Pruebas de persecución
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          Denuncias policiales
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          Informes médicos de agresiones
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          Amenazas escritas, mensajes
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          Noticias sobre tu caso
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          Cartas de organizaciones
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          Fotos, vídeos relevantes
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <p className="text-yellow-800">
                      <strong>💡 Importante:</strong> No tener documentos NO impide solicitar asilo. La entrevista 
                      personal es la prueba más importante. Explica claramente tu historia y por qué huyes.
                    </p>
                  </div>
                </div>

                {/* Dónde solicitar */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    ¿Dónde Solicitar Asilo en España?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-2 border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">En frontera</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">✈️</span>
                          <span><strong>Aeropuertos internacionales:</strong> Madrid-Barajas, Barcelona, Málaga...</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">⚓</span>
                          <span><strong>Puertos:</strong> Algeciras, Ceuta, Melilla, Barcelona...</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">🚗</span>
                          <span><strong>Puestos fronterizos:</strong> La Junquera, Irún...</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-sm text-gray-600">
                        Plazo: Inmediatamente al llegar a frontera
                      </p>
                    </div>
                    <div className="border-2 border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">En territorio español</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">🏢</span>
                          <span><strong>Oficinas de Extranjería</strong> de cada provincia</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">👮</span>
                          <span><strong>Comisarías de Policía Nacional</strong> (Brigada de Extranjería)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">🏛️</span>
                          <span><strong>Oficina de Asilo y Refugio (OAR)</strong> en Madrid</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-sm text-gray-600">
                        Plazo: 1 mes desde entrada legal, o en cualquier momento si entrada irregular
                      </p>
                    </div>
                  </div>
                </div>

                {/* Plazos importantes */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Plazos Importantes en el Proceso de Asilo
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left p-4 font-semibold text-gray-900">Trámite</th>
                          <th className="text-left p-4 font-semibold text-gray-900">Plazo legal</th>
                          <th className="text-left p-4 font-semibold text-gray-900">Plazo real  2026</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-4 text-gray-700">Solicitar asilo (entrada regular)</td>
                          <td className="p-4 text-gray-700">1 mes desde llegada</td>
                          <td className="p-4 text-gray-700">1 mes</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Admisión a trámite</td>
                          <td className="p-4 text-gray-700">1 mes</td>
                          <td className="p-4 text-gray-700">1-3 meses</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Resolución del expediente</td>
                          <td className="p-4 text-gray-700">6 meses</td>
                          <td className="p-4 text-yellow-600 font-semibold">2-4 años</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Autorización para trabajar</td>
                          <td className="p-4 text-gray-700">6 meses desde admisión</td>
                          <td className="p-4 text-green-600 font-semibold">6 meses (automático)</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Recurrir denegación</td>
                          <td className="p-4 text-gray-700">2 meses</td>
                          <td className="p-4 text-gray-700">2 meses</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Renovar tarjeta roja</td>
                          <td className="p-4 text-gray-700">Antes de caducidad</td>
                          <td className="p-4 text-gray-700">1 mes antes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Sistema de acogida */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Sistema de Acogida para Solicitantes de Asilo
                  </h2>
                  <p className="text-gray-700 mb-6">
                    España cuenta con un <strong>Sistema de Acogida e Integración</strong> para personas 
                    solicitantes y beneficiarias de protección internacional, gestionado principalmente 
                    por el Ministerio de Inclusión, Seguridad Social y Migraciones.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">Fase 1: Acogida (6 meses)</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                        <ul className="space-y-2">
                          <li>• Alojamiento en centros de acogida</li>
                          <li>• Manutención completa</li>
                          <li>• Atención psicológica</li>
                        </ul>
                        <ul className="space-y-2">
                          <li>• Clases de español</li>
                          <li>• Orientación legal y social</li>
                          <li>• Ayuda económica para gastos</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-green-900 mb-4">Fase 2: Integración (12 meses)</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                        <ul className="space-y-2">
                          <li>• Vivienda de transición o ayuda alquiler</li>
                          <li>• Formación profesional</li>
                          <li>• Orientación laboral</li>
                        </ul>
                        <ul className="space-y-2">
                          <li>• Seguimiento social</li>
                          <li>• Ayudas económicas decrecientes</li>
                          <li>• Apoyo para autonomía</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-yellow-900 mb-4">Fase 3: Autonomía (6 meses)</h3>
                      <div className="text-gray-700">
                        <p>Apoyo puntual para consolidar la integración: ayudas puntuales para vivienda, 
                        empleo, formación y situaciones de vulnerabilidad.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gray-100 rounded-xl">
                    <p className="text-gray-700">
                      <strong>Organizaciones que gestionan la acogida:</strong> CEAR, ACCEM, Cruz Roja, 
                      ACNUR España, Rescate, y otras entidades colaboradoras.
                    </p>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Preguntas Frecuentes sobre Asilo en España
                  </h2>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Cuánto tiempo tengo para solicitar asilo en España?
                      </h3>
                      <p className="text-gray-700">
                        Si entras a España de forma regular, tienes <strong>1 mes desde tu llegada</strong> para 
                        solicitar asilo. Si tu entrada fue irregular o te encuentras en territorio español, 
                        puedes solicitarlo en cualquier momento, aunque se recomienda hacerlo cuanto antes 
                        para fortalecer tu caso y acceder antes al sistema de acogida y a la autorización de trabajo.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Qué es la tarjeta roja de asilo?
                      </h3>
                      <p className="text-gray-700">
                        La <strong>tarjeta roja</strong> es el documento que acredita que has solicitado 
                        protección internacional en España. Te identifica como solicitante de asilo, te 
                        permite residir legalmente en España y, después de 6 meses desde la admisión a 
                        trámite, te autoriza a trabajar. Debe renovarse cada 6 meses mientras tu solicitud 
                        esté en trámite.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Puedo trabajar mientras espero la resolución de mi asilo?
                      </h3>
                      <p className="text-gray-700">
                        Sí, pero no inmediatamente. A partir de los <strong>6 meses desde la admisión a trámite</strong> de 
                        tu solicitud, obtienes automáticamente autorización para trabajar en España en cualquier 
                        sector y tipo de contrato. Esto se refleja en la renovación de tu tarjeta roja, que 
                        indicará "autoriza a trabajar".
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Cuánto tarda el proceso de asilo en España?
                      </h3>
                      <p className="text-gray-700">
                        El plazo legal para resolver es de <strong>6 meses</strong>, pero en la práctica puede 
                        tardar entre <strong>2 y 4 años</strong> debido al elevado volumen de solicitudes. Durante 
                        este tiempo, mantienes tu estatus de solicitante con la tarjeta roja y puedes acceder 
                        a las ayudas del sistema de acogida y trabajar después de los primeros 6 meses.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Qué pasa si me deniegan el asilo?
                      </h3>
                      <p className="text-gray-700">
                        Si te deniegan el asilo, puedes interponer un <strong>recurso contencioso-administrativo</strong> ante 
                        la Audiencia Nacional en el plazo de 2 meses. Mientras se resuelve el recurso, en algunos 
                        casos puedes solicitar la suspensión de la orden de salida. Si llevas tiempo en España y 
                        cumples los requisitos, también puedes explorar otras vías de regularización como el{' '}
                        <Link href="/servicios/arraigo" className="text-blue-600 hover:underline">arraigo</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 text-white sticky top-4">
                  <h3 className="text-xl font-bold mb-4">¿Necesitas orientación sobre asilo?</h3>
                  <p className="text-blue-100 mb-6">
                    Te ayudamos a entender el proceso y preparar tu solicitud. Consulta gratuita sin compromiso.
                  </p>
                  <a
                    href="https://wa.me/923221430630?text=Hola%2C%20necesito%20información%20sobre%20asilo%20en%20España"
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
                    className="block w-full bg-white text-blue-900 font-semibold py-4 rounded-xl text-center hover:bg-blue-50 transition-all duration-200"
                  >
                    Solicitar Cita
                  </Link>
                  <p className="text-sm text-blue-200 text-center mt-4">
                    Sin pago adelantado · Pague después de verificar
                  </p>
                </div>

                {/* Enlaces útiles */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Enlaces oficiales</h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://www.inclusion.gob.es/es/web/atencion-humanitaria/asilo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Ministerio de Inclusión - Asilo
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/asilo-y-refugio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Ministerio del Interior - Asilo
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.acnur.org/es-es/espana.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        ACNUR España
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.cear.es/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        CEAR - Ayuda al refugiado
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Países de origen */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Principales países de origen 2024</h3>
                  <ul className="space-y-3">
                    {[
                      { pais: 'Venezuela', porcentaje: 35 },
                      { pais: 'Colombia', porcentaje: 25 },
                      { pais: 'Marruecos', porcentaje: 8 },
                      { pais: 'Perú', porcentaje: 6 },
                      { pais: 'Honduras', porcentaje: 5 },
                      { pais: 'Senegal', porcentaje: 4 },
                      { pais: 'Mali', porcentaje: 3 },
                    ].map((item, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <span className="text-gray-700">{item.pais}</span>
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                            <div
                              className="bg-blue-600 rounded-full h-2"
                              style={{ width: `${item.porcentaje}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500">{item.porcentaje}%</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Números de emergencia */}
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-red-900 mb-4">Teléfonos de ayuda</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-red-500 mr-3">📞</span>
                      <span><strong>CEAR:</strong> 91 598 05 35</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-3">📞</span>
                      <span><strong>ACCEM:</strong> 91 532 74 78</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-3">📞</span>
                      <span><strong>Cruz Roja:</strong> 900 22 22 92</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-3">📞</span>
                      <span><strong>Emergencias:</strong> 112</span>
                    </li>
                  </ul>
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
                          <div className="text-sm text-gray-600">Conseguir cita en cualquier provincia</div>
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
                          <div className="text-sm text-gray-600">Cita para expedición TIE</div>
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
                          <div className="font-semibold text-gray-900">Arraigo Social</div>
                          <div className="text-sm text-gray-600">Alternativa si deniegan asilo</div>
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
                          <div className="text-sm text-gray-600">Renovar tarjeta de residencia</div>
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
              ¿Necesitas Ayuda con tu Solicitud de Asilo?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Entendemos lo difícil que es el proceso. Te orientamos para preparar tu solicitud 
              y conseguir las citas necesarias. Sin pago por adelantado - Pague después de verificar su cita.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/923221430630?text=Hola%2C%20necesito%20ayuda%20con%20mi%20solicitud%20de%20asilo"
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
