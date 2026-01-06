import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tipos de Arraigo en España 2026: Guía Completa | CitaEx',
  description:
    'Conoce los 4 tipos de arraigo en España: social, laboral, familiar y formación. Requisitos, diferencias y cuál te conviene más. Guía actualizada 2026.',
  keywords: [
    'tipos de arraigo españa',
    'arraigo social',
    'arraigo laboral',
    'arraigo familiar',
    'arraigo formación',
    'diferencias arraigo',
    'cual arraigo solicitar',
    'arraigo 2026',
  ],
  openGraph: {
    title: 'Tipos de Arraigo en España 2026: Guía Completa',
    description:
      'Arraigo social, laboral, familiar y formación. Requisitos, diferencias y cuál elegir. Guía 2026.',
    url: 'https://citaex.com/blog/tipos-arraigo-espana',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'article',
  },
  alternates: {
    canonical: 'https://citaex.com/blog/tipos-arraigo-espana',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito información sobre los tipos de arraigo.')}`;

export default function TiposArraigoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white" aria-label="Breadcrumb">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-green-600">Inicio</Link></li>
            <li><span className="mx-2">→</span></li>
            <li><Link href="/blog" className="hover:text-green-600">Blog</Link></li>
            <li><span className="mx-2">→</span></li>
            <li className="text-gray-900 font-medium">Tipos de Arraigo en España</li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">Arraigo</span>
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">Comparativa</span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Tipos de Arraigo en España 2026: Guía Completa
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Guía completa sobre los 4 tipos de arraigo en España: social, laboral, familiar y formación. Requisitos, diferencias y cómo elegir el más adecuado para tu situación.
          </p>
        </header>

        <div className="mb-8 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white shadow-lg">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-lg font-bold">¿No sabes qué tipo de arraigo solicitar?</p>
              <p className="text-green-100">Te ayudamos a elegir la mejor opción. Contáctanos.</p>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-white px-6 py-3 font-bold text-green-700 shadow-md transition-all hover:bg-gray-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Asesoría
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
              <li><a href="#que-es" className="text-green-600 hover:underline">1. ¿Qué es el arraigo?</a></li>
              <li><a href="#arraigo-social" className="text-green-600 hover:underline">2. Arraigo social</a></li>
              <li><a href="#arraigo-laboral" className="text-green-600 hover:underline">3. Arraigo laboral</a></li>
              <li><a href="#arraigo-familiar" className="text-green-600 hover:underline">4. Arraigo familiar</a></li>
              <li><a href="#arraigo-formacion" className="text-green-600 hover:underline">5. Arraigo para formación</a></li>
              <li><a href="#comparativa" className="text-green-600 hover:underline">6. Tabla comparativa</a></li>
              <li><a href="#cual-elegir" className="text-green-600 hover:underline">7. ¿Cuál elegir?</a></li>
              <li><a href="#faq" className="text-green-600 hover:underline">8. Preguntas frecuentes</a></li>
            </ul>
          </nav>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            El <strong>arraigo</strong> es un mecanismo legal que permite regularizar tu situación en España cuando has estado residiendo de forma irregular. Existen <strong>4 tipos diferentes</strong> de arraigo, cada uno con requisitos específicos.
          </p>

          <h2 id="que-es" className="scroll-mt-20">1. ¿Qué es el arraigo?</h2>

          <p>
            El arraigo es una <strong>autorización de residencia temporal por circunstancias excepcionales</strong> que reconoce los vínculos sociales, laborales o familiares que has desarrollado en España durante tu estancia, aunque hayas estado en situación irregular.
          </p>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Ventaja principal:</p>
            <p className="mb-0 text-blue-700">
              Puedes solicitar el arraigo <strong>estando en España</strong>, sin necesidad de volver a tu país de origen para tramitar un visado. Esto lo hace muy valioso para personas que ya están integradas.
            </p>
          </div>

          <h3>Los 4 tipos de arraigo</h3>

          <ul>
            <li><strong>Arraigo social</strong> - El más común, basado en permanencia de 3 años + contrato</li>
            <li><strong>Arraigo laboral</strong> - Por haber trabajado sin contrato (situación más difícil de probar)</li>
            <li><strong>Arraigo familiar</strong> - Por tener familiares directos españoles o residentes</li>
            <li><strong>Arraigo para la formación</strong> - Nueva modalidad para estudiar y trabajar</li>
          </ul>

          <h2 id="arraigo-social" className="scroll-mt-20">2. Arraigo social</h2>

          <p>
            Es el <strong>tipo más solicitado</strong> y conocido. Se basa en tu integración social en España.
          </p>

          <div className="my-6 rounded-lg bg-green-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-green-800">
              <span>✓</span> Requisitos arraigo social
            </h3>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>3 años de permanencia continuada</strong> en España (acreditado con empadronamiento)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>No tener antecedentes penales</strong> en España ni en países de procedencia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Contrato de trabajo firmado</strong> de mínimo 1 año, O vínculos familiares, O informe de integración</span>
              </li>
            </ul>
          </div>

          <h3>Duración y renovación</h3>
          <ul>
            <li>Autorización inicial: <strong>1 año</strong></li>
            <li>Primera renovación: <strong>2 años</strong></li>
            <li>Siguientes renovaciones: <strong>2 años</strong></li>
            <li>Permite trabajar por cuenta ajena o propia</li>
          </ul>

          <h2 id="arraigo-laboral" className="scroll-mt-20">3. Arraigo laboral</h2>

          <p>
            El arraigo laboral es una modalidad <strong>menos común</strong> porque requiere demostrar que has trabajado en España sin contrato, lo cual es muy difícil de probar.
          </p>

          <div className="my-6 rounded-lg bg-yellow-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-yellow-800">
              <span>⚠️</span> Requisitos arraigo laboral
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>2 años de permanencia</strong> en España (menos tiempo que el social)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Demostrar relación laboral</strong> de al menos 6 meses mediante sentencia judicial o acta de inspección de trabajo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>No tener antecedentes penales</strong></span>
              </li>
            </ul>
          </div>

          <h3>¿Cómo se demuestra la relación laboral?</h3>

          <p>Solo mediante:</p>
          <ul>
            <li><strong>Sentencia judicial</strong> que reconozca la relación laboral</li>
            <li><strong>Acta de infracción</strong> de la Inspección de Trabajo que confirme que trabajaste sin contrato</li>
            <li><strong>Resolución administrativa</strong> confirmando la relación laboral</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ Dificultad:</p>
            <p className="mb-0 text-yellow-700">
              Este tipo de arraigo es <strong>muy difícil de conseguir</strong> porque requiere documentación oficial que confirme trabajo irregular. La mayoría de personas optan por el arraigo social, que es más accesible.
            </p>
          </div>

          <h2 id="arraigo-familiar" className="scroll-mt-20">4. Arraigo familiar</h2>

          <p>
            El arraigo familiar se concede por <strong>vínculos familiares directos</strong> con españoles o residentes legales.
          </p>

          <div className="my-6 rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-800">
              <span>👨‍👩‍👧</span> Requisitos arraigo familiar
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Ser <strong>padre o madre de hijo español</strong>, O</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Ser <strong>hijo de padre o madre español</strong>, O</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Tener <strong>hijo menor extranjero residente legal</strong> en España y acreditar que estás a cargo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>No tener antecedentes penales</strong></span>
              </li>
            </ul>
          </div>

          <h3>Ventajas del arraigo familiar</h3>

          <ul>
            <li><strong>No requiere tiempo mínimo</strong> de permanencia en España</li>
            <li><strong>No necesita contrato de trabajo</strong></li>
            <li>Más rápido de obtener que otros tipos</li>
            <li>Autorización inicial de <strong>1 año</strong>, renovable por 2 años</li>
          </ul>

          <h3>Documentación adicional</h3>

          <p>Además de los requisitos generales, debes probar:</p>
          <ul>
            <li>Certificado de nacimiento o libro de familia</li>
            <li>DNI del familiar español o tarjeta de residencia</li>
            <li>Prueba de dependencia económica (si aplica)</li>
            <li>Convivencia efectiva (si corresponde)</li>
          </ul>

          <h2 id="arraigo-formacion" className="scroll-mt-20">5. Arraigo para la formación</h2>

          <p>
            El arraigo para la formación es la modalidad <strong>más reciente</strong> (introducida en 2022). Permite obtener residencia para estudiar y trabajar simultáneamente.
          </p>

          <div className="my-6 rounded-lg bg-purple-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-purple-800">
              <span>🎓</span> Requisitos arraigo formación
            </h3>
            <ul className="space-y-2 text-purple-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>2 años de permanencia continuada</strong> en España</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Compromiso de contratación</strong> o contrato de trabajo para formación</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Inscripción en formación profesional</strong> para el empleo (curso oficial)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Carecer de antecedentes penales</strong></span>
              </li>
            </ul>
          </div>

          <h3>Características especiales</h3>

          <ul>
            <li>Autorización inicial de <strong>12 meses</strong></li>
            <li>Permite <strong>trabajar 30 horas semanales</strong> mientras estudias</li>
            <li>La formación debe estar relacionada con el trabajo</li>
            <li>Al finalizar, puedes modificar a arraigo social u otra autorización</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-green-400 bg-green-50 p-4">
            <p className="mb-0 font-bold text-green-800">✅ Ideal para:</p>
            <p className="mb-0 text-green-700">
              Personas jóvenes que solo llevan 2 años en España y quieren regularizarse mientras adquieren formación profesional. Es una vía más rápida que esperar los 3 años del arraigo social.
            </p>
          </div>

          <h2 id="comparativa" className="scroll-mt-20">6. Tabla comparativa</h2>

          <div className="my-6 overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tipo</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tiempo en España</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">Requisito principal</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-green-700">Social</td>
                  <td className="border border-gray-300 px-4 py-2">3 años</td>
                  <td className="border border-gray-300 px-4 py-2">Contrato trabajo o vínculos familiares</td>
                  <td className="border border-gray-300 px-4 py-2">1 año</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-yellow-700">Laboral</td>
                  <td className="border border-gray-300 px-4 py-2">2 años</td>
                  <td className="border border-gray-300 px-4 py-2">Probar trabajo sin contrato (sentencia/acta)</td>
                  <td className="border border-gray-300 px-4 py-2">1 año</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-700">Familiar</td>
                  <td className="border border-gray-300 px-4 py-2">Sin mínimo</td>
                  <td className="border border-gray-300 px-4 py-2">Familiar directo español/residente</td>
                  <td className="border border-gray-300 px-4 py-2">1 año</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-purple-700">Formación</td>
                  <td className="border border-gray-300 px-4 py-2">2 años</td>
                  <td className="border border-gray-300 px-4 py-2">Compromiso laboral + curso formación</td>
                  <td className="border border-gray-300 px-4 py-2">1 año</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="cual-elegir" className="scroll-mt-20">7. ¿Cuál elegir?</h2>

          <p>La elección del tipo de arraigo depende de tu situación personal:</p>

          <h3>Elige arraigo SOCIAL si:</h3>
          <ul>
            <li>Llevas <strong>3 años o más</strong> en España</li>
            <li>Tienes o puedes conseguir un <strong>contrato de trabajo</strong></li>
            <li>Quieres la vía más segura y común</li>
          </ul>

          <h3>Elige arraigo LABORAL si:</h3>
          <ul>
            <li>Has trabajado sin contrato y puedes <strong>demostrarlo oficialmente</strong></li>
            <li>Solo llevas <strong>2 años</strong> en España</li>
            <li>Tienes sentencia judicial o acta de inspección</li>
          </ul>

          <h3>Elige arraigo FAMILIAR si:</h3>
          <ul>
            <li>Tienes <strong>hijo español</strong> o eres hijo de español</li>
            <li>Acabas de llegar y necesitas regularización urgente</li>
            <li>No tienes contrato de trabajo</li>
          </ul>

          <h3>Elige arraigo FORMACIÓN si:</h3>
          <ul>
            <li>Solo llevas <strong>2 años</strong> en España</li>
            <li>Eres <strong>joven</strong> y quieres formarte profesionalmente</li>
            <li>Tienes compromiso de empresa para formación y trabajo</li>
          </ul>

          <h2 id="faq" className="scroll-mt-20">8. Preguntas frecuentes</h2>
        </div>

        <section className="mt-8">
          <div className="space-y-4">
            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo solicitar dos tipos de arraigo a la vez?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  No puedes presentar <strong>dos solicitudes simultáneas</strong> del mismo tipo de autorización. Sin embargo, si cumples requisitos para varios tipos de arraigo, puedes elegir con cuál solicitar primero. Si te deniegan uno, podrías intentar otro (siempre que cumplas los requisitos).
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Cuál es el tipo de arraigo más fácil de conseguir?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  El <strong>arraigo familiar</strong> es el más directo si tienes los vínculos requeridos (hijo español, etc.). Si no tienes familia, el <strong>arraigo social</strong> es el más accesible, ya que solo requiere 3 años, contrato y no tener antecedentes. El arraigo laboral es el más difícil porque necesitas documentación oficial de trabajo irregular.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Todos los tipos de arraigo dan permiso de trabajo?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Sí, <strong>todos los tipos de arraigo incluyen autorización de trabajo</strong>. Con el arraigo social y laboral puedes trabajar por cuenta ajena o propia. El arraigo familiar también permite trabajar. El arraigo de formación permite trabajar a tiempo parcial mientras estudias.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Cuánto tarda la resolución de cada tipo?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  El <strong>plazo legal es de 3 meses</strong> para todos los tipos de arraigo. Si pasan 3 meses sin respuesta, puedes entender que hay silencio administrativo positivo. En la práctica, la mayoría de resoluciones salen en <strong>2-4 meses</strong>. El arraigo familiar suele ser más rápido (1-2 meses).
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Se pueden combinar diferentes requisitos de varios arraigos?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  No, cada tipo de arraigo tiene <strong>requisitos específicos independientes</strong>. No puedes "mezclar" requisitos de diferentes tipos. Debes cumplir TODOS los requisitos de un tipo concreto. Por ejemplo, no puedes usar 2 años del arraigo laboral + contrato del arraigo social.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué pasa después del primer año de arraigo?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Después del primer año, debes <strong>renovar tu autorización</strong>. Si has trabajado durante el año (o tienes medios económicos), la renovación es por <strong>2 años</strong>. Después de 5 años de residencia legal total, puedes solicitar la <strong>residencia de larga duración</strong> (permanente). Tras 10 años, puedes optar a la nacionalidad española.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿No sabes qué tipo de arraigo te conviene?</h2>
            <p className="mb-6 text-lg text-green-100">
              Analizamos tu situación y te ayudamos a elegir la mejor opción. Contáctanos ahora.
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
