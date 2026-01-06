import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Arraigo Social, Laboral y Familiar España  2026 | CitaEx',
  description: 'Guía completa arraigo en España  2026. Arraigo social, laboral y familiar. Requisitos, documentación, formulario EX-10 y proceso paso a paso. Te ayudamos sin pago adelantado.',
  keywords: [
    'arraigo social españa',
    'arraigo laboral',
    'arraigo familiar',
    'arraigo social requisitos',
    'regularización españa',
    'papeles españa',
    'arraigo por formación',
    'arraigo  2026',
    'permiso residencia arraigo',
    'formulario EX-10',
  ],
  openGraph: {
    title: 'Arraigo Social, Laboral y Familiar España  2026 | CitaEx',
    description: 'Guía completa arraigo en España  2026. Arraigo social, laboral y familiar. Requisitos, documentación y proceso.',
    url: 'https://citaex.com/servicios/arraigo',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://citaex.com/og/arraigo.png',
        width: 1200,
        height: 630,
        alt: 'Arraigo en España - CitaEx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arraigo Social, Laboral y Familiar España  2026 | CitaEx',
    description: 'Guía completa arraigo en España. Requisitos, documentación y proceso.',
  },
  alternates: {
    canonical: 'https://citaex.com/servicios/arraigo',
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
      name: '¿Cuántos años necesito para el arraigo social en España?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para el arraigo social necesitas acreditar 3 años de permanencia continuada en España. No es necesario que hayas estado en situación legal, pero sí debes demostrar que has residido de forma continuada (no ausencias superiores a 120 días). Además, necesitas un contrato de trabajo de al menos 1 año o demostrar medios económicos suficientes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia hay entre arraigo social, laboral y familiar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arraigo social: 3 años en España + contrato de trabajo o medios económicos. Arraigo laboral: 2 años en España + demostrar que has trabajado al menos 6 meses (aunque sea sin papeles). Arraigo familiar: ser padre/madre de menor español o hijo de padre/madre español de origen, sin requisito de tiempo mínimo en España.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito contrato de trabajo para el arraigo social?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No siempre. Tienes dos opciones: presentar un contrato de trabajo firmado por empleador y trabajador con duración mínima de 1 año, O demostrar que tienes medios económicos suficientes para mantenerte (equivalente al IPREM) y presentar un informe de inserción social favorable.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en resolverse el arraigo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El plazo legal máximo es de 3 meses desde la presentación de la solicitud. Si no recibes respuesta en ese plazo, se considera silencio administrativo positivo (se entiende concedido). En la práctica, suele resolverse en 1-3 meses dependiendo de la provincia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el arraigo por formación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El arraigo por formación (o arraigo para la formación) es una nueva modalidad que permite obtener residencia si llevas 2 años en España y te comprometes a realizar una formación reglada para obtener un certificado de profesionalidad o título de FP. Te dan 12 meses iniciales renovables mientras estudias.',
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
      name: 'Arraigo',
      item: 'https://citaex.com/servicios/arraigo',
    },
  ],
};

