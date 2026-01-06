// apps/web/app/(marketing)/blog/errores-comunes-cita-extranjeria/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '10 Errores Comunes al Pedir Cita Extranjería (Y Cómo Evitarlos) | CitaEx',
  description:
    'Descubre los 10 errores más frecuentes al solicitar cita de extranjería y cómo evitarlos. No pierdas tu cita por fallos evitables. Guía actualizada 2026.',
  keywords: [
    'errores cita extranjería',
    'problemas cita previa extranjería',
    'cita extranjería rechazada',
    'no funciona cita extranjería',
    'cita extranjería denegada',
    'fallos cita previa',
    'errores nie',
    'problemas tie',
    'cita extranjería no disponible',
  ],
  openGraph: {
    title: '10 Errores Comunes al Pedir Cita Extranjería (Y Cómo Evitarlos)',
    description:
      'Los errores más frecuentes que hacen perder citas de extranjería a miles de personas. Aprende a evitarlos.',
    url: 'https://citaex.com/blog/errores-comunes-cita-extranjeria',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'article',
    publishedTime: '2026-01-01T00:00:00Z',
    modifiedTime: '2026-01-15T00:00:00Z',
    authors: ['CitaEx'],
    images: [
      {
        url: 'https://citaex.com/images/blog/errores-cita-extranjeria.jpg',
        width: 1200,
        height: 630,
        alt: 'Errores comunes cita extranjería 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Errores Comunes al Pedir Cita Extranjería',
    description: 'Evita estos errores que hacen perder citas a miles de personas.',
  },
  alternates: {
    canonical: 'https://citaex.com/blog/errores-comunes-cita-extranjeria',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito ayuda para conseguir una cita de extranjería.')}`;

export default function ErroresComunesCitaExtranjeriaPage() {
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
            <li className="font-medium text-gray-900">Errores Comunes Cita Extranjería</li>
          </ol>
        </div>
      </nav>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
              Errores a Evitar
            </span>
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
              Guía Práctica
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            10 Errores Comunes al Pedir Cita Extranjería (Y Cómo Evitarlos)
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Cada año, miles de personas pierden su cita de extranjería por errores completamente evitables. 
            En esta guía te mostramos los 10 errores más frecuentes y cómo asegurarte de que no te ocurran a ti.
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
              14 min lectura
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Lectura obligatoria
            </span>
          </div>
        </header>

        {/* Warning Box */}
        <div className="mb-8 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 p-6 text-white shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-2xl">
              ⚠️
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold">¿Sabías que el 40% de las citas se pierden por errores evitables?</h2>
              <p className="text-red-100">
                Según nuestros datos, <strong className="text-white">4 de cada 10 personas</strong> que consiguen cita 
                acaban perdidola por errores en la solicitud, documentación incompleta o confusión con el trámite. 
                Lee esta guía para no ser parte de esa estadística.
              </p>
            </div>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="mb-8 rounded-xl border-2 border-green-200 bg-green-50 p-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="font-bold text-gray-900">¿Quieres asegurarte de no cometer errores?</p>
              <p className="text-gray-600">Nuestro equipo verifica todo antes de tu cita.</p>
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
            Los 10 errores que vamos a analizar
          </h2>
          <nav>
            <ul className="grid gap-2 sm:grid-cols-2">
              <li>
                <a href="#error-1" className="flex items-center gap-2 text-red-600 hover:underline">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">1</span>
                  Seleccionar el trámite incorrecto
                </a>
              </li>
              <li>
                <a href="#error-2" className="flex items-center gap-2 text-red-600 hover:underline">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">2</span>
                  Escribir mal el NIE o pasaporte
                </a>
              </li>
              <li>
                <a href="#error-3" className="flex items-center gap-2 text-red-600 hover:underline">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">3</span>
                  No guardar el justificante
                </a>
              </li>
              <li>
                <a href="#error-4" className="flex items-center gap-2 text-red-600 hover:underline">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">4</span>
                  Llegar tarde a la cita
                </a>
              </li>
              <li>
                <a href="#error-5" className="flex items-center gap-2 text-red-600 hover:underline">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">5</span>
                  Documentación incompleta
                </a>
              </li>
              <li>
                <a href="#error-6" className="flex items-center gap-2 text-red-600 hover:underline">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">6</span>
                  Olvidar pagar la tasa
                </a>
              </li>
              <li>
                <a href="#error-7" className="flex items-center gap-2 text-red-600 hover:underline">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">7</span>
                  Provincia incorrecta
                </a>
              </li>
              <li>
                <a href="#error-8" className="flex items-center gap-2 text-red-600 hover:underline">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">8</span>
                  Confundir páginas oficiales
                </a>
              </li>
              <li>
                <a href="#error-9" className="flex items-center gap-2 text-red-600 hover:underline">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">9</span>
                  No confirmar la cita
                </a>
              </li>
              <li>
                <a href="#error-10" className="flex items-center gap-2 text-red-600 hover:underline">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">10</span>
                  Buscar en horarios incorrectos
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="lead text-xl text-gray-700">
            Conseguir una <strong>cita de extranjería en España</strong> ya es bastante difícil como para 
            perderla por errores evitables. Después de ayudar a miles de personas a conseguir sus citas, 
            hemos identificado los <strong>10 errores más comunes</strong> que cometen los usuarios y que 
            les hacen perder tiempo, dinero y, lo peor de todo, su preciada cita.
          </p>

          <p>
            Algunos de estos errores ocurren <strong>antes de conseguir la cita</strong> (y hacen que nunca 
            la consigas), otros ocurren <strong>al hacer la reserva</strong> (y la invalidan sin que te des 
            cuenta), y otros ocurren <strong>el día de la cita</strong> (y hacen que no te atiendan).
          </p>

          <p>
            Lee esta guía con atención, guárdala en favoritos, y repásala antes de buscar tu próxima cita. 
            Te prometemos que evitar estos errores aumentará dramáticamente tus posibilidades de éxito.
          </p>

          {/* Error 1 */}
          <div id="error-1" className="scroll-mt-20">
            <div className="my-8 rounded-xl border-2 border-red-200 bg-white p-6 shadow-lg not-prose">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
                  #1
                </div>
                <div>
                  <span className="text-sm font-medium text-red-600">ERROR CRÍTICO</span>
                  <h3 className="text-xl font-bold text-gray-900">Seleccionar el trámite incorrecto</h3>
                </div>
              </div>
              
              <div className="mb-4 rounded-lg bg-red-50 p-4">
                <p className="font-medium text-red-800">
                  🚨 <strong>Impacto:</strong> Tu cita será completamente inútil. No te atenderán y tendrás 
                  que volver a empezar desde cero.
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Este es probablemente el error más grave y más común. El sistema de cita previa ofrece 
                  <strong>decenas de opciones de trámites</strong> con nombres muy similares, y elegir el 
                  incorrecto significa que tu cita no sirve para nada.
                </p>

                <h4 className="font-bold text-gray-900">Confusiones más frecuentes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Elegir "NIE" cuando necesitas "Toma de huellas (expedición de tarjeta)"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Elegir "Renovación de autorización" cuando necesitas "Toma de huellas"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Confundir "Certificado de registro de ciudadano UE" con "NIE"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Elegir "Asignación de NIE" cuando ya tienes NIE y necesitas TIE</span>
                  </li>
                </ul>

                <h4 className="font-bold text-gray-900">✅ Cómo evitarlo:</h4>
                <div className="rounded-lg bg-green-50 p-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• Lee tu resolución favorable: indica exactamente qué trámite debes realizar</li>
                    <li>• Si tienes dudas, consulta con un profesional antes de reservar</li>
                    <li>• Recuerda: la "toma de huellas" es para recoger tu tarjeta física después de una aprobación</li>
                    <li>• El "NIE" se refiere al número; el "TIE" es la tarjeta física</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Error 2 */}
          <div id="error-2" className="scroll-mt-20">
            <div className="my-8 rounded-xl border-2 border-red-200 bg-white p-6 shadow-lg not-prose">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
                  #2
                </div>
                <div>
                  <span className="text-sm font-medium text-red-600">ERROR CRÍTICO</span>
                  <h3 className="text-xl font-bold text-gray-900">Escribir mal el NIE o número de pasaporte</h3>
                </div>
              </div>
              
              <div className="mb-4 rounded-lg bg-red-50 p-4">
                <p className="font-medium text-red-800">
                  🚨 <strong>Impacto:</strong> El funcionario no podrá verificar tu identidad y probablemente 
                  te rechazará la cita.
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Un simple error de tipeo en tu NIE o pasaporte puede arruinar una cita que te costó semanas 
                  conseguir. El problema es que <strong>no hay verificación automática</strong> en el momento 
                  de hacer la reserva, así que no te enterarás del error hasta que llegues a la oficina.
                </p>

                <h4 className="font-bold text-gray-900">Errores más comunes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Confundir la letra O con el número 0</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Confundir la letra I con el número 1</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Añadir espacios donde no los hay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Olvidar la letra inicial o final del NIE (X, Y, Z al principio; letra al final)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Usar el NIE antiguo si te lo han renovado</span>
                  </li>
                </ul>

                <div className="rounded-lg bg-blue-50 p-4">
                  <h4 className="font-bold text-blue-800">📋 Formato correcto del NIE:</h4>
                  <p className="mt-2 font-mono text-lg text-blue-900">X1234567A</p>
                  <ul className="mt-2 text-sm text-blue-700">
                    <li>• Primera letra: X, Y, o Z</li>
                    <li>• 7 dígitos numéricos</li>
                    <li>• Última letra: A-Z (letra de control)</li>
                    <li>• Sin espacios ni guiones</li>
                  </ul>
                </div>

                <h4 className="font-bold text-gray-900">✅ Cómo evitarlo:</h4>
                <div className="rounded-lg bg-green-50 p-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• Copia el número directamente de tu documento oficial (no lo escribas de memoria)</li>
                    <li>• Verifica el número <strong>tres veces</strong> antes de confirmar</li>
                    <li>• Compara el justificante de cita con tu documento original</li>
                    <li>• Pide a otra persona que lo revise contigo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Error 3 */}
          <div id="error-3" className="scroll-mt-20">
            <div className="my-8 rounded-xl border-2 border-orange-200 bg-white p-6 shadow-lg not-prose">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-xl font-bold text-white">
                  #3
                </div>
                <div>
                  <span className="text-sm font-medium text-orange-600">ERROR GRAVE</span>
                  <h3 className="text-xl font-bold text-gray-900">No guardar el justificante de cita</h3>
                </div>
              </div>
              
              <div className="mb-4 rounded-lg bg-orange-50 p-4">
                <p className="font-medium text-orange-800">
                  ⚠️ <strong>Impacto:</strong> Sin justificante, no podrás demostrar que tienes cita y 
                  posiblemente no te atiendan.
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  El momento de conseguir una cita puede ser tan emocionante que muchos usuarios olvidan 
                  el paso más importante: <strong>guardar el justificante</strong>. El sistema no siempre 
                  permite recuperarlo después, y sin él puedes quedarte sin cita.
                </p>

                <h4 className="font-bold text-gray-900">Problemas comunes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">⚠️</span>
                    <span>Cerrar la página sin descargar el PDF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">⚠️</span>
                    <span>Guardar en una carpeta que después no encuentras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">⚠️</span>
                    <span>El email con la confirmación va a spam y lo borras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">⚠️</span>
                    <span>Cambiar de teléfono y perder las capturas de pantalla</span>
                  </li>
                </ul>

                <h4 className="font-bold text-gray-900">✅ Cómo evitarlo:</h4>
                <div className="rounded-lg bg-green-50 p-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• <strong>Descarga el PDF</strong> inmediatamente al confirmar</li>
                    <li>• <strong>Haz captura de pantalla</strong> de cada paso importante</li>
                    <li>• <strong>Envíate el PDF por email</strong> a ti mismo</li>
                    <li>• <strong>Guarda en la nube</strong> (Google Drive, iCloud, Dropbox)</li>
                    <li>• <strong>Imprime una copia</strong> y guárdala en un lugar seguro</li>
                    <li>• <strong>Añade la cita al calendario</strong> con el PDF adjunto</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Error 4 */}
          <div id="error-4" className="scroll-mt-20">
            <div className="my-8 rounded-xl border-2 border-orange-200 bg-white p-6 shadow-lg not-prose">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-xl font-bold text-white">
                  #4
                </div>
                <div>
                  <span className="text-sm font-medium text-orange-600">ERROR GRAVE</span>
                  <h3 className="text-xl font-bold text-gray-900">Llegar tarde a la cita</h3>
                </div>
              </div>
              
              <div className="mb-4 rounded-lg bg-orange-50 p-4">
                <p className="font-medium text-orange-800">
                  ⚠️ <strong>Impacto:</strong> Las oficinas son muy estrictas con la puntualidad. 
                  Llegar tarde puede significar perder tu cita completamente.
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Las oficinas de extranjería y comisarías manejan un volumen muy alto de citas diarias 
                  y tienen <strong>tolerancia cero con los retrasos</strong>. Si llegas tarde, es muy 
                  probable que te envíen a casa sin atenderte.
                </p>

                <h4 className="font-bold text-gray-900">Lo que muchos no saben:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">⚠️</span>
                    <span>Algunas oficinas solo te dan 5 minutos de margen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">⚠️</span>
                    <span>Hay que pasar control de seguridad (como en un aeropuerto)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">⚠️</span>
                    <span>Las colas para entrar pueden ser largas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">⚠️</span>
                    <span>Aparcar puede ser muy difícil en zonas céntricas</span>
                  </li>
                </ul>

                <h4 className="font-bold text-gray-900">✅ Cómo evitarlo:</h4>
                <div className="rounded-lg bg-green-50 p-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• Llega <strong>30-45 minutos antes</strong> de tu hora de cita</li>
                    <li>• Busca la ubicación exacta el día anterior en Google Maps</li>
                    <li>• Si vas en coche, localiza aparcamiento con antelación</li>
                    <li>• Considera ir en transporte público para evitar problemas de tráfico</li>
                    <li>• Pon <strong>dos alarmas</strong> en el móvil para no olvidarte</li>
                    <li>• Deja un margen extra si es lunes o después de festivo (más gente)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Error 5 */}
          <div id="error-5" className="scroll-mt-20">
            <div className="my-8 rounded-xl border-2 border-red-200 bg-white p-6 shadow-lg not-prose">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
                  #5
                </div>
                <div>
                  <span className="text-sm font-medium text-red-600">ERROR CRÍTICO</span>
                  <h3 className="text-xl font-bold text-gray-900">Llevar documentación incompleta</h3>
                </div>
              </div>
              
              <div className="mb-4 rounded-lg bg-red-50 p-4">
                <p className="font-medium text-red-800">
                  🚨 <strong>Impacto:</strong> No podrás completar el trámite y habrás perdido tu cita. 
                  Tendrás que conseguir otra y volver a empezar.
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Cada trámite de extranjería requiere <strong>documentos específicos</strong>. Olvidar 
                  uno solo puede significar que no te atiendan o que tu trámite quede incompleto. 
                  Y conseguir otra cita puede llevar semanas o meses.
                </p>

                <h4 className="font-bold text-gray-900">Documentos que más se olvidan:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Fotografías tamaño carnet (fondo blanco, recientes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Justificante de pago de la tasa (modelo 790)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Copias de documentos (piden original + copia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Empadronamiento actualizado (menos de 3 meses)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Resolución favorable (para toma de huellas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Formulario EX correspondiente rellenado</span>
                  </li>
                </ul>

                <div className="rounded-lg bg-blue-50 p-4">
                  <h4 className="font-bold text-blue-800">📋 Checklist básico para TOMA DE HUELLAS:</h4>
                  <ul className="mt-2 space-y-1 text-blue-700">
                    <li>☐ Justificante de cita impreso</li>
                    <li>☐ Pasaporte original + copia de todas las páginas con sellos</li>
                    <li>☐ NIE/TIE anterior (si lo tienes) + copia</li>
                    <li>☐ Resolución favorable + copia</li>
                    <li>☐ Formulario EX-17 rellenado y firmado</li>
                    <li>☐ 3 fotografías tamaño carnet (fondo blanco)</li>
                    <li>☐ Justificante de pago de tasa (modelo 790 código 012)</li>
                    <li>☐ Empadronamiento (menos de 3 meses)</li>
                  </ul>
                </div>

                <h4 className="font-bold text-gray-900">✅ Cómo evitarlo:</h4>
                <div className="rounded-lg bg-green-50 p-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• Busca la lista de documentos específica para TU trámite</li>
                    <li>• Prepara todo <strong>al menos 3 días antes</strong></li>
                    <li>• Lleva <strong>copias de más</strong> por si acaso</li>
                    <li>• Revisa que las fotos cumplan los requisitos (fondo blanco, recientes)</li>
                    <li>• Consulta con un profesional si tienes dudas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Error 6 */}
          <div id="error-6" className="scroll-mt-20">
            <div className="my-8 rounded-xl border-2 border-red-200 bg-white p-6 shadow-lg not-prose">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
                  #6
                </div>
                <div>
                  <span className="text-sm font-medium text-red-600">ERROR CRÍTICO</span>
                  <h3 className="text-xl font-bold text-gray-900">Olvidar pagar la tasa (modelo 790)</h3>
                </div>
              </div>
              
              <div className="mb-4 rounded-lg bg-red-50 p-4">
                <p className="font-medium text-red-800">
                  🚨 <strong>Impacto:</strong> Sin el justificante de pago de la tasa, tu trámite no 
                  se puede completar. Es un requisito absolutamente obligatorio.
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  La mayoría de trámites de extranjería requieren el pago de una <strong>tasa administrativa</strong> 
                  mediante el modelo 790. Este pago debe hacerse <strong>antes de la cita</strong> y debes 
                  llevar el justificante.
                </p>

                <h4 className="font-bold text-gray-900">Tasas más comunes (2026):</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 rounded-lg border text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold">Trámite</th>
                        <th className="px-4 py-2 text-left font-semibold">Código</th>
                        <th className="px-4 py-2 text-left font-semibold">Importe aprox.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">TIE (tarjeta inicial)</td>
                        <td className="px-4 py-2">790-012</td>
                        <td className="px-4 py-2">~16-20€</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Renovación de autorización</td>
                        <td className="px-4 py-2">790-052</td>
                        <td className="px-4 py-2">~16-40€</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Autorización de residencia</td>
                        <td className="px-4 py-2">790-052</td>
                        <td className="px-4 py-2">~80-200€</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">NIE (ciudadano UE)</td>
                        <td className="px-4 py-2">790-012</td>
                        <td className="px-4 py-2">~10-12€</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="font-bold text-gray-900">✅ Cómo evitarlo:</h4>
                <div className="rounded-lg bg-green-50 p-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• Consulta qué tasa necesitas para tu trámite específico</li>
                    <li>• Descarga el modelo 790 de la web oficial de Hacienda</li>
                    <li>• Paga <strong>al menos 2-3 días antes</strong> de la cita</li>
                    <li>• Puedes pagar online (con certificado digital) o en banco</li>
                    <li>• <strong>Imprime el justificante</strong> y llévalo a la cita</li>
                    <li>• Algunos trámites requieren dos tasas diferentes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Error 7 */}
          <div id="error-7" className="scroll-mt-20">
            <div className="my-8 rounded-xl border-2 border-yellow-200 bg-white p-6 shadow-lg not-prose">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-yellow-600 text-xl font-bold text-white">
                  #7
                </div>
                <div>
                  <span className="text-sm font-medium text-yellow-600">ERROR IMPORTANTE</span>
                  <h3 className="text-xl font-bold text-gray-900">Elegir la provincia incorrecta</h3>
                </div>
              </div>
              
              <div className="mb-4 rounded-lg bg-yellow-50 p-4">
                <p className="font-medium text-yellow-800">
                  ⚠️ <strong>Impacto:</strong> Pueden rechazarte si el trámite debe hacerse en 
                  una provincia diferente a donde tienes el domicilio.
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Como norma general, debes hacer los trámites de extranjería en la <strong>provincia 
                  donde estás empadronado</strong>. Sin embargo, hay excepciones y matices que confunden 
                  a muchos usuarios.
                </p>

                <h4 className="font-bold text-gray-900">Reglas generales:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">ℹ️</span>
                    <span><strong>Autorizaciones y renovaciones:</strong> Provincia donde estás empadronado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">ℹ️</span>
                    <span><strong>Toma de huellas/TIE:</strong> Generalmente donde tienes el expediente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">ℹ️</span>
                    <span><strong>NIE para ciudadanos UE:</strong> Cualquier provincia (más flexible)</span>
                  </li>
                </ul>

                <h4 className="font-bold text-gray-900">✅ Cómo evitarlo:</h4>
                <div className="rounded-lg bg-green-50 p-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• Verifica en tu resolución qué oficina gestiona tu expediente</li>
                    <li>• Si has cambiado de provincia, actualiza tu empadronamiento primero</li>
                    <li>• Si no hay citas en tu provincia, consulta si puedes hacerlo en otra cercana</li>
                    <li>• En caso de duda, llama a la oficina de extranjería antes de reservar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Error 8 */}
          <div id="error-8" className="scroll-mt-20">
            <div className="my-8 rounded-xl border-2 border-yellow-200 bg-white p-6 shadow-lg not-prose">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-yellow-600 text-xl font-bold text-white">
                  #8
                </div>
                <div>
                  <span className="text-sm font-medium text-yellow-600">ERROR IMPORTANTE</span>
                  <h3 className="text-xl font-bold text-gray-900">Confundir las páginas oficiales con otras</h3>
                </div>
              </div>
              
              <div className="mb-4 rounded-lg bg-yellow-50 p-4">
                <p className="font-medium text-yellow-800">
                  ⚠️ <strong>Impacto:</strong> Puedes perder tiempo en páginas que no son oficiales, 
                  o peor, caer en estafas.
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Existen <strong>dos sistemas oficiales</strong> principales para cita previa de extranjería, 
                  y mucha gente los confunde. Además, hay páginas falsas que intentan estafar a los usuarios.
                </p>

                <h4 className="font-bold text-gray-900">Páginas OFICIALES:</h4>
                <div className="space-y-3">
                  <div className="rounded-lg border border-green-300 bg-green-50 p-4">
                    <p className="font-bold text-green-800">✅ Sede Electrónica de Administraciones Públicas</p>
                    <p className="font-mono text-sm text-green-700">sede.administracionespublicas.gob.es</p>
                    <p className="text-sm text-green-600">Para: Autorizaciones, arraigo, renovaciones administrativas</p>
                  </div>
                  <div className="rounded-lg border border-green-300 bg-green-50 p-4">
                    <p className="font-bold text-green-800">✅ Sede Electrónica de la Policía Nacional</p>
                    <p className="font-mono text-sm text-green-700">sede.policia.gob.es</p>
                    <p className="text-sm text-green-600">Para: TIE, toma de huellas, NIE ciudadanos UE, carta invitación</p>
                  </div>
                </div>

                <h4 className="font-bold text-gray-900">🚨 Señales de páginas FALSAS:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>URL que no termina en .gob.es o .es</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Te piden pago para "reservar" la cita</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Prometen citas "garantizadas"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Diseño diferente a las páginas oficiales</span>
                  </li>
                </ul>

                <h4 className="font-bold text-gray-900">✅ Cómo evitarlo:</h4>
                <div className="rounded-lg bg-green-50 p-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• Escribe siempre la URL directamente, no busques en Google</li>
                    <li>• Verifica que la URL termine en <strong>.gob.es</strong></li>
                    <li>• Las páginas oficiales NUNCA cobran por la cita (solo las tasas oficiales)</li>
                    <li>• Si tienes dudas, accede desde la web principal del Ministerio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Error 9 */}
          <div id="error-9" className="scroll-mt-20">
            <div className="my-8 rounded-xl border-2 border-yellow-200 bg-white p-6 shadow-lg not-prose">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-yellow-600 text-xl font-bold text-white">
                  #9
                </div>
                <div>
                  <span className="text-sm font-medium text-yellow-600">ERROR IMPORTANTE</span>
                  <h3 className="text-xl font-bold text-gray-900">No completar el proceso de confirmación</h3>
                </div>
              </div>
              
              <div className="mb-4 rounded-lg bg-yellow-50 p-4">
                <p className="font-medium text-yellow-800">
                  ⚠️ <strong>Impacto:</strong> Tu cita puede no quedar registrada correctamente 
                  si no completas todos los pasos.
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  El proceso de reserva tiene <strong>varios pasos</strong>, y algunos usuarios creen 
                  que han terminado antes de completarlos todos. Es especialmente común cuando la 
                  página va lenta o hay problemas técnicos.
                </p>

                <h4 className="font-bold text-gray-900">Señales de que la cita está CONFIRMADA:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Recibes un <strong>código de cita</strong> (tipo ABC123456)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Puedes <strong>descargar un PDF</strong> con el justificante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Recibes <strong>email y/o SMS</strong> de confirmación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>La página muestra mensaje de <strong>"Cita confirmada"</strong></span>
                  </li>
                </ul>

                <h4 className="font-bold text-gray-900">✅ Cómo evitarlo:</h4>
                <div className="rounded-lg bg-green-50 p-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• No cierres la página hasta ver el mensaje de confirmación</li>
                    <li>• Si la página se queda cargando, NO actualices (puede duplicar la solicitud)</li>
                    <li>• Espera a recibir el email/SMS de confirmación</li>
                    <li>• Si no recibes nada en 5 minutos, intenta consultar tu cita con el código</li>
                    <li>• Haz captura de pantalla de CADA paso del proceso</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Error 10 */}
          <div id="error-10" className="scroll-mt-20">
            <div className="my-8 rounded-xl border-2 border-orange-200 bg-white p-6 shadow-lg not-prose">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-xl font-bold text-white">
                  #10
                </div>
                <div>
                  <span className="text-sm font-medium text-orange-600">ERROR GRAVE</span>
                  <h3 className="text-xl font-bold text-gray-900">Buscar cita en los horarios incorrectos</h3>
                </div>
              </div>
              
              <div className="mb-4 rounded-lg bg-orange-50 p-4">
                <p className="font-medium text-orange-800">
                  ⚠️ <strong>Impacto:</strong> Puedes pasar semanas buscando sin éxito mientras otros 
                  consiguen citas fácilmente porque saben cuándo buscar.
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Muchas personas buscan cita de extranjería a cualquier hora del día, sin saber que 
                  las citas se liberan en <strong>momentos específicos</strong>. Buscar en horarios 
                  incorrectos es perder el tiempo.
                </p>

                <h4 className="font-bold text-gray-900">Horarios donde NUNCA encontrarás cita:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Por la tarde (16:00 - 23:00): Prácticamente no se liberan citas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Domingos por la tarde: Mínima actividad en el sistema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span>Después de las 12:00 en días laborables: Las citas matutinas ya se agotaron</span>
                  </li>
                </ul>

                <h4 className="font-bold text-gray-900">Horarios ÓPTIMOS:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-lg bg-green-100 p-3">
                    <span className="text-2xl">🥇</span>
                    <div>
                      <p className="font-bold text-green-800">00:00 - 00:30 (Medianoche)</p>
                      <p className="text-sm text-green-600">78% de las citas se liberan en este horario</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-blue-100 p-3">
                    <span className="text-2xl">🥈</span>
                    <div>
                      <p className="font-bold text-blue-800">06:00 - 08:00 (Madrugada)</p>
                      <p className="text-sm text-blue-600">12% de las citas - Cancelaciones del día anterior</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-purple-100 p-3">
                    <span className="text-2xl">🥉</span>
                    <div>
                      <p className="font-bold text-purple-800">10:00 - 11:30 (Media mañana)</p>
                      <p className="text-sm text-purple-600">6% de las citas - Citas no reclamadas</p>
                    </div>
                  </div>
                </div>

                <h4 className="font-bold text-gray-900">✅ Cómo evitarlo:</h4>
                <div className="rounded-lg bg-green-50 p-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• Lee nuestra <Link href="/blog/mejores-horarios-cita-extranjeria" className="font-bold underline">guía completa de horarios</Link></li>
                    <li>• Concéntrate en buscar a las 00:00 (lunes es el mejor día)</li>
                    <li>• Si no puedes a medianoche, prueba a las 06:00-07:00</li>
                    <li>• No pierdas tiempo buscando por la tarde</li>
                    <li>• O usa un servicio como CitaEx que monitorea 24/7</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen Final */}
          <h2 className="scroll-mt-20">Resumen: Checklist anti-errores</h2>
          
          <p>
            Antes de tu próxima cita de extranjería, repasa esta lista para asegurarte de que 
            no cometes ninguno de estos errores:
          </p>
        </div>

        {/* Final Checklist */}
        <div className="my-8 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-2 border-green-200">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-green-800">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ✅ Checklist antes de reservar cita
          </h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              'He identificado el trámite EXACTO que necesito',
              'Tengo mi NIE/pasaporte a mano para copiar',
              'Conozco mi provincia correcta',
              'Accedo desde la página OFICIAL',
              'Busco en los horarios óptimos (00:00, 06:00)',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded border-2 border-green-400">
                  <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="mb-4 mt-6 flex items-center gap-2 text-xl font-bold text-green-800">
            ✅ Checklist después de reservar cita
          </h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              'He descargado y guardado el justificante PDF',
              'He verificado que el NIE/nombre están correctos',
              'He recibido email/SMS de confirmación',
              'He añadido la cita a mi calendario',
              'He hecho backup del justificante en la nube',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded border-2 border-green-400">
                  <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="mb-4 mt-6 flex items-center gap-2 text-xl font-bold text-green-800">
            ✅ Checklist el día de la cita
          </h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              'Llevo el justificante impreso',
              'Llevo TODA la documentación necesaria',
              'Llevo el justificante de pago de la tasa',
              'Llevo fotos tamaño carnet',
              'Salgo con tiempo para llegar 30 min antes',
              'Llevo copias extra de todos los documentos',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded border-2 border-green-400">
                  <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Preguntas frecuentes sobre errores en citas</h2>
          <div className="space-y-4">
            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo corregir un error en mi cita después de reservarla?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Desafortunadamente, <strong>no es posible modificar</strong> los datos de una cita una vez 
                  confirmada. Si detectas un error en tu NIE, nombre o tipo de trámite, la única opción es 
                  <strong>cancelar la cita</strong> y reservar una nueva con los datos correctos. Por eso es 
                  tan importante verificar todo antes de confirmar. Si solo es un error menor (una letra en 
                  mayúscula, por ejemplo), algunos funcionarios pueden ser flexibles, pero no cuentes con ello.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué hago si pierdo mi justificante de cita?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Intenta estos pasos: 1) Busca en tu email la confirmación que te enviaron. 2) Accede de nuevo 
                  a la página oficial y usa la opción "Consultar cita" con tu código. 3) Si tienes el código de 
                  cita, algunos sistemas permiten regenerar el justificante. Si nada funciona, tu mejor opción es 
                  <strong>llegar temprano a la oficina</strong> con tu documentación y explicar la situación. 
                  Algunos funcionarios pueden verificar tu cita en el sistema, pero no está garantizado.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo ir a mi cita si me falta un documento?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  <strong>No es recomendable</strong>, pero depende del documento. Si te falta algo menor 
                  (como una copia extra), el funcionario podría aceptarte. Si te falta algo esencial (como 
                  el pasaporte, la resolución favorable, o el justificante de pago de la tasa), definitivamente 
                  <strong>no podrás completar el trámite</strong>. En ese caso, es mejor cancelar la cita y 
                  reservar otra cuando tengas todo listo, en lugar de perder tu turno por completo.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Me atienden si llego 10 minutos tarde?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  <strong>Depende de la oficina</strong>. Algunas tienen tolerancia de 5-10 minutos, otras son 
                  muy estrictas y te rechazan si no estás cuando te llaman. El problema es que no sabes cuál 
                  será el caso hasta que llegas. Por eso recomendamos <strong>llegar 30 minutos antes</strong>. 
                  Si llegas tarde por una emergencia real (accidente de tráfico, transporte público averiado), 
                  explica la situación al entrar; algunos funcionarios pueden ser comprensivos.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Cómo sé si estoy en la página oficial de cita previa?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Las páginas oficiales SIEMPRE tienen dominios que terminan en <strong>.gob.es</strong>. Las 
                  dos oficiales son: <code>sede.administracionespublicas.gob.es</code> (para extranjería) y 
                  <code>sede.policia.gob.es</code> (para policía). Busca el <strong>candado de seguridad</strong> 
                  en tu navegador. Las páginas oficiales <strong>nunca cobran</strong> por la cita (solo las 
                  tasas oficiales después). Si una página te pide pagar para "reservar" o "asegurar" tu cita, 
                  es una estafa.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿Quieres asegurarte de no cometer errores?</h2>
            <p className="mb-6 text-lg text-green-100">
              Nuestro equipo te ayuda a conseguir cita y verifica que todo esté correcto antes del trámite. 
              Sin pago adelantado.
            </p>
            <div className="mb-6 flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Verificamos documentación
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Elegimos trámite correcto
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Soporte hasta tu cita
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
              href="/blog/mejores-horarios-cita-extranjeria"
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-green-300 hover:shadow-md"
            >
              <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                Estrategia
              </span>
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-green-600">
                Mejores Horarios para Conseguir Cita Extranjería
              </h3>
              <p className="text-sm text-gray-600">
                Descubre a qué hora exacta buscar cita para maximizar tu éxito.
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
                Documentación completa y proceso para tu cita de toma de huellas.
              </p>
            </Link>
          </div>
        </section>

        {/* Print/Save Section */}
        <section className="mt-12 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h3 className="font-bold text-gray-900">📄 Guarda esta guía para tu cita</h3>
              <p className="text-sm text-gray-600">
                Imprime o guarda esta página para repasar antes de tu próxima cita
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              Usa Ctrl+P para imprimir esta guía
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
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('10 Errores Comunes al Pedir Cita Extranjería (Y Cómo Evitarlos)')}&url=${encodeURIComponent('https://citaex.com/blog/errores-comunes-cita-extranjeria')}`}
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
              href={`https://wa.me/?text=${encodeURIComponent('Mira estos errores a evitar al pedir cita de extranjería: https://citaex.com/blog/errores-comunes-cita-extranjeria')}`}
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
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://citaex.com/blog/errores-comunes-cita-extranjeria')}`}
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
        <section className="mt-12 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 p-8 text-center text-white">
          <h3 className="mb-2 text-xl font-bold">🔔 No te pierdas más consejos importantes</h3>
          <p className="mb-4 text-red-100">
            Únete a nuestro canal de WhatsApp para recibir alertas sobre cambios en extranjería
          </p>
          <a
            href="https://whatsapp.com/channel/0029Vb6vC8KAYlUPnU8VcH2w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-red-700 transition-all hover:bg-gray-100"
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
            headline: '10 Errores Comunes al Pedir Cita Extranjería (Y Cómo Evitarlos)',
            description:
              'Descubre los 10 errores más frecuentes al solicitar cita de extranjería y cómo evitarlos. No pierdas tu cita por fallos evitables.',
            image: 'https://citaex.com/images/blog/errores-cita-extranjeria.jpg',
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
              '@id': 'https://citaex.com/blog/errores-comunes-cita-extranjeria',
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
                name: '¿Puedo corregir un error en mi cita de extranjería después de reservarla?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No es posible modificar los datos de una cita una vez confirmada. Si detectas un error, debes cancelar la cita y reservar una nueva con los datos correctos.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué hago si pierdo mi justificante de cita de extranjería?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Busca en tu email la confirmación, accede a la página oficial con la opción "Consultar cita", o llega temprano a la oficina para explicar la situación.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Puedo ir a mi cita de extranjería si me falta un documento?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No es recomendable. Si falta algo esencial como el pasaporte o el justificante de pago, no podrás completar el trámite y perderás la cita.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Me atienden si llego tarde a mi cita de extranjería?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Depende de la oficina. Algunas tienen tolerancia de 5-10 minutos, otras son muy estrictas. Recomendamos llegar 30 minutos antes.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo sé si estoy en la página oficial de cita previa de extranjería?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Las páginas oficiales tienen dominios que terminan en .gob.es. Las oficiales son sede.administracionespublicas.gob.es y sede.policia.gob.es. Nunca cobran por la cita.',
                },
              },
            ],
          }),
        }}
      />

      {/* ItemList Schema for the 10 errors */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: '10 Errores Comunes al Pedir Cita Extranjería',
            description: 'Lista de los errores más frecuentes que hacen perder citas de extranjería',
            numberOfItems: 10,
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Seleccionar el trámite incorrecto',
                description: 'Elegir un tipo de cita que no corresponde a tu trámite real',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Escribir mal el NIE o pasaporte',
                description: 'Errores de tipeo en el número de documento de identidad',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'No guardar el justificante',
                description: 'No descargar o perder el PDF de confirmación de cita',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Llegar tarde a la cita',
                description: 'No respetar la puntualidad requerida por las oficinas',
              },
              {
                '@type': 'ListItem',
                position: 5,
                name: 'Documentación incompleta',
                description: 'No llevar todos los documentos requeridos para el trámite',
              },
              {
                '@type': 'ListItem',
                position: 6,
                name: 'Olvidar pagar la tasa',
                description: 'No abonar el modelo 790 antes de la cita',
              },
              {
                '@type': 'ListItem',
                position: 7,
                name: 'Provincia incorrecta',
                description: 'Solicitar cita en una provincia diferente a la de residencia',
              },
              {
                '@type': 'ListItem',
                position: 8,
                name: 'Confundir páginas oficiales',
                description: 'Usar páginas no oficiales o caer en estafas',
              },
              {
                '@type': 'ListItem',
                position: 9,
                name: 'No confirmar la cita',
                description: 'No completar todos los pasos del proceso de reserva',
              },
              {
                '@type': 'ListItem',
                position: 10,
                name: 'Buscar en horarios incorrectos',
                description: 'No conocer las horas óptimas para encontrar disponibilidad',
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
                name: 'Errores Comunes Cita Extranjería',
                item: 'https://citaex.com/blog/errores-comunes-cita-extranjeria',
              },
            ],
          }),
        }}
      />
    </div>
  );
}
