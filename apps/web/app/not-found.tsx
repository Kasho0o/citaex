import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-blue-100 p-6">
            <FileQuestion className="h-16 w-16 text-[#004A8F]" />
          </div>
        </div>

        <h1 className="mb-4 text-6xl font-bold text-[#004A8F]">404</h1>

        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          Página no encontrada
        </h2>

        <p className="mb-8 text-gray-600">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#C60B1E] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#A00919] hover:shadow-lg"
          >
            Volver al Inicio
          </Link>

          <Link
            href="/servicios"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#004A8F] bg-white px-6 py-3 text-sm font-semibold text-[#004A8F] transition-all hover:bg-[#004A8F] hover:text-white"
          >
            Ver Servicios
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>¿Necesitas ayuda?</p>
          <a
            href="https://wa.me/923221430630"
            className="text-[#25D366] hover:underline font-medium"
          >
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
