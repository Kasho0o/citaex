// apps/web/app/(marketing)/blog/cita-toma-huellas-que-llevar/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cita Toma de Huellas: Qué Llevar y Cómo Prepararte | CitaEx',
  description:
    'Guía completa sobre qué documentos llevar a la cita de toma de huellas en 2026. Lista completa, preparación y consejos para que todo salga perfecto.',
  keywords: [
    'toma de huellas extranjería',
    'qué llevar toma huellas',
    'documentos toma huellas',
    'cita huellas TIE',
    'preparación toma huellas',
    'checklist toma huellas',
    'expedición TIE',
  ],
  openGraph: {
    title: 'Cita Toma de Huellas: Qué Llevar y Cómo Prepararte',
    description:
      'Todo lo que necesitas saber para tu cita de toma de huellas. Documentos, preparación y consejos.',
    url: 'https://citaex.com/blog/cita-toma-huellas-que-llevar',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2026-01-01T00:00:00Z',
    modifiedTime: '2026-01-15T00:00:00Z',
    authors: ['CitaEx'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cita Toma de Huellas: Qué Llevar y Cómo Prepararte',
    description: 'Guía completa de documentos y preparación para toma de huellas.',
  },
  alternates: {
    canonical: 'https://citaex.com/blog/cita-toma-huellas-que-llevar',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito ayuda con mi cita de toma de huellas.')}`;

export default function CitaTomaHuellasQueLevarPage() {
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
            <li className="text-gray-900 font-medium">Cita Toma de Huellas: Qué Llevar</li>
          </ol>
        </div>
      </nav>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
              Toma de Huellas
            </span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Guía 2026
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Cita Toma de Huellas: Qué Llevar y Cómo Prepararte
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Guía completa sobre qué documentos llevar a tu cita de toma de huellas, cómo prepararte correctamente y qué esperar durante el proceso. No dejes nada al azar.
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
              10 min lectura
            </span>
          </div>
        </header>

        {/* Quick CTA */}
        <div className="mb-8 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white shadow-lg">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-lg font-bold">¿No consigues cita para toma de huellas?</p>
              <p className="text-green-100">Te ayudamos a conseguirla rápidamente. Sin esperas.</p>
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
                <a href="#que-es-toma-huellas" className="text-green-600 hover:underline">
                  1. ¿Qué es la toma de huellas?
                </a>
              </li>
              <li>
                <a href="#cuando-necesitas" className="text-green-600 hover:underline">
                  2. ¿Cuándo necesitas esta cita?
                </a>
              </li>
              <li>
                <a href="#documentos-obligatorios" className="text-green-600 hover:underline">
                  3. Documentos obligatorios
                </a>
              </li>
              <li>
                <a href="#checklist-completo" className="text-green-600 hover:underline">
                  4. Checklist completo
                </a>
              </li>
              <li>
                <a href="#preparacion-previa" className="text-green-600 hover:underline">
                  5. Preparación previa
                </a>
              </li>
              <li>
                <a href="#dia-de-cita" className="text-green-600 hover:underline">
                  6. El día de la cita
                </a>
              </li>
              <li>
                <a href="#proceso-detallado" className="text-green-600 hover:underline">
                  7. Proceso detallado
                </a>
              </li>
              <li>
                <a href="#errores-evitar" className="text-green-600 hover:underline">
                  8. Errores a evitar
                </a>
              </li>
              <li>
                <a href="#despues-huellas" className="text-green-600 hover:underline">
                  9. Después de las huellas
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
            La <strong>cita de toma de huellas</strong> es un paso crucial en el proceso de obtención o renovación de tu TIE (Tarjeta de Identidad de Extranjero). Llevar la documentación correcta es fundamental para que todo salga bien y no pierdas esta importante cita.
          </p>

          <p>
            Muchas personas pierden sus citas de toma de huellas por no llevar algún documento necesario o por no prepararse adecuadamente. Esta guía te ayudará a evitar estos problemas y asegurar que tu cita sea exitosa.
          </p>

          {/* Section 1 */}
          <h2 id="que-es-toma-huellas" className="scroll-mt-20">
            1. ¿Qué es la toma de huellas?
          </h2>

          <p>
            La <strong>toma de huellas dactilares</strong> es el procedimiento mediante el cual la Policía Nacional registra tus huellas digitales y toma tu fotografía para la expedición de tu Tarjeta de Identidad de Extranjero (TIE).
          </p>

          <p>
            Este trámite se realiza en las <strong>Comisarías de Policía Nacional</strong> después de que tu expediente de autorización de residencia haya sido aprobado favorablemente.
          </p>

          <h3>¿Por qué es necesaria?</h3>

          <ul>
            <li>Para identificarte de forma biométrica</li>
            <li>Para elaborar tu tarjeta TIE con tus datos</li>
            <li>Para incluirte en las bases de datos del sistema Schengen</li>
            <li>Como medida de seguridad oficial</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Importante:</p>
            <p className="mb-0 text-blue-700">
              La toma de huellas es <strong>obligatoria</strong> y presencial. No se puede hacer online ni se puede delegar en otra persona.
            </p>
          </div>

          {/* Section 2 */}
          <h2 id="cuando-necesitas" className="scroll-mt-20">
            2. ¿Cuándo necesitas esta cita?
          </h2>

          <p>
            Necesitas pedir cita para toma de huellas en estas situaciones:
          </p>

          <ul>
            <li><strong>Primera vez que obtienes TIE:</strong> Después de obtener tu primera autorización de residencia</li>
            <li><strong>Renovación de TIE:</strong> Cuando renuevas tu autorización y te han dado resolución favorable</li>
            <li><strong>Modificación de autorización:</strong> Si cambias el tipo de autorización que tienes</li>
            <li><strong>TIE extraviado o robado:</strong> Para obtener un duplicado</li>
            <li><strong>Cambio de datos:</strong> Si has cambiado nombre, nacionalidad u otros datos</li>
          </ul>

          <h3>Plazo para solicitar la cita</h3>

          <p>
            Una vez que recibes la <strong>resolución favorable</strong> de tu expediente, tienes <strong>1 mes (30 días naturales)</strong> para pedir cita de toma de huellas y acudir a ella.
          </p>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ Atención:</p>
            <p className="mb-0 text-yellow-700">
              Si no acudes a la toma de huellas en el plazo establecido, tu autorización puede <strong>quedar sin efecto</strong> y perderás todo el trámite.
            </p>
          </div>

          {/* Section 3 */}
          <h2 id="documentos-obligatorios" className="scroll-mt-20">
            3. Documentos obligatorios para la toma de huellas
          </h2>

          <p>
            Estos son los documentos que <strong>SÍ o SÍ</strong> debes llevar a tu cita de toma de huellas:
          </p>

          <h3>Documentos principales</h3>

          <div className="my-6 space-y-4">
            <div className="rounded-lg bg-white border-2 border-green-200 p-4">
              <h4 className="font-bold text-green-800 mb-2">1. Justificante de cita impreso</h4>
              <p className="text-gray-700 text-sm">
                El documento que descargaste al reservar la cita. Llévalo impreso en papel, no solo en el móvil.
              </p>
            </div>

            <div className="rounded-lg bg-white border-2 border-green-200 p-4">
              <h4 className="font-bold text-green-800 mb-2">2. Pasaporte original</h4>
              <p className="text-gray-700 text-sm">
                Tu pasaporte en vigor. Debe tener al menos 6 meses de validez. Lleva también fotocopia completa de todas las páginas con información.
              </p>
            </div>

            <div className="rounded-lg bg-white border-2 border-green-200 p-4">
              <h4 className="font-bold text-green-800 mb-2">3. Resolución favorable original</h4>
              <p className="text-gray-700 text-sm">
                La notificación oficial donde te informan que tu expediente ha sido aprobado. Original + fotocopia.
              </p>
            </div>

            <div className="rounded-lg bg-white border-2 border-green-200 p-4">
              <h4 className="font-bold text-green-800 mb-2">4. Justificante de pago Modelo 790 Código 012</h4>
              <p className="text-gray-700 text-sm">
                El pago de la tasa del TIE (aproximadamente 16,24€). Debe estar pagado antes de la cita. Original impreso.
              </p>
            </div>

            <div className="rounded-lg bg-white border-2 border-green-200 p-4">
              <h4 className="font-bold text-green-800 mb-2">5. TIE anterior (si es renovación)</h4>
              <p className="text-gray-700 text-sm">
                Si estás renovando, lleva tu TIE anterior aunque esté caducado. Original + fotocopia de ambas caras.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <h2 id="checklist-completo" className="scroll-mt-20">
            4. Checklist completo para la cita
          </h2>

          <div className="my-6 rounded-lg bg-green-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-green-800">
              <span>📋</span> Lista de verificación completa
            </h3>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Justificante de cita</strong> - Impreso en papel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Pasaporte original</strong> - En vigor (+ fotocopia completa)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Resolución favorable</strong> - Original (+ fotocopia)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Modelo 790 Código 012</strong> - Pagado e impreso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>TIE anterior</strong> - Si renuevas (+ fotocopia ambas caras)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>NIE asignado</strong> - Conoce tu número completo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Bolígrafo azul o negro</strong> - Por si necesitas firmar algo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Carpeta o sobre</strong> - Para organizar documentos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Móvil cargado</strong> - Para cualquier emergencia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Gafas o lentillas</strong> - Si las usas habitualmente</span>
              </li>
            </ul>
          </div>

          <div className="my-6 rounded-lg border-l-4 border-green-400 bg-green-50 p-4">
            <p className="mb-0 font-bold text-green-800">✅ Consejo profesional:</p>
            <p className="mb-0 text-green-700">
              Prepara <strong>dos copias de cada documento</strong>. Es mejor llevar de más que de menos. También haz fotos con tu móvil a todos los documentos por si acaso.
            </p>
          </div>

          {/* Section 5 */}
          <h2 id="preparacion-previa" className="scroll-mt-20">
            5. Preparación previa a la cita
          </h2>

          <p>
            Además de preparar los documentos, hay otros aspectos importantes:
          </p>

          <h3>El día anterior</h3>

          <ul>
            <li>Revisa que tienes todos los documentos en la lista</li>
            <li>Imprime todo lo que necesites (no confíes solo en versiones digitales)</li>
            <li>Organiza los documentos en una carpeta en orden</li>
            <li>Verifica la dirección exacta de la comisaría</li>
            <li>Planifica tu ruta y transporte</li>
            <li>Calcula el tiempo de viaje con margen</li>
          </ul>

          <h3>Aspectos personales</h3>

          <ul>
            <li><strong>Vestimenta:</strong> Viste de manera formal y presentable</li>
            <li><strong>Cabello:</strong> Recógelo si es largo para que se vea bien tu cara en la foto</li>
            <li><strong>Maquillaje:</strong> Si usas, que sea natural y suave</li>
            <li><strong>Accesorios:</strong> Evita sombreros, gorras o gafas de sol (las gafas graduadas sí se pueden llevar)</li>
            <li><strong>Joyas:</strong> Evita joyas muy llamativas en la cara</li>
          </ul>

          <h3>Sobre la fotografía</h3>

          <p>
            La fotografía para el TIE se toma en la comisaría, por lo que NO necesitas llevar fotos de carnet. Ten en cuenta:
          </p>

          <ul>
            <li>La foto debe mostrar tu cara completa y despejada</li>
            <li>Expresión neutra, sin sonreír</li>
            <li>Ojos bien abiertos y mirando a la cámara</li>
            <li>Fondo neutro (lo pone la comisaría)</li>
          </ul>

          {/* Section 6 */}
          <h2 id="dia-de-cita" className="scroll-mt-20">
            6. El día de la cita
          </h2>

          <h3>Antes de salir de casa</h3>

          <ul>
            <li>Desayuna bien y con tiempo</li>
            <li>Revisa una última vez que llevas todos los documentos</li>
            <li>Carga tu móvil completamente</li>
            <li>Lleva agua y algo ligero de comer por si hay espera</li>
          </ul>

          <h3>Horario y puntualidad</h3>

          <p>
            <strong>Llega con 30 minutos de antelación</strong> a tu hora de cita. Razones:
          </p>

          <ul>
            <li>Puede haber controles de seguridad en la entrada</li>
            <li>Necesitas localizar la oficina correcta dentro de la comisaría</li>
            <li>Si llegas tarde, pueden no atenderte</li>
            <li>Te permite relajarte y revisar documentos</li>
          </ul>

          <h3>En la comisaría</h3>

          <ul>
            <li>Lleva el móvil en silencio</li>
            <li>Sé amable y respetuoso con el personal</li>
            <li>Sigue las instrucciones que te den</li>
            <li>Ten paciencia, puede haber retrasos</li>
            <li>No uses el móvil en zonas prohibidas</li>
          </ul>

          {/* Section 7 */}
          <h2 id="proceso-detallado" className="scroll-mt-20">
            7. Proceso detallado de la toma de huellas
          </h2>

          <p>
            Entender qué va a pasar durante la cita te ayudará a estar más tranquilo:
          </p>

          <h3>Paso 1: Llegada y registro</h3>

          <p>
            Al llegar a la comisaría, deberás:
          </p>

          <ul>
            <li>Pasar por el control de seguridad</li>
            <li>Informar que vienes para toma de huellas</li>
            <li>Mostrar tu justificante de cita</li>
            <li>Esperar a ser llamado</li>
          </ul>

          <h3>Paso 2: Verificación de documentos</h3>

          <p>
            El funcionario revisará:
          </p>

          <ul>
            <li>Tu identidad (pasaporte)</li>
            <li>La resolución favorable</li>
            <li>El pago de la tasa</li>
            <li>Que todos los documentos estén en orden</li>
          </ul>

          <h3>Paso 3: Toma de huellas dactilares</h3>

          <p>
            El proceso de toma de huellas:
          </p>

          <ul>
            <li>Se realiza con un escáner digital</li>
            <li>Te tomarán las huellas de los 10 dedos</li>
            <li>El proceso es rápido (5-10 minutos)</li>
            <li>Es indoloro y sin tinta</li>
            <li>Debes mantener los dedos limpios y secos</li>
          </ul>

          <h3>Paso 4: Fotografía</h3>

          <p>
            Para la foto del TIE:
          </p>

          <ul>
            <li>Te fotografiarán con una cámara digital</li>
            <li>Debes mirar directamente a la cámara</li>
            <li>Expresión neutral</li>
            <li>Pueden repetir la foto si no sale bien</li>
          </ul>

          <h3>Paso 5: Firma digitalizada</h3>

          <p>
            También capturarán tu firma:
          </p>

          <ul>
            <li>Firmarás en una tableta digital</li>
            <li>Usa tu firma habitual del pasaporte</li>
            <li>Puedes repetir si no quedó bien</li>
          </ul>

          <h3>Paso 6: Resguardo y fin</h3>

          <p>
            Al terminar:
          </p>

          <ul>
            <li>Te darán un <strong>resguardo</strong> importante - guárdalo</li>
            <li>Te dirán cuándo aproximadamente estará listo tu TIE (30-45 días)</li>
            <li>Te explicarán cómo y dónde recogerlo</li>
          </ul>

          {/* Section 8 */}
          <h2 id="errores-evitar" className="scroll-mt-20">
            8. Errores comunes a evitar
          </h2>

          <div className="my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #1: No llevar el justificante impreso</p>
              <p className="text-red-700">
                Aunque lo tengas en el móvil, pueden pedirte la versión impresa. Llévala siempre.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #2: No pagar la tasa antes de la cita</p>
              <p className="text-red-700">
                Debes pagar el Modelo 790 Código 012 ANTES de acudir. No se puede pagar en la comisaría.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #3: Llevar pasaporte a punto de caducar</p>
              <p className="text-red-700">
                Tu pasaporte debe tener al menos 6 meses de validez. Si no, renuévalo primero.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #4: Olvidar el TIE anterior en renovaciones</p>
              <p className="text-red-700">
                Si estás renovando, el TIE anterior es obligatorio aunque esté caducado.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
              <p className="font-bold text-red-800">❌ Error #5: Llegar tarde a la cita</p>
              <p className="text-red-700">
                Si llegas tarde, pueden no atenderte y perderás la cita. Llega siempre con antelación.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <h2 id="despues-huellas" className="scroll-mt-20">
            9. Después de la toma de huellas
          </h2>

          <p>
            Una vez completada la toma de huellas, comienza otra fase de espera:
          </p>

          <h3>Tiempo de expedición del TIE</h3>

          <ul>
            <li><strong>Tiempo habitual:</strong> 30-45 días</li>
            <li><strong>En épocas de alta demanda:</strong> Hasta 60 días</li>
            <li><strong>En casos excepcionales:</strong> Puede ser más</li>
          </ul>

          <h3>¿Cómo saber si está listo?</h3>

          <p>
            Existen varias formas de consultar:
          </p>

          <ul>
            <li>Llamar por teléfono a la comisaría (suele estar saturado)</li>
            <li>Acudir presencialmente a preguntar</li>
            <li>Esperar la notificación por SMS (si dejaste teléfono)</li>
            <li>En algunas comisarías hay sistema de consulta online</li>
          </ul>

          <h3>Recogida del TIE</h3>

          <p>
            Para recoger tu TIE necesitarás:
          </p>

          <ul>
            <li>El resguardo que te dieron en la toma de huellas</li>
            <li>Tu pasaporte original</li>
            <li>Acudir personalmente (no se puede delegar)</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Importante:</p>
            <p className="mb-0 text-blue-700">
              Guarda el resguardo de toma de huellas como oro. Sin él será muy difícil recoger tu TIE.
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
                ¿Puedo enviar a alguien en mi lugar a la toma de huellas?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  <strong>No</strong>, la toma de huellas es un trámite <strong>estrictamente personal</strong> que no se puede delegar. Debes acudir tú mismo/a. La única excepción son los menores de edad, que deben ir acompañados de sus padres o tutores legales.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Necesito llevar fotografías de carnet?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  <strong>No</strong>, para la toma de huellas en comisaría NO necesitas llevar fotografías. La fotografía para tu TIE se toma directamente en la comisaría con cámara digital durante el proceso. Solo necesitas llevar los documentos mencionados en la lista.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué pasa si no tengo algún documento el día de la cita?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Si falta algún documento <strong>obligatorio</strong>, lo más probable es que <strong>no te atiendan</strong> y pierdas la cita. Tendrás que solicitar una nueva cita y volver a esperar. Por eso es crucial revisar la lista completa antes de salir de casa y llevar todo lo necesario.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Cuánto tiempo dura el proceso de toma de huellas?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  El proceso en sí es bastante rápido, suele durar entre <strong>10-20 minutos</strong>. Sin embargo, el tiempo total depende de la espera. Aunque tengas cita, puede haber retrasos. En total, calcula estar en la comisaría entre 30 minutos y 2 horas. Por eso es importante no tener compromisos inmediatos después.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo llevar acompañante a la cita?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Sí, puedes llevar acompañante, pero normalmente <strong>solo tú entrarás a la oficina</strong> donde se realiza el trámite. Tu acompañante puede esperarte en la zona de espera general. Es útil llevar acompañante si necesitas ayuda con el idioma o apoyo moral, pero el proceso debes hacerlo solo/a.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿No consigues cita para toma de huellas?</h2>
            <p className="mb-6 text-lg text-green-100">
              CitaEx te ayuda a conseguir tu cita de toma de huellas rápidamente. Monitoreo 24/7 en todas las comisarías.
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
                Búsqueda automática
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Todas las comisarías
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
            headline: 'Cita Toma de Huellas: Qué Llevar y Cómo Prepararte',
            description:
              'Guía completa sobre qué documentos llevar a la cita de toma de huellas en 2026.',
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
          }),
        }}
      />
    </div>
  );
}
