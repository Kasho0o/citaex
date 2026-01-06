import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Visa Estudiante España  2026 - TIE Estudiante | CitaEx',
  description: 'Guía completa visa estudiante España  2026. TIE estudiante, renovación, trabajo 20h/semana, modificación a residencia. Te ayudamos sin pago adelantado.',
  keywords: [
    'visa estudiante españa',
    'tie estudiante',
    'estudiar en españa',
    'visado estudiante españa',
    'permiso estudiante españa',
    'renovar visa estudiante',
    'estudiante extranjero españa',
    'trabajo estudiante españa',
    'modificar estancia por estudios',
    'tarjeta estudiante españa',
  ],
  openGraph: {
    title: 'Visa Estudiante España  2026 - TIE Estudiante | CitaEx',
    description: 'Guía completa visa estudiante España  2026. TIE estudiante, renovación, trabajo 20h/semana y modificación a residencia.',
    url: 'https://citaex.com/servicios/estudiantes',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://citaex.com/og/estudiantes.png',
        width: 1200,
        height: 630,
        alt: 'Visa Estudiante España - CitaEx',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visa Estudiante España  2026 - TIE Estudiante | CitaEx',
    description: 'Guía completa visa estudiante España. TIE, renovación y trabajo.',
  },
  alternates: {
    canonical: 'https://citaex.com/servicios/estudiantes',
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
      name: '¿Puedo trabajar con visa de estudiante en España?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, los estudiantes extranjeros en España pueden trabajar hasta 30 horas semanales (antes eran 20h) con una autorización de trabajo compatible con estudios. El trabajo no puede interferir con tus estudios y el contrato debe ser a tiempo parcial. También puedes hacer prácticas remuneradas relacionadas con tus estudios.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo puedo estar en España con visa de estudiante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La estancia por estudios se concede por la duración del curso, máximo un año. Se puede renovar anualmente mientras continúes estudiando y apruebes al menos el 50% de las asignaturas o créditos. No hay límite de renovaciones mientras mantengas el estatus de estudiante.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo cambiar mi visa de estudiante a permiso de trabajo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, es posible mediante la "modificación de estancia por estudios a residencia y trabajo". Necesitas haber estado al menos 3 años como estudiante en España, tener una oferta de trabajo y cumplir los requisitos generales de residencia. Es uno de los cambios más solicitados.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué documentos necesito para renovar mi TIE de estudiante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para renovar necesitas: pasaporte vigente, TIE actual, justificante de matrícula del nuevo curso, certificado de aprovechamiento (aprobar mínimo 50%), seguro médico, prueba de medios económicos (IPREM mensual), empadronamiento y tasa 790-052.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto dinero necesito demostrar para la visa de estudiante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Debes acreditar el 100% del IPREM mensual (600€ aproximadamente en  2026) multiplicado por los meses de estancia. Para un curso de 9 meses serían unos 5.400€. Además, debes poder costear el viaje de ida y vuelta y tener pagada la matrícula del curso.',
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
      name: 'Visa Estudiante',
      item: 'https://citaex.com/servicios/estudiantes',
    },
  ],
};

