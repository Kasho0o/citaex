// apps/web/app/(marketing)/blog/despues-toma-huellas-plazos/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Después de la Toma de Huellas: Plazos y Próximos Pasos 2026 | CitaEx',
  description:
    'Qué pasa después de la toma de huellas: plazos de expedición del TIE, cómo consultar el estado, cuándo y cómo recoger tu tarjeta. Guía completa 2026.',
  keywords: [
    'después toma huellas',
    'plazos TIE',
    'expedición TIE',
    'recoger TIE',
    'cuánto tarda TIE',
    'consultar estado TIE',
    'próximos pasos toma huellas',
  ],
  openGraph: {
    title: 'Después de la Toma de Huellas: Plazos y Próximos Pasos',
    description:
      'Todo lo que debes saber después de la toma de huellas. Plazos, seguimiento y recogida del TIE.',
    url: 'https://citaex.com/blog/despues-toma-huellas-plazos',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2026-01-01T00:00:00Z',
    modifiedTime: '2026-01-15T00:00:00Z',
    authors: ['CitaEx'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Después de la Toma de Huellas: Plazos y Próximos Pasos',
    description: 'Guía completa sobre qué hacer después de la toma de huellas.',
  },
  alternates: {
    canonical: 'https://citaex.com/blog/despues-toma-huellas-plazos',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, tengo dudas sobre mi TIE después de la toma de huellas.')}`;

export default function DespuesTomaHuellasPlazosPage() {
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
            <li className="text-gray-900 font-medium">Después de la Toma de Huellas</li>
          </ol>
        </div>
      </nav>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
              TIE
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Plazos 2026
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Después de la Toma de Huellas: Plazos y Próximos Pasos
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Guía completa sobre qué sucede después de la toma de huellas: plazos de expedición del TIE, cómo consultar el estado de tu tarjeta, cuándo estará lista y cómo recogerla correctamente.
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
              11 min lectura
            </span>
          </div>
        </header>

        {/* Quick CTA */}
        <div className="mb-8 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white shadow-lg">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-lg font-bold">¿Dudas sobre tu TIE?</p>
              <p className="text-green-100">Te ayudamos con todo el proceso de principio a fin.</p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-white px-6 py-3 font-bold text-green-700 shadow-md transition-all hover:bg-gray-100"
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
                <a href="#que-pasa-despues" className="text-green-600 hover:underline">
                  1. ¿Qué pasa después de las huellas?
                </a>
              </li>
              <li>
                <a href="#plazos-expedicion" className="text-green-600 hover:underline">
                  2. Plazos de expedición del TIE
                </a>
              </li>
              <li>
                <a href="#consultar-estado" className="text-green-600 hover:underline">
                  3. Cómo consultar el estado
                </a>
              </li>
              <li>
                <a href="#mientras-esperas" className="text-green-600 hover:underline">
                  4. Qué hacer mientras esperas
                </a>
              </li>
              <li>
                <a href="#notificacion-recogida" className="text-green-600 hover:underline">
                  5. Notificación de recogida
                </a>
              </li>
              <li>
                <a href="#recoger-tie" className="text-green-600 hover:underline">
                  6. Cómo recoger tu TIE
                </a>
              </li>
              <li>
                <a href="#verificar-tarjeta" className="text-green-600 hover:underline">
                  7. Verificar tu tarjeta
                </a>
              </li>
              <li>
                <a href="#si-hay-retrasos" className="text-green-600 hover:underline">
                  8. Qué hacer si hay retrasos
                </a>
              </li>
              <li>
                <a href="#despues-recogida" className="text-green-600 hover:underline">
                  9. Después de recoger el TIE
                </a>
              </li>
              <li>
                <a href="#preguntas-frecuentes" className="text-green-600 hover:underline">
                  10. Preguntas frecuentes
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="lead text-xl text-gray-700">
            Después de completar la <strong>toma de huellas</strong>, comienza un período de espera que puede generar ansiedad. Esta guía te explica exactamente qué sucede durante ese tiempo, cuánto debes esperar y qué pasos seguir para recoger tu TIE sin problemas.
          </p>

          <p>
            Entender el proceso completo te ayudará a estar tranquilo/a y saber qué esperar en cada momento. También aprenderás a identificar si hay algún problema y cómo solucionarlo.
          </p>

          {/* Section 1 */}
          <h2 id="que-pasa-despues" className="scroll-mt-20">
            1. ¿Qué pasa inmediatamente después de la toma de huellas?
          </h2>

          <p>
            Una vez que sales de la comisaría después de la toma de huellas, tu proceso entra en una nueva fase:
          </p>

          <h3>El resguardo que recibiste</h3>

          <p>
            Al finalizar la toma de huellas, te entregaron un <strong>resguardo o justificante</strong>. Este documento es crucial porque:
          </p>

          <ul>
            <li>Acredita que has completado la toma de huellas correctamente</li>
            <li>Lo necesitarás para recoger tu TIE</li>
            <li>Contiene tu número de expediente</li>
            <li>Muestra la fecha en que realizaste el trámite</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ Muy importante:</p>
            <p className="mb-0 text-yellow-700">
              Guarda este resguardo en un lugar seguro. Haz varias copias y fotografías. <strong>Sin él será muy difícil recoger tu TIE</strong>.
            </p>
          </div>

          <h3>El proceso de fabricación</h3>

          <p>
            Después de tu cita, tus datos biométricos (huellas, foto, firma) se envían a la Fábrica Nacional de Moneda y Timbre (FNMT), que es donde se fabrican físicamente las tarjetas TIE.
          </p>

          <p>
            El proceso incluye:
          </p>

          <ul>
            <li>Procesamiento de tus datos biométricos</li>
            <li>Verificación de información</li>
            <li>Fabricación física de la tarjeta</li>
            <li>Control de calidad</li>
            <li>Envío a la comisaría donde hiciste las huellas</li>
          </ul>

          {/* Section 2 */}
          <h2 id="plazos-expedicion" className="scroll-mt-20">
            2. Plazos de expedición del TIE
          </h2>

          <p>
            El tiempo que tarda en estar listo tu TIE varía según varios factores:
          </p>

          <h3>Plazos normales en 2026</h3>

          <div className="my-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Situación</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Tiempo estimado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm">Época normal del año</td>
                  <td className="px-4 py-3 text-sm font-semibold text-green-600">30-45 días</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">Épocas de alta demanda (sep-oct)</td>
                  <td className="px-4 py-3 text-sm font-semibold text-orange-600">45-60 días</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">Períodos vacacionales</td>
                  <td className="px-4 py-3 text-sm font-semibold text-blue-600">Puede extenderse más</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">Casos excepcionales</td>
                  <td className="px-4 py-3 text-sm font-semibold text-red-600">Hasta 90 días</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Factores que afectan el tiempo de espera</h3>

          <ul>
            <li><strong>Época del año:</strong> Septiembre-octubre es la época más saturada</li>
            <li><strong>Provincia:</strong> Madrid y Barcelona suelen tener más demora</li>
            <li><strong>Tipo de tarjeta:</strong> Primera TIE vs renovación</li>
            <li><strong>Carga de trabajo de FNMT:</strong> Varía mensualmente</li>
            <li><strong>Festivos y vacaciones:</strong> Agosto puede generar retrasos</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Ten en cuenta:</p>
            <p className="mb-0 text-blue-700">
              Estos son plazos <strong>orientativos</strong>. Tu TIE podría estar listo antes o después. La paciencia es clave en este proceso.
            </p>
          </div>

          {/* Section 3 */}
          <h2 id="consultar-estado" className="scroll-mt-20">
            3. Cómo consultar el estado de tu TIE
          </h2>

          <p>
            Existen varias formas de consultar si tu TIE ya está listo para recoger:
          </p>

          <h3>Método 1: Llamada telefónica</h3>

          <p>
            Puedes llamar a la comisaría donde hiciste la toma de huellas:
          </p>

          <ul>
            <li>Ten a mano tu NIE y número de expediente</li>
            <li>Llama en horario de atención al público</li>
            <li>Las líneas suelen estar saturadas, ten paciencia</li>
            <li>Mejor llamar a primera hora de la mañana</li>
          </ul>

          <h3>Método 2: Consulta presencial</h3>

          <p>
            Puedes acudir directamente a la comisaría:
          </p>

          <ul>
            <li>No necesitas cita para consultar</li>
            <li>Lleva tu resguardo y pasaporte</li>
            <li>Pregunta en información general</li>
            <li>Evita hacerlo en horas pico (12:00-14:00)</li>
          </ul>

          <h3>Método 3: SMS o email (si lo proporcionaste)</h3>

          <p>
            Si dejaste número de teléfono o email al hacer las huellas:
          </p>

          <ul>
            <li>Recibirás notificación automática cuando esté listo</li>
            <li>No todas las comisarías tienen este servicio</li>
            <li>Revisa también la carpeta de spam</li>
          </ul>

          <h3>Método 4: Sistemas online (limitado)</h3>

          <p>
            Algunas comisarías tienen sistemas de consulta online:
          </p>

          <ul>
            <li>Consulta la web de tu comisaría específica</li>
            <li>Necesitarás tu NIE y número de expediente</li>
            <li>No todas las provincias tienen este servicio</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-green-400 bg-green-50 p-4">
            <p className="mb-0 font-bold text-green-800">✅ Recomendación:</p>
            <p className="mb-0 text-green-700">
              Empieza a consultar después de <strong>30 días</strong> desde la toma de huellas. Antes de ese tiempo es muy poco probable que esté listo.
            </p>
          </div>

          {/* Section 4 */}
          <h2 id="mientras-esperas" className="scroll-mt-20">
            4. Qué hacer mientras esperas tu TIE
          </h2>

          <p>
            Durante el período de espera, tu situación legal está cubierta:
          </p>

          <h3>Documentos que acreditan tu situación regular</h3>

          <ul>
            <li><strong>Resolución favorable:</strong> Demuestra que tienes autorización aprobada</li>
            <li><strong>Resguardo de toma de huellas:</strong> Prueba que has completado el proceso</li>
            <li><strong>TIE anterior:</strong> Si es renovación y aún tienes el antiguo</li>
          </ul>

          <h3>¿Puedes trabajar?</h3>

          <p>
            <strong>Sí</strong>, si tu autorización incluye permiso de trabajo:
          </p>

          <ul>
            <li>La resolución favorable te permite trabajar</li>
            <li>Muestra el documento a tu empleador</li>
            <li>Puedes darte de alta en la Seguridad Social</li>
            <li>No necesitas esperar al TIE físico</li>
          </ul>

          <h3>¿Puedes viajar?</h3>

          <p>
            Viajar sin el TIE físico es complicado:
          </p>

          <ul>
            <li><strong>Dentro de España:</strong> No hay problema, lleva tu pasaporte y documentación</li>
            <li><strong>Fuera de España (espacio Schengen):</strong> Muy arriesgado, pueden ponerte problemas en fronteras</li>
            <li><strong>Fuera de la UE:</strong> Casi imposible salir sin TIE</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ Importante sobre viajes:</p>
            <p className="mb-0 text-yellow-700">
              Aunque legalmente puedes viajar con la resolución favorable y resguardo, en la práctica muchas autoridades fronterizas no lo reconocen. <strong>Evita viajar fuera de España hasta tener tu TIE físico</strong>.
            </p>
          </div>

          <h3>¿Puedes hacer otros trámites?</h3>

          <p>
            Sí, puedes realizar muchos trámites mientras esperas:
          </p>

          <ul>
            <li>Abrir cuenta bancaria (con resolución favorable)</li>
            <li>Empadronarte o cambiar domicilio</li>
            <li>Matricularte en cursos o universidad</li>
            <li>Solicitar número de la Seguridad Social</li>
            <li>Obtener certificado digital</li>
          </ul>

          {/* Section 5 */}
          <h2 id="notificacion-recogida" className="scroll-mt-20">
            5. Notificación de recogida del TIE
          </h2>

          <p>
            Cuando tu TIE esté listo, recibirás notificación de una de estas formas:
          </p>

          <h3>Tipos de notificación</h3>

          <ul>
            <li><strong>SMS:</strong> Mensaje al número que proporcionaste</li>
            <li><strong>Email:</strong> Correo electrónico (revisa spam)</li>
            <li><strong>Carta postal:</strong> Notificación por correo ordinario</li>
            <li><strong>Sin notificación:</strong> Debes consultar tú mismo/a</li>
          </ul>

          <h3>Qué hacer al recibir la notificación</h3>

          <ul>
            <li>Verifica la fecha y hora de recogida (si viene especificada)</li>
            <li>Anota la dirección exacta de recogida</li>
            <li>Prepara los documentos necesarios</li>
            <li>Si no puedes ir en la fecha indicada, contacta inmediatamente</li>
          </ul>

          <h3>Plazo para recoger el TIE</h3>

          <p>
            Una vez notificado que está listo:
          </p>

          <ul>
            <li>Normalmente tienes <strong>30 días</strong> para recogerlo</li>
            <li>Si no lo recoges en plazo, pueden devolverlo a FNMT</li>
            <li>Recuperarlo después es posible pero más complicado</li>
          </ul>

          {/* Continue with remaining sections... */}
          <h2 id="recoger-tie" className="scroll-mt-20">
            6. Cómo recoger tu TIE
          </h2>

          <p>
            Para recoger tu TIE físico en la comisaría:
          </p>

          <div className="my-6 rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-800">
              <span>📋</span> Documentos necesarios para recoger el TIE
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Resguardo de toma de huellas</strong> - El que te dieron después de las huellas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Pasaporte original</strong> - En vigor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>TIE anterior</strong> - Si es renovación, para entregarlo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Notificación de recogida</strong> - Si la recibiste</span>
              </li>
            </ul>
          </div>

          <h3>Proceso de recogida</h3>

          <ul>
            <li>Acude en horario de recogida de documentos</li>
            <li>Presenta tu resguardo y pasaporte</li>
            <li>Verificarán tu identidad</li>
            <li>Firmarás un recibí de entrega</li>
            <li>Te entregarán tu nueva TIE</li>
            <li>Si es renovación, entregas el TIE antiguo</li>
          </ul>

          <h3>¿Puede recogerlo otra persona?</h3>

          <p>
            <strong>Generalmente NO</strong>. La recogida del TIE es personal. Solo en casos muy excepcionales y con:
          </p>

          <ul>
            <li>Poder notarial específico</li>
            <li>Justificación de imposibilidad de acudir personalmente</li>
            <li>Documentación de la persona autorizada</li>
          </ul>

          {/* Section 7 */}
          <h2 id="verificar-tarjeta" className="scroll-mt-20">
            7. Verificar tu tarjeta TIE al recibirla
          </h2>

          <p>
            <strong>Muy importante:</strong> Antes de salir de la comisaría, verifica que todo esté correcto en tu TIE:
          </p>

          <div className="my-6 rounded-lg bg-green-50 p-6">
            <h3 className="mb-4 font-bold text-green-800">Checklist de verificación del TIE</h3>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>NIE correcto:</strong> Verifica que el número sea exactamente el tuyo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Nombre y apellidos:</strong> Deben coincidir con tu pasaporte</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Fecha de nacimiento:</strong> Correcta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Nacionalidad:</strong> La correcta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Fotografía:</strong> Que seas tú y se vea bien</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Firma:</strong> Que aparezca y sea legible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Tipo de autorización:</strong> El que te corresponde</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Fechas de validez:</strong> Inicio y caducidad correctos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Observaciones:</strong> Lee lo que dice (TRABAJO, TRABAJO Y RESIDENCIA, etc.)</span>
              </li>
            </ul>
          </div>

          <p>
            <strong>Si encuentras algún error:</strong>
          </p>

          <ul>
            <li>Notifícalo inmediatamente al funcionario</li>
            <li>No salgas de la comisaría sin reportarlo</li>
            <li>Tienen que iniciar el proceso de corrección</li>
            <li>Puede requerir nueva fabricación de la tarjeta</li>
          </ul>

          {/* Remaining sections... */}
          <h2 id="si-hay-retrasos" className="scroll-mt-20">
            8. Qué hacer si hay retrasos excesivos
          </h2>

          <p>
            Si han pasado más de 60 días y tu TIE no está listo:
          </p>

          <ul>
            <li>Consulta el estado en la comisaría presencialmente</li>
            <li>Pide un justificante de que el proceso está en trámite</li>
            <li>Verifica que no haya ningún problema con tu expediente</li>
            <li>Si es urgente, explica tu situación (trabajo, estudios, etc.)</li>
          </ul>

          <h3>Recursos si el retraso es muy prolongado</h3>

          <ul>
            <li>Presentar queja formal en la comisaría</li>
            <li>Contactar con la Oficina de Atención al Ciudadano</li>
            <li>En casos extremos, recurso de alzada o contencioso-administrativo</li>
          </ul>

          {/* FAQ Section */}
          <h2 id="preguntas-frecuentes" className="scroll-mt-20">
            10. Preguntas frecuentes
          </h2>
        </div>

        {/* FAQ Accordion */}
        <section className="mt-8">
          <div className="space-y-4">
            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Cuánto tiempo tarda normalmente en estar listo el TIE?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  En condiciones normales, el TIE tarda entre <strong>30 y 45 días</strong> en estar listo desde la fecha de toma de huellas. En épocas de alta demanda (septiembre-octubre) puede extenderse hasta 60 días. Factores como la provincia y la carga de trabajo de FNMT pueden influir en el tiempo exacto.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo trabajar mientras espero mi TIE físico?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  <strong>Sí</strong>, si tu autorización incluye permiso de trabajo. La <strong>resolución favorable</strong> que recibiste es suficiente para trabajar legalmente. Puedes darte de alta en la Seguridad Social y comenzar a trabajar sin necesidad de esperar al TIE físico. Guarda siempre una copia de la resolución y el resguardo de huellas.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué pasa si pierdo el resguardo de toma de huellas?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Si pierdes el resguardo, acude a la comisaría donde hiciste las huellas con tu <strong>pasaporte y NIE</strong>. Explica la situación y solicita un duplicado o verifica que puedan entregarte el TIE de otra forma. Es más complicado, por eso es fundamental guardar el resguardo en lugar seguro y hacer copias.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo viajar fuera de España mientras espero el TIE?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Técnicamente puedes viajar con la resolución favorable y el resguardo, pero <strong>en la práctica no es recomendable</strong>. Muchas autoridades fronterizas no reconocen estos documentos y pueden ponerte problemas para salir o entrar a España. Es mejor esperar a tener el TIE físico antes de viajar fuera del país.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué hago si encuentro un error en mi TIE al recogerlo?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  <strong>Notifícalo inmediatamente</strong> al funcionario antes de salir de la comisaría. Revisa todos los datos (NIE, nombre, fechas, tipo de autorización) en el momento de recogerlo. Si hay un error, deben iniciar el proceso de corrección, que puede requerir una nueva fabricación de la tarjeta. No aceptes una tarjeta con errores.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿Dudas sobre tu proceso de TIE?</h2>
            <p className="mb-6 text-lg text-green-100">
              Te ayudamos con todo el proceso desde la solicitud hasta la recogida de tu tarjeta. Asesoría completa.
            </p>
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
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
