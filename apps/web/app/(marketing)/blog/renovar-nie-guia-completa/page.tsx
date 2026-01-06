import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Renovar NIE en España 2026 - Guía Completa Paso a Paso | CitaEx',
  description:
    'Todo sobre renovar tu NIE en España: requisitos, documentos, plazos, tasas y cómo conseguir cita. Guía actualizada 2026 con toda la información.',
  keywords: [
    'renovar nie',
    'renovación nie españa',
    'nie caducado',
    'renovar nie 2026',
    'documentos renovación nie',
    'tasa renovación nie',
    'cita renovación nie',
    'nie temporal',
  ],
  openGraph: {
    title: 'Renovar NIE en España 2026 - Guía Completa',
    description:
      'Requisitos, documentos y proceso completo para renovar tu NIE en España. Guía actualizada 2026.',
    url: 'https://citaex.com/blog/renovar-nie-guia-completa',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2026-01-01T00:00:00Z',
    authors: ['CitaEx'],
  },
  alternates: {
    canonical: 'https://citaex.com/blog/renovar-nie-guia-completa',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito ayuda para renovar mi NIE.')}`;

export default function RenovarNIEPage() {
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
            <li className="text-gray-900 font-medium">Renovar NIE - Guía Completa</li>
          </ol>
        </div>
      </nav>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              NIE
            </span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              Renovación
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Cómo Renovar el NIE en España - Guía Completa 2026
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Todo lo que necesitas saber para renovar tu NIE: requisitos, documentos necesarios, plazos, tasas y cómo conseguir cita previa.
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
          </div>
        </header>

        {/* Quick CTA */}
        <div className="mb-8 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white shadow-lg">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-lg font-bold">¿Necesitas cita para renovar tu NIE?</p>
              <p className="text-green-100">Te ayudamos a conseguirla. Sin pago adelantado.</p>
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
                <a href="#que-es-nie" className="text-green-600 hover:underline">
                  1. ¿Qué es el NIE y cuándo renovarlo?
                </a>
              </li>
              <li>
                <a href="#requisitos" className="text-green-600 hover:underline">
                  2. Requisitos para renovar el NIE
                </a>
              </li>
              <li>
                <a href="#documentos" className="text-green-600 hover:underline">
                  3. Documentos necesarios
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-green-600 hover:underline">
                  4. Proceso paso a paso
                </a>
              </li>
              <li>
                <a href="#tasas" className="text-green-600 hover:underline">
                  5. Tasas y costes
                </a>
              </li>
              <li>
                <a href="#plazos" className="text-green-600 hover:underline">
                  6. Plazos y tiempos de espera
                </a>
              </li>
              <li>
                <a href="#cita-previa" className="text-green-600 hover:underline">
                  7. Cómo conseguir cita previa
                </a>
              </li>
              <li>
                <a href="#errores-comunes" className="text-green-600 hover:underline">
                  8. Errores comunes a evitar
                </a>
              </li>
              <li>
                <a href="#faq" className="text-green-600 hover:underline">
                  9. Preguntas frecuentes
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            Renovar el <strong>NIE (Número de Identidad de Extranjero)</strong> es un trámite fundamental para todos los extranjeros que residen en España. En esta guía completa te explicamos todo el proceso, desde los requisitos hasta cómo conseguir tu cita previa y qué documentos necesitas.
          </p>

          {/* Section 1 */}
          <h2 id="que-es-nie" className="scroll-mt-20">
            1. ¿Qué es el NIE y cuándo debo renovarlo?
          </h2>

          <p>
            El <strong>NIE (Número de Identidad de Extranjero)</strong> es un número de identificación único y personal que se asigna a los extranjeros en España para cualquier trámite con relevancia fiscal, profesional o social.
          </p>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Importante:</p>
            <p className="mb-0 text-blue-700">
              El NIE en sí mismo <strong>nunca caduca</strong>. Lo que caduca es la <strong>autorización de residencia</strong> asociada a él. Es importante renovar tu tarjeta de residencia antes de que expire.
            </p>
          </div>

          <h3>¿Cuándo debo renovar?</h3>

          <p>
            Debes iniciar el proceso de renovación en estos casos:
          </p>

          <ul>
            <li><strong>60 días antes</strong> de que caduque tu tarjeta de residencia</li>
            <li><strong>Hasta 90 días después</strong> de la caducidad (aunque no es recomendable esperar)</li>
            <li>Cuando cambies tu situación laboral o familiar significativamente</li>
            <li>Si necesitas actualizar datos personales en tu tarjeta</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ Atención:</p>
            <p className="mb-0 text-yellow-700">
              Renovar fuera de plazo puede resultar en <strong>sanciones económicas</strong> de 501€ a 10.000€ según la gravedad. No esperes al último momento.
            </p>
          </div>

          {/* Section 2 */}
          <h2 id="requisitos" className="scroll-mt-20">
            2. Requisitos para renovar el NIE
          </h2>

          <p>
            Para poder renovar tu NIE/tarjeta de residencia, debes cumplir los siguientes requisitos:
          </p>

          <div className="my-6 rounded-lg bg-green-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-green-800">
              <span>✓</span> Requisitos obligatorios
            </h3>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Residencia vigente o caducada hace menos de 90 días</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Medios económicos suficientes:</strong> Contrato de trabajo, nóminas, cuenta bancaria con fondos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Empadronamiento actualizado:</strong> Menos de 3 meses de antigüedad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>No tener antecedentes penales</strong> en España ni en países anteriores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Estar al día con la Seguridad Social</strong> (si trabajas por cuenta ajena)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Seguro médico</strong> (si no estás dado de alta en la Seguridad Social)</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <h2 id="documentos" className="scroll-mt-20">
            3. Documentos necesarios para la renovación
          </h2>

          <p>
            La documentación requerida puede variar según tu tipo de residencia, pero generalmente necesitarás:
          </p>

          <div className="my-6 rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-800">
              <span>📋</span> Lista de documentos
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Formulario EX-17</strong> (renovación de residencia temporal) o <strong>EX-11</strong> (residencia de larga duración) - debidamente cumplimentado y firmado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Pasaporte completo</strong> (original y copia de todas las páginas con sellos)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Tarjeta de residencia anterior</strong> (original y copia)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>3 fotografías</strong> tamaño carnet, recientes, fondo blanco</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado de empadronamiento</strong> (menos de 3 meses)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Justificante pago tasa modelo 790 código 012</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Contrato de trabajo</strong> y últimas 3 nóminas, o vida laboral actualizada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado de empresa</strong> confirmando tu relación laboral actual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Informe de vida laboral</strong> de la Seguridad Social</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Si eres autónomo:</strong> alta en el RETA, últimas declaraciones trimestrales (modelo 303/130)</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <h2 id="proceso" className="scroll-mt-20">
            4. Proceso paso a paso para renovar el NIE
          </h2>

          <h3>Paso 1: Prepara toda la documentación</h3>

          <p>
            Reúne todos los documentos de la lista anterior. Asegúrate de que todo esté actualizado y completo. Haz copias de todo.
          </p>

          <h3>Paso 2: Paga la tasa correspondiente (Modelo 790)</h3>

          <p>
            Descarga el <strong>modelo 790 código 012</strong> desde la web de la Policía Nacional. La tasa en 2026 es de <strong>15,76€</strong> para residencia temporal y <strong>21,50€</strong> para residencia de larga duración. Puedes pagar en bancos autorizados.
          </p>

          <h3>Paso 3: Consigue cita previa</h3>

          <p>
            Este suele ser el paso más difícil. Necesitas solicitar cita en la Oficina de Extranjería de tu provincia a través de la sede electrónica. Selecciona el trámite &quot;POLICÍA-RENOVACIÓN DE TARJETA DE RESIDENCIA&quot;.
          </p>

          <h3>Paso 4: Acude a tu cita</h3>

          <p>
            Llega 15-20 minutos antes con toda tu documentación. El funcionario revisará tus papeles y tomará tus huellas dactilares si es necesario.
          </p>

          <h3>Paso 5: Espera la resolución</h3>

          <p>
            Recibirás un resguardo que acredita que has presentado la solicitud. Este documento te permite seguir residiendo legalmente mientras se tramita tu renovación.
          </p>

          <h3>Paso 6: Recoge tu nueva tarjeta</h3>

          <p>
            Una vez aprobada (generalmente entre 1-3 meses), recibirás una notificación para acudir a recoger tu nueva tarjeta de residencia.
          </p>

          {/* Section 5 */}
          <h2 id="tasas" className="scroll-mt-20">
            5. Tasas y costes de renovación
          </h2>

          <div className="my-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Concepto</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Código</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Importe 2026</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm">Renovación residencia temporal</td>
                  <td className="px-4 py-3 text-sm">790-012</td>
                  <td className="px-4 py-3 text-sm font-semibold">15,76€</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">Renovación residencia larga duración</td>
                  <td className="px-4 py-3 text-sm">790-012</td>
                  <td className="px-4 py-3 text-sm font-semibold">21,50€</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">Tasa expedición nueva tarjeta (TIE)</td>
                  <td className="px-4 py-3 text-sm">790-012</td>
                  <td className="px-4 py-3 text-sm font-semibold">10,71€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Además de las tasas oficiales, considera otros gastos:
          </p>

          <ul>
            <li>Fotos de carnet: 5-10€</li>
            <li>Empadronamiento: gratuito</li>
            <li>Traducciones juradas (si necesitas): 30-60€ por página</li>
            <li>Ayuda profesional o gestoría: 100-300€ (opcional)</li>
          </ul>

          {/* Section 6 */}
          <h2 id="plazos" className="scroll-mt-20">
            6. Plazos y tiempos de espera
          </h2>

          <p>
            Los plazos para la renovación del NIE varían según la provincia y la época del año:
          </p>

          <ul>
            <li><strong>Presentación de solicitud:</strong> 60 días antes o hasta 90 días después de la caducidad</li>
            <li><strong>Resolución administrativa:</strong> 1-3 meses (puede extenderse hasta 6 meses en casos complejos)</li>
            <li><strong>Recogida de tarjeta:</strong> 1-4 semanas después de la aprobación</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-green-400 bg-green-50 p-4">
            <p className="mb-0 font-bold text-green-800">✅ Consejo:</p>
            <p className="mb-0 text-green-700">
              El <strong>silencio administrativo</strong> es positivo en renovaciones. Si pasan 3 meses sin respuesta, tu renovación se considera aprobada por silencio administrativo.
            </p>
          </div>

          {/* Section 7 */}
          <h2 id="cita-previa" className="scroll-mt-20">
            7. Cómo conseguir cita previa para renovar NIE
          </h2>

          <p>
            Conseguir cita previa es uno de los mayores obstáculos. Aquí te damos las mejores estrategias:
          </p>

          <h3>Mejores horarios para buscar cita</h3>

          <ul>
            <li><strong>Medianoche (00:00-01:00):</strong> Se liberan nuevas citas</li>
            <li><strong>6:00-8:00 AM:</strong> Citas canceladas vuelven al sistema</li>
            <li><strong>Lunes y martes:</strong> Mejores días de la semana</li>
          </ul>

          <h3>Opciones si no consigues cita</h3>

          <ul>
            <li>Intentar en provincias cercanas con menor demanda</li>
            <li>Usar servicios como CitaEx que monitoreamos 24/7</li>
            <li>Presentar la solicitud por registro electrónico (en algunos casos)</li>
          </ul>

          {/* Section 8 */}
          <h2 id="errores-comunes" className="scroll-mt-20">
            8. Errores comunes a evitar
          </h2>

          <div className="my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #1: Esperar hasta el último momento</p>
              <p className="text-red-700">
                Empieza el proceso 2-3 meses antes de que caduque tu tarjeta. Conseguir cita puede llevar semanas.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #2: Documentación incompleta</p>
              <p className="text-red-700">
                Verifica que tienes TODO antes de ir a la cita. Falta un documento = cita perdida.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #3: No justificar medios económicos</p>
              <p className="text-red-700">
                Debes demostrar ingresos suficientes: contratos, nóminas o extractos bancarios recientes.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #4: Empadronamiento desactualizado</p>
              <p className="text-red-700">
                El certificado de empadronamiento debe tener menos de 3 meses. Solicítalo pocos días antes de la cita.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <h2 id="faq" className="scroll-mt-20">
            9. Preguntas frecuentes
          </h2>
        </div>

        {/* FAQ Accordion */}
        <section className="mt-8">
          <div className="space-y-4">
            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo trabajar mientras espero la renovación de mi NIE?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Sí, siempre que hayas presentado la solicitud de renovación <strong>dentro del plazo legal</strong> (60 días antes o 90 días después de la caducidad). El resguardo de presentación acredita tu situación regular y te permite seguir trabajando mientras se tramita la renovación.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué pasa si mi NIE caducó hace más de 90 días?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Si han pasado más de 90 días desde la caducidad, <strong>no puedes renovar</strong>. Tendrás que solicitar una <strong>nueva autorización inicial</strong> como si fuera la primera vez, cumpliendo todos los requisitos desde cero. Además, podrías enfrentarte a <strong>sanciones económicas</strong> por estancia irregular.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Cuánto tiempo debo haber trabajado para renovar?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Para <strong>residencia temporal y trabajo</strong>, generalmente necesitas haber trabajado al menos <strong>3 meses en el último año</strong> o <strong>6 meses en los últimos dos años</strong>. Si has estado desempleado, necesitarás demostrar medios económicos suficientes o estar inscrito como demandante de empleo.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo viajar fuera de España mientras espero la renovación?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  <strong>Dentro de la UE:</strong> Sí, puedes viajar con tu pasaporte y el resguardo de renovación.<br />
                  <strong>Fuera de la UE:</strong> Es <strong>arriesgado</strong>. Si tu tarjeta está caducada, podrías tener problemas para regresar a España. Se recomienda esperar a tener la nueva tarjeta o consultar con un abogado de inmigración.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Necesito abogado para renovar mi NIE?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  <strong>No es obligatorio</strong> contratar abogado para una renovación estándar. Si cumples todos los requisitos y tienes la documentación completa, puedes hacerlo tú mismo. Sin embargo, si tu caso es <strong>complicado</strong> (periodos sin trabajar, cambios de situación, antecedentes, etc.), un abogado especializado puede ser de gran ayuda.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿Necesitas ayuda para renovar tu NIE?</h2>
            <p className="mb-6 text-lg text-green-100">
              Te ayudamos a conseguir tu cita de renovación rápidamente. Sin pago adelantado.
            </p>
            <div className="mb-6 flex flex-wrap justify-center gap-4 text-sm">
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
                Monitoreo 24/7
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Todas las provincias
              </span>
            </div>
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
        </section>
      </article>
    </div>
  );
}
