import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Examen CCSE y DELE: Guía de Preparación 2026 | CitaEx',
  description:
    'Guía completa para preparar y aprobar los exámenes CCSE y DELE A2 necesarios para la nacionalidad española. Consejos, temario, recursos y fechas 2026.',
  keywords: [
    'examen CCSE',
    'examen DELE',
    'DELE A2',
    'preparar CCSE',
    'nacionalidad española exámenes',
    'aprobar CCSE',
    'aprobar DELE',
    'CCSE 2026',
  ],
  openGraph: {
    title: 'Examen CCSE y DELE: Guía de Preparación 2026',
    description:
      'Todo para preparar el CCSE y DELE: temario, consejos, recursos. Guía completa 2026.',
    url: 'https://citaex.com/blog/examen-ccse-dele-preparacion',
    siteName: 'CitaEx',
    locale: 'es_ES',
    type: 'article',
  },
  alternates: {
    canonical: 'https://citaex.com/blog/examen-ccse-dele-preparacion',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const WHATSAPP_NUMBER = '923221430630';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito ayuda con los exámenes CCSE y DELE.')}`;

export default function ExamenesCCSEDELEPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white" aria-label="Breadcrumb">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-green-600">Inicio</Link></li>
            <li><span className="mx-2">→</span></li>
            <li><Link href="/blog" className="hover:text-green-600">Blog</Link></li>
            <li><span className="mx-2">→</span></li>
            <li className="text-gray-900 font-medium">Examen CCSE y DELE</li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-8">
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">Exámenes</span>
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">Preparación</span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Examen CCSE y DELE: Guía de Preparación 2026
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            Guía completa para preparar y aprobar los exámenes CCSE y DELE A2 necesarios para obtener la nacionalidad española: temario, consejos, recursos y todo lo que necesitas saber.
          </p>
        </header>

        <div className="mb-8 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white shadow-lg">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-lg font-bold">¿Necesitas ayuda para preparar tus exámenes?</p>
              <p className="text-green-100">Te orientamos en la preparación. Contáctanos.</p>
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
              <li><a href="#que-son" className="text-green-600 hover:underline">1. ¿Qué son estos exámenes?</a></li>
              <li><a href="#ccse-detalle" className="text-green-600 hover:underline">2. Examen CCSE en detalle</a></li>
              <li><a href="#dele-detalle" className="text-green-600 hover:underline">3. Examen DELE en detalle</a></li>
              <li><a href="#preparacion-ccse" className="text-green-600 hover:underline">4. Cómo preparar el CCSE</a></li>
              <li><a href="#preparacion-dele" className="text-green-600 hover:underline">5. Cómo preparar el DELE</a></li>
              <li><a href="#inscripcion" className="text-green-600 hover:underline">6. Inscripción y fechas</a></li>
              <li><a href="#consejos" className="text-green-600 hover:underline">7. Consejos para aprobar</a></li>
              <li><a href="#faq" className="text-green-600 hover:underline">8. Preguntas frecuentes</a></li>
            </ul>
          </nav>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            Para obtener la <strong>nacionalidad española por residencia</strong>, debes aprobar dos exámenes oficiales: el <strong>CCSE</strong> (Conocimientos Constitucionales y Socioculturales de España) y el <strong>DELE A2</strong> (Diploma de Español como Lengua Extranjera). Esta guía te ayudará a prepararlos.
          </p>

          <h2 id="que-son" className="scroll-mt-20">1. ¿Qué son estos exámenes?</h2>

          <p>
            Desde 2015, estos dos exámenes son <strong>obligatorios</strong> para solicitar la nacionalidad española por residencia. Demuestran que:
          </p>

          <ul>
            <li><strong>CCSE:</strong> Conoces la sociedad, cultura, historia y sistema político español</li>
            <li><strong>DELE A2:</strong> Tienes un nivel básico de español (comprensión y expresión)</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4">
            <p className="mb-0 font-bold text-blue-800">ℹ️ Importante:</p>
            <p className="mb-0 text-blue-700">
              Los certificados de aprobación <strong>no caducan</strong>. Puedes hacer los exámenes con años de antelación y presentarlos cuando solicites la nacionalidad. Esto te permite planificar con tiempo.
            </p>
          </div>

          <h2 id="ccse-detalle" className="scroll-mt-20">2. Examen CCSE en detalle</h2>

          <p>
            El <strong>CCSE</strong> (Conocimientos Constitucionales y Socioculturales de España) es un examen tipo test sobre España.
          </p>

          <h3>Estructura del examen</h3>

          <div className="my-6 rounded-lg bg-orange-50 p-6">
            <h4 className="mb-3 font-bold text-orange-800">Formato CCSE</h4>
            <ul className="space-y-2 text-orange-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Total:</strong> 25 preguntas tipo test (4 opciones cada una)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Duración:</strong> 45 minutos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Puntuación:</strong> Debes aprobar cada tarea por separado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Formato:</strong> Ordenador (en centro autorizado)</span>
              </li>
            </ul>
          </div>

          <h3>Tareas del examen</h3>

          <p><strong>TAREA 1:</strong> Gobierno, legislación y participación ciudadana (10 preguntas)</p>
          <ul>
            <li>Necesitas <strong>60% de aciertos</strong> (6 de 10 correctas)</li>
            <li>Temas: Constitución, poderes del Estado, derechos y deberes, sistema electoral, estructura territorial</li>
          </ul>

          <p><strong>TAREA 2:</strong> Cultura, historia y sociedad española (10 preguntas)</p>
          <ul>
            <li>Necesitas <strong>60% de aciertos</strong> (6 de 10 correctas)</li>
            <li>Temas: Historia de España, geografía, arte y cultura, tradiciones, deportes, gastronomía</li>
          </ul>

          <p><strong>TAREA 3:</strong> Comprensión audiovisual (5 preguntas)</p>
          <ul>
            <li>Necesitas <strong>30% de aciertos</strong> (2 de 5 correctas, aunque se recomienda 3 para mayor seguridad)</li>
            <li>Verás un vídeo corto sobre situaciones cotidianas en España</li>
          </ul>

          <h3>Temario CCSE</h3>

          <p>El Instituto Cervantes publica un <strong>manual oficial</strong> con todo el temario. Los temas principales son:</p>

          <div className="my-6 rounded-lg bg-blue-50 p-6">
            <h4 className="mb-3 font-bold text-blue-800">Contenidos del CCSE</h4>

            <p className="font-semibold text-blue-800 mb-2">Gobierno y legislación:</p>
            <ul className="space-y-1 text-blue-700 mb-4">
              <li>• La Constitución Española de 1978</li>
              <li>• Monarquía parlamentaria</li>
              <li>• Poderes del Estado (legislativo, ejecutivo, judicial)</li>
              <li>• Congreso, Senado, Gobierno</li>
              <li>• Comunidades Autónomas y estructura territorial</li>
              <li>• Derechos fundamentales y libertades</li>
              <li>• Sistema electoral</li>
            </ul>

            <p className="font-semibold text-blue-800 mb-2">Historia:</p>
            <ul className="space-y-1 text-blue-700 mb-4">
              <li>• Prehistoria y Roma (breve)</li>
              <li>• Época musulmana (Al-Andalus)</li>
              <li>• Reyes Católicos y descubrimiento de América</li>
              <li>• Imperio español (Carlos I, Felipe II)</li>
              <li>• Guerra de Independencia y constituciones</li>
              <li>• Guerra Civil (1936-1939)</li>
              <li>• Transición democrática</li>
            </ul>

            <p className="font-semibold text-blue-800 mb-2">Geografía:</p>
            <ul className="space-y-1 text-blue-700 mb-4">
              <li>• 17 Comunidades Autónomas y sus capitales</li>
              <li>• Principales ciudades y ríos</li>
              <li>• Islas Baleares y Canarias</li>
              <li>• Ceuta y Melilla</li>
            </ul>

            <p className="font-semibold text-blue-800 mb-2">Cultura y sociedad:</p>
            <ul className="space-y-1 text-blue-700">
              <li>• Fiestas nacionales y regionales</li>
              <li>• Patrimonio de la Humanidad (Alhambra, Sagrada Familia, etc.)</li>
              <li>• Personajes históricos y culturales (Cervantes, Gaudí, Picasso, Dalí, etc.)</li>
              <li>• Gastronomía típica</li>
              <li>• Deportes (fútbol, tenis, etc.)</li>
            </ul>
          </div>

          <h2 id="dele-detalle" className="scroll-mt-20">3. Examen DELE en detalle</h2>

          <p>
            El <strong>DELE A2</strong> (Diploma de Español como Lengua Extranjera nivel A2) certifica que tienes un <strong>nivel básico de español</strong>.
          </p>

          <h3>Estructura del DELE A2</h3>

          <div className="my-6 rounded-lg bg-purple-50 p-6">
            <h4 className="mb-3 font-bold text-purple-800">Formato DELE A2</h4>
            <ul className="space-y-2 text-purple-700">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Duración total:</strong> Aproximadamente 2 horas y media</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Aprobado:</strong> Necesitas 30 puntos sobre 50 en cada grupo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span><strong>Validez:</strong> Indefinida (no caduca)</span>
              </li>
            </ul>
          </div>

          <h3>Pruebas del DELE A2</h3>

          <p><strong>GRUPO 1: Comprensión de lectura y expresión e interacción escritas</strong></p>

          <p className="ml-4"><strong>Prueba 1:</strong> Comprensión de lectura (60 minutos)</p>
          <ul className="ml-4">
            <li>Tarea 1: Leer textos breves y relacionar con imágenes o situaciones</li>
            <li>Tarea 2: Leer anuncios, mensajes, emails cortos</li>
            <li>Tarea 3: Comprender textos informativos sencillos</li>
            <li>Tarea 4: Leer instrucciones o normas</li>
          </ul>

          <p className="ml-4"><strong>Prueba 2:</strong> Expresión e interacción escritas (50 minutos)</p>
          <ul className="ml-4">
            <li>Tarea 1: Completar un formulario con datos personales</li>
            <li>Tarea 2: Escribir un texto breve (email, carta, nota) de 60-70 palabras</li>
          </ul>

          <p><strong>GRUPO 2: Comprensión auditiva y expresión e interacción orales</strong></p>

          <p className="ml-4"><strong>Prueba 3:</strong> Comprensión auditiva (35 minutos)</p>
          <ul className="ml-4">
            <li>Escuchar conversaciones, anuncios, instrucciones</li>
            <li>Responder preguntas sobre lo escuchado</li>
            <li>4 tareas de comprensión</li>
          </ul>

          <p className="ml-4"><strong>Prueba 4:</strong> Expresión e interacción orales (12 minutos + 12 de preparación)</p>
          <ul className="ml-4">
            <li>Tarea 1: Presentarte y hablar de ti</li>
            <li>Tarea 2: Describir una fotografía</li>
            <li>Tarea 3: Conversación con el examinador sobre un tema cotidiano</li>
          </ul>

          <h2 id="preparacion-ccse" className="scroll-mt-20">4. Cómo preparar el CCSE</h2>

          <h3>Recursos oficiales</h3>

          <ul>
            <li><strong>Manual oficial del Instituto Cervantes</strong> - Descargable gratis en PDF</li>
            <li><strong>Simuladores en línea</strong> - En la web del Instituto Cervantes</li>
            <li><strong>Aplicaciones móviles</strong> - "CCSE Nacionalidad Española" y similares</li>
          </ul>

          <h3>Plan de estudio recomendado</h3>

          <div className="my-6 rounded-lg bg-green-50 p-6">
            <h4 className="mb-3 font-bold text-green-800">Cronograma de preparación CCSE</h4>

            <p className="font-semibold text-green-800 mb-2">Semana 1-2: Gobierno y Constitución</p>
            <ul className="space-y-1 text-green-700 mb-3">
              <li>• Lee el manual oficial sobre estos temas</li>
              <li>• Memoriza: Rey, Presidente, poderes del Estado</li>
              <li>• Practica con tests online</li>
            </ul>

            <p className="font-semibold text-green-800 mb-2">Semana 3-4: Historia de España</p>
            <ul className="space-y-1 text-green-700 mb-3">
              <li>• Cronología básica de eventos importantes</li>
              <li>• Personajes clave de cada época</li>
              <li>• Practica fechas y nombres</li>
            </ul>

            <p className="font-semibold text-green-800 mb-2">Semana 5-6: Geografía y Cultura</p>
            <ul className="space-y-1 text-green-700 mb-3">
              <li>• Memoriza las 17 comunidades y capitales</li>
              <li>• Aprende fiestas principales</li>
              <li>• Estudia patrimonio y personajes culturales</li>
            </ul>

            <p className="font-semibold text-green-800 mb-2">Semana 7-8: Repaso y simulacros</p>
            <ul className="space-y-1 text-green-700">
              <li>• Haz simulacros completos cronometrados</li>
              <li>• Refuerza temas débiles</li>
              <li>• Practica la parte audiovisual</li>
            </ul>
          </div>

          <h3>Consejos clave para el CCSE</h3>

          <ul>
            <li><strong>Memoriza las 17 comunidades autónomas</strong> - Casi siempre preguntan</li>
            <li><strong>Aprende bien la Constitución</strong> - Artículos clave, derechos fundamentales</li>
            <li><strong>Usa técnicas mnemotécnicas</strong> - Para recordar fechas y nombres</li>
            <li><strong>Practica en ordenador</strong> - El examen es digital</li>
            <li><strong>Haz muchos simulacros</strong> - Las preguntas se repiten con variaciones</li>
          </ul>

          <h2 id="preparacion-dele" className="scroll-mt-20">5. Cómo preparar el DELE</h2>

          <h3>Recursos de preparación</h3>

          <ul>
            <li><strong>Libros oficiales DELE A2</strong> - Editorial Edelsa, SGEL, Difusión</li>
            <li><strong>Cursos de español</strong> - Presenciales u online (EOI, academias)</li>
            <li><strong>Aplicaciones</strong> - Duolingo, Babbel (para vocabulario básico)</li>
            <li><strong>Exámenes modelo</strong> - Instituto Cervantes publica modelos gratuitos</li>
            <li><strong>Intercambio de idiomas</strong> - Para practicar conversación</li>
          </ul>

          <h3>Estrategia de preparación</h3>

          <div className="my-6 rounded-lg bg-blue-50 p-6">
            <h4 className="mb-3 font-bold text-blue-800">Plan de estudio DELE A2</h4>

            <p className="font-semibold text-blue-800 mb-2">Comprensión lectora:</p>
            <ul className="space-y-1 text-blue-700 mb-3">
              <li>• Lee textos sencillos diariamente (noticias, blogs, emails)</li>
              <li>• Practica con ejercicios de comprensión</li>
              <li>• Amplía vocabulario básico (familia, trabajo, ocio, salud)</li>
            </ul>

            <p className="font-semibold text-blue-800 mb-2">Expresión escrita:</p>
            <ul className="space-y-1 text-blue-700 mb-3">
              <li>• Practica escribir emails formales e informales</li>
              <li>• Aprende frases típicas (saludos, despedidas, conectores)</li>
              <li>• Escribe textos de 60-70 palabras sobre temas cotidianos</li>
            </ul>

            <p className="font-semibold text-blue-800 mb-2">Comprensión auditiva:</p>
            <ul className="space-y-1 text-blue-700 mb-3">
              <li>• Escucha podcasts en español lento</li>
              <li>• Ve series con subtítulos en español</li>
              <li>• Practica con audios del DELE</li>
            </ul>

            <p className="font-semibold text-blue-800 mb-2">Expresión oral:</p>
            <ul className="space-y-1 text-blue-700">
              <li>• Practica presentarte y hablar de ti</li>
              <li>• Describe fotografías en voz alta</li>
              <li>• Busca un compañero de conversación</li>
              <li>• Grábate y escúchate</li>
            </ul>
          </div>

          <h3>Consejos para aprobar el DELE</h3>

          <ul>
            <li><strong>No necesitas nivel alto</strong> - A2 es básico, no te exijas perfección</li>
            <li><strong>Vocabulario clave</strong> - Familia, rutina diaria, compras, salud, ocio</li>
            <li><strong>Gramática esencial</strong> - Presente, pretérito perfecto, futuro simple, comparativos</li>
            <li><strong>Practica la expresión oral</strong> - Es la parte que más cuesta si no hablas español a diario</li>
            <li><strong>Gestiona el tiempo</strong> - No te quedes atascado en una pregunta</li>
          </ul>

          <h2 id="inscripcion" className="scroll-mt-20">6. Inscripción y fechas</h2>

          <h3>Examen CCSE</h3>

          <ul>
            <li><strong>Inscripción:</strong> Web del Instituto Cervantes (ccse.cervantes.es)</li>
            <li><strong>Convocatorias:</strong> Todos los meses (flexibilidad alta)</li>
            <li><strong>Coste:</strong> Aproximadamente 85€</li>
            <li><strong>Centros:</strong> Institutos Cervantes y centros autorizados en toda España</li>
            <li><strong>Resultados:</strong> En 3 semanas aproximadamente</li>
            <li><strong>Validez:</strong> El certificado no caduca</li>
          </ul>

          <h3>Examen DELE A2</h3>

          <ul>
            <li><strong>Inscripción:</strong> Web del Instituto Cervantes (diplomas.cervantes.es)</li>
            <li><strong>Convocatorias 2026:</strong> Normalmente en febrero, abril, mayo, julio, septiembre, octubre, noviembre</li>
            <li><strong>Coste:</strong> Aproximadamente 150€</li>
            <li><strong>Centros:</strong> Institutos Cervantes y centros examinadores en todo el mundo</li>
            <li><strong>Resultados:</strong> Aproximadamente 3 meses después del examen</li>
            <li><strong>Validez:</strong> Indefinida</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
            <p className="mb-0 font-bold text-yellow-800">⚠️ Importante:</p>
            <p className="mb-0 text-yellow-700">
              Inscríbete con <strong>tiempo</strong>. Las plazas del DELE se agotan, especialmente en las convocatorias más demandadas (abril-mayo). La inscripción suele cerrar 6-8 semanas antes de la fecha del examen.
            </p>
          </div>

          <h2 id="consejos" className="scroll-mt-20">7. Consejos para aprobar</h2>

          <h3>Estrategia general</h3>

          <ul>
            <li><strong>Empieza con tiempo</strong> - Mínimo 2-3 meses de preparación seria</li>
            <li><strong>Haz el CCSE primero</strong> - Es más rápido de preparar (1-2 meses)</li>
            <li><strong>Prepara el DELE después</strong> - Requiere más tiempo (3-6 meses si partes de nivel muy básico)</li>
            <li><strong>Usa materiales oficiales</strong> - Aseguran que estudias lo correcto</li>
            <li><strong>Practica con exámenes reales</strong> - Te familiarizas con el formato</li>
          </ul>

          <h3>El día del examen</h3>

          <div className="my-6 rounded-lg bg-green-50 p-6">
            <h4 className="mb-3 font-bold text-green-800">Checklist del día del examen</h4>
            <ul className="space-y-2 text-green-700">
              <li>☑ Llega <strong>30 minutos antes</strong></li>
              <li>☑ Lleva <strong>DNI/NIE/pasaporte original</strong></li>
              <li>☑ Lleva el <strong>comprobante de inscripción</strong></li>
              <li>☑ Descansa bien la noche anterior</li>
              <li>☑ Lee bien las instrucciones antes de empezar</li>
              <li>☑ Gestiona tu tiempo (no te atasques en una pregunta)</li>
              <li>☑ En el DELE oral, respira y habla con confianza</li>
            </ul>
          </div>

          <h2 id="faq" className="scroll-mt-20">8. Preguntas frecuentes</h2>
        </div>

        <section className="mt-8">
          <div className="space-y-4">
            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Cuál debo hacer primero, CCSE o DELE?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Se recomienda hacer primero el <strong>CCSE</strong> porque es más fácil y rápido de preparar (1-2 meses). Además, tiene convocatorias todos los meses. El DELE requiere más preparación (3-6 meses) y solo tiene 7 convocatorias al año. Pero puedes hacerlos en el orden que prefieras, o incluso simultáneamente si te sientes capaz.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo presentarme varias veces si suspendo?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  <strong>Sí, sin límite</strong>. Puedes presentarte tantas veces como necesites hasta aprobar. Cada vez deberás pagar la tasa correspondiente. No hay penalización por suspender. En el CCSE, al haber convocatorias mensuales, puedes repetir rápidamente. En el DELE, deberás esperar a la siguiente convocatoria.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Qué nivel de español necesito para el DELE A2?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  El <strong>nivel A2 es básico</strong>. Debes poder: presentarte, hablar de tu familia y rutina, describir lugares simples, escribir emails cortos, entender conversaciones cotidianas lentas. Si llevas años en España hablando español en tu vida diaria, probablemente ya tengas este nivel. Si acabas de llegar, necesitarás 6-12 meses de estudio.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Hay exenciones para estos exámenes?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Sí. Están <strong>exentos de ambos exámenes</strong>: menores de edad y personas con discapacidad certificada. Están <strong>exentos del DELE</strong> (pero deben hacer CCSE): ciudadanos de países hispanohablantes y quienes tengan título universitario español. Quienes cursaron enseñanza obligatoria en España están exentos de ambos.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Cuánto tiempo se tarda en preparar el CCSE?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  Con <strong>estudio dedicado</strong>, la mayoría de personas aprueba estudiando <strong>1-2 meses</strong> (1-2 horas diarias). Si ya conoces bien España por vivir aquí, podrías prepararlo en 2-3 semanas intensivas. Lo importante es hacer muchos simulacros y memorizar bien las 17 comunidades autónomas, la estructura del Estado y los personajes históricos clave.
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-gray-200 bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900">
                ¿Puedo hacer un nivel superior de DELE en lugar de A2?
                <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-100 px-5 py-4 text-gray-600">
                <p>
                  <strong>Sí, perfectamente</strong>. Si apruebas el DELE B1, B2, C1 o C2, sirve igual que el A2 para la nacionalidad. De hecho, si ya hablas bien español, puede ser más fácil aprobar un B1 que un A2 (porque el B1 permite más flexibilidad en expresión). Pero el A2 es el más económico y el mínimo exigido.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 p-8 text-center text-white shadow-xl">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">¿Necesitas orientación para preparar tus exámenes?</h2>
            <p className="mb-6 text-lg text-green-100">
              Te ayudamos con recursos y consejos personalizados. Contacta con nosotros.
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
