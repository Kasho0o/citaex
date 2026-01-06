import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formularios Extranjería 2024 - Descarga PDF Oficiales | CitaEx",
  description:
    "Descarga todos los formularios oficiales de extranjería: EX-15, EX-17, EX-18, tasas 790. Documentos actualizados del Ministerio.",
};

const formCategories = [
  {
    category: "📋 SOLICITUDES NIE Y CERTIFICADOS",
    forms: [
      {
        code: "EX-15",
        name: "Solicitud de NIE y Certificados",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/15-Formulario_NIE_y_certificados.pdf",
      },
    ],
  },
  {
    category: "📋 TARJETA DE IDENTIDAD DE EXTRANJERO (TIE)",
    forms: [
      {
        code: "EX-17",
        name: "Solicitud de TIE (Expedición/Renovación)",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/17-Formulario_TIE.pdf",
      },
    ],
  },
  {
    category: "📋 AUTORIZACIONES DE RESIDENCIA",
    forms: [
      {
        code: "EX-00",
        name: "Residencia Temporal",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/00-Formulario_residencia_temporal.pdf",
      },
      {
        code: "EX-01",
        name: "Reagrupación Familiar",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/01-Formulario_reagrupacion.pdf",
      },
      {
        code: "EX-02",
        name: "Circunstancias Excepcionales (Arraigo)",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/02-Formulario_excepcionales.pdf",
      },
      {
        code: "EX-03",
        name: "Residencia y Trabajo por cuenta ajena",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/03-Formulario_trabajo.pdf",
      },
      {
        code: "EX-04",
        name: "Residencia y Trabajo por cuenta propia",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/04-Formulario_cuenta_propia.pdf",
      },
      {
        code: "EX-07",
        name: "Residencia Temporal del trabajador para prestación transnacional",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/07-Formulario_prestacion_transnacional.pdf",
      },
      {
        code: "EX-10",
        name: "Autorización de Trabajo",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/10-Formulario_autorizacion_trabajo.pdf",
      },
      {
        code: "EX-11",
        name: "Residencia de Larga Duración",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/11-Formulario_larga_duracion.pdf",
      },
    ],
  },
  {
    category: "📋 CIUDADANOS UE Y FAMILIARES",
    forms: [
      {
        code: "EX-18",
        name: "Certificado de Registro Ciudadano UE",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/18-Formulario_registro_UE.pdf",
      },
      {
        code: "EX-19",
        name: "Tarjeta de Familiar de Ciudadano UE",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/19-Formulario_familiar_UE.pdf",
      },
    ],
  },
  {
    category: "📋 OTROS FORMULARIOS",
    forms: [
      {
        code: "EX-13",
        name: "Carta de Invitación",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/13-Carta_invitacion.pdf",
      },
      {
        code: "EX-06",
        name: "Autorización de Regreso",
        url: "https://www.inclusion.gob.es/documents/410169/2156469/06-Formulario_autorizacion_regreso.pdf",
      },
    ],
  },
];

const tasas = [
  {
    code: "Tasa 790-012",
    name: "Expedición de TIE",
    url: "https://sede.policia.gob.es/Tasa790_012/",
  },
  {
    code: "Tasa 790-052",
    name: "NIE y Certificados",
    url: "https://sede.policia.gob.es/Tasa790_052/",
  },
  {
    code: "Tasa 790-062",
    name: "Autorización de Regreso",
    url: "https://sede.policia.gob.es/Tasa790_062/",
  },
];

export default function FormulariosPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#2C3E50] sm:text-5xl">
            Formularios Oficiales de Extranjería
          </h1>
          <p className="text-xl text-gray-600">
            Descarga todos los formularios necesarios para tu trámite
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Última actualización: Diciembre 2024
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-12 rounded-xl border-2 border-[#FFC400] bg-[#FFC400]/10 p-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl">⚠️</span>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#2C3E50]">
                Formularios Oficiales del Ministerio
              </h3>
              <p className="text-gray-700">
                Todos los formularios provienen del{" "}
                <strong>Ministerio de Inclusión, Seguridad Social y Migraciones</strong> y la{" "}
                <strong>Policía Nacional</strong>. Descárgalos, complétalos con bolígrafo negro
                y llévalos impresos el día de tu cita.
              </p>
            </div>
          </div>
        </div>

        {/* Forms by Category */}
        <div className="mb-16 space-y-12">
          {formCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="mb-6 text-2xl font-bold text-[#2C3E50]">
                {category.category}
              </h2>

              <div className="overflow-hidden rounded-xl border-2 border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        Formulario
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        Descripción
                      </th>
                      <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">
                        Descargar
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {category.forms.map((form, formIndex) => (
                      <tr
                        key={formIndex}
                        className="transition-colors hover:bg-gray-50"
                      >
                        <td className="px-6 py-4">
                          <span className="inline-block rounded-lg bg-[#004A8F] px-3 py-1 text-sm font-bold text-white">
                            {form.code}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {form.name}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a
                            href={form.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#C60B1E] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#A00919]"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              />
                            </svg>
                            <span>PDF</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Tasas Section */}
        <div className="mb-12">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[#2C3E50]">
            <span>💰</span>
            <span>TASAS (Pago de trámites)</span>
          </h2>

          <div className="overflow-hidden rounded-xl border-2 border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Tasa
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Descripción
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">
                    Pagar Online
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tasas.map((tasa, index) => (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <span className="inline-block rounded-lg bg-[#004A8F] px-3 py-1 text-sm font-bold text-white">
                        {tasa.code}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {tasa.name}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href={tasa.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#C60B1E] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#A00919]"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <span>Pagar</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-12 rounded-xl bg-gray-50 p-8">
          <h2 className="mb-6 text-2xl font-bold text-[#2C3E50]">
            📌 Consejos Importantes
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span>
              <p>
                <strong>Completa los formularios con bolígrafo negro</strong> y
                letra clara. No uses corrector líquido.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span>
              <p>
                <strong>Revisa toda la información</strong> antes de firmar.
                Los errores pueden causar retrasos.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span>
              <p>
                <strong>Lleva copias adicionales</strong> de todos los
                documentos por si la oficina las requiere.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span>
              <p>
                <strong>Paga las tasas antes de la cita</strong> y lleva el
                justificante de pago impreso.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-green-600">✓</span>
              <p>
                <strong>Consulta los requisitos específicos</strong> de tu
                provincia, ya que pueden variar ligeramente.
              </p>
            </div>
          </div>
        </div>

        {/* Source Link */}
        <div className="mb-12 rounded-xl border-2 border-gray-200 bg-white p-6 text-center">
          <p className="text-sm text-gray-600">
            <strong>Fuente oficial:</strong>{" "}
            <a
              href="https://www.inclusion.gob.es/web/migraciones/formularios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C60B1E] hover:underline"
            >
              Ministerio de Inclusión, Seguridad Social y Migraciones
            </a>
          </p>
        </div>

        {/* CTA Section */}
        <div className="rounded-xl bg-gradient-to-r from-[#C60B1E] to-[#A00919] p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">
            ¿Ya tienes los formularios? Consigue tu cita ahora
          </h3>
          <p className="mb-6 text-lg opacity-90">
            Te ayudamos a encontrar cita disponible en tu provincia
          </p>
          <a
            href="/solicitar-cita"
            className="inline-block rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#C60B1E] shadow-lg transition-all hover:bg-[#FFC400] hover:text-[#2C3E50]"
          >
            SOLICITAR CITA AHORA →
          </a>
        </div>
      </div>
    </div>
  );
}
