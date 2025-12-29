import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mis Búsquedas",
};

export default function CitasPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="mb-2 text-3xl font-bold">Mis Búsquedas</h2>
          <p className="text-gray-600">
            Gestiona todas tus búsquedas de citas
          </p>
        </div>
        <button className="rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800">
          Nueva Búsqueda
        </button>
      </div>

      {/* Search list */}
      <div className="space-y-4">
        <div className="rounded-lg border bg-white p-6">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="mb-1 text-xl font-semibold">TIE - Renovación</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Provincia: Madrid</p>
                    <p>Oficina: Aluche</p>
                    <p>Creada: 15 Dic 2024</p>
                  </div>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  Activo
                </span>
              </div>

              <div className="mb-4 rounded-lg bg-gray-50 p-4">
                <h4 className="mb-2 text-sm font-semibold">Estadísticas</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Verificaciones</div>
                    <div className="text-lg font-semibold">1,234</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Alertas enviadas</div>
                    <div className="text-lg font-semibold">5</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Última verificación</div>
                    <div className="text-lg font-semibold">2m</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
                  Editar
                </button>
                <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
                  Pausar
                </button>
                <button className="rounded-lg border border-red-300 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="mb-1 text-xl font-semibold">NIE - Asignación</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Provincia: Barcelona</p>
                    <p>Oficina: Ciutat Vella</p>
                    <p>Creada: 10 Dic 2024</p>
                  </div>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  Activo
                </span>
              </div>

              <div className="mb-4 rounded-lg bg-gray-50 p-4">
                <h4 className="mb-2 text-sm font-semibold">Estadísticas</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Verificaciones</div>
                    <div className="text-lg font-semibold">2,891</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Alertas enviadas</div>
                    <div className="text-lg font-semibold">7</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Última verificación</div>
                    <div className="text-lg font-semibold">3m</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
                  Editar
                </button>
                <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
                  Pausar
                </button>
                <button className="rounded-lg border border-red-300 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
