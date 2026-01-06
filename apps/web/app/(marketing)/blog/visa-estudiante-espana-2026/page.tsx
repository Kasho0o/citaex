import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Visa de Estudiante España 2026 - Requisitos y Proceso | CitaEx',
  description:
    'Guía completa sobre la visa de estudiante para España 2026. Requisitos, documentos, proceso paso a paso, renovación y derechos. Información actualizada.',
  keywords: [
    'visa estudiante españa',
    'visado estudiante españa',
    'estudiar en españa',
    'visa estudio españa 2026',
    'tarjeta estudiante españa',
    'renovar visa estudiante',
    'requisitos visa estudiante',
    'estancia por estudios',
  ],
  openGraph: {
    title: 'Visa de Estudiante España 2026 - Requisitos y Proceso Completo',
    description:
      'Todo lo que necesitas saber sobre la visa de estudiante en España: requisitos, documentación, proceso y renovación.',
    url: 'https://citaex.com/blog/visa-estudiante-espana-2026',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'article',
  },
  alternates: {
    canonical: 'https://citaex.com/blog/visa-estudiante-espana-2026',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito ayuda con mi visa de estudiante para España.')}`;

export default function VisaEstudiantePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white" aria-label="Breadcrumb">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-green-600">Inicio</Link></li>
            <li><span className="mx-2">→</span></li>
            <li><Link href="/blog" className="hover:text-green-600">Blog</Link></li>
            <li><span className="mx-2">→</span></li>
            <li className="text-gray-900 font-medium">Visa de Estudiante España 2026</li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
              Estudios
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Guía 2026
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Visa de Estudiante España 2026 - Guía Completa
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Todo lo que necesitas saber para obtener tu visa de estudiante en España: requisitos, documentos, proceso paso a paso y renovación. Información actualizada para 2026.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time dateTime="2026-01-01">Actualizado: 1 enero 2026</time>
            <span>•</span>
            <span>Lectura: 8 min</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">¿Qué es la Visa de Estudiante?</h2>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-gray-700">
                La visa de estudiante es una <strong>autorización de estancia por estudios</strong> que permite a ciudadanos extranjeros permanecer en España para realizar estudios, formación, prácticas o servicios de voluntariado. Es válida para estancias superiores a 90 días.
              </p>
              <div className="mt-4 rounded-lg bg-blue-50 p-4">
                <p className="text-sm text-blue-900">
                  <strong>Importante:</strong> Si tu estancia es menor a 90 días, solo necesitas un visado Schengen de turista, no una visa de estudiante.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Requisitos para la Visa de Estudiante 2026</h2>
            <div className="space-y-4">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Documentos Necesarios</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Carta de admisión:</strong> De la institución educativa española (universidad, escuela de idiomas, centro de formación oficial).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Medios económicos:</strong> Demostrar 600€/mes (7,200€ al año) mediante:
                      <ul className="mt-2 ml-4 space-y-1 text-sm">
                        <li>• Beca oficial</li>
                        <li>• Certificado bancario</li>
                        <li>• Carta de compromiso de un familiar</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Seguro médico:</strong> Cobertura completa sin copagos (mínimo 30,000€).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Certificado médico:</strong> Que acredite que no padeces enfermedades de cuarentena.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Certificado de antecedentes penales:</strong> De tu país de origen y de los países donde hayas residido los últimos 5 años.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Pasaporte:</strong> Vigente con mínimo 6 meses de validez.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Proceso Paso a Paso</h2>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Admisión en Centro de Estudios',
                  description: 'Obtén la carta de admisión de una institución educativa española reconocida oficialmente.',
                },
                {
                  step: '2',
                  title: 'Reúne la Documentación',
                  description: 'Prepara todos los documentos requeridos (listados arriba). Asegúrate de que estén traducidos y apostillados si es necesario.',
                },
                {
                  step: '3',
                  title: 'Solicita Cita en el Consulado',
                  description: 'Pide cita en el consulado español de tu país de origen o residencia.',
                },
                {
                  step: '4',
                  title: 'Entrevista en el Consulado',
                  description: 'Acude a la cita con todos los documentos. El consulado revisará tu expediente.',
                },
                {
                  step: '5',
                  title: 'Espera la Resolución',
                  description: 'El plazo de resolución es de 1-3 meses aproximadamente.',
                },
                {
                  step: '6',
                  title: 'Viaja a España',
                  description: 'Una vez aprobado, tienes 1 mes para viajar a España.',
                },
                {
                  step: '7',
                  title: 'Tarjeta de Estudiante (TIE)',
                  description: 'En España, tienes 1 mes para solicitar cita para la toma de huellas y obtener tu TIE.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 rounded-xl bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Renovación de la Visa de Estudiante</h2>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="mb-4 text-gray-700">
                Si continúas tus estudios en España, puedes renovar tu autorización. Debes solicitarlo <strong>60 días antes</strong> de que expire tu tarjeta actual.
              </p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Requisitos para Renovar:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certificado de matrícula para el nuevo curso
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certificado de notas o progreso académico
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Medios económicos actualizados
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Seguro médico vigente
                </li>
              </ul>
              <div className="mt-4 rounded-lg bg-yellow-50 p-4">
                <p className="text-sm text-yellow-900">
                  <strong>Atención:</strong> Si repruebas el curso o abandonas los estudios, puedes perder tu autorización de estancia.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Derechos y Limitaciones</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-green-50 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-green-900">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Puedes
                </h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>✓ Trabajar 30 horas/semana (compatible con estudios)</li>
                  <li>✓ Viajar por el espacio Schengen</li>
                  <li>✓ Reagrupar a familiares (bajo condiciones)</li>
                  <li>✓ Cambiar de centro de estudios (previa autorización)</li>
                </ul>
              </div>
              <div className="rounded-xl bg-red-50 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-red-900">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  No puedes
                </h3>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>✗ Trabajar más de 30 horas semanales</li>
                  <li>✗ Trabajar como autónomo</li>
                  <li>✗ Abandonar los estudios sin perder el permiso</li>
                  <li>✗ Acceder a ayudas públicas (en la mayoría de casos)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Preguntas Frecuentes</h2>
            <div className="space-y-3">
              <details className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <summary className="cursor-pointer list-none bg-gray-50 px-5 py-4 font-semibold text-gray-900 transition hover:bg-gray-100">
                  ¿Cuánto cuesta la visa de estudiante?
                  <svg className="float-right h-5 w-5 transition group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                  <p>La tasa consular varía según el país, pero generalmente es de <strong>60-80€</strong> para el visado inicial. La TIE (tarjeta de identidad de estudiante) en España cuesta aproximadamente <strong>15€</strong>.</p>
                </div>
              </details>

              <details className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <summary className="cursor-pointer list-none bg-gray-50 px-5 py-4 font-semibold text-gray-900 transition hover:bg-gray-100">
                  ¿Puedo trabajar con visa de estudiante?
                  <svg className="float-right h-5 w-5 transition group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                  <p>Sí, puedes trabajar hasta <strong>30 horas semanales</strong>, siempre que el trabajo sea compatible con tus estudios. No necesitas permiso adicional si la oferta laboral cumple con los requisitos. Sin embargo, <strong>NO puedes trabajar como autónomo</strong>.</p>
                </div>
              </details>

              <details className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <summary className="cursor-pointer list-none bg-gray-50 px-5 py-4 font-semibold text-gray-900 transition hover:bg-gray-100">
                  ¿Cuánto tiempo tarda la aprobación?
                  <svg className="float-right h-5 w-5 transition group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                  <p>El plazo oficial es de <strong>1 mes</strong> desde la presentación de la solicitud, pero puede extenderse hasta <strong>3 meses</strong> en temporadas altas (julio-septiembre). Se recomienda iniciar el trámite al menos 3-4 meses antes del inicio del curso.</p>
                </div>
              </details>

              <details className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <summary className="cursor-pointer list-none bg-gray-50 px-5 py-4 font-semibold text-gray-900 transition hover:bg-gray-100">
                  ¿Puedo cambiar de visa de estudiante a residencia de trabajo?
                  <svg className="float-right h-5 w-5 transition group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                  <p>Sí, es posible. Después de completar tus estudios, puedes solicitar una <strong>autorización de residencia para búsqueda de empleo</strong> (válida 1 año), o directamente una <strong>autorización de trabajo</strong> si ya tienes una oferta laboral. También puedes acumular años de estancia para solicitar la residencia de larga duración.</p>
                </div>
              </details>
            </div>
          </section>
        </div>

        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿Necesitas ayuda con tu visa de estudiante?</h2>
            <p className="mb-6 text-lg text-green-100">
              Te ayudamos con todo el proceso: documentación, citas y tramitación. Contacta ahora.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-green-700 shadow-lg transition-all hover:bg-gray-100">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactar por WhatsApp
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
