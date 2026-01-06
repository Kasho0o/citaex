// apps/web/app/(marketing)/blog/renovar-tie-guia-completa/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Renovar TIE en España 2026 - Guía Completa | CitaEx',
  description:
    'Guía definitiva para renovar tu TIE en 2026. Requisitos, documentos necesarios, proceso paso a paso y plazos. ¡Renueva tu tarjeta sin problemas!',
  keywords: [
    'renovar TIE',
    'renovación TIE España',
    'renovar tarjeta extranjero',
    'TIE caducado',
    'renovación residencia',
    'documentos renovación TIE',
    'cita renovación TIE',
    'plazos renovación TIE',
  ],
  openGraph: {
    title: 'Renovar TIE en España 2026 - Guía Completa',
    description:
      'Guía definitiva para renovar tu TIE en 2026. Requisitos, documentos y proceso completo.',
    url: 'https://citaex.com/blog/renovar-tie-guia-completa',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2026-01-01T00:00:00Z',
    modifiedTime: '2026-01-15T00:00:00Z',
    authors: ['CitaEx'],
    images: [
      {
        url: 'https://citaex.com/images/blog/renovar-tie-2026.jpg',
        width: 1200,
        height: 630,
        alt: 'Guía para renovar TIE en España 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renovar TIE en España 2026 - Guía Completa',
    description: 'Todo lo que necesitas saber para renovar tu TIE en España.',
  },
  alternates: {
    canonical: 'https://citaex.com/blog/renovar-tie-guia-completa',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito ayuda para renovar mi TIE.')}`;

export default function RenovarTIEGuiaCompletaPage() {
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
            <li className="text-gray-900 font-medium">Renovar TIE en España 2026</li>
          </ol>
        </div>
      </nav>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              TIE
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Renovación
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Renovar TIE en España 2026 - Guía Completa
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Todo lo que necesitas saber para renovar tu Tarjeta de Identidad de Extranjero: requisitos, documentos necesarios, proceso paso a paso, plazos y consejos prácticos.
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
              <p className="text-lg font-bold">¿Necesitas ayuda para renovar tu TIE?</p>
              <p className="text-green-100">Te ayudamos con todo el proceso. Sin complicaciones.</p>
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
                <a href="#que-es-tie" className="text-green-600 hover:underline">
                  1. ¿Qué es el TIE?
                </a>
              </li>
              <li>
                <a href="#cuando-renovar" className="text-green-600 hover:underline">
                  2. ¿Cuándo renovar tu TIE?
                </a>
              </li>
              <li>
                <a href="#requisitos" className="text-green-600 hover:underline">
                  3. Requisitos para renovar
                </a>
              </li>
              <li>
                <a href="#documentos-necesarios" className="text-green-600 hover:underline">
                  4. Documentos necesarios
                </a>
              </li>
              <li>
                <a href="#proceso-paso-a-paso" className="text-green-600 hover:underline">
                  5. Proceso paso a paso
                </a>
              </li>
              <li>
                <a href="#plazos-tiempos" className="text-green-600 hover:underline">
                  6. Plazos y tiempos de espera
                </a>
              </li>
              <li>
                <a href="#costes-tasas" className="text-green-600 hover:underline">
                  7. Costes y tasas
                </a>
              </li>
              <li>
                <a href="#errores-comunes" className="text-green-600 hover:underline">
                  8. Errores comunes a evitar
                </a>
              </li>
              <li>
                <a href="#tie-caducado" className="text-green-600 hover:underline">
                  9. ¿Qué pasa si mi TIE está caducado?
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
            La <strong>renovación del TIE (Tarjeta de Identidad de Extranjero)</strong> es un trámite fundamental para cualquier ciudadano extranjero que resida legalmente en España. Esta guía completa te ayudará a entender todo el proceso, desde los requisitos hasta la recogida de tu nueva tarjeta.
          </p>

          <p>
            Renovar tu TIE a tiempo es crucial para mantener tu situación regular en España y poder continuar trabajando, estudiando o residiendo sin problemas. En 2026, el proceso se mantiene similar a años anteriores, pero existen algunos cambios importantes que debes conocer.
          </p>

          <p>
            En esta guía encontrarás toda la información necesaria para renovar tu TIE sin complicaciones, incluyendo los <strong>documentos requeridos</strong>, los <strong>plazos exactos</strong>, los <strong>costes actualizados</strong> y consejos prácticos basados en nuestra experiencia ayudando a miles de personas.
          </p>

          {/* Section 1 */}
          <h2 id="que-es-tie" className="scroll-mt-20">
            1. ¿Qué es el TIE y quién debe renovarlo?
          </h2>

          <p>
            El <strong>TIE (Tarjeta de Identidad de Extranjero)</strong> es el documento físico que acredita tu identidad y situación legal en España. Es una tarjeta plástica similar al DNI español que contiene tu fotografía, datos personales, NIE y tipo de autorización de residencia.
          </p>

          <h3>¿Quién necesita el TIE?</h3>

          <p>
            Necesitan TIE todos los ciudadanos extranjeros no comunitarios que tengan una autorización de residencia en España superior a 6 meses, incluyendo:
          </p>

          <ul>
            <li><strong>Residencia temporal</strong> (1 año, 2 años)</li>
            <li><strong>Residencia y trabajo</strong> por cuenta ajena o propia</li>
            <li><strong>Residencia de larga duración</strong> (antes llamada permanente)</li>
            <li><strong>Autorizaciones de estudiantes</strong> de más de 6 meses</li>
            <li><strong>Reagrupación familiar</strong></li>
            <li><strong>Arraigo social, laboral o familiar</strong></li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Nota importante:</p>
            <p className="mb-0 text-blue-700">
              Los ciudadanos de la Unión Europea no necesitan TIE. Ellos obtienen un <strong>Certificado de Registro</strong> que es un documento diferente.
            </p>
          </div>

          {/* Section 2 */}
          <h2 id="cuando-renovar" className="scroll-mt-20">
            2. ¿Cuándo renovar tu TIE?
          </h2>

          <p>
            El momento adecuado para iniciar la renovación de tu TIE es fundamental para evitar problemas. Aquí te explicamos los plazos exactos:
          </p>

          <h3>Plazo general de renovación</h3>

          <p>
            Puedes y debes solicitar la renovación de tu TIE durante los <strong>60 días naturales anteriores</strong> a la fecha de caducidad de tu autorización. Este es el plazo más recomendable.
          </p>

          <div className="my-6 rounded-lg bg-green-50 p-6">
            <h4 className="mb-4 font-bold text-green-800">✅ Ejemplo práctico:</h4>
            <p className="text-green-700">
              Si tu TIE caduca el <strong>31 de marzo de 2026</strong>, puedes empezar a solicitar la renovación desde el <strong>31 de enero de 2026</strong> (60 días antes).
            </p>
          </div>

          <h3>¿Qué pasa si solicito antes de tiempo?</h3>

          <p>
            Si intentas renovar con más de 60 días de antelación, probablemente te rechacen la solicitud por <strong>prematuro</strong>. Deberás esperar a estar dentro del plazo correcto.
          </p>

          <h3>¿Qué pasa si solicito tarde?</h3>

          <p>
            Si tu TIE ya ha caducado, todavía puedes renovarlo, pero estarás en <strong>situación irregular temporal</strong>. Es posible que te impongan una multa y el proceso puede ser más complicado.
          </p>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ Muy importante:</p>
            <p className="mb-0 text-yellow-700">
              Mientras tu renovación esté <strong>en trámite</strong>, aunque tu TIE haya caducado, sigues estando en situación regular. Guarda el resguardo de haber presentado la renovación.
            </p>
          </div>

          {/* Section 3 */}
          <h2 id="requisitos" className="scroll-mt-20">
            3. Requisitos para renovar el TIE
          </h2>

          <p>
            Para que tu renovación sea aprobada, debes cumplir ciertos requisitos que varían según el tipo de autorización que tengas. Los requisitos principales son:
          </p>

          <h3>Requisitos generales para todas las renovaciones</h3>

          <ul>
            <li>
              <strong>No tener antecedentes penales</strong> en España ni en países anteriores de residencia
            </li>
            <li>
              <strong>Disponer de medios económicos suficientes</strong> para ti y tu familia
            </li>
            <li>
              <strong>Tener residencia efectiva en España</strong> y poder demostrarlo
            </li>
            <li>
              <strong>No tener prohibición de entrada</strong> en España o el espacio Schengen
            </li>
            <li>
              <strong>Haber pagado las tasas correspondientes</strong>
            </li>
          </ul>

          <h3>Requisitos específicos según tipo de autorización</h3>

          <h4>Para Residencia y Trabajo por cuenta ajena:</h4>
          <ul>
            <li>Demostrar que has trabajado durante el período de vigencia de la autorización</li>
            <li>Contrato de trabajo actual o propuesta de contrato</li>
            <li>Cotizaciones a la Seguridad Social</li>
          </ul>

          <h4>Para Residencia y Trabajo por cuenta propia:</h4>
          <ul>
            <li>Estar dado de alta como autónomo</li>
            <li>Acreditar actividad económica (declaraciones trimestrales, facturas)</li>
            <li>Justificar ingresos suficientes</li>
          </ul>

          <h4>Para Residencia no lucrativa:</h4>
          <ul>
            <li>Demostrar medios económicos suficientes sin trabajar</li>
            <li>Seguro médico privado en vigor</li>
            <li>Residencia efectiva en España durante el período</li>
          </ul>

          {/* Section 4 */}
          <h2 id="documentos-necesarios" className="scroll-mt-20">
            4. Documentos necesarios para renovar el TIE
          </h2>

          <p>
            La documentación es uno de los aspectos más importantes del proceso. Faltarte un solo documento puede significar el rechazo de tu solicitud. Aquí está la lista completa:
          </p>

          <div className="my-6 rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-800">
              <span>📋</span> Checklist de documentos para renovación TIE
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Formulario EX-17</strong> (Solicitud de renovación de autorización de residencia temporal) - rellenado y firmado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Pasaporte completo</strong> - original y fotocopia de todas las páginas con sello o información</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>TIE anterior</strong> - original y fotocopia de ambas caras</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>3 fotografías recientes</strong> - tamaño carnet, fondo blanco, a color</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado de empadronamiento</strong> - actualizado (menos de 3 meses)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Tasa Modelo 790 Código 012</strong> - pagada y con justificante original</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Justificante de medios económicos:</strong></span>
              </li>
              <ul className="ml-6 mt-1 space-y-1">
                <li>Si trabajas por cuenta ajena: contrato de trabajo + nóminas + vida laboral</li>
                <li>Si eres autónomo: alta en autónomos + declaraciones trimestrales + ingresos</li>
                <li>Si no trabajas: extractos bancarios + rentas + ayudas</li>
              </ul>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado de antecedentes penales</strong> de países donde hayas residido (si aplica)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Seguro médico</strong> (si aplica según tipo de residencia)</span>
              </li>
            </ul>
          </div>

          <div className="my-6 rounded-lg border-l-4 border-green-400 bg-green-50 p-4">
            <p className="mb-0 font-bold text-green-800">✅ Consejo profesional:</p>
            <p className="mb-0 text-green-700">
              Lleva <strong>copias extra</strong> de todos los documentos. Algunas oficinas piden más de una copia o pueden quedarse con originales. También lleva un USB con todo escaneado por si acaso.
            </p>
          </div>

          {/* Section 5 */}
          <h2 id="proceso-paso-a-paso" className="scroll-mt-20">
            5. Proceso de renovación paso a paso
          </h2>

          <p>
            El proceso completo de renovación del TIE consta de varios pasos que debes seguir en orden:
          </p>

          <h3>Paso 1: Preparar toda la documentación</h3>

          <p>
            Antes de pedir cita, asegúrate de tener <strong>todos los documentos</strong> listos y completos. Revisa la lista anterior y verifica que no te falte nada.
          </p>

          <h3>Paso 2: Conseguir cita previa en la Oficina de Extranjería</h3>

          <p>
            Debes solicitar cita previa a través de la web de la Sede Electrónica. Selecciona el trámite <strong>&quot;AUTORIZACIÓN DE RESIDENCIA - RENOVACIÓN&quot;</strong> o similar según tu provincia.
          </p>

          <p>
            Este suele ser el paso más difícil porque las citas son escasas. Puedes usar nuestro servicio de CitaEx para que te ayudemos a conseguir cita rápidamente.
          </p>

          <h3>Paso 3: Pagar la tasa Modelo 790 Código 012</h3>

          <p>
            El pago de la tasa se puede hacer:
          </p>

          <ul>
            <li>Online a través de la sede electrónica</li>
            <li>En bancos autorizados (imprime el modelo 790 y llévalos al banco)</li>
          </ul>

          <p>
            Guarda el justificante de pago original, lo necesitarás en tu cita.
          </p>

          <h3>Paso 4: Acudir a la cita en la Oficina de Extranjería</h3>

          <p>
            El día de tu cita:
          </p>

          <ul>
            <li>Llega 15-30 minutos antes</li>
            <li>Lleva todos los documentos originales y copias</li>
            <li>Lleva el justificante de cita impreso</li>
            <li>Sé amable y paciente con el funcionario</li>
          </ul>

          <p>
            Si todo está correcto, te entregarán un <strong>resguardo de solicitud</strong> con un número de expediente. Este documento es muy importante, guárdalo bien.
          </p>

          <h3>Paso 5: Esperar la resolución</h3>

          <p>
            Una vez presentada tu solicitud, la administración tiene un plazo para resolver. Durante este tiempo:
          </p>

          <ul>
            <li>Puedes consultar el estado de tu expediente online</li>
            <li>Estás en situación regular aunque tu TIE haya caducado</li>
            <li>Puedes trabajar normalmente si tienes autorización de trabajo</li>
          </ul>

          <h3>Paso 6: Recogida de resolución favorable</h3>

          <p>
            Cuando tu expediente sea aprobado, recibirás una notificación. Deberás:
          </p>

          <ul>
            <li>Recoger la resolución favorable en la oficina</li>
            <li>Pagar la tasa del TIE físico (Modelo 790 Código 012 nuevamente)</li>
          </ul>

          <h3>Paso 7: Pedir cita para toma de huellas</h3>

          <p>
            Con la resolución favorable, debes pedir cita en la <strong>Comisaría de Policía</strong> para toma de huellas y expedición del nuevo TIE. Tienes un plazo de <strong>1 mes</strong> desde la notificación.
          </p>

          <h3>Paso 8: Toma de huellas y entrega de TIE</h3>

          <p>
            En la comisaría te tomarán las huellas dactilares y la fotografía. Tu TIE estará listo en 30-45 días aproximadamente. Te avisarán cuando puedas recogerlo.
          </p>

          {/* Section 6 */}
          <h2 id="plazos-tiempos" className="scroll-mt-20">
            6. Plazos y tiempos de espera
          </h2>

          <p>
            Conocer los plazos exactos te ayudará a planificar mejor tu renovación:
          </p>

          <h3>Tiempo total del proceso</h3>

          <div className="my-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Fase</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Tiempo estimado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm">Conseguir cita en Oficina de Extranjería</td>
                  <td className="px-4 py-3 text-sm">1-4 semanas (o más en grandes ciudades)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">Presentación de solicitud</td>
                  <td className="px-4 py-3 text-sm">1 día (día de la cita)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">Resolución del expediente</td>
                  <td className="px-4 py-3 text-sm">1-3 meses</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">Conseguir cita para huellas</td>
                  <td className="px-4 py-3 text-sm">1-3 semanas</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">Expedición del TIE físico</td>
                  <td className="px-4 py-3 text-sm">30-45 días</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-4 py-3 text-sm font-bold">TIEMPO TOTAL</td>
                  <td className="px-4 py-3 text-sm font-bold">3-6 meses aproximadamente</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ Importante:</p>
            <p className="mb-0 text-yellow-700">
              Estos son tiempos <strong>orientativos</strong>. En Madrid, Barcelona y Valencia los tiempos pueden ser mayores. En provincias pequeñas, menores.
            </p>
          </div>

          {/* Section 7 */}
          <h2 id="costes-tasas" className="scroll-mt-20">
            7. Costes y tasas de renovación
          </h2>

          <p>
            Renovar el TIE tiene un coste económico que debes conocer de antemano:
          </p>

          <h3>Tasas oficiales 2026</h3>

          <ul>
            <li>
              <strong>Tasa por renovación de autorización (Modelo 790 Código 012):</strong> Aproximadamente 21,64€
            </li>
            <li>
              <strong>Tasa por expedición del TIE físico (Modelo 790 Código 012):</strong> Aproximadamente 16,24€
            </li>
          </ul>

          <p>
            <strong>Total aproximado:</strong> 37,88€ en tasas oficiales.
          </p>

          <h3>Otros costes posibles</h3>

          <ul>
            <li><strong>Fotografías de carnet:</strong> 5-10€</li>
            <li><strong>Certificado de empadronamiento:</strong> Gratuito en mayoría de ayuntamientos</li>
            <li><strong>Fotocopias:</strong> 2-5€</li>
            <li><strong>Certificados de antecedentes:</strong> Variable según país</li>
            <li><strong>Traducciones juradas:</strong> 30-50€ por documento (si necesitas)</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Nota:</p>
            <p className="mb-0 text-blue-700">
              Los precios de las tasas pueden variar ligeramente. Verifica siempre el importe exacto al momento de pagar.
            </p>
          </div>

          {/* Section 8 */}
          <h2 id="errores-comunes" className="scroll-mt-20">
            8. Errores comunes a evitar
          </h2>

          <p>
            Estos son los errores más frecuentes que vemos en renovaciones de TIE:
          </p>

          <div className="my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #1: Solicitar la renovación demasiado pronto</p>
              <p className="text-red-700">
                Si solicitas con más de 60 días de antelación, te rechazarán la solicitud por prematura.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #2: No tener suficientes medios económicos</p>
              <p className="text-red-700">
                Debes demostrar ingresos suficientes. El mínimo es el IPREM (en 2026 aproximadamente 600€/mes).
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #3: Llevar documentación incompleta</p>
              <p className="text-red-700">
                Faltarte un documento puede causar el rechazo de tu solicitud. Revisa la lista completa antes de ir.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #4: No ir a la cita de huellas a tiempo</p>
              <p className="text-red-700">
                Tienes solo 1 mes desde la notificación. Si no vas, tu autorización puede quedar sin efecto.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #5: No conservar el resguardo de solicitud</p>
              <p className="text-red-700">
                Este documento acredita que estás en situación regular mientras esperas la renovación.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <h2 id="tie-caducado" className="scroll-mt-20">
            9. ¿Qué pasa si mi TIE está caducado?
          </h2>

          <p>
            Si tu TIE ya ha caducado, no entres en pánico. Todavía puedes solucionar la situación:
          </p>

          <h3>Caducidad reciente (menos de 90 días)</h3>

          <p>
            Si han pasado menos de 90 días desde la caducidad:
          </p>

          <ul>
            <li>Puedes presentar la renovación normalmente</li>
            <li>Probablemente no tengas problemas mayores</li>
            <li>Es posible que te impongan una multa leve (no siempre)</li>
          </ul>

          <h3>Caducidad superior a 90 días</h3>

          <p>
            Si han pasado más de 90 días:
          </p>

          <ul>
            <li>Técnicamente estás en situación irregular</li>
            <li>Puedes recibir una multa más alta</li>
            <li>El proceso puede ser más complicado</li>
            <li>En algunos casos deberás solicitar una nueva autorización en lugar de renovación</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-green-400 bg-green-50 p-4">
            <p className="mb-0 font-bold text-green-800">✅ Solución:</p>
            <p className="mb-0 text-green-700">
              Si tu TIE está caducado, <strong>actúa inmediatamente</strong>. Cuanto más tiempo pases en situación irregular, más difícil será regularizarte. Contacta con CitaEx para ayudarte en tu caso específico.
            </p>
          </div>

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
                ¿Puedo viajar fuera de España mientras mi TIE está en renovación?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Sí, puedes viajar, pero debes llevar contigo el <strong>resguardo de solicitud de renovación</strong> junto con tu pasaporte y TIE caducado. Esto demuestra que estás en situación regular. Sin embargo, algunos países Schengen pueden poner problemas. Es recomendable evitar viajes internacionales durante la renovación si es posible.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Cuánto cuesta renovar el TIE en total?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  El coste oficial de las tasas es aproximadamente <strong>38€ en total</strong> (21,64€ por la renovación de autorización + 16,24€ por el TIE físico). Además, debes considerar gastos adicionales como fotografías (5-10€), fotocopias (2-5€) y posibles traducciones si necesitas. En total, el proceso puede costar entre 50-100€ dependiendo de tu situación específica.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué hago si me deniegan la renovación del TIE?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Si te deniegan la renovación, tienes <strong>derecho a recurrir</strong> la decisión. Dispones de un mes para presentar un <strong>recurso de reposición</strong> ante el mismo órgano que dictó la resolución. Es muy recomendable contar con ayuda de un abogado especializado en extranjería. También puedes analizar si cumples requisitos para solicitar otra tipo de autorización alternativa.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo trabajar mientras espero la renovación del TIE?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  <strong>Sí</strong>, si tu renovación está en trámite y presentaste la solicitud dentro de plazo, puedes continuar trabajando normalmente aunque tu TIE haya caducado. Tu autorización de trabajo se prorroga automáticamente hasta que haya resolución. Guarda siempre el <strong>resguardo de solicitud</strong> para demostrar que estás en situación regular.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Necesito abogado para renovar mi TIE?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  <strong>No es obligatorio</strong>, pero puede ser recomendable en casos complicados. Si tu situación es estándar (trabajas regularmente, tienes ingresos suficientes, no has tenido problemas), puedes hacerlo tú mismo siguiendo esta guía. Sin embargo, si tienes dudas sobre requisitos, has estado en paro, o tu caso es complejo, consultar con un abogado especializado puede ahorrarte problemas.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿Necesitas ayuda con tu renovación de TIE?</h2>
            <p className="mb-6 text-lg text-green-100">
              No pierdas tiempo buscando citas o preocupándote por documentación. Nuestro equipo te ayuda en todo el proceso.
            </p>
            <div className="mb-6 flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Conseguimos tu cita
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Revisamos documentación
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Seguimiento completo
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
            </div>
          </div>
        </section>
      </article>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Renovar TIE en España 2026 - Guía Completa',
            description:
              'Guía definitiva para renovar tu TIE en 2026. Requisitos, documentos necesarios, proceso paso a paso y plazos.',
            image: 'https://citaex.com/images/blog/renovar-tie-2026.jpg',
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
              '@id': 'https://citaex.com/blog/renovar-tie-guia-completa',
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
                name: '¿Puedo viajar fuera de España mientras mi TIE está en renovación?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí, puedes viajar, pero debes llevar contigo el resguardo de solicitud de renovación junto con tu pasaporte y TIE caducado.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuánto cuesta renovar el TIE en total?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El coste oficial de las tasas es aproximadamente 38€ en total. El proceso completo puede costar entre 50-100€.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué hago si me deniegan la renovación del TIE?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tienes derecho a recurrir la decisión. Dispones de un mes para presentar un recurso de reposición.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Puedo trabajar mientras espero la renovación del TIE?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí, si tu renovación está en trámite y presentaste la solicitud dentro de plazo, puedes continuar trabajando normalmente.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Necesito abogado para renovar mi TIE?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No es obligatorio, pero puede ser recomendable en casos complicados.',
                },
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
                name: 'Renovar TIE en España 2026',
                item: 'https://citaex.com/blog/renovar-tie-guia-completa',
              },
            ],
          }),
        }}
      />
    </div>
  );
}
