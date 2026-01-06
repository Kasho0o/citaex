import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Cookies | CitaEx',
  description:
    'Información sobre las cookies que utiliza CitaEx y cómo gestionarlas.',
  alternates: {
    canonical: 'https://citaex.com/politica-cookies',
  },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">
            Inicio
          </Link>
          <span className="mx-2">→</span>
          <span className="text-gray-600">Política de Cookies</span>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>
        <p className="text-gray-500 mb-8">
          Última actualización: Enero 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en el
            dispositivo del usuario cuando visita un sitio web. Sirven para
            garantizar el correcto funcionamiento del sitio, mejorar la
            experiencia de navegación y recopilar información estadística.
          </p>

          <h2>2. Tipos de cookies que utilizamos</h2>

          <h3>Cookies técnicas o necesarias</h3>
          <p>
            Son esenciales para el funcionamiento básico del sitio web y no
            requieren el consentimiento del usuario. Permiten, por ejemplo, la
            navegación segura y el acceso a áreas protegidas.
          </p>

          <h3>Cookies de análisis</h3>
          <p>
            Utilizamos cookies de análisis, como Google Analytics, para recopilar
            información anónima sobre el uso del sitio web (páginas visitadas,
            tiempo de navegación, etc.) con el fin de mejorar nuestros servicios.
          </p>

          <h3>Cookies de preferencias</h3>
          <p>
            Estas cookies permiten recordar información que cambia el
            comportamiento o el aspecto del sitio web, como el idioma o la
            región desde la que accede el usuario.
          </p>

          <h2>3. Cookies de terceros</h2>
          <p>
            Este sitio web puede utilizar servicios de terceros que, por cuenta
            de CitaEx, recopilan información con fines estadísticos y de uso del
            sitio. En particular:
          </p>
          <ul>
            <li>Google Analytics (Google LLC)</li>
          </ul>
          <p>
            El uso de cookies de terceros está sujeto a las políticas de
            privacidad de dichos proveedores.
          </p>

          <h2>4. Tabla de cookies utilizadas</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Nombre</th>
                  <th className="border px-4 py-2 text-left">Proveedor</th>
                  <th className="border px-4 py-2 text-left">Finalidad</th>
                  <th className="border px-4 py-2 text-left">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">_ga</td>
                  <td className="border px-4 py-2">Google Analytics</td>
                  <td className="border px-4 py-2">
                    Distinguir usuarios y generar estadísticas de uso
                  </td>
                  <td className="border px-4 py-2">2 años</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">_ga_*</td>
                  <td className="border px-4 py-2">Google Analytics</td>
                  <td className="border px-4 py-2">
                    Mantener el estado de la sesión
                  </td>
                  <td className="border px-4 py-2">2 años</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">cookie_consent</td>
                  <td className="border px-4 py-2">CitaEx</td>
                  <td className="border px-4 py-2">
                    Guardar las preferencias de cookies del usuario
                  </td>
                  <td className="border px-4 py-2">1 año</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>5. Cómo gestionar las cookies</h2>
          <p>
            El usuario puede aceptar, rechazar o configurar el uso de cookies en
            cualquier momento a través del banner de cookies o modificando la
            configuración de su navegador.
          </p>

          <h2>6. Cómo desactivar las cookies en cada navegador</h2>
          <ul>
            <li>
              <strong>Google Chrome:</strong> Configuración → Privacidad y
              seguridad → Cookies
            </li>
            <li>
              <strong>Mozilla Firefox:</strong> Opciones → Privacidad y seguridad
            </li>
            <li>
              <strong>Safari:</strong> Preferencias → Privacidad
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Configuración → Cookies y permisos
            </li>
          </ul>

          <h2>7. Actualización de la política de cookies</h2>
          <p>
            CitaEx puede modificar la presente Política de Cookies en función de
            cambios legislativos o técnicos. Cualquier modificación será
            publicada en esta página.
          </p>

          <h2>8. Más información</h2>
          <p>
            Para más información sobre el tratamiento de datos personales, puede
            consultar nuestra{' '}
            <Link
              href="/politica-privacidad"
              className="text-blue-600 hover:underline"
            >
              Política de Privacidad
            </Link>
            .
          </p>
        </div>

        {/* Contact Section */}
        <section className="mt-12 bg-gray-100 rounded-lg p-6">
          <h2 className="font-bold text-lg mb-4">📧 Contacto</h2>
          <p>Para cualquier consulta sobre esta política:</p>
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
