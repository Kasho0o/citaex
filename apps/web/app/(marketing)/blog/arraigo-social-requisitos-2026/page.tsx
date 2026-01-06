import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Arraigo Social 2026: Requisitos y Proceso Completo | CitaEx',
  description:
    'Requisitos actualizados para arraigo social en España 2026: 3 años, contrato, integración. Documentos, proceso y consejos.',
  keywords: [
    'arraigo social',
    'arraigo social 2026',
    'requisitos arraigo social',
    'contrato arraigo',
    'informe integración',
    'residencia arraigo',
    '3 años españa',
    'papeles españa',
  ],
  openGraph: {
    title: 'Arraigo Social 2026: Requisitos y Proceso Completo',
    description:
      'Guía completa del arraigo social: 3 años, contrato, integración y todo el proceso.',
    url: 'https://citaex.com/blog/arraigo-social-requisitos-2026',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'article',
  },
  alternates: {
    canonical: 'https://citaex.com/blog/arraigo-social-requisitos-2026',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito ayuda con mi solicitud de arraigo social.')}`;

export default function ArraigoSocialPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white" aria-label="Breadcrumb">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-green-600">Inicio</Link></li>
            <li><span className="mx-2">→</span></li>
            <li><Link href="/blog" className="hover:text-green-600">Blog</Link></li>
            <li><span className="mx-2">→</span></li>
            <li className="text-gray-900 font-medium">Arraigo Social 2026: Requisitos y Proceso</li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">Arraigo</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Guía 2026</span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Arraigo Social 2026: Requisitos y Proceso Completo
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Guía completa y actualizada sobre el arraigo social en España: requisitos de 3 años de residencia, contrato de trabajo, informe de integración, documentación necesaria y todo el proceso paso a paso.
          </p>
        </header>

        <div className="mb-8 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white shadow-lg">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-lg font-bold">¿Necesitas ayuda con tu arraigo social?</p>
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
              <li><a href="#que-es" className="text-green-600 hover:underline">1. ¿Qué es el arraigo social?</a></li>
              <li><a href="#requisitos" className="text-green-600 hover:underline">2. Requisitos completos</a></li>
              <li><a href="#contrato-trabajo" className="text-green-600 hover:underline">3. El contrato de trabajo</a></li>
              <li><a href="#informe-integracion" className="text-green-600 hover:underline">4. Informe de integración</a></li>
              <li><a href="#documentos" className="text-green-600 hover:underline">5. Documentos necesarios</a></li>
              <li><a href="#proceso" className="text-green-600 hover:underline">6. Proceso de solicitud</a></li>
              <li><a href="#plazos" className="text-green-600 hover:underline">7. Plazos y resolución</a></li>
              <li><a href="#faq" className="text-green-600 hover:underline">8. Preguntas frecuentes</a></li>
            </ul>
          </nav>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            El <strong>arraigo social</strong> es una de las vías más utilizadas para obtener la residencia legal en España cuando has vivido en el país de forma irregular durante al menos 3 años. Esta guía te explica todos los requisitos y el proceso completo actualizado para 2026.
          </p>

          <h2 id="que-es" className="scroll-mt-20">1. ¿Qué es el arraigo social?</h2>

          <p>
            El arraigo social es un tipo de <strong>autorización de residencia temporal por circunstancias excepcionales</strong> que permite regularizar tu situación en España si has permanecido de forma continuada en el país durante al menos <strong>3 años</strong> y cumples otros requisitos relacionados con el trabajo y la integración social.
          </p>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Base legal:</p>
            <p className="mb-0 text-blue-700">
              El arraigo social está regulado en el artículo 124 del Reglamento de la Ley de Extranjería y es una de las tres modalidades de arraigo: <strong>social</strong>, <strong>laboral</strong> y <strong>familiar</strong>.
            </p>
          </div>

          <p>
            Esta autorización te permite:
          </p>

          <ul>
            <li><strong>Residir legalmente</strong> en España</li>
            <li><strong>Trabajar</strong> por cuenta ajena o propia</li>
            <li><strong>Acceder a servicios públicos</strong> (sanidad, educación)</li>
            <li><strong>Viajar dentro del espacio Schengen</strong> una vez tengas tu tarjeta</li>
            <li><strong>Renovar tu residencia</strong> y avanzar hacia la residencia permanente</li>
          </ul>

          <h2 id="requisitos" className="scroll-mt-20">2. Requisitos completos</h2>

          <p>
            Para solicitar el arraigo social debes cumplir <strong>TODOS</strong> estos requisitos:
          </p>

          <div className="my-6 rounded-lg bg-green-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-green-800">
              <span>✓</span> Requisitos obligatorios
            </h3>
            <ul className="space-y-3 text-green-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 font-bold">1.</span>
                <span><strong>Permanencia de 3 años en España:</strong> Debes demostrar que has vivido de forma continuada en España durante al menos 3 años</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 font-bold">2.</span>
                <span><strong>Carecer de antecedentes penales:</strong> Tanto en España como en tus países de residencia anteriores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 font-bold">3.</span>
                <span><strong>No estar en período de prohibición de entrada</strong> a España</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 font-bold">4.</span>
                <span><strong>Tener vínculos familiares en España</strong> (padres, hijos, cónyuge con residencia legal) <strong>O</strong> presentar <strong>informe de integración social</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 font-bold">5.</span>
                <span><strong>Contrato de trabajo:</strong> Presentar un contrato firmado de mínimo 1 año a tiempo completo, o varios contratos que sumen 30 horas semanales</span>
              </li>
            </ul>
          </div>

          <h3>Requisito 1: Los 3 años de permanencia</h3>

          <p>
            Este es el requisito fundamental. Debes probar que has estado en España de manera <strong>continuada durante al menos 3 años</strong>. La forma principal de demostrarlo es mediante:
          </p>

          <ul>
            <li><strong>Certificados de empadronamiento históricos:</strong> Que cubran los 3 años completos</li>
            <li><strong>Documentos complementarios:</strong> Contratos de alquiler, facturas de servicios, certificados escolares, recibos médicos, etc.</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ Importante sobre el empadronamiento:</p>
            <p className="mb-0 text-yellow-700">
              Aunque te hayas empadronado tarde, puedes acreditar tu permanencia anterior con otros documentos. Los ayuntamientos pueden realizar empadronamientos "con efectos retroactivos" si presentas pruebas suficientes.
            </p>
          </div>

          <h3>Requisito 2 y 3: Antecedentes y prohibiciones</h3>

          <p>
            No debes tener antecedentes penales en España ni en tus países de nacionalidad o residencia durante los últimos 5 años. Esto se verifica mediante:
          </p>

          <ul>
            <li><strong>Certificado de antecedentes penales español</strong> (se solicita en la Policía o online)</li>
            <li><strong>Certificado del país de origen</strong> apostillado y traducido</li>
          </ul>

          <h3>Requisito 4: Vínculos familiares o integración</h3>

          <p>
            Tienes dos opciones (solo necesitas una):
          </p>

          <p>
            <strong>Opción A - Vínculos familiares:</strong> Tener familiares directos (padre, madre, hijo, cónyuge) con residencia legal en España.
          </p>

          <p>
            <strong>Opción B - Informe de integración social:</strong> Si no tienes familia, debes obtener este informe del ayuntamiento donde resides (explicado en detalle más abajo).
          </p>

          <h2 id="contrato-trabajo" className="scroll-mt-20">3. El contrato de trabajo</h2>

          <p>
            El <strong>contrato de trabajo</strong> es uno de los requisitos más importantes y a menudo el más difícil de conseguir. Debe cumplir estas condiciones:
          </p>

          <h3>Características del contrato:</h3>

          <ul>
            <li><strong>Duración mínima:</strong> 1 año</li>
            <li><strong>Jornada mínima:</strong> Tiempo completo (40 horas semanales) o parcial sumando mínimo 30 horas semanales</li>
            <li><strong>Firmado:</strong> Debe estar firmado por el empleador y el trabajador</li>
            <li><strong>Actividad real:</strong> El negocio del empleador debe ser real y viable</li>
            <li><strong>Capacidad económica del empleador:</strong> Debe demostrar que puede pagar el salario</li>
          </ul>

          <div className="my-6 rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-800">
              <span>📋</span> El empleador debe aportar:
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>NIF/CIF</strong> de la empresa o autónomo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Alta en la Seguridad Social</strong> (TA2)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Últimas declaraciones fiscales</strong> (IRPF, IVA)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>TC2 de los últimos 3 meses</strong> (trabajadores dados de alta)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Justificación de medios económicos</strong> para pagar el salario</span>
              </li>
            </ul>
          </div>

          <h3>Tipos de contratos válidos:</h3>

          <ul>
            <li><strong>Contrato indefinido:</strong> El más recomendable</li>
            <li><strong>Contrato temporal de 1 año o más:</strong> También válido</li>
            <li><strong>Varios contratos a tiempo parcial:</strong> Si suman mínimo 30 horas semanales</li>
            <li><strong>Contrato autónomo:</strong> Si vas a trabajar por cuenta propia, presentas un plan de negocio</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-green-400 bg-green-50 p-4">
            <p className="mb-0 font-bold text-green-800">✅ Consejo:</p>
            <p className="mb-0 text-green-700">
              El empleador puede ser español, extranjero con residencia legal, o una empresa. Lo importante es demostrar la viabilidad económica del empleo. Si tienes contrato con familiares, habrá mayor escrutinio.
            </p>
          </div>

          <h2 id="informe-integracion" className="scroll-mt-20">4. Informe de integración</h2>

          <p>
            Si no tienes familiares directos con residencia legal en España, necesitas el <strong>informe de integración social</strong>. Este documento lo emite el ayuntamiento de tu localidad y certifica que estás integrado en la comunidad.
          </p>

          <h3>Cómo obtener el informe:</h3>

          <p><strong>Paso 1:</strong> Solicítalo en el <strong>área de Servicios Sociales</strong> de tu ayuntamiento.</p>

          <p><strong>Paso 2:</strong> Un trabajador social realizará una <strong>entrevista personal</strong> contigo para evaluar:</p>

          <ul>
            <li>Tu situación familiar y social</li>
            <li>Conocimiento del idioma español</li>
            <li>Participación en actividades comunitarias</li>
            <li>Escolarización de hijos (si los tienes)</li>
            <li>Vínculos con asociaciones, ONGs, etc.</li>
          </ul>

          <p><strong>Paso 3:</strong> El informe se emite en <strong>30-60 días</strong> y puede ser:</p>

          <ul>
            <li><strong>Favorable:</strong> Certifica tu integración</li>
            <li><strong>Desfavorable:</strong> No certifica suficiente integración (puedes solicitarlo de nuevo pasado un tiempo)</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Documentos útiles para la entrevista:</p>
            <p className="mb-0 text-blue-700">
              Lleva certificados de cursos de español, participación en asociaciones, voluntariado, matrícula escolar de tus hijos, cartas de recomendación de vecinos o entidades locales. Todo suma puntos.
            </p>
          </div>

          <h2 id="documentos" className="scroll-mt-20">5. Documentos necesarios</h2>

          <div className="my-6 rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-800">
              <span>📋</span> Checklist completa de documentos
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Formulario EX-10</strong> cumplimentado y firmado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Pasaporte completo</strong> en vigor (original y copia)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado de empadronamiento histórico</strong> que cubra los 3 años</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Documentos de permanencia:</strong> contratos de alquiler, facturas, recibos médicos, etc.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado de antecedentes penales</strong> español (original, no caduca)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado de antecedentes penales</strong> del país de origen (apostillado y traducido)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Informe de integración social</strong> favorable O libro de familia de familiar en España</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Contrato de trabajo firmado</strong> con todas las firmas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Documentación del empleador:</strong> NIF, alta SS, declaraciones fiscales, TC2</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Justificación medios económicos</strong> del empleador</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Tasa modelo 790 código 052</strong> (10,71 € en 2026)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>3 fotografías</strong> tamaño carnet recientes</span>
              </li>
            </ul>
          </div>

          <h2 id="proceso" className="scroll-mt-20">6. Proceso de solicitud</h2>

          <h3>Paso 1: Preparar la documentación</h3>
          <p>
            Reúne todos los documentos de la lista anterior. Es fundamental que todo esté completo y correcto.
          </p>

          <h3>Paso 2: Solicitar cita previa</h3>
          <p>
            Debes pedir cita en la <strong>Oficina de Extranjería</strong> de tu provincia a través de la web oficial o llamando al teléfono de información. En algunas provincias hay gran demanda y conseguir cita puede tardar semanas o meses.
          </p>

          <h3>Paso 3: Presentar la solicitud</h3>
          <p>
            Acude a tu cita con toda la documentación. El funcionario revisará que esté completa y te dará un <strong>resguardo de presentación</strong> con un número de expediente.
          </p>

          <h3>Paso 4: Esperar la resolución</h3>
          <p>
            La administración estudiará tu caso. Pueden pedirte <strong>documentación adicional</strong> (tienes 10 días para aportarla) o directamente resolver.
          </p>

          <h3>Paso 5: Recoger la autorización</h3>
          <p>
            Si es favorable, te citarán para:
          </p>

          <ul>
            <li>Pagar la tasa de TIE (modelo 790 código 012: 16,32 € en 2026)</li>
            <li>Tomar huellas y fotografía</li>
            <li>Recoger tu <strong>Tarjeta de Identidad de Extranjero (TIE)</strong> en 4-6 semanas</li>
          </ul>

          <h3>Paso 6: Dar de alta en la Seguridad Social</h3>
          <p>
            Una vez tengas la autorización favorable (aunque aún no tengas la tarjeta física), tu empleador debe darte de <strong>alta en la Seguridad Social</strong> y puedes empezar a trabajar.
          </p>

          <h2 id="plazos" className="scroll-mt-20">7. Plazos y resolución</h2>

          <h3>Plazos de resolución:</h3>

          <ul>
            <li><strong>Plazo máximo legal:</strong> 3 meses desde la presentación</li>
            <li><strong>Plazo real:</strong> 2-6 meses (varía por provincias)</li>
            <li><strong>Silencio administrativo:</strong> Si pasan 3 meses sin respuesta, se entiende <strong>denegado</strong> (puedes recurrir)</li>
          </ul>

          <h3>Resultados posibles:</h3>

          <p><strong>1. Concesión:</strong> Te otorgan la autorización de residencia y trabajo por 1 año.</p>

          <p><strong>2. Requerimiento:</strong> Te piden más documentación (tienes 10 días para aportarla).</p>

          <p><strong>3. Denegación:</strong> Puedes presentar <strong>recurso de reposición</strong> en 1 mes o <strong>recurso contencioso-administrativo</strong> en 2 meses.</p>

          <div className="my-6 rounded-lg border-l-4 border-green-400 bg-green-50 p-4">
            <p className="mb-0 font-bold text-green-800">✅ Duración y renovación:</p>
            <p className="mb-0 text-green-700">
              La primera autorización es de <strong>1 año</strong>. Puedes renovarla por 2 años, luego otros 2 años. Después de 5 años de residencia legal, puedes solicitar la <strong>residencia de larga duración</strong> (permanente).
            </p>
          </div>

          <h2 id="faq" className="scroll-mt-20">8. Preguntas frecuentes</h2>
        </div>

        <section className="mt-8">
          <div className="space-y-4">
            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo solicitar arraigo social si solo tengo 2 años y medio en España?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  No, los <strong>3 años completos son un requisito obligatorio</strong> y no negociable. Debes esperar a cumplir exactamente 3 años. Sin embargo, puedes ir preparando toda la documentación, consiguiendo el contrato y el informe de integración para presentar la solicitud justo al cumplir los 3 años.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué pasa si no consigo un contrato de trabajo?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Sin contrato de trabajo <strong>no puedes solicitar arraigo social</strong>. Podrías considerar otras opciones como <strong>arraigo laboral</strong> (si has trabajado 6 meses de forma irregular y puedes demostrarlo) o <strong>arraigo familiar</strong> (si tienes hijos españoles o cónyuge con residencia). También podrías presentar un proyecto de trabajo por cuenta propia si tienes la formación y recursos.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿El contrato puede ser a tiempo parcial?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Sí, pero debe ser de <strong>al menos 30 horas semanales</strong>. Puede ser un solo contrato de 30 horas o varios contratos a tiempo parcial que sumen ese mínimo. Lo importante es que la jornada total sea suficiente para demostrar estabilidad económica y los contratos duren mínimo 1 año.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Es obligatorio el informe de integración si tengo familia en España?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  No, si tienes <strong>vínculos familiares directos</strong> (padres, hijos o cónyuge) que tengan residencia legal en España, <strong>NO necesitas el informe de integración</strong>. Simplemente debes presentar el libro de familia o certificado de nacimiento/matrimonio que acredite el vínculo. El informe solo es necesario si no tienes estos vínculos familiares.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Cuánto tiempo tarda en salir el informe de integración?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  El plazo varía según el ayuntamiento, pero generalmente <strong>entre 30 y 60 días</strong> desde que realizas la entrevista con el trabajador social. En algunos municipios puede ser más rápido (2-3 semanas) y en grandes ciudades puede demorarse más. Es recomendable solicitarlo con antelación, incluso antes de tener el contrato de trabajo.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿Necesitas ayuda con tu arraigo social?</h2>
            <p className="mb-6 text-lg text-green-100">
              Te asesoramos en todo el proceso: documentación, contrato, informe y presentación. Contacta con nosotros.
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
