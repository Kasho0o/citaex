import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alertas",
};

export default function AlertasPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-bold">Alertas</h2>
        <p className="text-gray-600">
          Historial de todas las alertas recibidas
        </p>
      </div>

      {/* Filter tabs */}
      <div className="mb-6 flex gap-4 border-b">
        <button className="border-b-2 border-black pb-2 font-semibold">
          Todas
        </button>
        <button className="pb-2 text-gray-600 hover:text-black">
          Citas Disponibles
        </button>
        <button className="pb-2 text-gray-600 hover:text-black">
          Verificaciones
        </button>
      </div>

      {/* Alerts list */}
      <div className="space-y-4">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <div className="mb-3 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                ✓
              </div>
              <div>
                <h3 className="font-semibold">Citas disponibles detectadas</h3>
                <p className="text-sm text-gray-600">Hace 2 horas</p>
              </div>
            </div>
          </div>
          <div className="ml-13 rounded-lg bg-white p-4">
            <p className="mb-2 text-sm font-medium">TIE - Renovación</p>
            <p className="mb-2 text-sm text-gray-600">
              Madrid - Aluche
            </p>
            <p className="text-sm text-gray-600">
              Se han detectado 3 citas disponibles. Accede al portal oficial
              para reservar tu cita.
            </p>
            <a
              href="#"
              className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:underline"
            >
              Ver detalles →
            </a>
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <div className="mb-3 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-700">
                ✓
              </div>
              <div>
                <h3 className="font-semibold">Verificación completada</h3>
                <p className="text-sm text-gray-600">Hace 3 horas</p>
              </div>
            </div>
          </div>
          <div className="ml-13 rounded-lg bg-gray-50 p-4">
            <p className="mb-2 text-sm font-medium">NIE - Asignación</p>
            <p className="mb-2 text-sm text-gray-600">
              Barcelona - Ciutat Vella
            </p>
            <p className="text-sm text-gray-600">
              No se han encontrado citas disponibles en esta verificación.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <div className="mb-3 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                ✓
              </div>
              <div>
                <h3 className="font-semibold">Citas disponibles detectadas</h3>
                <p className="text-sm text-gray-600">Hace 5 horas</p>
              </div>
            </div>
          </div>
          <div className="ml-13 rounded-lg bg-white p-4">
            <p className="mb-2 text-sm font-medium">Autorización de Regreso</p>
            <p className="mb-2 text-sm text-gray-600">
              Valencia - Centro
            </p>
            <p className="text-sm text-gray-600">
              Se han detectado 2 citas disponibles. Accede al portal oficial
              para reservar tu cita.
            </p>
            <a
              href="#"
              className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:underline"
            >
              Ver detalles →
            </a>
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <div className="mb-3 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-700">
                ✓
              </div>
              <div>
                <h3 className="font-semibold">Verificación completada</h3>
                <p className="text-sm text-gray-600">Hace 6 horas</p>
              </div>
            </div>
          </div>
          <div className="ml-13 rounded-lg bg-gray-50 p-4">
            <p className="mb-2 text-sm font-medium">TIE - Renovación</p>
            <p className="mb-2 text-sm text-gray-600">
              Madrid - Aluche
            </p>
            <p className="text-sm text-gray-600">
              No se han encontrado citas disponibles en esta verificación.
            </p>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
        <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
          Anterior
        </button>
        <button className="rounded-lg bg-black px-4 py-2 text-sm text-white">
          1
        </button>
        <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
          2
        </button>
        <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
          3
        </button>
        <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
          Siguiente
        </button>
      </div>
    </div>
  );
}
