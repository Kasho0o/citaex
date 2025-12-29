import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil",
};

export default function PerfilPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-bold">Perfil</h2>
        <p className="text-gray-600">
          Gestiona tu información personal y preferencias
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Personal info */}
          <div className="mb-8 rounded-lg border bg-white p-6">
            <h3 className="mb-6 text-xl font-semibold">Información Personal</h3>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-4 py-2"
                    defaultValue="Juan"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-4 py-2"
                    defaultValue="García"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border px-4 py-2"
                  defaultValue="juan@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border px-4 py-2"
                  defaultValue="+34 600 000 000"
                />
              </div>
              <button className="rounded-lg bg-black px-6 py-2 font-semibold text-white hover:bg-gray-800">
                Guardar Cambios
              </button>
            </form>
          </div>

          {/* Notification preferences */}
          <div className="mb-8 rounded-lg border bg-white p-6">
            <h3 className="mb-6 text-xl font-semibold">Preferencias de Notificaciones</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-gray-600">
                    Recibir alertas por correo electrónico
                  </div>
                </div>
                <input type="checkbox" defaultChecked className="h-5 w-5" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">SMS</div>
                  <div className="text-sm text-gray-600">
                    Recibir alertas por mensaje de texto (Plan Pro)
                  </div>
                </div>
                <input type="checkbox" className="h-5 w-5" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Telegram</div>
                  <div className="text-sm text-gray-600">
                    Recibir alertas por Telegram
                  </div>
                </div>
                <input type="checkbox" defaultChecked className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="rounded-lg border bg-white p-6">
            <h3 className="mb-6 text-xl font-semibold">Seguridad</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Contraseña Actual
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border px-4 py-2"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Nueva Contraseña
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border px-4 py-2"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Confirmar Nueva Contraseña
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border px-4 py-2"
                  placeholder="••••••••"
                />
              </div>
              <button className="rounded-lg bg-black px-6 py-2 font-semibold text-white hover:bg-gray-800">
                Actualizar Contraseña
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Plan info */}
          <div className="rounded-lg border bg-white p-6">
            <h3 className="mb-4 text-lg font-semibold">Plan Actual</h3>
            <div className="mb-4">
              <div className="text-2xl font-bold">Gratis</div>
              <div className="text-sm text-gray-600">0€/mes</div>
            </div>
            <div className="mb-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>1 búsqueda activa</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Alertas por email</span>
              </div>
            </div>
            <a
              href="/precios"
              className="block rounded-lg bg-black py-2 text-center font-semibold text-white hover:bg-gray-800"
            >
              Mejorar Plan
            </a>
          </div>

          {/* Usage stats */}
          <div className="rounded-lg border bg-white p-6">
            <h3 className="mb-4 text-lg font-semibold">Uso del Mes</h3>
            <div className="space-y-3">
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span>Búsquedas</span>
                  <span className="font-medium">1 / 1</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-full bg-black"></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span>Verificaciones</span>
                  <span className="font-medium">4,125</span>
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span>Alertas enviadas</span>
                  <span className="font-medium">12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Danger zone */}
          <div className="rounded-lg border border-red-200 bg-red-50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-red-900">
              Zona Peligrosa
            </h3>
            <p className="mb-4 text-sm text-red-700">
              Una vez eliminada, tu cuenta no podrá ser recuperada.
            </p>
            <button className="w-full rounded-lg border border-red-300 bg-white py-2 font-semibold text-red-600 hover:bg-red-50">
              Eliminar Cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
