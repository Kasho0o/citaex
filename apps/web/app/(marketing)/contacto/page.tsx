import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold">Contacto</h1>
        <p className="mb-12 text-xl text-gray-600">
          ¿Tienes alguna pregunta? Estamos aquí para ayudarte
        </p>

        <div className="mb-12 space-y-6">
          <div className="rounded-lg border p-6">
            <h3 className="mb-2 text-lg font-semibold">Email</h3>
            <p className="text-gray-600">
              <a
                href="mailto:soporte@micitaextranjeria.com"
                className="hover:underline"
              >
                soporte@micitaextranjeria.com
              </a>
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="mb-2 text-lg font-semibold">Telegram</h3>
            <p className="text-gray-600">
              Únete a nuestro canal de Telegram para recibir actualizaciones y
              soporte rápido.
            </p>
            <a
              href="#"
              className="mt-2 inline-block text-black font-semibold hover:underline"
            >
              Unirse al canal →
            </a>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="mb-2 text-lg font-semibold">FAQ</h3>
            <p className="text-gray-600">
              Antes de contactarnos, revisa nuestras preguntas frecuentes. Quizás
              encuentres la respuesta que buscas.
            </p>
            <a
              href="/guias"
              className="mt-2 inline-block text-black font-semibold hover:underline"
            >
              Ver FAQ →
            </a>
          </div>
        </div>

        <div className="rounded-lg bg-gray-50 p-8">
          <h2 className="mb-4 text-2xl font-bold">Formulario de Contacto</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border px-4 py-2"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border px-4 py-2"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-lg border px-4 py-2"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