export default function ArraigoPage() {
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
              <li className="text-red-700 font-medium">Arraigo</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-700 via-green-800 to-teal-700 text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
                  <span className="text-green-200 text-sm font-medium">🏡 Regularización  2026</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Arraigo en España: Social, Laboral y Familiar
                </h1>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  El <strong>arraigo</strong> es la principal vía para regularizar tu situación si 
                  llevas tiempo viviendo en España sin papeles. Te explicamos los tres tipos de 
                  arraigo, requisitos actualizados  2026, documentación y cómo conseguir tu cita.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/923221430630?text=Hola%2C%20necesito%20información%20sobre%20arraigo%20en%20España"
                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consulta Gratuita
                  </a>
                  <Link
                    href="/solicitar-cita"
                    className="inline-flex items-center justify-center bg-white text-green-700 font-semibold px-8 py-4 rounded-xl hover:bg-green-50 transition-all duration-200"
                  >
                    Solicitar Cita Ahora
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold mb-6 text-center">Tipos de Arraigo en España</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-3xl mr-4">👥</span>
                      <div>
                        <span className="font-bold text-lg">Arraigo Social</span>
                        <span className="text-green-200 block text-sm">3 años + contrato de trabajo</span>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-3xl mr-4">💼</span>
                      <div>
                        <span className="font-bold text-lg">Arraigo Laboral</span>
                        <span className="text-green-200 block text-sm">2 años + 6 meses trabajando</span>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-3xl mr-4">👨‍👩‍👧</span>
                      <div>
                        <span className="font-bold text-lg">Arraigo Familiar</span>
                        <span className="text-green-200 block text-sm">Padre/madre de menor español</span>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-yellow-400/20 rounded-lg border border-yellow-400/30">
                      <span className="text-3xl mr-4">📚</span>
                      <div>
                        <span className="font-bold text-lg text-yellow-300">Arraigo por Formación</span>
                        <span className="text-green-200 block text-sm">2 años + formación profesional</span>
                      </div>
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
                <span>Gestión de citas extranjería</span>
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
                {/* Qué es el arraigo */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    ¿Qué es el Arraigo y Por Qué es Importante?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4">
                      El <strong>arraigo</strong> es una autorización de residencia temporal que permite 
                      a ciudadanos extranjeros en situación irregular regularizar su estancia en España 
                      por circunstancias excepcionales. Es la <strong>principal vía de regularización</strong> 
                      para quienes llevan tiempo viviendo en España sin permiso de residencia.
                    </p>
                    <p className="mb-4">
                      A diferencia de otros permisos de residencia, el arraigo no requiere que hayas 
                      entrado legalmente a España ni que tengas un visado previo. Lo que importa es 
                      demostrar tu <strong>vinculación con España</strong>: el tiempo que llevas aquí, 
                      tus lazos familiares, tu integración social o tu actividad laboral.
                    </p>
                    <p>
                      En  2026, España mantiene cuatro tipos principales de arraigo: <strong>social</strong>, 
                      <strong> laboral</strong>, <strong>familiar</strong> y el más reciente <strong>arraigo 
                      por formación</strong>. Cada uno tiene requisitos diferentes según tu situación personal.
                    </p>
                  </div>
                </div>

                {/* Comparativa de arraigos */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Comparativa: ¿Qué Tipo de Arraigo Me Corresponde?
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-4 text-left font-semibold text-gray-900">Tipo</th>
                          <th className="p-4 text-left font-semibold text-gray-900">Tiempo en España</th>
                          <th className="p-4 text-left font-semibold text-gray-900">Requisito principal</th>
                          <th className="p-4 text-left font-semibold text-gray-900">Duración</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="bg-blue-50">
                          <td className="p-4 font-bold text-blue-800">Social</td>
                          <td className="p-4 text-gray-700">3 años</td>
                          <td className="p-4 text-gray-700">Contrato trabajo 1 año o medios económicos</td>
                          <td className="p-4 font-semibold text-blue-600">1 año</td>
                        </tr>
                        <tr className="bg-green-50">
                          <td className="p-4 font-bold text-green-800">Laboral</td>
                          <td className="p-4 text-gray-700">2 años</td>
                          <td className="p-4 text-gray-700">6 meses trabajando (con acta inspección)</td>
                          <td className="p-4 font-semibold text-green-600">1 año</td>
                        </tr>
                        <tr className="bg-purple-50">
                          <td className="p-4 font-bold text-purple-800">Familiar</td>
                          <td className="p-4 text-gray-700">No exigido</td>
                          <td className="p-4 text-gray-700">Padre/madre de español menor o hijo de español</td>
                          <td className="p-4 font-semibold text-purple-600">5 años</td>
                        </tr>
                        <tr className="bg-yellow-50">
                          <td className="p-4 font-bold text-yellow-800">Por Formación</td>
                          <td className="p-4 text-gray-700">2 años</td>
                          <td className="p-4 text-gray-700">Compromiso de formación FP/certificado</td>
                          <td className="p-4 font-semibold text-yellow-600">12 meses</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Arraigo Social - Detallado */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-4xl">👥</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Arraigo Social</h2>
                      <p className="text-blue-200">El más solicitado en España</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Requisitos</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">1</span>
                          <span><strong>3 años de permanencia</strong> continuada en España (máximo 120 días de ausencia)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">2</span>
                          <span><strong>Carecer de antecedentes penales</strong> en España y en tu país de origen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">3</span>
                          <span><strong>Contrato de trabajo</strong> de al menos 1 año, firmado por empleador y trabajador</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">4</span>
                          <span><strong>Vínculos familiares</strong> con residentes o <strong>informe de inserción social</strong></span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Alternativa sin contrato</h3>
                      <div className="bg-white/10 rounded-xl p-4">
                        <p className="text-blue-100 mb-3">
                          Si no tienes contrato de trabajo, puedes solicitar arraigo social si:
                        </p>
                        <ul className="space-y-2 text-blue-100">
                          <li>• Tienes <strong>medios económicos suficientes</strong> (IPREM o superior)</li>
                          <li>• Presentas <strong>informe de inserción social</strong> favorable de tu Comunidad Autónoma</li>
                          <li>• Demuestras <strong>arraigo real</strong> en la sociedad española</li>
                        </ul>
                      </div>
                      <div className="mt-4 p-3 bg-yellow-400/20 rounded-lg border border-yellow-400/30">
                        <p className="text-yellow-100 text-sm">
                          💡 <strong>Novedad 2022:</strong> Ya no es obligatorio el informe de inserción 
                          social si tienes contrato de trabajo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arraigo Laboral - Detallado */}
                <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-lg p-8 text-white">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-4xl">💼</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Arraigo Laboral</h2>
                      <p className="text-green-200">Si has trabajado sin contrato</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Requisitos</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">1</span>
                          <span><strong>2 años de permanencia</strong> continuada en España</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">2</span>
                          <span><strong>6 meses de relación laboral</strong> (aunque haya sido sin contrato)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">3</span>
                          <span><strong>Resolución judicial</strong> o acta de Inspección de Trabajo que lo acredite</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">4</span>
                          <span><strong>Carecer de antecedentes penales</strong></span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">¿Cómo demostrar el trabajo?</h3>
                      <div className="bg-white/10 rounded-xl p-4">
                        <p className="text-green-100 mb-3">
                          Para acreditar la relación laboral puedes presentar:
                        </p>
                        <ul className="space-y-2 text-green-100">
                          <li>• <strong>Acta de Inspección de Trabajo</strong> tras denuncia</li>
                          <li>• <strong>Sentencia judicial</strong> reconociendo la relación laboral</li>
                          <li>• <strong>Resolución administrativa</strong> que reconozca el trabajo</li>
                        </ul>
                      </div>
                      <div className="mt-4 p-3 bg-red-400/20 rounded-lg border border-red-400/30">
                        <p className="text-red-100 text-sm">
                          ⚠️ <strong>Importante:</strong> Denunciar al empleador puede tener 
                          consecuencias. Consulta antes con un abogado de extranjería.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arraigo Familiar - Detallado */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-4xl">👨‍👩‍👧</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Arraigo Familiar</h2>
                      <p className="text-purple-200">Vínculo con ciudadano español</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">¿Quién puede solicitarlo?</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-purple-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">A</span>
                          <span><strong>Padre o madre de menor español</strong> que tenga a su cargo al menor y conviva con él</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-purple-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">B</span>
                          <span><strong>Hijos de padre o madre español de origen</strong> (aunque ahora sean de otra nacionalidad)</span>
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-green-400/20 rounded-lg border border-green-400/30">
                        <p className="text-green-100 text-sm">
                          ✓ <strong>Ventaja:</strong> Este arraigo da directamente <strong>5 años de 
                          residencia</strong>, no requiere tiempo mínimo en España y no necesitas 
                          contrato de trabajo.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Documentación específica</h3>
                      <div className="bg-white/10 rounded-xl p-4">
                        <p className="text-purple-100 mb-3">
                          Además de la documentación general:
                        </p>
                        <ul className="space-y-2 text-purple-100">
                          <li>• <strong>Certificado de nacimiento</strong> del menor o del progenitor español</li>
                          <li>• <strong>Libro de familia</strong> o certificado del Registro Civil</li>
                          <li>• <strong>Certificado de convivencia</strong> (empadronamiento conjunto)</li>
                          <li>• Acreditación de que el menor <strong>está a tu cargo</strong></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arraigo por Formación - Detallado */}
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-lg p-8 text-white">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-4xl">📚</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Arraigo por Formación</h2>
                      <p className="text-yellow-100">Nueva vía desde 2022</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Requisitos</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-yellow-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">1</span>
                          <span><strong>2 años de permanencia</strong> continuada en España</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-yellow-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">2</span>
                          <span><strong>Compromiso de formación</strong> para obtener certificado de profesionalidad o título de FP</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-yellow-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">3</span>
                          <span><strong>Carecer de antecedentes penales</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-yellow-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">4</span>
                          <span><strong>Admisión en centro formativo</strong> autorizado</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">¿Cómo funciona?</h3>
                      <div className="bg-white/10 rounded-xl p-4">
                        <ul className="space-y-2 text-yellow-100">
                          <li>• Te conceden <strong>12 meses</strong> iniciales para formarte</li>
                          <li>• <strong>Renovable 12 meses más</strong> si continúas la formación</li>
                          <li>• <strong>Permite trabajar</strong> a tiempo parcial (30h/semana)</li>
                          <li>• Al terminar, puedes modificar a <strong>residencia y trabajo</strong></li>
                        </ul>
                      </div>
                      <div className="mt-4 p-3 bg-white/20 rounded-lg">
                        <p className="text-white text-sm">
                          💡 <strong>Ideal si:</strong> Llevas 2 años en España, no tienes contrato 
                          pero quieres formarte y regularizarte al mismo tiempo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documentación general */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Documentación General para Cualquier Arraigo
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">📋</span>
                        Documentos obligatorios
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          Formulario EX-10 cumplimentado
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          Pasaporte completo (todas las páginas)
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          Certificado de empadronamiento histórico
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          Antecedentes penales del país de origen (apostillados)
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-red-600" readOnly />
                          Tasa 790-052 pagada
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">📁</span>
                        Pruebas de permanencia (3 años)
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600" readOnly />
                          Empadronamiento histórico
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600" readOnly />
                          Facturas a tu nombre (luz, agua, teléfono)
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600" readOnly />
                          Historial médico / recetas
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600" readOnly />
                          Movimientos bancarios
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600" readOnly />
                          Contratos de alquiler anteriores
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600" readOnly />
                          Matriculación de hijos en colegios
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <p className="text-yellow-800">
                      <strong>💡 Consejo:</strong> Guarda TODAS las facturas, recibos y documentos que 
                      demuestren tu presencia en España. Cuantas más pruebas tengas, más fácil será 
                      demostrar los 3 años de permanencia.
                    </p>
                  </div>
                </div>

                {/* Documentación específica por tipo */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Documentación Específica por Tipo de Arraigo
                  </h2>
                  <div className="space-y-6">
                    {/* Social */}
                    <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
                      <h3 className="text-xl font-bold text-blue-800 mb-4">📝 Arraigo Social - Documentos adicionales</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Con contrato de trabajo:</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Contrato de trabajo firmado (mín. 1 año)</li>
                            <li>• DNI/NIE del empleador</li>
                            <li>• Alta de la empresa en Seguridad Social</li>
                            <li>• Última declaración de IRPF del empleador</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Sin contrato de trabajo:</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Informe de inserción social (CCAA)</li>
                            <li>• Prueba de medios económicos (IPREM)</li>
                            <li>• Vínculos familiares con residentes</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Laboral */}
                    <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
                      <h3 className="text-xl font-bold text-green-800 mb-4">📝 Arraigo Laboral - Documentos adicionales</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li>• <strong>Acta de infracción</strong> de Inspección de Trabajo, O</li>
                        <li>• <strong>Resolución judicial</strong> reconociendo relación laboral de mín. 6 meses, O</li>
                        <li>• <strong>Resolución administrativa</strong> confirmatoria del acta de infracción</li>
                      </ul>
                    </div>

                    {/* Familiar */}
                    <div className="border-2 border-purple-200 rounded-xl p-6 bg-purple-50">
                      <h3 className="text-xl font-bold text-purple-800 mb-4">📝 Arraigo Familiar - Documentos adicionales</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Certificado de nacimiento del <strong>menor español</strong> o del <strong>progenitor español</strong></li>
                        <li>• Libro de familia o certificación del Registro Civil</li>
                        <li>• Certificado de <strong>convivencia/empadronamiento conjunto</strong></li>
                        <li>• Documentación que acredite que el menor <strong>está a tu cargo</strong></li>
                      </ul>
                    </div>

                    {/* Por formación */}
                    <div className="border-2 border-yellow-200 rounded-xl p-6 bg-yellow-50">
                      <h3 className="text-xl font-bold text-yellow-800 mb-4">📝 Arraigo por Formación - Documentos adicionales</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li>• <strong>Carta de admisión</strong> o matrícula en centro formativo autorizado</li>
                        <li>• Descripción del <strong>programa formativo</strong> (certificado profesionalidad o FP)</li>
                        <li>• <strong>Compromiso firmado</strong> de participar en la formación</li>
                      </ul>
                    </div>
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
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          1
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Reunir la documentación</h3>
                        <p className="text-gray-700">
                          Recopila todas las pruebas de permanencia, obtén tu certificado de antecedentes 
                          penales apostillado del país de origen, y prepara el contrato de trabajo o 
                          documentos específicos según tu tipo de arraigo.
                        </p>
                      </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          2
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Pedir cita previa</h3>
                        <p className="text-gray-700">
                          Solicita <strong>cita previa en la Oficina de Extranjería</strong> de tu provincia 
                          para "Autorización de residencia temporal por circunstancias excepcionales - Arraigo". 
                          Las citas suelen estar muy demandadas.
                        </p>
                        <a
                          href="https://wa.me/923221430630?text=Hola%2C%20necesito%20cita%20para%20arraigo"
                          className="inline-flex items-center mt-3 text-green-600 hover:text-green-700 font-semibold"
                        >
                          Te ayudamos a conseguir cita →
                        </a>
                      </div>
                    </div>

                    {/* Paso 3 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          3
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Presentar la solicitud</h3>
                        <p className="text-gray-700">
                          Acude a la cita con toda la documentación original y copias. Presenta el 
                          formulario EX-10, el justificante de pago de la tasa 790-052 y todos los 
                          documentos requeridos. Te darán un resguardo de presentación.
                        </p>
                      </div>
                    </div>

                    {/* Paso 4 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          4
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Esperar resolución</h3>
                        <p className="text-gray-700">
                          El plazo máximo de resolución es de <strong>3 meses</strong>. Si no recibes 
                          respuesta en ese plazo, se considera <strong>silencio administrativo positivo</strong> 
                          (se entiende concedido). Puedes consultar el estado en la sede electrónica.
                        </p>
                      </div>
                    </div>

                    {/* Paso 5 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          5
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Resolución favorable</h3>
                        <p className="text-gray-700">
                          Si te conceden el arraigo, tienes <strong>1 mes</strong> para solicitar la 
                          Tarjeta de Identidad de Extranjero (TIE). Necesitarás otra cita para 
                          <Link href="/servicios/toma-de-huellas" className="text-green-600 hover:underline"> toma de huellas</Link>.
                        </p>
                      </div>
                    </div>

                    {/* Paso 6 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          6
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Alta en Seguridad Social y TIE</h3>
                        <p className="text-gray-700">
                          Con la resolución favorable, tu empleador puede darte de alta en la Seguridad 
                          Social. Tras la toma de huellas, recibirás tu <strong>TIE</strong> en unas semanas. 
                          ¡Ya tienes tus papeles!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Costes */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Costes del Trámite de Arraigo
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
                          <td className="p-4 text-gray-700">Tasa 790-052 (solicitud arraigo)</td>
                          <td className="p-4 text-right font-semibold">16,32€</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Tasa 790-012 (expedición TIE)</td>
                          <td className="p-4 text-right font-semibold">16,08€</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Antecedentes penales (apostilla + traducción)</td>
                          <td className="p-4 text-right font-semibold">30-80€</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Informe de inserción social (si aplica)</td>
                          <td className="p-4 text-right font-semibold">Gratuito</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Certificado de empadronamiento histórico</td>
                          <td className="p-4 text-right font-semibold">Gratuito</td>
                        </tr>
                        <tr className="bg-green-50">
                          <td className="p-4 text-gray-900 font-bold">TOTAL APROXIMADO</td>
                          <td className="p-4 text-right font-bold text-green-600">65 - 115€</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    * Los costes de apostilla y traducción varían según el país de origen.
                  </p>
                </div>

                {/* Plazos */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Plazos Importantes
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
                      <h3 className="font-bold text-green-900 mb-4">Resolución del arraigo</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex justify-between">
                          <span>Plazo máximo legal:</span>
                          <span className="font-bold">3 meses</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Plazo real habitual:</span>
                          <span className="font-bold">1-3 meses</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Silencio positivo:</span>
                          <span className="font-bold text-green-600">Sí</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                      <h3 className="font-bold text-blue-900 mb-4">Duración del permiso</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex justify-between">
                          <span>Arraigo social/laboral:</span>
                          <span className="font-bold">1 año</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Arraigo familiar:</span>
                          <span className="font-bold">5 años</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Arraigo por formación:</span>
                          <span className="font-bold">12 meses</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <p className="text-yellow-800">
                      <strong>⏰ Importante:</strong> Una vez concedido el arraigo, tienes <strong>1 mes</strong> para 
                      solicitar el TIE (toma de huellas). Si tienes contrato de trabajo, tu empleador debe darte de 
                      alta en Seguridad Social en ese mismo plazo.
                    </p>
                  </div>
                </div>

                {/* ¿Qué hacer después? */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    ¿Qué Hacer Después del Arraigo?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                    <p>
                      El arraigo social y laboral te dan una autorización de <strong>1 año</strong>. 
                      Antes de que expire, debes renovar tu permiso. Si has trabajado y cotizado, 
                      podrás obtener una residencia temporal de <strong>2 años</strong>, renovable 
                      a otros 2, hasta conseguir la <strong>residencia de larga duración</strong> a los 5 años.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-green-100 rounded-xl">
                      <div className="text-3xl font-bold text-green-700">Año 1</div>
                      <div className="text-sm text-gray-600">Arraigo (1 año)</div>
                    </div>
                    <div className="text-center p-4 bg-blue-100 rounded-xl">
                      <div className="text-3xl font-bold text-blue-700">Años 2-3</div>
                      <div className="text-sm text-gray-600">Renovación (2 años)</div>
                    </div>
                    <div className="text-center p-4 bg-purple-100 rounded-xl">
                      <div className="text-3xl font-bold text-purple-700">Años 4-5</div>
                      <div className="text-sm text-gray-600">Renovación (2 años)</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-100 rounded-xl">
                      <div className="text-3xl font-bold text-yellow-700">Año 5+</div>
                      <div className="text-sm text-gray-600">Larga duración</div>
                    </div>
                  </div>
                  <p className="mt-6 text-gray-700">
                    Tras 10 años de residencia legal (2 años para iberoamericanos), podrás solicitar la{' '}
                    <Link href="/servicios/nacionalidad" className="text-green-600 hover:underline font-semibold">
                      nacionalidad española
                    </Link>.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Preguntas Frecuentes sobre Arraigo
                  </h2>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Cuántos años necesito para el arraigo social en España?
                      </h3>
                      <p className="text-gray-700">
                        Para el arraigo social necesitas acreditar <strong>3 años de permanencia 
                        continuada</strong> en España. No es necesario que hayas estado en situación 
                        legal, pero sí debes demostrar que has residido de forma continuada (no 
                        ausencias superiores a 120 días en total). Además, necesitas un contrato 
                        de trabajo de al menos 1 año o demostrar medios económicos suficientes más 
                        informe de inserción social.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Qué diferencia hay entre arraigo social, laboral y familiar?
                      </h3>
                      <p className="text-gray-700">
                        <strong>Arraigo social:</strong> 3 años en España + contrato de trabajo o medios económicos + 
                        posible informe de inserción social. <strong>Arraigo laboral:</strong> 2 años en España + 
                        demostrar que has trabajado al menos 6 meses (aunque sea sin papeles), mediante acta de 
                        inspección. <strong>Arraigo familiar:</strong> ser padre/madre de menor español o hijo de 
                        padre/madre español de origen, sin requisito de tiempo mínimo en España y da 5 años directamente.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Necesito contrato de trabajo para el arraigo social?
                      </h3>
                      <p className="text-gray-700">
                        No siempre. Tienes dos opciones: <strong>Opción A:</strong> presentar un contrato de trabajo 
                        firmado por empleador y trabajador con duración mínima de 1 año. <strong>Opción B:</strong> 
                        demostrar que tienes medios económicos suficientes para mantenerte (equivalente al IPREM) 
                        y presentar un informe de inserción social favorable de tu Comunidad Autónoma.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Cuánto tarda en resolverse el arraigo?
                      </h3>
                      <p className="text-gray-700">
                        El plazo legal máximo es de <strong>3 meses</strong> desde la presentación de la solicitud. 
                        Si no recibes respuesta en ese plazo, se considera <strong>silencio administrativo positivo</strong> 
                        (se entiende concedido). En la práctica, suele resolverse en 1-3 meses dependiendo de la 
                        provincia y la carga de trabajo de la Oficina de Extranjería.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Qué es el arraigo por formación?
                      </h3>
                      <p className="text-gray-700">
                        El <strong>arraigo por formación</strong> (o arraigo para la formación) es una nueva 
                        modalidad introducida en 2022 que permite obtener residencia si llevas <strong>2 años 
                        en España</strong> y te comprometes a realizar una formación reglada para obtener un 
                        certificado de profesionalidad o título de FP. Te dan 12 meses iniciales renovables 
                        mientras estudias, y permite trabajar hasta 30 horas semanales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-green-700 to-teal-600 rounded-2xl p-6 text-white sticky top-4">
                  <h3 className="text-xl font-bold mb-4">¿Necesitas cita para arraigo?</h3>
                  <p className="text-green-100 mb-6">
                    Te ayudamos a conseguir cita en extranjería y preparar tu documentación. Sin pago adelantado.
                  </p>
                  <a
                    href="https://wa.me/923221430630?text=Hola%2C%20necesito%20cita%20para%20arraigo"
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
                    className="block w-full bg-white text-green-700 font-semibold py-4 rounded-xl text-center hover:bg-green-50 transition-all duration-200"
                  >
                    Solicitar Cita
                  </Link>
                  <p className="text-sm text-green-200 text-center mt-4">
                    Sin pago adelantado · Pague después de verificar
                  </p>
                </div>

                {/* Formularios descargables */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Formularios oficiales</h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://extranjeros.inclusion.gob.es/ficheros/Modelos_solicitudes/mod_solicitudes2/10-Formulario_TRA.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        <span className="text-2xl mr-3">📄</span>
                        <div>
                          <div className="font-semibold text-gray-900">Formulario EX-10</div>
                          <div className="text-sm text-gray-600">Solicitud de arraigo</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sede.policia.gob.es/Tasa790_052/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <span className="text-2xl mr-3">💰</span>
                        <div>
                          <div className="font-semibold text-gray-900">Tasa 790-052</div>
                          <div className="text-sm text-gray-600">Autorización de residencia</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sede.policia.gob.es/Tasa790_012/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                      >
                        <span className="text-2xl mr-3">💳</span>
                        <div>
                          <div className="font-semibold text-gray-900">Tasa 790-012</div>
                          <div className="text-sm text-gray-600">Expedición TIE</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Quick Info */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Datos clave</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Arraigo social:</span>
                      <span className="font-bold text-gray-900">3 años</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Arraigo laboral:</span>
                      <span className="font-bold text-gray-900">2 años</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Arraigo familiar:</span>
                      <span className="font-bold text-green-600">Sin mínimo</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Resolución máxima:</span>
                      <span className="font-bold text-gray-900">3 meses</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Coste total:</span>
                      <span className="font-bold text-gray-900">≈65-115€</span>
                    </li>
                  </ul>
                </div>

                {/* Enlaces útiles */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Enlaces oficiales</h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://extranjeros.inclusion.gob.es/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Portal de Inmigración
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sede.administracionespublicas.gob.es/pagina/index/directorio/icpplus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Cita previa extranjería
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.inclusion.gob.es/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Ministerio de Inclusión
                      </a>
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
                          <div className="text-sm text-gray-600">Para presentar tu arraigo</div>
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
                          <div className="text-sm text-gray-600">Para tu TIE tras aprobación</div>
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
                          <div className="text-sm text-gray-600">Después del primer año</div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios/nacionalidad"
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-2xl mr-3">🇪🇸</span>
                        <div>
                          <div className="font-semibold text-gray-900">Nacionalidad Española</div>
                          <div className="text-sm text-gray-600">Tu objetivo a largo plazo</div>
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
        <section className="py-16 bg-gradient-to-r from-green-700 via-green-800 to-teal-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Listo para Regularizar tu Situación?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Te ayudamos a conseguir tu cita de arraigo y preparar toda la documentación. 
              Sin pago por adelantado - Pague después de verificar su cita.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/923221430630?text=Hola%2C%20necesito%20ayuda%20con%20mi%20arraigo"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactar por WhatsApp
              </a>
              <Link
                href="/solicitar-cita"
                className="inline-flex items-center justify-center bg-white text-green-700 font-semibold px-8 py-4 rounded-xl hover:bg-green-50 transition-all duration-200 text-lg"
              >
                Solicitar Cita Ahora
              </Link>
            </div>
            <p className="text-green-200 mt-6 text-sm">
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
