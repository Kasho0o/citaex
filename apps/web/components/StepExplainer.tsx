export default function StepExplainer() {
  const steps = [
    {
      number: 1,
      title: "Nos cuentas tu trámite y tu provincia",
      description: "Nos dices qué trámite necesitas (NIE, TIE, arraigo, asilo, nacionalidad, estudiantes, etc.), en qué provincia estás y tu disponibilidad. Te pedimos solo los datos imprescindibles para buscar la cita correcta y te confirmamos por WhatsApp o email que hemos recibido tu solicitud y hemos empezado a trabajar en tu caso."
    },
    {
      number: 2,
      title: "Buscamos tu cita disponible las 24 horas",
      description: "Monitorizamos de forma continua las citas en las oficinas de extranjería y comisarías de tu zona, sin que tengas que estar pendiente de la pantalla. Usamos nuestra experiencia para detectar nuevos huecos en cuanto aparecen y descartamos las citas que no encajan con tu trámite o con tus fechas."
    },
    {
      number: 3,
      title: "Te confirmamos la cita y solo entonces pagas",
      description: "Cuando encontramos una cita que encaja con tu caso, te enviamos día, hora, oficina y tipo de trámite para que lo revises. Si aceptas, te quedas con la cita y realizas el pago de nuestro servicio. Si no conseguimos una cita válida para ti dentro del plazo acordado, no pagas nada."
    }
  ];

  return (
    <section className="border-y bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            ¿Cómo funciona CitaEx?
          </h2>
          <p className="text-lg text-gray-600">
            En 3 simples pasos consigues tu cita
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#C60B1E]/10 text-2xl font-bold text-[#C60B1E]">
                {step.number}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
