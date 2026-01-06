import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nacionalidad Española por Residencia 2026: Requisitos | CitaEx',
  description:
    'Guía completa para obtener la nacionalidad española por residencia. Requisitos, años necesarios, exámenes CCSE y DELE, proceso y documentos 2026.',
  keywords: [
    'nacionalidad española',
    'nacionalidad por residencia',
    'requisitos nacionalidad',
    '10 años residencia',
    'examen CCSE',
    'examen DELE',
    'pasaporte español',
    'ciudadanía española 2026',
  ],
  openGraph: {
    title: 'Nacionalidad Española por Residencia 2026: Requisitos',
    description:
      'Todo sobre la nacionalidad española: requisitos, exámenes, proceso completo. Guía 2026.',
    url: 'https://citaex.com/blog/nacionalidad-espanola-residencia',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'article',
  },
  alternates: {
    canonical: 'https://citaex.com/blog/nacionalidad-espanola-residencia',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito información sobre la nacionalidad española.')}`;

export default function NacionalidadEspanolaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white" aria-label="Breadcrumb">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-green-600">Inicio</Link></li>
            <li><span className="mx-2">→</span></li>
            <li><Link href="/blog" className="hover:text-green-600">Blog</Link></li>
            <li><span className="mx-2">→</span></li>
            <li className="text-gray-900 font-medium">Nacionalidad Española por Residencia</li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">Nacionalidad</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Guía 2026</span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Nacionalidad Española por Residencia 2026: Requisitos Completos
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Guía completa sobre cómo obtener la nacionalidad española por residencia: años necesarios, requisitos, exámenes CCSE y DELE, proceso paso a paso y documentos.
          </p>
        </header>

        <div className="mb-8 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white shadow-lg">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-lg font-bold">¿Quieres solicitar la nacionalidad española?</p>
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
              <li><a href="#que-es" className="text-green-600 hover:underline">1. ¿Qué es la nacionalidad?</a></li>
              <li><a href="#requisitos" className="text-green-600 hover:underline">2. Requisitos generales</a></li>
              <li><a href="#anos-necesarios" className="text-green-600 hover:underline">3. Años de residencia necesarios</a></li>
              <li><a href="#examenes" className="text-green-600 hover:underline">4. Exámenes CCSE y DELE</a></li>
              <li><a href="#documentos" className="text-green-600 hover:underline">5. Documentos necesarios</a></li>
              <li><a href="#proceso" className="text-green-600 hover:underline">6. Proceso paso a paso</a></li>
              <li><a href="#plazos" className="text-green-600 hover:underline">7. Plazos y tiempos</a></li>
              <li><a href="#faq" className="text-green-600 hover:underline">8. Preguntas frecuentes</a></li>
            </ul>
          </nav>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            La <strong>nacionalidad española por residencia</strong> te permite convertirte en ciudadano español con todos los derechos, incluyendo el <strong>pasaporte europeo</strong>, derecho al voto y libre circulación en la UE. Es el objetivo final de muchos extranjeros residentes en España.
          </p>

          <h2 id="que-es" className="scroll-mt-20">1. ¿Qué es la nacionalidad española?</h2>

          <p>
            La nacionalidad española es la <strong>condición de ciudadano de España</strong>. Al obtenerla, dejas de ser extranjero y adquieres la plena ciudadanía española con todos sus derechos y obligaciones.
          </p>

          <h3>Beneficios de la nacionalidad española</h3>

          <ul>
            <li><strong>Pasaporte español</strong> - Uno de los más poderosos del mundo</li>
            <li><strong>Pasaporte europeo</strong> - Libre circulación en la UE</li>
            <li><strong>Derecho al voto</strong> - En elecciones nacionales, autonómicas y locales</li>
            <li><strong>No necesitas renovar documentos</strong> - La nacionalidad es permanente</li>
            <li><strong>Acceso a empleos públicos</strong> - Oposiciones y funcionariado</li>
            <li><strong>Protección consular</strong> - Embajadas españolas en todo el mundo</li>
            <li><strong>Transmisión a hijos</strong> - Tus hijos serán españoles</li>
            <li><strong>No te pueden expulsar</strong> - España es tu país</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Dato importante:</p>
            <p className="mb-0 text-blue-700">
              España permite la <strong>doble nacionalidad</strong> con países iberoamericanos (excepto Brasil en algunos casos), Andorra, Filipinas, Guinea Ecuatorial y Portugal. Si eres de otro país, deberás renunciar a tu nacionalidad anterior (aunque algunos países permiten recuperarla después).
            </p>
          </div>

          <h2 id="requisitos" className="scroll-mt-20">2. Requisitos generales</h2>

          <p>Para solicitar la nacionalidad española por residencia, debes cumplir TODOS estos requisitos:</p>

          <div className="my-6 rounded-lg bg-green-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-green-800">
              <span>✓</span> Requisitos obligatorios
            </h3>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Tiempo de residencia legal</strong> - Normalmente 10 años (varía según origen)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Residencia legal ininterrumpida</strong> - No puedes haber estado más de 6 meses seguidos fuera de España</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Buena conducta cívica</strong> - No tener antecedentes penales en España ni en países anteriores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Integración suficiente</strong> - Demostrada mediante exámenes CCSE y DELE</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Ser mayor de 18 años</strong> - O tener 14 años y ser emancipado</span>
              </li>
            </ul>
          </div>

          <h2 id="anos-necesarios" className="scroll-mt-20">3. Años de residencia necesarios</h2>

          <p>
            El tiempo de residencia legal requerido <strong>varía según tu país de origen o situación personal</strong>:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">Situación</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">Años necesarios</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Refugiados o apátridas</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-700">5 años</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Ciudadanos iberoamericanos (excepto Brasil*), Andorra, Filipinas, Guinea Ecuatorial, Portugal</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-700">2 años</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Nacidos en territorio español</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-700">1 año</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Casados con español/a</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-700">1 año</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Viudos de español/a</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-700">1 año</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Resto de nacionalidades</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-700">10 años</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ Importante:</p>
            <p className="mb-0 text-yellow-700">
              Solo cuenta la <strong>residencia LEGAL</strong>. Los años que estuviste irregular NO cuentan. Tampoco cuentan períodos con estancia de estudiante (salvo que hayas vivido en España como estudiante durante 5 años consecutivos, en cuyo caso puedes descontar la mitad del tiempo).
            </p>
          </div>

          <h2 id="examenes" className="scroll-mt-20">4. Exámenes CCSE y DELE</h2>

          <p>
            Desde 2015, es <strong>obligatorio aprobar dos exámenes</strong> que demuestran tu integración en España:
          </p>

          <h3>CCSE - Conocimientos Constitucionales y Socioculturales de España</h3>

          <p>
            El <strong>examen CCSE</strong> evalúa tus conocimientos sobre:
          </p>

          <ul>
            <li><strong>Gobierno y legislación española</strong> - Constitución, poderes del Estado</li>
            <li><strong>Derechos y deberes</strong> - Sistema legal español</li>
            <li><strong>Geografía</strong> - Comunidades autónomas, provincias, ciudades</li>
            <li><strong>Historia de España</strong> - Épocas históricas principales</li>
            <li><strong>Cultura y sociedad</strong> - Fiestas, tradiciones, personajes</li>
          </ul>

          <div className="my-6 rounded-lg bg-blue-50 p-6">
            <h4 className="mb-3 font-bold text-blue-800">Formato del examen CCSE</h4>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>25 preguntas</strong> tipo test (opción múltiple)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Tarea 1:</strong> 10 preguntas sobre gobierno, legislación y participación (60% acierto necesario)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Tarea 2:</strong> 10 preguntas sobre cultura, historia y sociedad (60% acierto necesario)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Tarea 3:</strong> 5 preguntas de comprensión audiovisual (30% acierto necesario)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Duración:</strong> 45 minutos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Coste:</strong> Aproximadamente 85€</span>
              </li>
            </ul>
          </div>

          <h3>DELE - Diploma de Español como Lengua Extranjera</h3>

          <p>
            Debes aprobar el <strong>DELE nivel A2 o superior</strong> (se recomienda el A2 por ser el nivel mínimo).
          </p>

          <div className="my-6 rounded-lg bg-purple-50 p-6">
            <h4 className="mb-3 font-bold text-purple-800">Formato del examen DELE A2</h4>
            <ul className="space-y-2 text-purple-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Comprensión de lectura</strong> - 60 minutos, 4 tareas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Comprensión auditiva</strong> - 35 minutos, 4 tareas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Expresión e interacción escritas</strong> - 50 minutos, 2 tareas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Expresión e interacción orales</strong> - 12 minutos, 4 tareas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Coste:</strong> Aproximadamente 150€</span>
              </li>
            </ul>
          </div>

          <h3>Exenciones de los exámenes</h3>

          <p>Están exentos de presentar los exámenes:</p>

          <ul>
            <li><strong>Menores de edad</strong></li>
            <li><strong>Personas con discapacidad</strong> (certificada oficialmente)</li>
            <li><strong>Nacidos en España</strong> o que hayan cursado enseñanza obligatoria en España</li>
            <li><strong>Titulados universitarios</strong> en España (exentos del DELE)</li>
            <li><strong>Ciudadanos de países hispanohablantes</strong> (exentos del DELE)</li>
          </ul>

          <h2 id="documentos" className="scroll-mt-20">5. Documentos necesarios</h2>

          <div className="my-6 rounded-lg bg-gray-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-800">
              <span>📋</span> Checklist completo
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado de nacimiento</strong> apostillado y traducido</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado de antecedentes penales</strong> de todos los países donde hayas residido desde los 18 años (apostillados y traducidos)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado de antecedentes penales español</strong> del Ministerio de Justicia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado del Registro Central de Penados</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Tarjeta de residencia</strong> en vigor (NIE/TIE)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Pasaporte</strong> completo en vigor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado DELE A2</strong> (original)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado CCSE aprobado</strong> (original)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Certificado de empadronamiento histórico</strong> que acredite todos los años de residencia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">☐</span>
                <span><strong>Justificante de pago de la tasa</strong> (modelo 790 código 012, aproximadamente 100€)</span>
              </li>
            </ul>
          </div>

          <h2 id="proceso" className="scroll-mt-20">6. Proceso paso a paso</h2>

          <h3>Paso 1: Verificar que cumples los requisitos</h3>
          <p>
            Confirma que tienes el tiempo de residencia necesario y que no has estado más de 6 meses consecutivos fuera de España.
          </p>

          <h3>Paso 2: Preparar y aprobar los exámenes</h3>
          <p>
            Inscríbete y aprueba el <strong>DELE A2</strong> y el <strong>CCSE</strong>. Puedes hacerlos en cualquier orden. Los certificados tienen validez indefinida.
          </p>

          <h3>Paso 3: Reunir la documentación</h3>
          <p>
            Solicita todos los certificados (nacimiento, antecedentes, etc.). Los documentos extranjeros deben estar apostillados y traducidos oficialmente.
          </p>

          <h3>Paso 4: Pagar la tasa</h3>
          <p>
            Descarga el modelo 790 código 012, rellénalo y págalo en el banco.
          </p>

          <h3>Paso 5: Presentar la solicitud</h3>
          <p>
            Presenta el expediente completo en el <strong>Registro Civil</strong> de tu domicilio. Puedes hacerlo presencialmente, por correo certificado o por registro electrónico.
          </p>

          <h3>Paso 6: Esperar la instrucción del expediente</h3>
          <p>
            El Registro Civil revisará tu documentación. Pueden pedirte documentos adicionales o subsanar errores.
          </p>

          <h3>Paso 7: Resolución del Ministerio</h3>
          <p>
            Tu expediente se envía al Ministerio de Justicia, quien toma la decisión final. Recibirás notificación de la resolución.
          </p>

          <h3>Paso 8: Juramento o promesa de fidelidad</h3>
          <p>
            Si te conceden la nacionalidad, deberás acudir al Registro Civil para realizar el <strong>juramento o promesa de fidelidad al Rey y a la Constitución</strong>.
          </p>

          <h3>Paso 9: Inscripción como español</h3>
          <p>
            Después del juramento, te inscriben como ciudadano español. Ya eres español oficialmente.
          </p>

          <h3>Paso 10: Solicitar DNI y pasaporte</h3>
          <p>
            Con tu certificado de nacionalidad, solicita tu <strong>DNI español</strong> y tu <strong>pasaporte español</strong>.
          </p>

          <h2 id="plazos" className="scroll-mt-20">7. Plazos y tiempos</h2>

          <ul>
            <li><strong>Plazo legal de resolución:</strong> 1 año desde la presentación</li>
            <li><strong>Tiempo real aproximado:</strong> 12-24 meses (varía según Registro Civil)</li>
            <li><strong>Silencio administrativo:</strong> Negativo (si no responden en 1 año, se considera denegado)</li>
            <li><strong>Vigencia certificados extranjeros:</strong> 3 meses desde su emisión</li>
            <li><strong>Juramento tras concesión:</strong> Debes hacerlo en el plazo de 180 días</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-green-400 bg-green-50 p-4">
            <p className="mb-0 font-bold text-green-800">✅ Consejo:</p>
            <p className="mb-0 text-green-700">
              Mientras tramitas la nacionalidad, <strong>no dejes que caduque tu residencia</strong>. Debes mantener tu tarjeta vigente durante todo el proceso. Solicita las renovaciones que correspondan.
            </p>
          </div>

          <h2 id="faq" className="scroll-mt-20">8. Preguntas frecuentes</h2>
        </div>

        <section className="mt-8">
          <div className="space-y-4">
            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo perder la nacionalidad española una vez concedida?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  En general, <strong>NO puedes perder la nacionalidad española</strong>. Solo en casos muy excepcionales: si se demuestra que obtuviste la nacionalidad mediante fraude documental, o si adquieres voluntariamente la nacionalidad de un país no iberoamericano (y no haces declaración de conservación de la española en un plazo de 3 años). La nacionalidad española es muy estable.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Tengo que renunciar a mi nacionalidad anterior?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Depende de tu país de origen. España permite <strong>doble nacionalidad</strong> con: países iberoamericanos (Argentina, Bolivia, Chile, Colombia, Costa Rica, Cuba, Ecuador, El Salvador, Guatemala, Honduras, México, Nicaragua, Panamá, Paraguay, Perú, República Dominicana, Uruguay, Venezuela), Andorra, Filipinas, Guinea Ecuatorial y Portugal. Si eres de otro país, SÍ deberás renunciar formalmente (aunque luego puedas recuperarla según las leyes de tu país).
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo viajar mientras tramito la nacionalidad?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  <strong>Sí, puedes viajar</strong>, pero con precaución. No debes estar fuera de España más de <strong>6 meses consecutivos</strong> durante el proceso, ya que podrían considerar que has interrumpido tu residencia. Viajes cortos (vacaciones, trabajo temporal) no son problema. Guarda billetes y pruebas de tus salidas y entradas.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué pasa si me deniegan la nacionalidad?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Si te deniegan, tienes <strong>1 año para recurrir</strong> mediante recurso de reposición ante el Ministerio de Justicia o recurso contencioso-administrativo ante los tribunales. Es importante analizar el motivo de denegación. Muchas denegaciones son por documentación insuficiente o errores formales que se pueden corregir. Después de resolver el recurso, puedes volver a solicitar.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Los años como estudiante cuentan para la nacionalidad?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  En general, <strong>NO cuentan</strong> porque la estancia de estudiante se considera temporal. EXCEPCIÓN: si has estado <strong>5 años consecutivos</strong> con estancia de estudiante, puedes computar <strong>la mitad del tiempo</strong> (2.5 años). Por ejemplo, 5 años de estudiante + 7.5 años de residencia = 10 años para nacionalidad.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Mis hijos serán españoles si obtengo la nacionalidad?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Tus <strong>hijos menores de 18 años</strong> pueden adquirir la nacionalidad española por <strong>opción</strong> (es un procedimiento más sencillo) una vez tú seas español. Los hijos que nazcan después de que tú seas español, serán españoles de origen automáticamente. Los hijos mayores de edad deberán tramitar la nacionalidad por residencia como cualquier extranjero.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿Necesitas ayuda con tu solicitud de nacionalidad?</h2>
            <p className="mb-6 text-lg text-green-100">
              Te asesoramos en todo el proceso: exámenes, documentación, presentación. Contacta con nosotros.
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
