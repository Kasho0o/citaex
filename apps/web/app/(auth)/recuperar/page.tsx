import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recuperar Contraseña",
};

export default function RecuperarPage() {
  return (
    <div className="rounded-lg border bg-white p-8 shadow-sm">
      <h2 className="mb-2 text-2xl font-bold">Recuperar Contraseña</h2>
      <p className="mb-6 text-gray-600">
        Te enviaremos un enlace para restablecer tu contraseña
      </p>

      <form className="space-y-4">
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

        <button
          type="submit"
          className="w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800"
        >
          Enviar Enlace de Recuperación
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        ¿Recordaste tu contraseña?{" "}
        <a href="/login" className="font-semibold text-black hover:underline">
          Inicia sesión
        </a>
      </p>
    </div>
  );
}
