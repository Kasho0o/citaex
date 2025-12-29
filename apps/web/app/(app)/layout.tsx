import type { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-gray-50 p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold">Cita Extranjería</h2>
        </div>

        <nav className="space-y-2">
          <a
            href="/dashboard"
            className="block rounded-lg px-4 py-2 hover:bg-gray-200"
          >
            Dashboard
          </a>
          <a
            href="/citas"
            className="block rounded-lg px-4 py-2 hover:bg-gray-200"
          >
            Mis Búsquedas
          </a>
          <a
            href="/alertas"
            className="block rounded-lg px-4 py-2 hover:bg-gray-200"
          >
            Alertas
          </a>
          <a
            href="/perfil"
            className="block rounded-lg px-4 py-2 hover:bg-gray-200"
          >
            Perfil
          </a>
        </nav>

        <div className="mt-auto pt-8">
          <button className="w-full rounded-lg border px-4 py-2 text-sm hover:bg-gray-200">
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1">
        {/* Top bar */}
        <header className="border-b bg-white px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
                Nueva Búsqueda
              </button>
              <div className="h-10 w-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
