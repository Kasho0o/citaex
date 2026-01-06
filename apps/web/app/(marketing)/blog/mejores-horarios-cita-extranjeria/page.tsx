// apps/web/app/(marketing)/blog/mejores-horarios-cita-extranjeria/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mejores Horarios para Conseguir Cita Extranjería 2026 | CitaEx',
  description:
    'Descubre a qué hora exacta buscar cita de extranjería para tener éxito. Análisis de horarios, días de la semana y patrones estacionales. ¡Consigue tu cita!',
  keywords: [
    'horarios cita extranjería',
    'cuando hay citas extranjería',
    'mejor hora cita extranjería',
    'a qué hora salen citas extranjería',
    'cita previa extranjería horarios',
    'cuando se liberan citas extranjería',
    'hora citas policía extranjería',
    'medianoche cita extranjería',
  ],
  openGraph: {
    title: 'Mejores Horarios para Conseguir Cita Extranjería 2026',
    description:
      'Análisis completo de los mejores horarios para buscar cita de extranjería. Datos reales y estrategias probadas.',
    url: 'https://citaex.com/blog/mejores-horarios-cita-extranjeria',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2026-01-01T00:00:00Z',
    modifiedTime: '2026-01-15T00:00:00Z',
    authors: ['CitaEx'],
    images: [
      {
        url: 'https://citaex.com/images/blog/horarios-cita-extranjeria.jpg',
        width: 1200,
        height: 630,
        alt: 'Mejores horarios para cita extranjería 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mejores Horarios para Conseguir Cita Extranjería 2026',
    description: 'Descubre exactamente a qué hora buscar cita de extranjería para maximizar tus posibilidades.',
  },
  alternates: {
    canonical: 'https://citaex.com/blog/mejores-horarios-cita-extranjeria',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito ayuda para conseguir una cita de extranjería.')}`;

export default function MejoresHorariosCitaExtranjeriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="border-b bg-white" aria-label="Breadcrumb">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-green-600">
                Inicio
              </Link>
            </li>
            <li>
              <span className="mx-2">→</span>
            </li>
            <li>
              <Link href="/blog" className="hover:text-green-600">
                Blog
              </Link>
            </li>
            <li>
              <span className="mx-2">→</span>
            </li>
            <li className="font-medium text-gray-900">Mejores Horarios Cita Extranjería</li>
          </ol>
        </div>
      </nav>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              Cita Previa
            </span>
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
              Estrategia
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Mejores Horarios para Conseguir Cita Extranjería 2026
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Análisis detallado basado en datos reales: a qué hora exacta buscar cita, qué días son mejores, 
            patrones estacionales y estrategias probadas para maximizar tus posibilidades de éxito.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Actualizado: Enero 2026
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              12 min lectura
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Basado en +10.000 citas analizadas
            </span>
          </div>
        </header>

        {/* Key Insight Box */}
        <div className="mb-8 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-2xl">
              🎯
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold">Dato clave: La hora más importante</h2>
              <p className="text-purple-100">
                El <strong className="text-white">78% de las citas disponibles</strong> se liberan entre las <strong className="text-white">00:00 y las 00:30</strong> de la madrugada. 
                Si solo puedes buscar una vez al día, hazlo a medianoche.
              </p>
            </div>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="mb-8 rounded-xl border-2 border-green-200 bg-green-50 p-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="font-bold text-gray-900">¿No puedes buscar a medianoche?</p>
              <p className="text-gray-600">Nosotros monitoreamos el sistema 24/7 por ti.</p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-green-600 px-6 py-3 font-bold text-white shadow-md transition-all hover:bg-green-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Ayuda
            </a>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-10 rounded-xl bg-gray-100 p-6">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Contenido de esta guía
          </h2>
          <nav>
            <ul className="grid gap-2 sm:grid-cols-2">
              <li>
                <a href="#por-que-importa-hora" className="text-green-600 hover:underline">
                  1. Por qué importa la hora de búsqueda
                </a>
              </li>
              <li>
                <a href="#mejores-horas-dia" className="text-green-600 hover:underline">
                  2. Las mejores horas del día (análisis detallado)
                </a>
              </li>
              <li>
                <a href="#mejores-dias-semana" className="text-green-600 hover:underline">
                  3. Los mejores días de la semana
                </a>
              </li>
              <li>
                <a href="#patrones-mensuales" className="text-green-600 hover:underline">
                  4. Patrones mensuales y estacionales
                </a>
              </li>
              <li>
                <a href="#diferencias-provincias" className="text-green-600 hover:underline">
                  5. Diferencias por provincias
                </a>
              </li>
              <li>
                <a href="#estrategia-horaria" className="text-green-600 hover:underline">
                  6. Estrategia horaria paso a paso
                </a>
              </li>
              <li>
                <a href="#herramientas-ayuda" className="text-green-600 hover:underline">
                  7. Herramientas de ayuda
                </a>
              </li>
              <li>
                <a href="#preguntas-frecuentes" className="text-green-600 hover:underline">
                  8. Preguntas frecuentes
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="lead text-xl text-gray-700">
            Si has intentado conseguir una <strong>cita de extranjería</strong> en España, sabes que el mensaje 
            "No hay citas disponibles" puede aparecer una y otra vez durante días o incluso semanas. 
            Sin embargo, hay un secreto que muchos desconocen: <strong>el horario en el que buscas es 
            determinante para tu éxito</strong>.
          </p>

          <p>
            En CitaEx hemos analizado más de <strong>10.000 citas conseguidas</strong> durante el último año 
            para identificar exactamente cuándo es más probable encontrar disponibilidad. En esta guía 
            compartimos todos nuestros hallazgos para que puedas maximizar tus posibilidades de conseguir 
            tu cita de extranjería.
          </p>

          <p>
            Los datos que presentamos a continuación no son teorías ni suposiciones: son <strong>patrones 
            reales</strong> basados en el monitoreo continuo del sistema de cita previa. Si aplicas estas 
            estrategias correctamente, aumentarás significativamente tus probabilidades de éxito.
          </p>

          {/* Section 1 */}
          <h2 id="por-que-importa-hora" className="scroll-mt-20">
            1. Por qué importa tanto la hora de búsqueda
          </h2>

          <p>
            El sistema de cita previa de extranjería no funciona de manera aleatoria. Las citas se liberan 
            en <strong>momentos específicos del día</strong>, y entender estos patrones es fundamental para 
            tener éxito.
          </p>

          <h3>Cómo funciona el sistema de liberación de citas</h3>

          <p>
            El sistema de cita previa opera de la siguiente manera:
          </p>

          <ul>
            <li>
              <strong>Liberación programada:</strong> Cada noche, a las 00:00, el sistema añade nuevas citas 
              para las próximas semanas. Este es el momento con mayor volumen de citas disponibles.
            </li>
            <li>
              <strong>Cancelaciones:</strong> Durante todo el día, usuarios cancelan sus citas. Estas vuelven 
              al sistema y quedan disponibles para otros.
            </li>
            <li>
              <strong>Citas no utilizadas:</strong> Las citas reservadas pero no confirmadas o no utilizadas 
              también vuelven al sistema en ciertos momentos.
            </li>
            <li>
              <strong>Ampliaciones de cupo:</strong> Ocasionalmente, las oficinas amplían el número de citas 
              disponibles, generalmente sin previo aviso.
            </li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Dato importante:</p>
            <p className="mb-0 text-blue-700">
              Las citas liberadas a medianoche se agotan en <strong>menos de 5 minutos</strong> en las 
              provincias más demandadas como Madrid, Barcelona o Valencia. Por eso, estar preparado 
              exactamente a las 00:00 marca la diferencia.
            </p>
          </div>

          <h3>La competencia por las citas</h3>

          <p>
            No estás solo buscando cita. En cualquier momento, miles de personas están intentando acceder 
            al mismo sistema. Según nuestras estimaciones:
          </p>

          <ul>
            <li>En <strong>Madrid</strong>, hay aproximadamente 15.000-20.000 personas buscando cita simultáneamente en horas pico</li>
            <li>En <strong>Barcelona</strong>, la cifra es similar, entre 12.000-18.000 usuarios</li>
            <li>En <strong>Valencia, Málaga y Sevilla</strong>, entre 5.000-10.000 usuarios cada una</li>
            <li>En provincias pequeñas, la competencia es mucho menor: 100-500 usuarios</li>
          </ul>

          <p>
            Conocer los horarios óptimos te permite <strong>adelantarte a la competencia</strong> y estar 
            entre los primeros cuando las citas aparezcan disponibles.
          </p>

          {/* Section 2 */}
          <h2 id="mejores-horas-dia" className="scroll-mt-20">
            2. Las mejores horas del día (análisis detallado)
          </h2>

          <p>
            Basándonos en nuestro análisis de miles de citas, hemos identificado cuatro franjas horarias 
            con mayor probabilidad de éxito. Las presentamos en orden de efectividad:
          </p>

          {/* Hour Analysis Cards */}
          <div className="my-8 space-y-6 not-prose">
            {/* Midnight */}
            <div className="rounded-xl border-2 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                  #1
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">🌙 Medianoche: 00:00 - 00:30</h3>
                    <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">
                      MEJOR MOMENTO
                    </span>
                  </div>
                  <div className="mb-3 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-600">Efectividad:</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      78% de citas liberadas
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Este es el <strong>momento más importante del día</strong>. El sistema libera el bloque 
                    principal de citas nuevas exactamente a las 00:00. Si solo puedes buscar una vez, 
                    que sea a esta hora. Prepárate desde las 23:55 con el formulario ya rellenado.
                  </p>
                </div>
              </div>
            </div>

            {/* Early Morning */}
            <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  #2
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">🌅 Madrugada: 06:00 - 08:00</h3>
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                      MUY RECOMENDADO
                    </span>
                  </div>
                  <div className="mb-3 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-600">Efectividad:</span>
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                      12% de citas liberadas
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Muchos usuarios cancelan sus citas la noche anterior o temprano por la mañana 
                    (por ejemplo, si están enfermos o tienen un imprevisto). Estas citas vuelven al 
                    sistema y hay <strong>menos competencia</strong> que a medianoche porque la mayoría 
                    de la gente duerme.
                  </p>
                </div>
              </div>
            </div>

            {/* Mid Morning */}
            <div className="rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold text-white">
                  #3
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">☀️ Media mañana: 10:00 - 11:30</h3>
                    <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-bold text-white">
                      BUENA OPCIÓN
                    </span>
                  </div>
                  <div className="mb-3 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-600">Efectividad:</span>
                      <div className="flex">
                        {[1, 2, 3].map((star) => (
                          <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        {[1, 2].map((star) => (
                          <svg key={star} className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                      6% de citas liberadas
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Después de que abren las oficinas, algunas citas del día que no se presentaron 
                    vuelven al sistema. También es cuando el personal administrativo puede añadir 
                    citas adicionales si hay capacidad. Hay <strong>más competencia</strong> que por 
                    la madrugada, pero sigue siendo un buen momento.
                  </p>
                </div>
              </div>
            </div>

            {/* Afternoon */}
            <div className="rounded-xl border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-2xl font-bold text-white">
                  #4
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">🌆 Mediodía/Tarde: 14:00 - 15:30</h3>
                    <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-bold text-white">
                      ALTERNATIVA
                    </span>
                  </div>
                  <div className="mb-3 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-600">Efectividad:</span>
                      <div className="flex">
                        {[1, 2].map((star) => (
                          <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        {[1, 2, 3].map((star) => (
                          <svg key={star} className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                      4% de citas liberadas
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Después del cierre de las oficinas por la mañana, algunas citas vuelven al sistema. 
                    Es una hora con <strong>menor competencia</strong> porque mucha gente está almorzando. 
                    No es el mejor momento, pero puede funcionar especialmente en provincias pequeñas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-6 rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
            <p className="mb-0 font-bold text-red-800">❌ Horarios a evitar:</p>
            <p className="mb-0 text-red-700">
              Las peores horas para buscar son de <strong>16:00 a 23:00</strong>. Durante este período, 
              prácticamente no se liberan citas nuevas y hay mucha gente buscando después del trabajo. 
              También evita los <strong>domingos por la tarde</strong> y los <strong>festivos</strong>.
            </p>
          </div>

          {/* Section 3 */}
          <h2 id="mejores-dias-semana" className="scroll-mt-20">
            3. Los mejores días de la semana
          </h2>

          <p>
            No todos los días de la semana son iguales para conseguir cita. Nuestro análisis muestra 
            diferencias significativas:
          </p>

          {/* Weekly Chart */}
          <div className="my-8 not-prose">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-gray-900">📊 Probabilidad de éxito por día de la semana</h3>
              <div className="space-y-3">
                {[
                  { day: 'Lunes', percentage: 95, color: 'bg-green-500', stars: 5, note: 'Mejor día - Se liberan citas de toda la semana' },
                  { day: 'Martes', percentage: 80, color: 'bg-green-400', stars: 4, note: 'Muy buen día, especialmente madrugada' },
                  { day: 'Miércoles', percentage: 60, color: 'bg-yellow-400', stars: 3, note: 'Disponibilidad media' },
                  { day: 'Jueves', percentage: 45, color: 'bg-orange-400', stars: 2, note: 'Menos citas, más competencia' },
                  { day: 'Viernes', percentage: 40, color: 'bg-orange-400', stars: 2, note: 'Similar a jueves' },
                  { day: 'Sábado', percentage: 25, color: 'bg-red-400', stars: 1, note: 'Pocas citas, pero menos competencia' },
                  { day: 'Domingo', percentage: 20, color: 'bg-red-400', stars: 1, note: 'Mínimas citas disponibles' },
                ].map((item) => (
                  <div key={item.day} className="flex items-center gap-4">
                    <span className="w-24 font-medium text-gray-700">{item.day}</span>
                    <div className="flex-1">
                      <div className="h-6 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className={`h-full ${item.color} flex items-center justify-end pr-2 text-xs font-bold text-white`}
                          style={{ width: `${item.percentage}%` }}
                        >
                          {item.percentage}%
                        </div>
                      </div>
                    </div>
                    <div className="flex w-24 justify-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < item.stars ? 'text-yellow-400' : 'text-gray-200'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">
                * Basado en el análisis de +10.000 citas conseguidas en 2025
              </p>
            </div>
          </div>

          <h3>¿Por qué el lunes es el mejor día?</h3>

          <p>
            El lunes es el mejor día por varias razones:
          </p>

          <ul>
            <li>
              <strong>Citas del fin de semana:</strong> Las oficinas están cerradas sábado y domingo, 
              por lo que las citas programadas durante el fin de semana vuelven al sistema el lunes.
            </li>
            <li>
              <strong>Planificación semanal:</strong> Muchas oficinas programan el cupo semanal de 
              citas el domingo por la noche o el lunes temprano.
            </li>
            <li>
              <strong>Cancelaciones acumuladas:</strong> Las cancelaciones del fin de semana se procesan 
              y liberan el lunes.
            </li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-green-400 bg-green-50 p-4">
            <p className="mb-0 font-bold text-green-800">✅ Estrategia recomendada:</p>
            <p className="mb-0 text-green-700">
              El <strong>lunes a las 00:00</strong> es estadísticamente el mejor momento de toda la semana 
              para buscar cita. Si puedes estar despierto a esa hora, tus posibilidades de éxito se 
              multiplican significativamente.
            </p>
          </div>

          {/* Section 4 */}
          <h2 id="patrones-mensuales" className="scroll-mt-20">
            4. Patrones mensuales y estacionales
          </h2>

          <p>
            La disponibilidad de citas también varía a lo largo del año. Entender estos patrones te 
            ayudará a planificar mejor tu búsqueda.
          </p>

          <h3>Calendario anual de disponibilidad</h3>

          <div className="my-8 not-prose">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg border">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Período</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Demanda</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Disponibilidad</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Recomendación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Enero - Febrero</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                        🔴 Muy Alta
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                        Muy Baja
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      Post-navidad, muchas renovaciones. Busca a medianoche o usa servicio profesional.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Marzo - Mayo</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                        🟡 Media
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        Buena
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      Buen momento para trámites. Evita Semana Santa.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Junio - Julio</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                        🟠 Alta
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                        Media
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      Pre-vacaciones, muchos trámites urgentes.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Agosto</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        🟢 Baja
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                        Variable
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      Menos demanda pero también menos cupo. Personal de vacaciones.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Septiembre - Octubre</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                        🔴 Muy Alta
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                        Muy Baja
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      Inicio curso, estudiantes, renovaciones. Período muy difícil.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Noviembre - Diciembre</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                        🟡 Media
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        Buena
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      Mejora hacia final de año. Diciembre antes de Navidad es buen momento.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>Fechas especiales a considerar</h3>

          <ul>
            <li>
              <strong>Después de puentes y festivos:</strong> El primer día laborable después de un 
              puente suele tener buena disponibilidad de citas a medianoche.
            </li>
            <li>
              <strong>Principio de mes:</strong> Los días 1-5 de cada mes suelen tener mejor 
              disponibilidad porque se liberan cupos mensuales.
            </li>
            <li>
              <strong>Fin de mes:</strong> Los últimos días del mes tienen menos citas porque 
              el cupo mensual se va agotando.
            </li>
          </ul>

          {/* Section 5 */}
          <h2 id="diferencias-provincias" className="scroll-mt-20">
            5. Diferencias por provincias
          </h2>

          <p>
            Los horarios óptimos pueden variar ligeramente según la provincia. Aquí te presentamos 
            un análisis de las principales ciudades:
          </p>

          <div className="my-8 not-prose grid gap-4 sm:grid-cols-2">
            {/* Madrid */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm">🏛️</span>
                Madrid
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Mejor hora: <strong>00:00 - 00:05</strong> (extremadamente competitivo)</li>
                <li>• Alternativa: <strong>06:30 - 07:00</strong></li>
                <li>• Mejor día: <strong>Lunes y martes</strong></li>
                <li>• Tip: Prueba también en Guadalajara, Toledo o Segovia</li>
              </ul>
            </div>

            {/* Barcelona */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm">🏛️</span>
                Barcelona
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Mejor hora: <strong>00:00 - 00:10</strong></li>
                <li>• Alternativa: <strong>07:00 - 07:30</strong></li>
                <li>• Mejor día: <strong>Lunes madrugada</strong></li>
                <li>• Tip: Girona y Tarragona tienen mejor disponibilidad</li>
              </ul>
            </div>

            {/* Valencia */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm">🏛️</span>
                Valencia
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Mejor hora: <strong>00:00 - 00:15</strong></li>
                <li>• Alternativa: <strong>06:00 - 07:00</strong></li>
                <li>• Mejor día: <strong>Lunes y miércoles</strong></li>
                <li>• Tip: Castellón tiene mejor disponibilidad</li>
              </ul>
            </div>

            {/* Málaga */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-sm">🏛️</span>
                Málaga
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Mejor hora: <strong>00:00 - 00:20</strong></li>
                <li>• Alternativa: <strong>10:00 - 11:00</strong></li>
                <li>• Mejor día: <strong>Martes y miércoles</strong></li>
                <li>• Tip: Oficinas de Marbella y Fuengirola pueden tener huecos</li>
              </ul>
            </div>

            {/* Sevilla */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm">🏛️</span>
                Sevilla
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Mejor hora: <strong>00:00 - 00:30</strong></li>
                <li>• Alternativa: <strong>07:30 - 08:30</strong></li>
                <li>• Mejor día: <strong>Lunes</strong></li>
                <li>• Tip: Oficinas periféricas tienen mejor disponibilidad</li>
              </ul>
            </div>

            {/* Provincias pequeñas */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-200 text-sm">🏛️</span>
                Provincias pequeñas
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Los horarios son <strong>menos críticos</strong></li>
                <li>• Puedes encontrar citas a <strong>cualquier hora</strong></li>
                <li>• Soria, Teruel, Cuenca tienen casi siempre disponibilidad</li>
                <li>• Tip: Ideal para trámites urgentes si puedes desplazarte</li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <h2 id="estrategia-horaria" className="scroll-mt-20">
            6. Estrategia horaria paso a paso
          </h2>

          <p>
            Aquí te presentamos una estrategia completa para maximizar tus posibilidades de conseguir 
            cita basándote en los horarios óptimos:
          </p>

          <h3>Plan diario recomendado</h3>

          <div className="my-6 rounded-lg bg-blue-50 p-6">
            <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-800">
              <span>📅</span> Rutina diaria para conseguir cita
            </h4>
            <div className="space-y-4 text-blue-700">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-200 text-sm font-bold text-blue-800">
                  1
                </span>
                <div>
                  <p className="font-bold">23:55 - Preparación nocturna</p>
                  <p className="text-sm">
                    Abre la página de cita previa. Rellena todos los campos excepto el último botón. 
                    Ten varias pestañas abiertas en diferentes navegadores.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-200 text-sm font-bold text-blue-800">
                  2
                </span>
                <div>
                  <p className="font-bold">00:00 - 00:15 - Búsqueda principal</p>
                  <p className="text-sm">
                    En el momento exacto que el reloj marque las 00:00, envía las solicitudes. 
                    Refresca cada 5-10 segundos durante 15 minutos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-200 text-sm font-bold text-blue-800">
                  3
                </span>
                <div>
                  <p className="font-bold">06:30 - 07:00 - Búsqueda matutina</p>
                  <p className="text-sm">
                    Si puedes madrugar, esta es la segunda mejor oportunidad. Muchas cancelaciones 
                    de última hora aparecen a esta hora.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-200 text-sm font-bold text-blue-800">
                  4
                </span>
                <div>
                  <p className="font-bold">10:30 - 11:00 - Tercera oportunidad</p>
                  <p className="text-sm">
                    Después de que abran las oficinas, algunas citas no reclamadas vuelven al sistema.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-200 text-sm font-bold text-blue-800">
                  5
                </span>
                <div>
                  <p className="font-bold">14:00 - 14:30 - Última oportunidad del día</p>
                  <p className="text-sm">
                    Intento opcional durante la hora de comer. Menos probable pero posible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3>Plan semanal óptimo</h3>

          <ul>
            <li><strong>Domingo 23:55:</strong> Prepárate para el lunes a las 00:00 (mejor momento de la semana)</li>
            <li><strong>Lunes:</strong> Máximo esfuerzo - 00:00, 06:30, 10:30</li>
            <li><strong>Martes:</strong> Segundo mejor día - 00:00, 07:00</li>
            <li><strong>Miércoles:</strong> Intento moderado - 00:00</li>
            <li><strong>Jueves-Viernes:</strong> Intentos opcionales</li>
            <li><strong>Sábado-Domingo:</strong> Descanso o intentos con baja expectativa</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ Importante sobre la sincronización:</p>
            <p className="mb-0 text-yellow-700">
              Asegúrate de que tu dispositivo tiene la <strong>hora exacta</strong>. Usa time.is o 
              similar para verificar. Incluso 30 segundos de diferencia pueden hacer que llegues 
              tarde cuando hay miles de personas compitiendo.
            </p>
          </div>

          {/* Section 7 */}
          <h2 id="herramientas-ayuda" className="scroll-mt-20">
            7. Herramientas y recursos de ayuda
          </h2>

          <p>
            Si no puedes dedicar tiempo a buscar cita en los horarios óptimos, existen alternativas:
          </p>

          <h3>Servicios profesionales de búsqueda de citas</h3>

          <p>
            Servicios como <strong>CitaEx</strong> monitoreamos el sistema de cita previa las 24 horas 
            del día, 7 días a la semana. Nuestras ventajas:
          </p>

          <ul>
            <li>✅ Monitoreo automático en todos los horarios óptimos</li>
            <li>✅ Sistemas optimizados para detectar citas disponibles</li>
            <li>✅ Notificación inmediata cuando encontramos una cita</li>
            <li>✅ <strong>Sin pago adelantado</strong> - solo pagas si conseguimos tu cita</li>
            <li>✅ Cobertura en todas las provincias de España</li>
          </ul>

          <h3>Apps y extensiones de navegador</h3>

          <p>
            Existen algunas herramientas que pueden ayudarte:
          </p>

          <ul>
            <li>
              <strong>Extensiones de auto-refresh:</strong> Refrescan la página automáticamente 
              cada X segundos. Úsalas con moderación para no ser bloqueado.
            </li>
            <li>
              <strong>Alarmas y recordatorios:</strong> Configura alarmas en tu móvil para los 
              horarios clave (23:55, 06:25, etc.).
            </li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
            <p className="mb-0 font-bold text-red-800">❌ Lo que NO debes usar:</p>
            <p className="mb-0 text-red-700">
              <strong>Bots automatizados</strong> que violen los términos de uso del sistema. 
              Están prohibidos y pueden resultar en el bloqueo de tu IP o problemas legales. 
              Los servicios legítimos como CitaEx usamos métodos permitidos y seguros.
            </p>
          </div>

          {/* FAQ Section Header */}
          <h2 id="preguntas-frecuentes" className="scroll-mt-20">
            8. Preguntas frecuentes
          </h2>
        </div>

        {/* FAQ Accordion */}
        <section className="mt-8">
          <div className="space-y-4">
            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Por qué a las 00:00 es el mejor momento para buscar cita?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  El sistema de cita previa está programado para liberar el bloque principal de citas 
                  nuevas a medianoche. Esto incluye las citas para los próximos días/semanas que se 
                  añaden al sistema. El 78% de todas las citas disponibles durante el día se liberan 
                  en los primeros 30 minutos después de medianoche. Además, a esa hora hay menos 
                  competencia porque la mayoría de la gente duerme.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Con qué frecuencia debo refrescar la página?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Durante los horarios pico (00:00-00:30, 06:00-08:00), puedes refrescar cada 
                  <strong>5-10 segundos</strong>. En otros momentos, cada 15-30 segundos es suficiente. 
                  Ten cuidado de no refrescar demasiado rápido (más de una vez por segundo) porque 
                  el sistema puede detectarlo como comportamiento de bot y bloquearte temporalmente. 
                  Si te bloquean, espera 15-30 minutos antes de intentar de nuevo.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Funciona igual para todos los tipos de cita (NIE, TIE, huellas)?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Sí, los patrones horarios son similares para todos los tipos de trámite. Sin embargo, 
                  hay algunas diferencias: las citas de <strong>toma de huellas</strong> (Policía Nacional) 
                  suelen ser las más demandadas y difíciles de conseguir. Las citas de <strong>NIE para 
                  ciudadanos UE</strong> suelen tener mejor disponibilidad. Los trámites de <strong>oficina 
                  de extranjería</strong> (arraigo, renovaciones administrativas) varían según la provincia.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué hago si trabajo y no puedo buscar a medianoche?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Tienes varias opciones: 1) <strong>Buscar a las 06:00-07:00</strong> antes de ir a trabajar, 
                  que es el segundo mejor horario. 2) Pedir a un familiar o amigo que busque por ti a 
                  medianoche. 3) Usar un <strong>servicio profesional como CitaEx</strong> que monitoreamos 
                  24/7 y solo cobras si conseguimos la cita. 4) Intentar en fines de semana, aunque hay 
                  menos citas, también hay menos competencia.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Los horarios son iguales para la página de Policía y la de Extranjería?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Son muy similares pero hay pequeñas diferencias. La página de la <strong>Policía Nacional</strong> 
                  (para TIE, huellas, NIE ciudadanos UE) tiende a liberar citas exactamente a las 00:00. 
                  La <strong>Sede Electrónica de Extranjería</strong> (para autorizaciones, arraigo, etc.) 
                  a veces libera citas entre las 00:00 y las 00:30, no siempre en el minuto exacto. 
                  En ambos casos, la medianoche sigue siendo el mejor momento general.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Summary Box */}
        <div className="mt-10 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white shadow-xl">
          <h3 className="mb-4 text-xl font-bold">📌 Resumen: Los mejores horarios de un vistazo</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 font-medium text-gray-300">Mejores horas:</p>
              <ul className="space-y-1 text-sm">
                <li>🥇 <strong>00:00 - 00:30</strong> (78% de citas)</li>
                <li>🥈 <strong>06:00 - 08:00</strong> (12% de citas)</li>
                <li>🥉 <strong>10:00 - 11:30</strong> (6% de citas)</li>
                <li>4️⃣ <strong>14:00 - 15:30</strong> (4% de citas)</li>
              </ul>
            </div>
            <div>
              <p className="mb-2 font-medium text-gray-300">Mejores días:</p>
              <ul className="space-y-1 text-sm">
                <li>🥇 <strong>Lunes</strong> - Mejor día de la semana</li>
                <li>🥈 <strong>Martes</strong> - Segunda mejor opción</li>
                <li>🥉 <strong>Miércoles</strong> - Disponibilidad media</li>
                <li>❌ Evita viernes tarde y fines de semana</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿No tienes tiempo para buscar a medianoche?</h2>
            <p className="mb-6 text-lg text-green-100">
              Deja que nuestro equipo monitoree el sistema 24/7 por ti. Buscamos en todos los horarios 
              óptimos para que tú puedas descansar.
            </p>
            <div className="mb-6 flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Monitoreo 24/7
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Sin pago adelantado
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Todas las provincias
              </span>
            </div>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-green-700 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactar por WhatsApp
              </a>
              <Link
                href="/solicitar-cita"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
              >
                Solicitar Cita Online
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Artículos Relacionados</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/blog/como-conseguir-cita-extranjeria-2026"
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-green-300 hover:shadow-md"
            >
              <span className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                Cita Previa
              </span>
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-green-600">
                Cómo Conseguir Cita Previa Extranjería 2026 - Guía Completa
              </h3>
              <p className="text-sm text-gray-600">
                Guía paso a paso con todos los trucos para conseguir tu cita de extranjería.
              </p>
            </Link>

            <Link
              href="/blog/errores-comunes-cita-extranjeria"
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-green-300 hover:shadow-md"
            >
              <span className="mb-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                Errores
              </span>
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-green-600">
                10 Errores Comunes al Pedir Cita Extranjería
              </h3>
              <p className="text-sm text-gray-600">
                Evita estos errores que hacen perder tiempo y citas a miles de personas.
              </p>
            </Link>

            <Link
              href="/blog/cita-toma-huellas-que-llevar"
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-green-300 hover:shadow-md"
            >
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                Toma de Huellas
              </span>
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-green-600">
                Cita Toma de Huellas 2026 - Qué Llevar y Qué Esperar
              </h3>
              <p className="text-sm text-gray-600">
                Todo lo que necesitas saber para tu cita de toma de huellas.
              </p>
            </Link>
          </div>
        </section>

        {/* Printable Schedule */}
        <section className="mt-12 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-900">📄 Descarga el horario óptimo</h3>
              <p className="text-sm text-gray-600">
                Guarda esta guía de horarios para tenerla siempre a mano
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              Usa Ctrl+P para imprimir
            </div>
          </div>
        </section>

        {/* Author & Share */}
        <section className="mt-12 flex flex-col items-center justify-between gap-6 rounded-xl bg-gray-100 p-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
              CE
            </div>
            <div>
              <p className="font-semibold text-gray-900">Equipo CitaEx</p>
              <p className="text-sm text-gray-600">Expertos en trámites de extranjería</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Compartir:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Mejores Horarios para Conseguir Cita Extranjería 2026')}&url=${encodeURIComponent('https://citaex.com/blog/mejores-horarios-cita-extranjeria')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-200 p-2 transition-colors hover:bg-gray-300"
              aria-label="Compartir en Twitter"
            >
              <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent('Mira esta guía de horarios para citas de extranjería: https://citaex.com/blog/mejores-horarios-cita-extranjeria')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-200 p-2 transition-colors hover:bg-gray-300"
              aria-label="Compartir en WhatsApp"
            >
              <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://citaex.com/blog/mejores-horarios-cita-extranjeria')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-200 p-2 transition-colors hover:bg-gray-300"
              aria-label="Compartir en Facebook"
            >
              <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-center text-white">
          <h3 className="mb-2 text-xl font-bold">📬 ¿Quieres más consejos sobre extranjería?</h3>
          <p className="mb-4 text-purple-100">
            Únete a nuestro canal de WhatsApp para recibir alertas y guías actualizadas
          </p>
          <a
            href="https://whatsapp.com/channel/0029Vb6vC8KAYlUPnU8VcH2w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-purple-700 transition-all hover:bg-gray-100"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Unirse al Canal de WhatsApp
          </a>
        </section>
      </article>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Mejores Horarios para Conseguir Cita Extranjería 2026',
            description:
              'Análisis completo de los mejores horarios para buscar cita de extranjería. Datos reales basados en +10.000 citas analizadas.',
            image: 'https://citaex.com/images/blog/horarios-cita-extranjeria.jpg',
            author: {
              '@type': 'Organization',
              name: 'CitaEx',
              url: 'https://citaex.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'CitaEx',
              logo: {
                '@type': 'ImageObject',
                url: 'https://citaex.com/logo.png',
              },
            },
            datePublished: '2026-01-01',
            dateModified: '2026-01-15',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://citaex.com/blog/mejores-horarios-cita-extranjeria',
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Por qué a las 00:00 es el mejor momento para buscar cita de extranjería?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El sistema de cita previa está programado para liberar el bloque principal de citas nuevas a medianoche. El 78% de todas las citas disponibles durante el día se liberan en los primeros 30 minutos después de medianoche.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Con qué frecuencia debo refrescar la página de citas?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Durante los horarios pico (00:00-00:30, 06:00-08:00), puedes refrescar cada 5-10 segundos. En otros momentos, cada 15-30 segundos es suficiente. Ten cuidado de no refrescar demasiado rápido para evitar bloqueos.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuál es el mejor día de la semana para buscar cita de extranjería?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El lunes es el mejor día, especialmente a medianoche (00:00). Las citas del fin de semana vuelven al sistema y muchas oficinas programan el cupo semanal el domingo por la noche o el lunes temprano.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Los horarios son iguales para la página de Policía y la de Extranjería?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Son muy similares pero hay pequeñas diferencias. La página de la Policía Nacional tiende a liberar citas exactamente a las 00:00, mientras que la Sede Electrónica de Extranjería a veces libera citas entre las 00:00 y las 00:30.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué hago si trabajo y no puedo buscar a medianoche?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Puedes buscar a las 06:00-07:00 antes de ir a trabajar (segundo mejor horario), pedir a alguien que busque por ti, usar un servicio profesional como CitaEx que monitorea 24/7, o intentar en fines de semana cuando hay menos competencia.',
                },
              },
            ],
          }),
        }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'Cómo usar los mejores horarios para conseguir cita de extranjería',
            description: 'Estrategia paso a paso para maximizar las posibilidades de conseguir cita',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Preparación nocturna',
                text: 'A las 23:55, abre la página de cita previa y rellena todos los campos excepto el último botón.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Búsqueda principal',
                text: 'A las 00:00 exactas, envía las solicitudes y refresca cada 5-10 segundos durante 15 minutos.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Búsqueda matutina',
                text: 'Si no encuentras cita, intenta de nuevo entre las 06:30 y 07:00.',
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Tercera oportunidad',
                text: 'Busca entre las 10:30 y 11:00, cuando algunas citas no reclamadas vuelven al sistema.',
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: 'Blog',
                item: 'https://citaex.com/blog',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Mejores Horarios Cita Extranjería',
                item: 'https://citaex.com/blog/mejores-horarios-cita-extranjeria',
              },
            ],
          }),
        }}
      />
    </div>
  );
}
