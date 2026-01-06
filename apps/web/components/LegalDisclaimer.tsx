export default function LegalDisclaimer() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
            <div className="mb-4 flex items-start gap-3">
              <svg className="h-6 w-6 flex-shrink-0 text-[#004A8F] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Aviso Legal Importante
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    CitaEx es un servicio profesional e independiente especializado en la búsqueda y gestión de citas de extranjería en toda España.
                  </p>
                  <p>
                    <strong>No formamos parte del Gobierno de España</strong> ni de ninguna institución pública, y <strong>no tenemos acceso preferente</strong> a las citas oficiales. Trabajamos exclusivamente con la información y la disponibilidad que publica la administración en sus canales oficiales.
                  </p>
                  <p>
                    Nuestro servicio es opcional: cualquier persona puede intentar conseguir cita directamente y de forma gratuita en las páginas oficiales. Lo que ofrecemos es tiempo, comodidad y seguimiento personalizado para aumentar tus posibilidades de encontrar una cita que se ajuste a tus necesidades.
                  </p>
                  <p>
                    <strong>Solo cobramos cuando te confirmamos una cita válida y tú decides aceptarla.</strong> No prometemos resultados imposibles ni plazos garantizados; te informamos siempre con transparencia sobre la dificultad real de tu provincia y tu tipo de trámite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
