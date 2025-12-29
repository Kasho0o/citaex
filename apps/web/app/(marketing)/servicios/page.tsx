import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
};

export default function ServiciosPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Nuestros Servicios</h1>

        <div className="space-y-8">
          <div className="rounded-lg border p-8">
            <h2 className="mb-4 text-2xl font-semibold">Monitoreo Automático</h2>
            <p className="mb-4 text-gray-600">
              Nuestro sistema verifica automáticamente la disponibilidad de citas
              en las oficinas que selecciones, las 24 horas del día, los 7 días
              de la semana.
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>Verificaciones cada minuto</li>
              <li>Soporte para todas las provincias de España</li>
              <li>Múltiples tipos de trámites</li>
            </ul>
          </div>

          <div className="rounded-lg border p-8">
            <h2 className="mb-4 text-2xl font-semibold">Alertas Instantáneas</h2>
            <p className="mb-4 text-gray-600">
              Recibe notificaciones al instante cuando detectemos citas disponibles.
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>Notificaciones por Email</li>
              <li>Alertas por SMS (Premium)</li>
              <li>Telegram Bot integrado</li>
            </ul>
          </div>

          <div className="rounded-lg border p-8">
            <h2 className="mb-4 text-2xl font-semibold">Asistente con IA</h2>
            <p className="mb-4 text-gray-600">
              Nuestro asistente inteligente te ayuda con dudas sobre el proceso,
              documentación necesaria y más.
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>Respuestas instantáneas 24/7</li>
              <li>Guías personalizadas según tu trámite</li>
              <li>Soporte multiidioma</li>
            </ul>
          </div>

          <div className="rounded-lg border p-8">
            <h2 className="mb-4 text-2xl font-semibold">Panel de Control</h2>
            <p className="mb-4 text-gray-600">
              Gestiona todas tus búsquedas desde un panel intuitivo.
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>Seguimiento de múltiples búsquedas</li>
              <li>Historial de alertas</li>
              <li>Estadísticas en tiempo real</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
