import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guías",
};

export default function GuiasPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Guías y Recursos</h1>
        <p className="mb-12 text-xl text-gray-600">
          Todo lo que necesitas saber sobre citas de extranjería
        </p>

        <div className="space-y-6">
          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h2 className="mb-3 text-2xl font-semibold">
              Cómo conseguir cita para TIE (Primera vez)
            </h2>
            <p className="mb-4 text-gray-600">
              Guía paso a paso para solicitar tu primera Tarjeta de Identidad de
              Extranjero en España.
            </p>
            <a href="#" className="text-black font-semibold hover:underline">
              Leer más →
            </a>
          </div>

          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h2 className="mb-3 text-2xl font-semibold">
              Renovación de TIE - Documentación necesaria
            </h2>
            <p className="mb-4 text-gray-600">
              Lista completa de documentos que necesitas para renovar tu TIE sin
              problemas.
            </p>
            <a href="#" className="text-black font-semibold hover:underline">
              Leer más →
            </a>
          </div>

          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h2 className="mb-3 text-2xl font-semibold">
              Cita para NIE - Procedimiento completo
            </h2>
            <p className="mb-4 text-gray-600">
              Todo lo que necesitas saber para obtener tu Número de Identidad de
              Extranjero.
            </p>
            <a href="#" className="text-black font-semibold hover:underline">
              Leer más →
            </a>
          </div>

          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h2 className="mb-3 text-2xl font-semibold">
              Autorización de Regreso
            </h2>
            <p className="mb-4 text-gray-600">
              Cómo solicitar la autorización de regreso si necesitas viajar fuera
              de España.
            </p>
            <a href="#" className="text-black font-semibold hover:underline">
              Leer más →
            </a>
          </div>

          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h2 className="mb-3 text-2xl font-semibold">
              Certificado de Registro de Ciudadano de la UE
            </h2>
            <p className="mb-4 text-gray-600">
              Información para ciudadanos de la Unión Europea que residen en España.
            </p>
            <a href="#" className="text-black font-semibold hover:underline">
              Leer más →
            </a>
          </div>

          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h2 className="mb-3 text-2xl font-semibold">
              Preguntas Frecuentes
            </h2>
            <p className="mb-4 text-gray-600">
              Respuestas a las dudas más comunes sobre citas de extranjería.
            </p>
            <a href="#" className="text-black font-semibold hover:underline">
              Leer más →
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-blue-50 p-8">
          <h3 className="mb-4 text-xl font-semibold">
            ¿Necesitas ayuda personalizada?
          </h3>
          <p className="mb-4 text-gray-600">
            Nuestro asistente con IA puede responder tus preguntas específicas
            sobre tu trámite.
          </p>
          <a
            href="/registro"
            className="inline-block rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
          >
            Hablar con el Asistente IA
          </a>
        </div>
      </div>
    </div>
  );
}