export default function EstudiantesPage() {
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
              <li className="text-red-700 font-medium">Visa Estudiante</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-800 text-white py-16 lg:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
                  <span className="text-purple-200 text-sm font-medium">🎓 Estudiar en España  2026</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Visa de Estudiante España: Guía Completa y TIE
                </h1>
                <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                  ¿Quieres <strong>estudiar en España</strong>? Te explicamos todo sobre el visado de 
                  estudiante, la tarjeta TIE, cómo renovar, trabajar hasta 30 horas semanales y 
                  cómo modificar tu estancia a residencia de trabajo al terminar tus estudios.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/923221430630?text=Hola%2C%20necesito%20información%20sobre%20visa%20de%20estudiante%20en%20España"
                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consulta Gratuita
                  </a>
                  <Link
                    href="/solicitar-cita"
                    className="inline-flex items-center justify-center bg-white text-purple-700 font-semibold px-8 py-4 rounded-xl hover:bg-purple-50 transition-all duration-200"
                  >
                    Solicitar Cita Ahora
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold mb-6 text-center">Beneficios del Estudiante en España</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-3xl mr-4">📚</span>
                      <div>
                        <span className="text-purple-200 block text-sm">Estudios</span>
                        <span className="font-bold">Universidad, máster, FP, idiomas</span>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-3xl mr-4">💼</span>
                      <div>
                        <span className="text-purple-200 block text-sm">Trabajo permitido</span>
                        <span className="font-bold text-green-400">Hasta 30h/semana</span>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-3xl mr-4">🔄</span>
                      <div>
                        <span className="text-purple-200 block text-sm">Renovaciones</span>
                        <span className="font-bold">Ilimitadas mientras estudies</span>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white/10 rounded-lg">
                      <span className="text-3xl mr-4">🎯</span>
                      <div>
                        <span className="text-purple-200 block text-sm">Futuro</span>
                        <span className="font-bold text-yellow-400">Modificable a residencia</span>
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
                <span>Gestión de citas TIE</span>
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
                {/* Qué es la estancia por estudios */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    ¿Qué es la Estancia por Estudios en España?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4">
                      La <strong>estancia por estudios</strong> (comúnmente llamada "visa de estudiante") 
                      es una autorización que permite a ciudadanos extranjeros no comunitarios residir 
                      en España mientras realizan estudios, formación, investigación o prácticas.
                    </p>
                    <p className="mb-4">
                      Es importante entender que la estancia por estudios <strong>no es lo mismo que 
                      una residencia</strong>. El tiempo como estudiante no cuenta directamente para 
                      solicitar residencia de larga duración o nacionalidad, aunque sí puede ser un 
                      paso previo para modificar tu situación a residencia y trabajo.
                    </p>
                    <p>
                      En  2026, España ha flexibilizado las condiciones para estudiantes extranjeros, 
                      permitiendo trabajar hasta <strong>30 horas semanales</strong> (antes eran 20) y 
                      facilitando la transición a permisos de trabajo una vez finalizados los estudios.
                    </p>
                  </div>
                </div>

                {/* Tipos de estudios */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Tipos de Estudios que Permiten Obtener Visado
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-indigo-50 rounded-xl border-2 border-indigo-200">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">🎓</span>
                        <h3 className="text-xl font-bold text-indigo-900">Estudios Universitarios</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          Grados universitarios (4 años)
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          Másteres oficiales (1-2 años)
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          Doctorados (3-5 años)
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          Másteres propios/títulos propios
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">📖</span>
                        <h3 className="text-xl font-bold text-purple-900">Formación Profesional</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          FP de Grado Medio
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          FP de Grado Superior
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          Certificados de profesionalidad
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          Cursos de especialización
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">🗣️</span>
                        <h3 className="text-xl font-bold text-green-900">Cursos de Idiomas</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Español para extranjeros (mín. 20h/semana)
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Otros idiomas en centros acreditados
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Instituto Cervantes
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Escuelas oficiales de idiomas
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">🔬</span>
                        <h3 className="text-xl font-bold text-yellow-900">Investigación y Prácticas</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          Proyectos de investigación
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          Prácticas no laborales
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          Becas de formación
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          Voluntariado (máx. 1 año)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-800">
                      <strong>⚠️ Importante:</strong> Los cursos deben ser de al menos 20 horas semanales 
                      para poder obtener el visado. Los cursos online generalmente no son válidos para 
                      el visado de estudiante.
                    </p>
                  </div>
                </div>

                {/* Requisitos */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Requisitos para la Visa de Estudiante
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 border-2 border-green-200 rounded-xl bg-green-50">
                        <h3 className="font-bold text-green-800 mb-2 flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          Admisión en centro educativo
                        </h3>
                        <p className="text-sm text-gray-700">
                          Carta de admisión o matrícula en un centro educativo reconocido oficialmente 
                          en España. Los estudios deben ser a tiempo completo (mín. 20h/semana).
                        </p>
                      </div>
                      <div className="p-4 border-2 border-green-200 rounded-xl bg-green-50">
                        <h3 className="font-bold text-green-800 mb-2 flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          Medios económicos suficientes
                        </h3>
                        <p className="text-sm text-gray-700">
                          Demostrar el 100% del IPREM mensual (≈600€/mes en  2026) para toda la estancia. 
                          Para un curso de 9 meses: aproximadamente <strong>5.400€</strong>.
                        </p>
                      </div>
                      <div className="p-4 border-2 border-green-200 rounded-xl bg-green-50">
                        <h3 className="font-bold text-green-800 mb-2 flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          Seguro médico
                        </h3>
                        <p className="text-sm text-gray-700">
                          Seguro de enfermedad público o privado con cobertura completa en España 
                          durante toda la estancia. Sin copagos ni limitaciones importantes.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 border-2 border-blue-200 rounded-xl bg-blue-50">
                        <h3 className="font-bold text-blue-800 mb-2 flex items-center">
                          <span className="text-blue-600 mr-2">✓</span>
                          Sin antecedentes penales
                        </h3>
                        <p className="text-sm text-gray-700">
                          Certificado de antecedentes penales del país de origen y de países donde 
                          hayas residido los últimos 5 años (si estancia supera 6 meses).
                        </p>
                      </div>
                      <div className="p-4 border-2 border-blue-200 rounded-xl bg-blue-50">
                        <h3 className="font-bold text-blue-800 mb-2 flex items-center">
                          <span className="text-blue-600 mr-2">✓</span>
                          Certificado médico
                        </h3>
                        <p className="text-sm text-gray-700">
                          Certificado médico que acredite que no padeces enfermedades con repercusiones 
                          de salud pública según el Reglamento Sanitario Internacional.
                        </p>
                      </div>
                      <div className="p-4 border-2 border-blue-200 rounded-xl bg-blue-50">
                        <h3 className="font-bold text-blue-800 mb-2 flex items-center">
                          <span className="text-blue-600 mr-2">✓</span>
                          Alojamiento
                        </h3>
                        <p className="text-sm text-gray-700">
                          Prueba de que tienes alojamiento asegurado en España: residencia universitaria, 
                          contrato de alquiler o carta de acogida.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proceso de solicitud */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Proceso de Solicitud del Visado de Estudiante
                  </h2>
                  <div className="space-y-6">
                    {/* Paso 1 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          1
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Obtener admisión en un centro educativo</h3>
                        <p className="text-gray-700">
                          Solicita plaza en una universidad, escuela de idiomas, centro de FP u otro 
                          centro educativo oficial en España. Necesitas la carta de admisión o 
                          justificante de matrícula antes de solicitar el visado.
                        </p>
                      </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          2
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Reunir documentación</h3>
                        <p className="text-gray-700 mb-3">
                          Prepara todos los documentos necesarios con la debida antelación:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Pasaporte con validez mínima de 1 año</li>
                          <li>Carta de admisión/matrícula</li>
                          <li>Prueba de medios económicos</li>
                          <li>Seguro médico</li>
                          <li>Antecedentes penales apostillados</li>
                          <li>Certificado médico</li>
                        </ul>
                      </div>
                    </div>

                    {/* Paso 3 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          3
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Solicitar cita en el Consulado español</h3>
                        <p className="text-gray-700">
                          Pide cita en el Consulado o Embajada de España en tu país de residencia. 
                          La solicitud de visado se presenta siempre en persona. Lleva todos los 
                          documentos originales y copias.
                        </p>
                      </div>
                    </div>

                    {/* Paso 4 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          4
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Esperar resolución</h3>
                        <p className="text-gray-700">
                          El plazo máximo de resolución es de <strong>1 mes</strong> para estancias 
                          de hasta 6 meses, y <strong>2 meses</strong> para estancias superiores. 
                          Te notificarán para recoger el visado en el Consulado.
                        </p>
                      </div>
                    </div>

                    {/* Paso 5 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          5
                        </div>
                      </div>
                      <div className="flex-grow border-b border-gray-200 pb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Viajar a España</h3>
                        <p className="text-gray-700">
                          Una vez concedido el visado, tienes <strong>90 días</strong> para viajar a 
                          España. El visado inicial te permite entrar y permanecer los primeros 
                          meses mientras solicitas tu TIE.
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
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Solicitar TIE en España</h3>
                        <p className="text-gray-700">
                          Si tu estancia es <strong>superior a 6 meses</strong>, debes solicitar la 
                          Tarjeta de Identidad de Extranjero (TIE) en el plazo de <strong>1 mes</strong> 
                          desde tu llegada. Necesitarás cita previa en la Oficina de Extranjería.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TIE de Estudiante */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
                  <h2 className="text-3xl font-bold mb-6">
                    La Tarjeta TIE de Estudiante
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">¿Qué es el TIE de estudiante?</h3>
                      <p className="text-indigo-100 mb-4">
                        La <strong className="text-white">Tarjeta de Identidad de Extranjero (TIE)</strong> 
                        es el documento físico que acredita tu estancia legal como estudiante en España. 
                        Es obligatorio si tu estancia supera los 6 meses.
                      </p>
                      <ul className="space-y-2 text-indigo-100">
                        <li className="flex items-center">
                          <span className="mr-2">📇</span>
                          Documento de identificación oficial
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">✈️</span>
                          Permite salir y entrar a España
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">🏦</span>
                          Necesario para abrir cuenta bancaria
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">📱</span>
                          Requerido para contrato de móvil
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Cómo solicitar el TIE</h3>
                      <div className="bg-white/10 rounded-xl p-4">
                        <ol className="space-y-3">
                          <li className="flex items-start">
                            <span className="w-6 h-6 bg-white text-indigo-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">1</span>
                            <span>Empadrónate en tu domicilio en España</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-6 h-6 bg-white text-indigo-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">2</span>
                            <span>Pide cita previa para toma de huellas</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-6 h-6 bg-white text-indigo-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">3</span>
                            <span>Paga la tasa 790-052 (≈16€)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-6 h-6 bg-white text-indigo-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">4</span>
                            <span>Acude a la cita con la documentación</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-6 h-6 bg-white text-indigo-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">5</span>
                            <span>Recoge tu TIE (≈40 días)</span>
                          </li>
                        </ol>
                      </div>
                      <a
                        href="https://wa.me/923221430630?text=Hola%2C%20necesito%20cita%20para%20TIE%20de%20estudiante"
                        className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                      >
                        Conseguir cita TIE →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Trabajar como estudiante */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Trabajar con Visa de Estudiante en España
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                    <p>
                      Una de las preguntas más frecuentes es: <strong>¿puedo trabajar con visa de 
                      estudiante?</strong> La respuesta es <strong className="text-green-600">SÍ</strong>, 
                      pero con ciertas limitaciones.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                      <h3 className="font-bold text-green-800 mb-4 text-xl">✓ Lo que SÍ puedes hacer</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1 font-bold">→</span>
                          <span>Trabajar hasta <strong>30 horas/semana</strong> (novedad 2024)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1 font-bold">→</span>
                          <span>Trabajar a tiempo completo en <strong>períodos sin clases</strong> (verano, Navidad)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1 font-bold">→</span>
                          <span>Realizar <strong>prácticas remuneradas</strong> relacionadas con tus estudios</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1 font-bold">→</span>
                          <span>Trabajar como <strong>autónomo</strong> (con autorización)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                      <h3 className="font-bold text-red-800 mb-4 text-xl">✗ Lo que NO puedes hacer</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2 mt-1 font-bold">→</span>
                          <span>Trabajar sin <strong>autorización previa</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2 mt-1 font-bold">→</span>
                          <span>Superar las <strong>30 horas semanales</strong> durante el curso</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2 mt-1 font-bold">→</span>
                          <span>Que el trabajo <strong>interfiera con los estudios</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-600 mr-2 mt-1 font-bold">→</span>
                          <span>Ganar más de lo que cuesta tu estancia (en teoría)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <h3 className="font-bold text-yellow-800 mb-3">📝 Cómo obtener la autorización de trabajo</h3>
                    <p className="text-gray-700 mb-3">
                      Es el <strong>empleador</strong> quien debe solicitar la autorización de trabajo 
                      compatible con estudios en la Oficina de Extranjería. Necesita:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Contrato de trabajo a tiempo parcial</li>
                      <li>Copia del TIE del estudiante</li>
                      <li>Solicitud modelo oficial</li>
                      <li>El trámite puede tardar 1-2 meses</li>
                    </ul>
                  </div>
                </div>

                {/* Renovación */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Renovación de la Estancia por Estudios
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                    <p>
                      La estancia por estudios se concede por la duración del curso, máximo 1 año. 
                      Si continúas estudiando, puedes <strong>renovar tu autorización</strong> de 
                      forma indefinida mientras mantengas el estatus de estudiante.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="font-bold text-gray-900 mb-4">Requisitos para renovar</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Pasaporte vigente
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          TIE actual
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Matrícula nuevo curso
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Certificado de aprovechamiento
                        </li>
                      </ul>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Seguro médico renovado
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Prueba de medios económicos
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Empadronamiento
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Tasa 790-052
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <h3 className="font-bold text-blue-800 mb-2">📊 Requisito de aprovechamiento</h3>
                    <p className="text-gray-700">
                      Para renovar, debes haber aprobado al menos el <strong>50% de las asignaturas 
                      o créditos</strong> del curso anterior. Si no alcanzas este porcentaje, 
                      pueden denegar la renovación. Excepciones: enfermedad acreditada, fuerza mayor.
                    </p>
                  </div>
                </div>

                {/* Modificación a residencia */}
                <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-lg p-8 text-white">
                  <h2 className="text-3xl font-bold mb-6">
                    De Estudiante a Residente: La Modificación
                  </h2>
                  <p className="text-green-100 mb-6 text-lg">
                    Una de las mayores ventajas de estudiar en España es la posibilidad de 
                    <strong className="text-white"> modificar tu estancia por estudios a residencia y 
                    trabajo</strong> una vez finalizados los estudios.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4">Requisitos principales</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">✓</span>
                          <span>Mínimo <strong>3 años</strong> como estudiante en España</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">✓</span>
                          <span>Haber <strong>finalizado los estudios</strong> con aprovechamiento</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">✓</span>
                          <span>Tener una <strong>oferta de trabajo</strong> (cuenta ajena) o proyecto de negocio (cuenta propia)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">✓</span>
                          <span>El empleo debe estar <strong>relacionado con los estudios</strong> realizados</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">✓</span>
                          <span>Cumplir requisitos generales (antecedentes, etc.)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4">Novedad 2024: Búsqueda de empleo</h3>
                      <p className="text-green-100 mb-4">
                        Si has terminado estudios superiores (grado, máster, doctorado), puedes 
                        solicitar una autorización de <strong>12 meses para buscar empleo</strong> 
                        o emprender sin necesidad de tener ya la oferta de trabajo.
                      </p>
                      <div className="bg-yellow-400/20 rounded-lg p-4 border border-yellow-400/30">
                        <p className="text-yellow-100 text-sm">
                          <strong>💡 Consejo:</strong> Esta es una excelente vía para quedarte en 
                          España después de finalizar tus estudios y encontrar trabajo con calma.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Costes */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Costes del Visado de Estudiante
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
                          <td className="p-4 text-gray-700">Visado de estudiante (en Consulado)</td>
                          <td className="p-4 text-right font-semibold">60-80€</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Tasa TIE (790-052)</td>
                          <td className="p-4 text-right font-semibold">16,32€</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Seguro médico (anual)</td>
                          <td className="p-4 text-right font-semibold">200-500€</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Antecedentes penales (apostilla + traducción)</td>
                          <td className="p-4 text-right font-semibold">30-80€</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-700">Certificado médico</td>
                          <td className="p-4 text-right font-semibold">30-50€</td>
                        </tr>
                        <tr className="bg-yellow-50">
                          <td className="p-4 text-gray-900 font-bold">TOTAL APROXIMADO (sin matrícula)</td>
                          <td className="p-4 text-right font-bold text-indigo-600">340 - 730€</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    * Los costes de matrícula varían enormemente según el tipo de estudios y centro 
                    (desde 1.000€ hasta 20.000€+ al año).
                  </p>
                </div>

                {/* Documentación checklist */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Checklist de Documentación Completa
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">📋</span>
                        Para el visado (Consulado)
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Formulario de solicitud de visado
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Pasaporte vigente (mín. 1 año)
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          2 fotografías recientes
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Carta de admisión / matrícula
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Prueba de medios económicos
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Seguro médico
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Antecedentes penales apostillados
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Certificado médico
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-indigo-600" readOnly />
                          Prueba de alojamiento
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">🎫</span>
                        Para el TIE (en España)
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-purple-600" readOnly />
                          Formulario EX-17
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-purple-600" readOnly />
                          Pasaporte + copia
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-purple-600" readOnly />
                          Visado de estudiante (página del pasaporte)
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-purple-600" readOnly />
                          3 fotografías tamaño carnet
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-purple-600" readOnly />
                          Justificante de empadronamiento
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-purple-600" readOnly />
                          Tasa 790-052 pagada
                        </li>
                        <li className="flex items-center">
                          <input type="checkbox" className="mr-3 w-5 h-5 text-purple-600" readOnly />
                          Justificante de cita previa
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Preguntas Frecuentes sobre Visa de Estudiante
                  </h2>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Puedo trabajar con visa de estudiante en España?
                      </h3>
                      <p className="text-gray-700">
                        Sí, los estudiantes extranjeros en España pueden trabajar hasta <strong>30 horas 
                        semanales</strong> (antes eran 20h) con una autorización de trabajo compatible 
                        con estudios. El trabajo no puede interferir con tus estudios y el contrato 
                        debe ser a tiempo parcial. También puedes hacer prácticas remuneradas relacionadas 
                        con tus estudios. En períodos vacacionales puedes trabajar a tiempo completo.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Cuánto tiempo puedo estar en España con visa de estudiante?
                      </h3>
                      <p className="text-gray-700">
                        La estancia por estudios se concede por la duración del curso, máximo un año. 
                        Se puede <strong>renovar anualmente</strong> mientras continúes estudiando y 
                        apruebes al menos el 50% de las asignaturas o créditos. No hay límite de 
                        renovaciones mientras mantengas el estatus de estudiante.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Puedo cambiar mi visa de estudiante a permiso de trabajo?
                      </h3>
                      <p className="text-gray-700">
                        Sí, es posible mediante la <strong>"modificación de estancia por estudios a 
                        residencia y trabajo"</strong>. Necesitas haber estado al menos 3 años como 
                        estudiante en España, haber finalizado tus estudios, tener una oferta de 
                        trabajo relacionada con tus estudios y cumplir los requisitos generales. 
                        Desde 2024, también puedes solicitar 12 meses para buscar empleo tras finalizar 
                        estudios superiores.
                      </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Qué documentos necesito para renovar mi TIE de estudiante?
                      </h3>
                      <p className="text-gray-700">
                        Para renovar necesitas: pasaporte vigente, TIE actual, justificante de matrícula 
                        del nuevo curso, <strong>certificado de aprovechamiento</strong> (aprobar mínimo 
                        50%), seguro médico vigente, prueba de medios económicos (IPREM mensual), 
                        empadronamiento actualizado y tasa 790-052.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        ¿Cuánto dinero necesito demostrar para la visa de estudiante?
                      </h3>
                      <p className="text-gray-700">
                        Debes acreditar el <strong>100% del IPREM mensual</strong> (aproximadamente 600€ 
                        en  2026) multiplicado por los meses de estancia. Para un curso de 9 meses serían 
                        unos <strong>5.400€</strong>. Además, debes poder costear el viaje de ida y vuelta 
                        y tener pagada (o poder pagar) la matrícula del curso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-indigo-700 to-purple-700 rounded-2xl p-6 text-white sticky top-4">
                  <h3 className="text-xl font-bold mb-4">¿Necesitas tu TIE de estudiante?</h3>
                  <p className="text-indigo-100 mb-6">
                    Conseguimos tu cita para toma de huellas y TIE. Sin pago adelantado.
                  </p>
                  <a
                    href="https://wa.me/923221430630?text=Hola%2C%20necesito%20cita%20TIE%20de%20estudiante"
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
                    className="block w-full bg-white text-indigo-700 font-semibold py-4 rounded-xl text-center hover:bg-indigo-50 transition-all duration-200"
                  >
                    Solicitar Cita
                  </Link>
                  <p className="text-sm text-indigo-200 text-center mt-4">
                    Sin pago adelantado · Pague después de verificar
                  </p>
                </div>

                {/* Quick Info */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Datos clave</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Trabajo permitido:</span>
                      <span className="font-bold text-green-600">30h/semana</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Renovaciones:</span>
                      <span className="font-bold text-gray-900">Ilimitadas</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Tasa TIE:</span>
                      <span className="font-bold text-gray-900">16,32€</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Modificación a trabajo:</span>
                      <span className="font-bold text-gray-900">Tras 3 años</span>
                    </li>
                  </ul>
                </div>

                {/* Enlaces útiles */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Enlaces útiles</h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Estudiantes.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Ministerio de Exteriores
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.inclusion.gob.es/web/migraciones/estudiantes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Ministerio de Inclusión
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://universidades.gob.es/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Ministerio de Universidades
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sede.policia.gob.es/portalCiudadano/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span className="mr-2">🔗</span>
                        Cita previa TIE
                      </a>
                    </li>
                  </ul>
                </div>

                {/* IPREM Info */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-yellow-900 mb-4">💰 IPREM  2026</h3>
                  <p className="text-gray-700 mb-3">
                    Para calcular los medios económicos necesarios:
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">IPREM mensual:</span>
                      <span className="font-bold">600€ aprox.</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Curso 9 meses:</span>
                      <span className="font-bold">5.400€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Curso 12 meses:</span>
                      <span className="font-bold">7.200€</span>
                    </div>
                  </div>
                </div>

                {/* Servicios relacionados */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Servicios relacionados</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/servicios/toma-de-huellas"
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-2xl mr-3">👆</span>
                        <div>
                          <div className="font-semibold text-gray-900">Toma de Huellas</div>
                          <div className="text-sm text-gray-600">Cita para tu TIE de estudiante</div>
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
                          <div className="font-semibold text-gray-900">Renovación TIE</div>
                          <div className="text-sm text-gray-600">Renueva tu tarjeta de estudiante</div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios/cita-previa-extranjeria"
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-2xl mr-3">📋</span>
                        <div>
                          <div className="font-semibold text-gray-900">Cita Extranjería</div>
                          <div className="text-sm text-gray-600">Para modificación a trabajo</div>
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
                          <div className="text-sm text-gray-600">Otras vías de residencia</div>
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
        <section className="py-16 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Necesitas Ayuda con tu Visa de Estudiante?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Te ayudamos con citas para TIE, renovaciones y modificaciones a residencia de trabajo. 
              Sin pago por adelantado - Pague después de verificar su cita.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/923221430630?text=Hola%2C%20necesito%20ayuda%20con%20mi%20visa%20de%20estudiante"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactar por WhatsApp
              </a>
              <Link
                href="/solicitar-cita"
                className="inline-flex items-center justify-center bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all duration-200 text-lg"
              >
                Solicitar Cita Ahora
              </Link>
            </div>
            <p className="text-indigo-200 mt-6 text-sm">
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
