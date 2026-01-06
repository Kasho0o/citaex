import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo Solicitar Asilo en España 2026 - Guía Completa | CitaEx',
  description:
    'Guía completa para solicitar asilo y protección internacional en España. Requisitos, proceso, derechos, tarjeta roja y plazos actualizados 2026.',
  keywords: [
    'solicitar asilo españa',
    'protección internacional',
    'asilo político españa',
    'tarjeta roja asilo',
    'refugiado españa',
    'asilo 2026',
    'derechos asilo',
    'oar asilo',
  ],
  openGraph: {
    title: 'Cómo Solicitar Asilo en España 2026 - Guía Completa',
    description:
      'Todo sobre solicitar asilo en España: requisitos, proceso, derechos y tarjeta roja. Guía 2026.',
    url: 'https://citaex.com/blog/solicitar-asilo-espana-2026',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'article',
  },
  alternates: {
    canonical: 'https://citaex.com/blog/solicitar-asilo-espana-2026',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito ayuda con mi solicitud de asilo.')}`;

export default function SolicitarAsiloPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white" aria-label="Breadcrumb">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-green-600">Inicio</Link></li>
            <li><span className="mx-2">→</span></li>
            <li><Link href="/blog" className="hover:text-green-600">Blog</Link></li>
            <li><span className="mx-2">→</span></li>
            <li className="text-gray-900 font-medium">Solicitar Asilo en España 2026</li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">Asilo</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Guía 2026</span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Cómo Solicitar Asilo en España 2026 - Guía Completa
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Todo lo que necesitas saber sobre el proceso de solicitud de asilo y protección internacional en España: requisitos, derechos, tarjeta roja y plazos.
          </p>
        </header>

        <div className="mb-8 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white shadow-lg">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-lg font-bold">¿Necesitas ayuda con tu solicitud de asilo?</p>
              <p className="text-green-100">Te asesoramos en todo el proceso. Contacta ahora.</p>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-white px-6 py-3 font-bold text-green-700 shadow-md transition-all hover:bg-gray-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Ayuda
            </a>
          </div>
        </div>

        <div className="mb-10 rounded-xl bg-gray-100 p-6">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Contenido de esta guía
          </h2>
          <nav>
            <ul className="grid gap-2 sm:grid-cols-2">
              <li><a href="#que-es-asilo" className="text-green-600 hover:underline">1. ¿Qué es el asilo en España?</a></li>
              <li><a href="#quien-puede" className="text-green-600 hover:underline">2. ¿Quién puede solicitar asilo?</a></li>
              <li><a href="#proceso" className="text-green-600 hover:underline">3. Proceso de solicitud paso a paso</a></li>
              <li><a href="#documentos" className="text-green-600 hover:underline">4. Documentos necesarios</a></li>
              <li><a href="#tarjeta-roja" className="text-green-600 hover:underline">5. La tarjeta roja de asilo</a></li>
              <li><a href="#derechos" className="text-green-600 hover:underline">6. Derechos durante el proceso</a></li>
              <li><a href="#plazos" className="text-green-600 hover:underline">7. Plazos y tiempos de respuesta</a></li>
              <li><a href="#faq" className="text-green-600 hover:underline">8. Preguntas frecuentes</a></li>
            </ul>
          </nav>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            El <strong>asilo</strong> o <strong>protección internacional</strong> es un derecho fundamental reconocido en España para personas que huyen de persecución en sus países de origen. Esta guía te explica todo el proceso actualizado para 2026.
          </p>

          <h2 id="que-es-asilo" className="scroll-mt-20">1. ¿Qué es el asilo en España?</h2>

          <p>
            El asilo es una forma de <strong>protección internacional</strong> que España otorga a personas que no pueden regresar a su país porque su vida, seguridad o libertad están en peligro debido a persecución por razones de:
          </p>

          <ul>
            <li><strong>Raza o etnia</strong></li>
            <li><strong>Religión</strong></li>
            <li><strong>Nacionalidad</strong></li>
            <li><strong>Opiniones políticas</strong></li>
            <li><strong>Pertenencia a grupo social</strong> (orientación sexual, género, etc.)</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Tipos de protección:</p>
            <p className="mb-0 text-blue-700">
              Existen dos tipos: <strong>Estatuto de refugiado</strong> (persecución directa) y <strong>Protección subsidiaria</strong> (riesgo de daños graves por conflicto o violencia).
            </p>
          </div>

          <h2 id="quien-puede" className="scroll-mt-20">2. ¿Quién puede solicitar asilo?</h2>

          <p>Puedes solicitar asilo en España si:</p>

          <div className="my-6 rounded-lg bg-green-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-green-800">
              <span>✓</span> Requisitos para solicitar
            </h3>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Te encuentras en territorio español o punto de entrada (aeropuerto, puerto)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Sufres o temes fundadamente persecución en tu país</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>La persecución se debe a uno de los motivos reconocidos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>No puedes obtener protección en tu país de origen</span>
              </li>
            </ul>
          </div>

          <h2 id="proceso" className="scroll-mt-20">3. Proceso de solicitud paso a paso</h2>

          <h3>Paso 1: Presentar la solicitud</h3>
          <p>
            Debes presentar tu solicitud en la <strong>Oficina de Asilo y Refugio (OAR)</strong> en Madrid, o en las oficinas provinciales de extranjería. También puedes hacerlo en aeropuertos o comisarías de policía si acabas de llegar.
          </p>

          <h3>Paso 2: Entrevista inicial</h3>
          <p>
            Te tomarán tus datos personales, fotografías y huellas dactilares. Explicarás brevemente los motivos de tu solicitud.
          </p>

          <h3>Paso 3: Admisión a trámite</h3>
          <p>
            La administración decide si admite tu solicitud (normalmente en 1-2 meses). Si se admite, recibirás la <strong>tarjeta roja</strong> de solicitante de asilo.
          </p>

          <h3>Paso 4: Entrevista de fondo</h3>
          <p>
            Te citarán para una entrevista detallada donde deberás explicar tu historia completa. Es muy importante ser honesto y detallado.
          </p>

          <h3>Paso 5: Resolución</h3>
          <p>
            Recibirás la resolución que puede ser: <strong>protección internacional concedida</strong>, <strong>protección subsidiaria</strong>, <strong>autorización por razones humanitarias</strong> o <strong>denegación</strong>.
          </p>

          <h2 id="documentos" className="scroll-mt-20">4. Documentos necesarios</h2>

          <div className="my-6 rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-800">
              <span>📋</span> Lista de documentos
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Pasaporte</strong> (si lo tienes, no es obligatorio)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Documento de identidad</strong> de tu país</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Fotos tipo carnet</strong> (4 fotografías)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Pruebas de persecución:</strong> amenazas, denuncias, informes médicos, artículos de prensa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificados</strong> de pertenencia a grupos perseguidos (políticos, religiosos, LGTBI+)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Informes de organizaciones</strong> de derechos humanos sobre tu país</span>
              </li>
            </ul>
          </div>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ Importante:</p>
            <p className="mb-0 text-yellow-700">
              No es necesario tener pasaporte. Muchas personas huyen sin documentos. Lo importante es tu testimonio y las pruebas que puedas aportar.
            </p>
          </div>

          <h2 id="tarjeta-roja" className="scroll-mt-20">5. La tarjeta roja de asilo</h2>

          <p>
            Una vez admitida tu solicitud, recibirás la <strong>tarjeta roja de solicitante de protección internacional</strong>. Esta tarjeta:
          </p>

          <ul>
            <li>Acredita tu situación legal en España mientras se tramita tu solicitud</li>
            <li>Tiene validez de <strong>6 meses</strong> renovables</li>
            <li>Te permite <strong>trabajar después de 6 meses</strong> desde la solicitud</li>
            <li>Da acceso a <strong>sanidad pública</strong></li>
            <li>Permite <strong>escolarización</strong> de menores</li>
          </ul>

          <h2 id="derechos" className="scroll-mt-20">6. Derechos durante el proceso</h2>

          <p>Como solicitante de asilo tienes derecho a:</p>

          <ul>
            <li><strong>No ser devuelto</strong> a tu país (principio de no devolución)</li>
            <li><strong>Asistencia jurídica gratuita</strong></li>
            <li><strong>Intérprete</strong> en tu idioma</li>
            <li><strong>Atención sanitaria</strong></li>
            <li><strong>Acogida temporal</strong> (si no tienes recursos)</li>
            <li><strong>Ayudas económicas</strong> básicas durante el proceso</li>
            <li><strong>Educación</strong> para menores</li>
          </ul>

          <h2 id="plazos" className="scroll-mt-20">7. Plazos y tiempos de respuesta</h2>

          <p>Los plazos aproximados son:</p>

          <ul>
            <li><strong>Admisión a trámite:</strong> 1-3 meses</li>
            <li><strong>Entrevista de fondo:</strong> 3-12 meses después de la admisión</li>
            <li><strong>Resolución final:</strong> 6 meses desde la entrevista (puede extenderse)</li>
            <li><strong>Proceso total:</strong> 12-24 meses en promedio</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-green-400 bg-green-50 p-4">
            <p className="mb-0 font-bold text-green-800">✅ Consejo:</p>
            <p className="mb-0 text-green-700">
              El plazo legal es de 6 meses, pero suele tardar más. Si pasan 6 meses sin respuesta, se considera <strong>silencio administrativo positivo</strong> y puedes solicitar documentación provisional.
            </p>
          </div>

          <h2 id="faq" className="scroll-mt-20">8. Preguntas frecuentes</h2>
        </div>

        <section className="mt-8">
          <div className="space-y-4">
            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo trabajar mientras espero la resolución?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Sí, pero <strong>no inmediatamente</strong>. Debes esperar <strong>6 meses desde que presentaste la solicitud</strong>. Una vez transcurrido ese plazo, tu tarjeta roja te habilita para trabajar por cuenta ajena o propia en todo el territorio español.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué pasa si me deniegan el asilo?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Si te deniegan, tienes derecho a <strong>recurrir la decisión</strong> en un plazo de 1 mes. Puedes presentar recurso de reposición ante la misma administración o recurso contencioso-administrativo ante los tribunales. Es recomendable contar con un abogado especializado.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo traer a mi familia?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Sí, si te conceden el asilo, puedes solicitar la <strong>reagrupación familiar</strong> para tu cónyuge e hijos menores. También es posible incluir a familiares en tu solicitud inicial si llegaron contigo o si están en situación de especial vulnerabilidad.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Cuánto dura la protección internacional?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  El <strong>estatuto de refugiado</strong> se concede inicialmente por <strong>5 años</strong> y es renovable. La <strong>protección subsidiaria</strong> se otorga por <strong>1 año</strong> renovable por periodos de 2 años. Después de 5 años, puedes solicitar residencia de larga duración.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo viajar fuera de España con la tarjeta roja?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Con la tarjeta roja <strong>NO debes viajar a tu país de origen</strong>, ya que eso invalidaría tu solicitud. Puedes viajar dentro de la UE con autorización especial, pero es arriesgado. Una vez concedido el asilo, recibirás un <strong>documento de viaje</strong> que te permite viajar internacionalmente (excepto a tu país de origen).
                </p>
              </div>
            </details>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿Necesitas ayuda con tu solicitud de asilo?</h2>
            <p className="mb-6 text-lg text-green-100">
              Te asesoramos en todo el proceso de protección internacional. Contacta con nosotros.
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
