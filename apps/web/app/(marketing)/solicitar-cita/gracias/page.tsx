import { Button } from "@repo/ui/components";

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            ¡Solicitud Enviada!
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Gracias por confiar en nosotros. Hemos recibido tu solicitud de cita.
          </p>

          {/* What's Next */}
          <div className="mb-8 rounded-lg bg-blue-50 p-6 text-left">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              ¿Qué sigue ahora?
            </h2>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  1
                </span>
                <span className="text-gray-700">
                  Revisa tu WhatsApp: Nuestro equipo te contactará en breve para
                  confirmar los detalles de tu solicitud.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  2
                </span>
                <span className="text-gray-700">
                  Monitoreamos disponibilidad: Buscaremos citas disponibles que
                  coincidan con tus preferencias.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  3
                </span>
                <span className="text-gray-700">
                  Te avisamos inmediatamente: Cuando encontremos una cita
                  disponible, te notificaremos por WhatsApp.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  4
                </span>
                <span className="text-gray-700">
                  Te ayudamos a reservarla: Gestionamos el proceso de reserva por
                  ti para que no pierdas la oportunidad.
                </span>
              </li>
            </ol>
          </div>

          {/* WhatsApp Contact */}
          <div className="mb-8 rounded-lg border-2 border-green-200 bg-green-50 p-6">
            <h3 className="mb-3 text-lg font-semibold text-green-900">
              Contacto Directo por WhatsApp
            </h3>
            <p className="mb-4 text-sm text-green-700">
              Si tienes alguna pregunta o quieres actualizar tu solicitud,
              contáctanos directamente:
            </p>
            <a
              href="https://wa.me/923221430630"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Abrir WhatsApp
            </a>
            <p className="mt-3 text-sm text-green-700">
              <strong>+92 322 1430630</strong> (WhatsApp Business Verificado)
            </p>
            <p className="mt-1 text-sm text-green-700">
              <strong>+34 663 93 90 48</strong> (España)
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href="/">
              <Button variant="primary" size="lg">
                Volver al Inicio
              </Button>
            </a>
            <a href="/solicitar-cita">
              <Button variant="outline" size="lg">
                Crear Otra Solicitud
              </Button>
            </a>
          </div>

          {/* Trust Message */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500">
              Tiempo de respuesta promedio: <strong>menos de 1 hora</strong>
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Atención disponible de lunes a viernes, 9:00 - 20:00 (CET)
            </p>
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            ¿Prefieres llamar por teléfono?{" "}
            <a
              href="tel:+34663939048"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              +34 663 93 90 48
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
