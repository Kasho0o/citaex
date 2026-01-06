export default function Testimonials() {
  const testimonials = [
    {
      name: "Carolina M.",
      origin: "Venezuela",
      location: "Madrid",
      service: "Renovación TIE",
      text: "Llevaba semanas viendo siempre 'no hay citas disponibles' en Madrid. Con CitaEx me avisaron de una cita en pocos días y me enviaron todos los datos por WhatsApp. Pude renovar mi TIE sin perder tiempo ni pedir favores a nadie."
    },
    {
      name: "Andrés G.",
      origin: "Colombia",
      location: "Barcelona",
      service: "Toma de huellas",
      text: "Trabajando en hostelería no tenía horas para estar actualizando la página de extranjería. Les escribí a CitaEx, rellené un formulario sencillo y ellos encontraron la cita de huellas en Barcelona. Solo pagué cuando ya tenía la confirmación en la mano."
    },
    {
      name: "Yassin K.",
      origin: "Marruecos",
      location: "Valencia",
      service: "Arraigo social",
      text: "En Valencia las citas vuelan en segundos y estaba desesperado. CitaEx me explicó con sinceridad la dificultad, pero siguieron buscando hasta conseguir un hueco que podía aprovechar. Sentí que alguien estaba pendiente de mi caso, no solo una máquina."
    },
    {
      name: "Imran S.",
      origin: "Pakistán",
      location: "Málaga",
      service: "Cita previa extranjería",
      text: "Entre el trabajo y el idioma, me agobiaba mucho el tema de extranjería. CitaEx me atendió en WhatsApp, me pidió solo los datos necesarios y unos días después me mandó una cita en Málaga lista para usar. Para mí fue un gran alivio."
    },
    {
      name: "Mariela R.",
      origin: "Perú",
      location: "Sevilla",
      service: "Asilo y protección internacional",
      text: "Tenía miedo de perder plazos importantes con mi solicitud de asilo. Con CitaEx siempre supe en qué punto estaba la búsqueda de cita en Sevilla. Me informaron con respeto, sin falsas promesas, y me avisaron en cuanto apareció un turno."
    },
    {
      name: "Diego L.",
      origin: "Ecuador",
      location: "Alicante",
      service: "Estudiantes extranjeros",
      text: "Necesitaba renovar mi estancia por estudios en Alicante y las citas salían en horarios imposibles. CitaEx estuvo atento a los huecos y me encontró una fecha que encajaba con mis exámenes. El proceso fue claro, rápido y sin sorpresas en el precio."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Historias reales de personas que ya consiguieron su cita
          </h2>
          <p className="text-lg text-gray-600">
            Miles de personas ya han conseguido su cita con CitaEx
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.origin} → {testimonial.location}</div>
                <div className="mt-2 inline-block rounded-full bg-[#004A8F]/10 px-3 py-1 text-xs font-medium text-[#004A8F]">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
