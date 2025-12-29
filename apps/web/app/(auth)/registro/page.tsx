import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrarse",
};

export default function RegistroPage() {
  return (
    <div className="rounded-lg border bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">Crear Cuenta</h2>

      <form className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full rounded-lg border px-4 py-2"
              placeholder="Juan"
              required
            />
          </div>
          <div>
            <label
              htmlFor="apellidos"
              className="mb-2 block text-sm font-medium"
            >
              Apellidos
            </label>
            <input
              type="text"
              id="apellidos"
              className="w-full rounded-lg border px-4 py-2"
              placeholder="García"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg border px-4 py-2"
            placeholder="tu@email.com"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-lg border px-4 py-2"
            placeholder="••••••••"
            required
          />
          <p className="mt-1 text-xs text-gray-600">
            Mínimo 8 caracteres, incluye mayúsculas y números
          </p>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full rounded-lg border px-4 py-2"
            placeholder="••••••••"
            required
          />
        </div>

        <label className="flex items-start gap-2">
          <input type="checkbox" className="mt-1 h-4 w-4" required />
          <span className="text-sm text-gray-600">
            Acepto los{" "}
            <a href="/terminos" className="text-black hover:underline">
              términos y condiciones
            </a>{" "}
            y la{" "}
            <a href="/privacidad" className="text-black hover:underline">
              política de privacidad
            </a>
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800"
        >
          Crear Cuenta
        </button>
      </form>

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-300"></div>
        <span className="text-sm text-gray-600">O regístrate con</span>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>

      <div className="space-y-3">
        <button className="flex w-full items-center justify-center gap-3 rounded-lg border py-3 hover:bg-gray-50">
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>Google</span>
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        ¿Ya tienes cuenta?{" "}
        <a href="/login" className="font-semibold text-black hover:underline">
          Inicia sesión
        </a>
      </p>
    </div>
  );
}
