import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-bold">Bienvenido de vuelta</h2>
        <p className="text-gray-600">
          Aquí está el resumen de tus búsquedas activas
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-6 md:grid-cols-4">
        <div className="rounded-lg border bg-white p-6">
          <div className="mb-2 text-sm text-gray-600">Búsquedas Activas</div>
          <div className="text-3xl font-bold">3</div>
        </div>
        <div className="rounded-lg border bg-white p-6">
          <div className="mb-2 text-sm text-gray-600">Alertas Recibidas</div>
          <div className="text-3xl font-bold">12</div>
        </div>
        <div className="rounded-lg border bg-white p-6">
          <div className="mb-2 text-sm text-gray-600">Última Verificación</div>
          <div className="text-3xl font-bold">2m</div>
        </div>
        <div className="rounded-lg border bg-white p-6">
          <div className="mb-2 text-sm text-gray-600">Estado</div>
          <div className="text-3xl font-bold text-green-600">Activo</div>
        </div>
      </div>

      {/* Active searches */}
      <div className="mb-8">
        <h3 className="mb-4 text-xl font-bold">Búsquedas Activas</h3>
        <div className="space-y-4">
          <div className="rounded-lg border bg-white p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h4 className="mb-1 font-semibold">TIE - Renovación</h4>
                <p className="text-sm text-gray-600">Madrid - Aluche</p>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                Activo
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Última verificación: Hace 2 minutos</span>
              <button className="text-black hover:underline">Ver detalles →</button>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h4 className="mb-1 font-semibold">NIE - Asignación</h4>
                <p className="text-sm text-gray-600">Barcelona - Ciutat Vella</p>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                Activo
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Última verificación: Hace 3 minutos</span>
              <button className="text-black hover:underline">Ver detalles →</button>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h4 className="mb-1 font-semibold">Autorización de Regreso</h4>
                <p className="text-sm text-gray-600">Valencia - Centro</p>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                Activo
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Última verificación: Hace 1 minuto</span>
              <button className="text-black hover:underline">Ver detalles →</button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent alerts */}
      <div>
        <h3 className="mb-4 text-xl font-bold">Alertas Recientes</h3>
        <div className="space-y-3">
          <div className="rounded-lg border bg-blue-50 p-4">
            <div className="mb-1 flex items-center justify-between">
              <span className="font-semibold">Citas disponibles detectadas</span>
              <span className="text-sm text-gray-600">Hace 2 horas</span>
            </div>
            <p className="text-sm text-gray-600">
              TIE - Renovación en Madrid - Aluche
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <div className="mb-1 flex items-center justify-between">
              <span className="font-semibold">Verificación completada</span>
              <span className="text-sm text-gray-600">Hace 3 horas</span>
            </div>
            <p className="text-sm text-gray-600">
              NIE - Asignación en Barcelona - Sin citas disponibles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
