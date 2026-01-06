import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Términos de Uso | CitaEx',
  description:
    'Términos y condiciones de uso del servicio CitaEx. Lee nuestras condiciones antes de utilizar el servicio.',
  alternates: {
    canonical: 'https://citaex.com/terminos-uso',
  },
};

export default function TerminosUsoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">
            Inicio
          </Link>
          <span className="mx-2">→</span>
          <span className="text-gray-600">Términos de Uso</span>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Términos de Uso</h1>
        <p className="text-gray-500 mb-8">
          Última actualización: Enero 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <h2>1. Identificación del prestador del servicio</h2>
          <p>
            En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico (LSSI-CE), se informa que el
            presente sitio web es operado por:
          </p>
          <ul>
            <li>
              <strong>Empresa:</strong> CitaEx
            </li>
            <li>
              <strong>Sitio web:</strong> https://citaex.com
            </li>
            <li>
              <strong>Email de contacto:</strong> info@citaex.com
            </li>
            <li>
              <strong>Teléfono España:</strong> +34 663 939 048
            </li>
          </ul>

          <h2>2. Objeto y ámbito de aplicación</h2>
          <p>
            Los presentes Términos de Uso regulan el acceso, navegación y
            utilización del sitio web <strong>citaex.com</strong>, así como la
            contratación de los servicios ofrecidos por CitaEx.
          </p>
          <p>
            El acceso y uso del sitio web implica la aceptación plena y sin
            reservas de estos términos.
          </p>

          <h2>3. Descripción del servicio</h2>
          <p>
            CitaEx ofrece un servicio de <strong>búsqueda y gestión de citas de
            extranjería en España</strong>, actuando como intermediario técnico
            para ayudar al usuario a localizar una cita disponible.
          </p>
          <p>
            CitaEx <strong>no es un organismo público</strong> ni está afiliado a
            ninguna administración gubernamental. La concesión final de la cita
            depende exclusivamente de los sistemas oficiales de la
            Administración Pública.
          </p>

          <h2>4. Condiciones de uso del servicio</h2>
          <p>
            El usuario se compromete a utilizar el sitio web y el servicio de
            forma lícita, correcta y conforme a la legislación vigente, la buena
            fe y el orden público.
          </p>
          <p>
            Queda prohibido el uso del servicio para fines fraudulentos,
            ilícitos o que puedan causar perjuicio a CitaEx o a terceros.
          </p>

          <h2>5. Política de pagos</h2>
          <p>
            El servicio de CitaEx se caracteriza por una política de{' '}
            <strong>no pago por adelantado</strong>.
          </p>
          <ul>
            <li>No se solicita ningún pago antes de encontrar una cita.</li>
            <li>
              El pago solo se solicita una vez que la cita ha sido localizada y
              verificada.
            </li>
            <li>
              El importe y el método de pago serán comunicados claramente al
              usuario antes de realizar cualquier cobro.
            </li>
          </ul>

          <h2>6. Obligaciones del usuario</h2>
          <p>
            El usuario se compromete a:
          </p>
          <ul>
            <li>Proporcionar información veraz y actualizada</li>
            <li>Utilizar el servicio únicamente para fines personales y legítimos</li>
            <li>No facilitar datos falsos o de terceros sin autorización</li>
            <li>Respetar los derechos de propiedad intelectual de CitaEx</li>
          </ul>

          <h2>7. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del sitio web (textos, diseños, logotipos,
            software, código fuente, etc.) son titularidad de CitaEx o de terceros
            licenciantes, y están protegidos por la normativa de propiedad
            intelectual e industrial.
          </p>
          <p>
            Queda prohibida la reproducción, distribución o modificación de
            dichos contenidos sin autorización expresa.
          </p>

          <h2>8. Limitación de responsabilidad</h2>
          <p>
            CitaEx no garantiza la disponibilidad continua del sitio web ni la
            obtención efectiva de una cita, ya que esta depende de la
            disponibilidad de los sistemas oficiales de extranjería.
          </p>
          <p>
            CitaEx no será responsable de daños derivados de:
          </p>
          <ul>
            <li>Fallos técnicos o interrupciones del servicio</li>
            <li>Errores en los sistemas de terceros</li>
            <li>Uso indebido del sitio web por parte del usuario</li>
          </ul>

          <h2>9. Modificaciones de los términos</h2>
          <p>
            CitaEx se reserva el derecho a modificar estos Términos de Uso en
            cualquier momento. Las modificaciones serán publicadas en esta
            página y entrarán en vigor desde su publicación.
          </p>

          <h2>10. Legislación aplicable</h2>
          <p>
            Los presentes términos se rigen por la legislación española. Para
            cualquier controversia, las partes se someterán a los juzgados y
            tribunales de España, salvo que la normativa aplicable disponga lo
            contrario.
          </p>

          <h2>11. Resolución de conflictos</h2>
          <p>
            El usuario puede acudir a mecanismos de resolución alternativa de
            conflictos, incluyendo la plataforma de resolución de litigios en
            línea de la Comisión Europea.
          </p>

          <h2>12. Contacto</h2>
          <p>
            Para cualquier duda relacionada con estos Términos de Uso, el usuario
            puede contactar con CitaEx a través de los medios indicados a
            continuación.
          </p>
        </div>

        {/* Contact Section */}
        <section className="mt-12 bg-gray-100 rounded-lg p-6">
          <h2 className="font-bold text-lg mb-4">📧 Contacto</h2>
          <p>Para cualquier consulta sobre estos términos:</p>
          <p>
            Email:{' '}
            <a
              href="mailto:info@citaex.com"
              className="text-blue-600 hover:underline"
            >
              info@citaex.com
            </a>
          </p>
          <p>WhatsApp: +92 322 143 0630</p>
        </section>
      </article>
    </div>
  );
}
