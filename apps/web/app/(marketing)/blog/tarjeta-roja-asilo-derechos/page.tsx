import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tarjeta Roja de Asilo: Derechos y Beneficios 2026 | CitaEx',
  description:
    'Todo sobre la tarjeta roja de asilo en España: derechos, trabajo, sanidad, duración y renovación. Guía completa 2026.',
  keywords: [
    'tarjeta roja asilo',
    'tarjeta roja españa',
    'derechos tarjeta roja',
    'trabajar con tarjeta roja',
    'asilo españa',
    'protección internacional',
    'renovar tarjeta roja',
    'sanidad tarjeta roja',
  ],
  openGraph: {
    title: 'Tarjeta Roja de Asilo: Derechos y Beneficios 2026',
    description:
      'Todo sobre la tarjeta roja de asilo: derechos, trabajo, sanidad y renovación.',
    url: 'https://citaex.com/blog/tarjeta-roja-asilo-derechos',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'article',
  },
  alternates: {
    canonical: 'https://citaex.com/blog/tarjeta-roja-asilo-derechos',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito ayuda con mi tarjeta roja de asilo.')}`;

export default function TarjetaRojaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white" aria-label="Breadcrumb">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-green-600">Inicio</Link></li>
            <li><span className="mx-2">→</span></li>
            <li><Link href="/blog" className="hover:text-green-600">Blog</Link></li>
            <li><span className="mx-2">→</span></li>
            <li className="text-gray-900 font-medium">Tarjeta Roja de Asilo: Derechos y Beneficios 2026</li>
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
            Tarjeta Roja de Asilo: Derechos y Beneficios 2026
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Guía completa sobre la tarjeta roja de solicitante de protección internacional: qué derechos te otorga, cuándo puedes trabajar, acceso a sanidad, educación, renovación y todo lo que necesitas saber.
          </p>
        </header>

        <div className="mb-8 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white shadow-lg">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-lg font-bold">¿Tienes dudas sobre tu tarjeta roja?</p>
              <p className="text-green-100">Te asesoramos sobre tus derechos y beneficios. Contacta ahora.</p>
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
              <li><a href="#que-es" className="text-green-600 hover:underline">1. ¿Qué es la tarjeta roja?</a></li>
              <li><a href="#como-obtener" className="text-green-600 hover:underline">2. Cómo obtener la tarjeta roja</a></li>
              <li><a href="#derecho-trabajo" className="text-green-600 hover:underline">3. Derecho a trabajar</a></li>
              <li><a href="#sanidad-educacion" className="text-green-600 hover:underline">4. Sanidad y educación</a></li>
              <li><a href="#duracion-renovacion" className="text-green-600 hover:underline">5. Duración y renovación</a></li>
              <li><a href="#otros-derechos" className="text-green-600 hover:underline">6. Otros derechos y beneficios</a></li>
              <li><a href="#restricciones" className="text-green-600 hover:underline">7. Limitaciones y restricciones</a></li>
              <li><a href="#faq" className="text-green-600 hover:underline">8. Preguntas frecuentes</a></li>
            </ul>
          </nav>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            La <strong>tarjeta roja de asilo</strong>, oficialmente conocida como "tarjeta de solicitante de protección internacional", es el documento que acredita que estás en proceso de solicitud de asilo en España y te otorga una serie de derechos fundamentales mientras esperas la resolución.
          </p>

          <h2 id="que-es" className="scroll-mt-20">1. ¿Qué es la tarjeta roja?</h2>

          <p>
            La tarjeta roja es un <strong>documento de identificación temporal</strong> de color rojo que se entrega a las personas cuya solicitud de protección internacional ha sido admitida a trámite en España. No es un permiso de residencia definitivo, sino una <strong>autorización provisional</strong> mientras dura el procedimiento de asilo.
          </p>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Información oficial:</p>
            <p className="mb-0 text-blue-700">
              El nombre oficial es <strong>"Tarjeta de Identidad de Extranjero (TIE) de solicitante de protección internacional"</strong>. El color rojo la distingue de otras tarjetas de residencia que son verdes o blancas.
            </p>
          </div>

          <p>
            Esta tarjeta contiene:
          </p>

          <ul>
            <li>Tu fotografía y datos personales</li>
            <li>Tu número de identificación (NIE)</li>
            <li>La mención "Solicitante de protección internacional"</li>
            <li>Fecha de expedición y caducidad</li>
            <li>Huella dactilar y firma</li>
          </ul>

          <h2 id="como-obtener" className="scroll-mt-20">2. Cómo obtener la tarjeta roja</h2>

          <p>
            Para obtener la tarjeta roja debes seguir estos pasos:
          </p>

          <h3>Paso 1: Presentar solicitud de asilo</h3>
          <p>
            Primero debes presentar tu solicitud de protección internacional en la <strong>Oficina de Asilo y Refugio (OAR)</strong>, en aeropuertos, puertos o comisarías de policía.
          </p>

          <h3>Paso 2: Admisión a trámite</h3>
          <p>
            La administración evaluará tu solicitud y decidirá si la admite a trámite. Este proceso puede tardar entre <strong>1 y 3 meses</strong>.
          </p>

          <h3>Paso 3: Recogida de la tarjeta</h3>
          <p>
            Una vez admitida tu solicitud, te citarán en la <strong>Oficina de Extranjería</strong> para tomar tus huellas y fotografía. En aproximadamente <strong>2-4 semanas</strong> recibirás tu tarjeta roja.
          </p>

          <div className="my-6 rounded-lg bg-green-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-green-800">
              <span>📋</span> Documentos necesarios para la recogida
            </h3>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Citación</strong> de la oficina de extranjería</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Pasaporte</strong> o documento de identidad (si lo tienes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Resguardo</strong> de solicitud de asilo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>3 fotografías</strong> tamaño carnet recientes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Tasa modelo 790</strong> código 012 (normalmente exenta para solicitantes de asilo)</span>
              </li>
            </ul>
          </div>

          <h2 id="derecho-trabajo" className="scroll-mt-20">3. Derecho a trabajar</h2>

          <p>
            Una de las preguntas más frecuentes sobre la tarjeta roja es: <strong>¿Puedo trabajar con ella?</strong>
          </p>

          <p>
            La respuesta es: <strong>Sí, pero después de 6 meses</strong> desde que presentaste tu solicitud de asilo.
          </p>

          <h3>Condiciones para trabajar:</h3>

          <ul>
            <li><strong>Plazo de espera:</strong> 6 meses desde la fecha de presentación de la solicitud</li>
            <li><strong>Ámbito geográfico:</strong> Todo el territorio español</li>
            <li><strong>Tipo de trabajo:</strong> Por cuenta ajena y por cuenta propia</li>
            <li><strong>Sector:</strong> Cualquier actividad legal</li>
            <li><strong>No requiere autorización adicional:</strong> La propia tarjeta habilita para trabajar después de los 6 meses</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ Muy importante:</p>
            <p className="mb-0 text-yellow-700">
              Durante los <strong>primeros 6 meses NO puedes trabajar legalmente</strong>. Debes esperar a que transcurra este plazo. Después, tu tarjeta roja te habilita automáticamente para trabajar sin necesidad de permiso adicional.
            </p>
          </div>

          <h3>Cómo demostrar tu derecho a trabajar:</h3>

          <p>
            Cuando busques empleo después de los 6 meses, debes:
          </p>

          <ul>
            <li>Mostrar tu <strong>tarjeta roja vigente</strong></li>
            <li>Acreditar que han pasado <strong>6 meses desde la solicitud</strong> (con el resguardo de solicitud)</li>
            <li>El empleador puede consultar tu situación en el <strong>Registro Central de Extranjeros</strong></li>
          </ul>

          <h2 id="sanidad-educacion" className="scroll-mt-20">4. Sanidad y educación</h2>

          <h3>Derecho a la sanidad pública</h3>

          <p>
            Con la tarjeta roja tienes <strong>acceso inmediato a la sanidad pública</strong> española, igual que los ciudadanos españoles:
          </p>

          <ul>
            <li><strong>Atención primaria</strong> en centros de salud</li>
            <li><strong>Atención hospitalaria</strong> y especializada</li>
            <li><strong>Urgencias médicas</strong></li>
            <li><strong>Medicamentos</strong> con receta médica</li>
            <li><strong>Atención materno-infantil</strong></li>
            <li><strong>Salud mental</strong></li>
          </ul>

          <p>
            Para acceder, debes solicitar tu <strong>tarjeta sanitaria</strong> en el centro de salud de tu zona presentando:
          </p>

          <ul>
            <li>Tarjeta roja vigente</li>
            <li>Empadronamiento (certificado de domicilio)</li>
            <li>Formulario de solicitud</li>
          </ul>

          <h3>Derecho a la educación</h3>

          <p>
            Los menores con tarjeta roja tienen <strong>derecho a la escolarización obligatoria</strong> en las mismas condiciones que los niños españoles:
          </p>

          <ul>
            <li><strong>Educación infantil</strong> (0-6 años)</li>
            <li><strong>Educación primaria</strong> (6-12 años)</li>
            <li><strong>Educación secundaria obligatoria</strong> (12-16 años)</li>
            <li><strong>Bachillerato y formación profesional</strong></li>
            <li><strong>Acceso a becas</strong> y ayudas al estudio</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-green-400 bg-green-50 p-4">
            <p className="mb-0 font-bold text-green-800">✅ Educación para adultos:</p>
            <p className="mb-0 text-green-700">
              Los adultos también pueden acceder a <strong>cursos de español</strong>, formación profesional y educación de adultos en centros públicos y ONGs especializadas.
            </p>
          </div>

          <h2 id="duracion-renovacion" className="scroll-mt-20">5. Duración y renovación</h2>

          <h3>Duración de la tarjeta</h3>

          <p>
            La tarjeta roja tiene una <strong>validez inicial de 6 meses</strong> desde su expedición.
          </p>

          <h3>Renovación</h3>

          <p>
            Si tu procedimiento de asilo aún no ha finalizado cuando tu tarjeta está próxima a caducar, debes <strong>renovarla</strong>:
          </p>

          <ul>
            <li><strong>Cuándo solicitar:</strong> 60 días antes del vencimiento o hasta 90 días después</li>
            <li><strong>Dónde:</strong> Oficina de Extranjería de tu provincia</li>
            <li><strong>Validez de la renovación:</strong> 6 meses adicionales</li>
            <li><strong>Coste:</strong> Exenta de tasas</li>
          </ul>

          <div className="my-6 rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-800">
              <span>📋</span> Documentos para renovar
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Formulario EX-17</strong> cumplimentado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Tarjeta roja</strong> actual y copia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Pasaporte</strong> completo y copia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>3 fotografías</strong> recientes tamaño carnet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Justificante</strong> de que el procedimiento sigue en trámite</span>
              </li>
            </ul>
          </div>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ No dejes caducar tu tarjeta:</p>
            <p className="mb-0 text-yellow-700">
              Es muy importante renovar antes del vencimiento. Si se caducó, pierdes temporalmente tus derechos (trabajo, sanidad) hasta que te la renueven. Solicita la renovación con tiempo.
            </p>
          </div>

          <h2 id="otros-derechos" className="scroll-mt-20">6. Otros derechos y beneficios</h2>

          <p>
            Además de trabajo, sanidad y educación, la tarjeta roja te otorga otros derechos importantes:
          </p>

          <h3>Asistencia social</h3>

          <ul>
            <li><strong>Acogida temporal:</strong> Alojamiento en centros de acogida si no tienes recursos</li>
            <li><strong>Ayudas económicas:</strong> Subsidios para necesidades básicas</li>
            <li><strong>Alimentación y ropa:</strong> A través de programas sociales</li>
            <li><strong>Apoyo psicológico:</strong> Atención especializada para trauma</li>
          </ul>

          <h3>Asistencia jurídica</h3>

          <ul>
            <li><strong>Abogado gratuito:</strong> Para el procedimiento de asilo</li>
            <li><strong>Intérprete:</strong> En tu idioma para todas las actuaciones</li>
            <li><strong>Orientación legal:</strong> Sobre tus derechos y obligaciones</li>
          </ul>

          <h3>Libertad de circulación</h3>

          <ul>
            <li><strong>Movilidad en España:</strong> Puedes moverte libremente por todo el territorio</li>
            <li><strong>Empadronamiento:</strong> Derecho a empadronarte en cualquier municipio</li>
            <li><strong>Cambio de domicilio:</strong> Debes notificar a la oficina de asilo</li>
          </ul>

          <h3>Protección contra devolución</h3>

          <p>
            El derecho más importante: <strong>no pueden deportarte a tu país de origen</strong> mientras tu solicitud esté en trámite. Este es el principio de "no devolución" (non-refoulement) reconocido internacionalmente.
          </p>

          <h2 id="restricciones" className="scroll-mt-20">7. Limitaciones y restricciones</h2>

          <p>
            Es importante conocer también las <strong>limitaciones</strong> de la tarjeta roja:
          </p>

          <h3>Viajes internacionales</h3>

          <ul>
            <li><strong>NO puedes viajar a tu país de origen:</strong> Hacerlo invalidaría tu solicitud de asilo</li>
            <li><strong>Viajes a la UE:</strong> Requieren autorización especial y son desaconsejables</li>
            <li><strong>Salir de España:</strong> Puede complicar tu procedimiento y reingreso</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
            <p className="mb-0 font-bold text-red-800">🚫 Prohibición absoluta:</p>
            <p className="mb-0 text-red-700">
              Si viajas a tu país de origen con tarjeta roja, <strong>se considerará que ya no necesitas protección</strong> y tu solicitud será denegada automáticamente. Nunca lo hagas.
            </p>
          </div>

          <h3>Otras restricciones</h3>

          <ul>
            <li><strong>No es residencia permanente:</strong> Es temporal hasta la resolución</li>
            <li><strong>No permite reagrupación familiar automática:</strong> Debes esperar a que te concedan el asilo</li>
            <li><strong>Cambio de dirección:</strong> Debes comunicarlo a las autoridades en 10 días</li>
            <li><strong>Obligación de comparecer:</strong> Debes acudir a todas las citaciones oficiales</li>
          </ul>

          <h3>Causas de pérdida de la tarjeta</h3>

          <p>
            Puedes perder tu tarjeta roja si:
          </p>

          <ul>
            <li>Tu solicitud de asilo es <strong>denegada</strong> (sin recurso pendiente)</li>
            <li><strong>Renuncias</strong> a tu solicitud de asilo</li>
            <li>Viajas a tu <strong>país de origen</strong></li>
            <li>No renuevas la tarjeta cuando <strong>caduca</strong></li>
            <li>Obtienes <strong>otra autorización de residencia</strong> en España</li>
          </ul>

          <h2 id="faq" className="scroll-mt-20">8. Preguntas frecuentes</h2>
        </div>

        <section className="mt-8">
          <div className="space-y-4">
            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo trabajar inmediatamente con la tarjeta roja?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  No, debes esperar <strong>6 meses desde la fecha de presentación de tu solicitud de asilo</strong>. Una vez transcurridos esos 6 meses, la tarjeta roja te habilita automáticamente para trabajar por cuenta ajena o propia en todo el territorio español sin necesidad de permiso adicional.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué hago si mi tarjeta roja caduca y el proceso aún no termina?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Debes <strong>renovarla en la Oficina de Extranjería</strong>. Puedes solicitarlo desde 60 días antes del vencimiento hasta 90 días después. La renovación es gratuita y se otorga por períodos de 6 meses mientras tu solicitud esté pendiente de resolución. Es importante no dejar que caduque para mantener tus derechos.
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
                  <strong>NO debes viajar a tu país de origen</strong> bajo ninguna circunstancia, ya que invalidaría tu solicitud. Viajar a otros países de la UE requiere autorización especial y es muy arriesgado porque puede complicar tu reingreso a España y tu procedimiento. Es mejor esperar hasta obtener el estatuto de refugiado y el documento de viaje oficial.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Tengo derecho a sanidad pública con la tarjeta roja?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Sí, tienes <strong>acceso inmediato y completo a la sanidad pública</strong> en las mismas condiciones que los ciudadanos españoles. Debes solicitar tu tarjeta sanitaria en el centro de salud de tu zona presentando tu tarjeta roja vigente y el certificado de empadronamiento. Tendrás acceso a atención primaria, especializada, urgencias, hospitalización y medicamentos.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué pasa con mi tarjeta roja si me deniegan el asilo?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Si te deniegan la solicitud, tu tarjeta roja <strong>pierde validez</strong>. Sin embargo, tienes derecho a <strong>recurrir la decisión en un plazo de 1 mes</strong>. Si presentas recurso, podrás mantener tu tarjeta roja vigente durante la tramitación del recurso. Es muy importante actuar rápidamente y contar con asesoría legal especializada para presentar el recurso.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿Necesitas ayuda con tu tarjeta roja?</h2>
            <p className="mb-6 text-lg text-green-100">
              Te asesoramos sobre todos tus derechos, renovaciones y procedimientos. Contacta con nosotros.
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
