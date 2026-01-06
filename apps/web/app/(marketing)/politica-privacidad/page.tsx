import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidad | CitaEx',
  description:
    'Política de privacidad de CitaEx. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
  alternates: {
    canonical: 'https://citaex.com/politica-privacidad',
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">
            Inicio
          </Link>
          <span className="mx-2">→</span>
          <span className="text-gray-600">Política de Privacidad</span>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
        <p className="text-gray-500 mb-8">
          Última actualización: Enero 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <h2>1. Responsable del tratamiento</h2>
          <p>
            De conformidad con el Reglamento (UE) 2016/679 (Reglamento General de
            Protección de Datos – RGPD) y la Ley Orgánica 3/2018 (LOPDGDD),
            informamos que el responsable del tratamiento de los datos personales
            es:
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

          <h2>2. Datos personales que recopilamos</h2>
          <p>
            CitaEx recopila únicamente los datos personales necesarios para la
            correcta prestación del servicio de gestión y búsqueda de citas de
            extranjería en España. Los datos pueden incluir:
          </p>
          <ul>
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Datos relacionados con el trámite de extranjería solicitado</li>
            <li>Dirección IP y datos de navegación</li>
          </ul>

          <h2>3. Finalidad del tratamiento</h2>
          <p>
            Los datos personales se tratan con las siguientes finalidades:
          </p>
          <ul>
            <li>Gestionar solicitudes de citas de extranjería</li>
            <li>Contactar con el usuario para confirmar o informar sobre el servicio</li>
            <li>Responder consultas o solicitudes de información</li>
            <li>Cumplir obligaciones legales aplicables</li>
            <li>Mejorar la experiencia de usuario en el sitio web</li>
          </ul>

          <h2>4. Base legal del tratamiento</h2>
          <p>
            El tratamiento de los datos personales se basa en:
          </p>
          <ul>
            <li>El consentimiento expreso del usuario</li>
            <li>La ejecución de un contrato o precontrato</li>
            <li>El cumplimiento de obligaciones legales</li>
            <li>El interés legítimo de CitaEx para mejorar el servicio</li>
          </ul>

          <h2>5. Plazo de conservación de los datos</h2>
          <p>
            Los datos personales se conservarán únicamente durante el tiempo
            necesario para cumplir con la finalidad para la que fueron
            recopilados y, posteriormente, durante los plazos legalmente
            exigidos.
          </p>

          <h2>6. Destinatarios de los datos</h2>
          <p>
            Los datos no se cederán a terceros salvo obligación legal o cuando sea
            estrictamente necesario para la prestación del servicio. En algunos
            casos, pueden utilizarse proveedores tecnológicos que actúan como
            encargados del tratamiento, siempre bajo contratos conformes al RGPD.
          </p>

          <h2>7. Derechos del usuario</h2>
          <p>
            El usuario puede ejercer en cualquier momento los siguientes
            derechos:
          </p>
          <ul>
            <li>Derecho de acceso</li>
            <li>Derecho de rectificación</li>
            <li>Derecho de supresión (derecho al olvido)</li>
            <li>Derecho de limitación del tratamiento</li>
            <li>Derecho de oposición</li>
            <li>Derecho a la portabilidad de los datos</li>
          </ul>
          <p>
            Para ejercer estos derechos, el usuario puede enviar una solicitud al
            correo electrónico <strong>info@citaex.com</strong>, indicando el
            derecho que desea ejercer.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Este sitio web utiliza cookies propias y de terceros para mejorar la
            experiencia del usuario. Para más información, consulte nuestra{' '}
            <Link
              href="/politica-cookies"
              className="text-blue-600 hover:underline"
            >
              Política de Cookies
            </Link>
            .
          </p>

          <h2>9. Seguridad de los datos</h2>
          <p>
            CitaEx adopta las medidas técnicas y organizativas necesarias para
            garantizar la seguridad, integridad y confidencialidad de los datos
            personales, evitando su pérdida, alteración o acceso no autorizado.
          </p>

          <h2>10. Cambios en la política de privacidad</h2>
          <p>
            CitaEx se reserva el derecho a modificar la presente Política de
            Privacidad para adaptarla a novedades legislativas o cambios en el
            servicio. Las modificaciones serán publicadas en esta misma página.
          </p>

          <h2>11. Contacto</h2>
          <p>
            Si tienes dudas sobre esta Política de Privacidad o sobre el
            tratamiento de tus datos personales, puedes contactarnos a través de
            los siguientes medios:
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
