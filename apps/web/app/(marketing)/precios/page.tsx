import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios",
};

export default function PreciosPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-center text-4xl font-bold">
          Planes Transparentes
        </h1>
        <p className="mb-12 text-center text-xl text-gray-600">
          Elige el plan que mejor se adapte a tus necesidades
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Free Plan */}
          <div className="rounded-lg border p-8">
            <h2 className="mb-2 text-2xl font-bold">Gratis</h2>
            <div className="mb-6">
              <span className="text-4xl font-bold">0€</span>
              <span className="text-gray-600">/mes</span>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>1 búsqueda activa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Alertas por email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Verificación cada 5 minutos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Asistente IA básico</span>
              </li>
            </ul>
            <a
              href="/registro"
              className="block rounded-lg border border-gray-300 py-3 text-center font-semibold hover:bg-gray-50"
            >
              Comenzar Gratis
            </a>
          </div>

          {/* Pro Plan */}
          <div className="relative rounded-lg border-2 border-black p-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-1 text-sm text-white">
              Popular
            </div>
            <h2 className="mb-2 text-2xl font-bold">Pro</h2>
            <div className="mb-6">
              <span className="text-4xl font-bold">9.99€</span>
              <span className="text-gray-600">/mes</span>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>5 búsquedas activas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Alertas por email y Telegram</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Verificación cada minuto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Asistente IA avanzado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Soporte prioritario</span>
              </li>
            </ul>
            <a
              href="/registro"
              className="block rounded-lg bg-black py-3 text-center font-semibold text-white hover:bg-gray-800"
            >
              Empezar Ahora
            </a>
          </div>

          {/* Premium Plan */}
          <div className="rounded-lg border p-8">
            <h2 className="mb-2 text-2xl font-bold">Premium</h2>
            <div className="mb-6">
              <span className="text-4xl font-bold">19.99€</span>
              <span className="text-gray-600">/mes</span>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Búsquedas ilimitadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Alertas por email, SMS y Telegram</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Verificación en tiempo real</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Asistente IA Premium</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>API Access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Soporte VIP</span>
              </li>
            </ul>
            <a
              href="/registro"
              className="block rounded-lg border border-gray-300 py-3 text-center font-semibold hover:bg-gray-50"
            >
              Comenzar Premium
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-gray-50 p-8 text-center">
          <p className="text-gray-600">
            Todos los planes incluyen 14 días de prueba gratis. Sin tarjeta de
            crédito requerida.
          </p>
        </div>
      </div>
    </div>
  );
}
