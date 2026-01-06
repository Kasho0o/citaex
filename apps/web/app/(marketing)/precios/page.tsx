import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Precios Claros y Transparentes - CitaEx",
  description: "Precios sin letra pequeña y sin pago por adelantado. Solo pagas cuando consigues tu cita de extranjería. Desde 29€.",
};

export default function PreciosPage() {
  const pricingTiers = [
    {
      name: "Cita Estándar",
      price: "29€",
      description: "Búsqueda de cita para un trámite en una provincia, monitorización básica y comunicación por WhatsApp/email.",
      features: [
        "Búsqueda en 1 provincia",
        "Monitorización básica",
        "Comunicación WhatsApp/email",
        "Sin pago por adelantado",
        "Solo pagas si consigues cita"
      ],
      popular: false
    },
    {
      name: "Cita Urgente",
      price: "49€",
      description: "Búsqueda prioritaria, monitorización más frecuente y avisos inmediatos en cuanto haya un hueco útil.",
      features: [
        "Búsqueda prioritaria",
        "Monitorización frecuente",
        "Avisos inmediatos",
        "Atención preferente",
        "Sin pago por adelantado"
      ],
      popular: true
    },
    {
      name: "Pack Familiar",
      price: "79€",
      description: "Búsqueda de citas para hasta 3 personas de la misma familia, en el mismo trámite y provincia.",
      features: [
        "Hasta 3 personas",
        "Misma familia",
        "Mismo trámite y provincia",
        "Ahorro vs. individual",
        "Sin pago por adelantado"
      ],
      popular: false
    },
    {
      name: "Gestión Completa",
      price: "99€",
      description: "Búsqueda de cita + acompañamiento en dudas básicas de documentación y recordatorios personalizados.",
      features: [
        "Todo lo incluido en Estándar",
        "Asesoramiento documentación",
        "Recordatorios personalizados",
        "Seguimiento completo",
        "Sin pago por adelantado"
      ],
      popular: false
    }
  ];

  const paymentSteps = [
    {
      number: 1,
      title: "Nos cuentas tu caso y te damos un precio cerrado",
      description: "Antes de empezar la búsqueda, revisamos tu situación y te indicamos qué servicio encaja mejor y cuál sería el importe final."
    },
    {
      number: 2,
      title: "Empezamos a buscar sin que adelantes dinero",
      description: "Iniciamos la monitorización y la búsqueda de cita sin que tengas que pagar nada por adelantado. Si no encontramos ninguna cita útil para ti, no tendrás que pagar nuestros honorarios."
    },
    {
      number: 3,
      title: "Te avisamos cuando encontramos una cita válida",
      description: "Cuando detectamos una cita que encaja con tu trámite, provincia y disponibilidad, te enviamos todos los detalles para que decidas con calma si te sirve o no."
    },
    {
      number: 4,
      title: "Solo pagas si aceptas la cita",
      description: "Si confirmas que la cita es adecuada, te indicamos cómo realizar el pago de nuestro servicio (tarjeta, transferencia u otros métodos disponibles). Hasta ese momento no hay obligación de pago."
    },
    {
      number: 5,
      title: "Confirmación y seguimiento",
      description: "Una vez recibido el pago, te enviamos un resumen de la cita y recordatorios antes del día señalado. En el caso de Gestión Completa, también respondemos a tus dudas básicas sobre documentación y pasos siguientes."
    }
  ];

  const faqs = [
    {
      question: "¿Por qué cobráis si las citas son gratuitas en la web oficial?",
      answer: "Las citas en sí no tienen coste en la administración, pero conseguir un hueco puede llevar horas, días o semanas de intentos fallidos. Nuestro precio no es por la cita en sí, sino por el tiempo, la monitorización y el acompañamiento que te ofrecemos para encontrarla. En cualquier momento puedes seguir intentándolo por tu cuenta sin pagar nada."
    },
    {
      question: "¿Qué pasa si no encontráis ninguna cita para mí?",
      answer: "Si, después de la búsqueda dentro del periodo que hayamos acordado, no conseguimos una cita válida que de verdad puedas usar, no te cobraremos el servicio. Nuestro modelo se basa en pago por resultado, no en cuotas fijas por intentarlo."
    },
    {
      question: "¿Los precios son por persona o por familia?",
      answer: "La Cita Estándar y la Cita Urgente son por persona y por trámite. El Pack Familiar está pensado para hasta 3 personas de la misma familia, para el mismo trámite y en la misma provincia. Si tu caso es distinto, te explicaremos de antemano qué opción te corresponde."
    },
    {
      question: "¿Qué incluye exactamente la \"Gestión Completa\"?",
      answer: "Además de la búsqueda de cita, la Gestión Completa incluye acompañamiento en dudas básicas de documentación (por ejemplo, qué documentos suelen pedir para un trámite concreto) y recordatorios personalizados antes de la cita. No sustituye a un abogado ni a una gestoría colegiada, pero te ayuda a llegar más preparado."
    },
    {
      question: "¿Puedo pedir devolución si algo sale mal?",
      answer: "Si el problema se debe a un error nuestro (por ejemplo, información incorrecta sobre la oficina o el tipo de cita), revisaremos tu caso y podremos ofrecer reembolso o una nueva búsqueda sin coste adicional. Si la cita se pierde por causas ajenas a CitaEx (llegar tarde, no acudir, no llevar documentación, cambios en tu situación), no podremos asumir esa responsabilidad. Todos los detalles figuran en nuestros Términos y Condiciones."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#004A8F] to-[#0066CC]">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Precios claros, sin letra pequeña y sin pago por adelantado
            </h1>
            <p className="text-xl text-white/90">
              Solo pagas cuando te confirmamos una cita válida que tú aceptas
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border-2 p-8 ${
                    tier.popular
                      ? 'border-[#C60B1E] bg-white shadow-xl relative'
                      : 'border-gray-200 bg-white shadow-sm'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#C60B1E] px-4 py-1 text-sm font-semibold text-white">
                      Más Popular
                    </div>
                  )}
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  </div>
                  <p className="mb-6 text-sm text-gray-600 leading-relaxed">{tier.description}</p>
                  <ul className="mb-8 space-y-3">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm">
                        <svg className="h-5 w-5 flex-shrink-0 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/923221430630?text=Hola,%20quiero%20información%20sobre%20precios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block rounded-xl py-3 text-center font-semibold transition-all ${
                      tier.popular
                        ? 'bg-[#C60B1E] text-white hover:bg-[#A00919]'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Solicitar ahora
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Payment Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Cómo funciona el pago
              </h2>
              <p className="text-lg text-gray-600">
                Proceso transparente en 5 pasos simples
              </p>
            </div>

            <div className="space-y-6">
              {paymentSteps.map((step) => (
                <div key={step.number} className="flex gap-6 rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#004A8F] text-xl font-bold text-white">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="mb-4 text-4xl">💰</div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Sin pago por adelantado</h3>
                <p className="text-sm text-gray-600">
                  Empezamos a trabajar sin que adelantes dinero. Solo pagas cuando te confirmamos una cita válida y tú decides aceptarla.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="mb-4 text-4xl">🔍</div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Transparencia total</h3>
                <p className="text-sm text-gray-600">
                  Te explicamos desde el principio la dificultad de tu caso, el tipo de servicio que necesitas y el precio. Sin sorpresas ni cargos ocultos.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="mb-4 text-4xl">🔒</div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Protección de datos</h3>
                <p className="text-sm text-gray-600">
                  Tratamos tus datos personales de acuerdo con el RGPD. No vendemos tu información y solo la utilizamos para gestionar tu cita y cumplir con la ley.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#004A8F] to-[#0066CC] p-8 text-center text-white">
              <div className="mb-4 text-3xl font-bold">✅</div>
              <div className="mb-2 text-lg font-semibold">Más de 15.000 citas conseguidas en toda España</div>
              <div className="mb-2">24/7 monitorizando oportunidades para ti</div>
              <div className="text-sm opacity-90">Usuarios solo pagan cuando aceptan una cita que realmente pueden usar</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Preguntas frecuentes sobre precios
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group rounded-xl border border-gray-200 bg-white">
                  <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-gray-900">
                    {faq.question}
                    <svg className="h-5 w-5 flex-shrink-0 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="border-t border-gray-100 px-6 py-4 text-gray-600 leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#C60B1E] to-[#A00919]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            ¿Listo para conseguir tu cita?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Contáctanos y te explicamos el proceso sin compromiso
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/923221430630?text=Hola,%20quiero%20información%20sobre%20precios"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl bg-white px-10 py-4 text-lg font-bold text-[#C60B1E] shadow-lg transition-all hover:bg-[#FFC400] hover:text-[#2C3E50] hover:shadow-xl sm:w-auto"
            >
              Hablar por WhatsApp
            </a>
            <Link
              href="/"
              className="w-full rounded-xl border-2 border-white px-10 py-4 text-lg font-bold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
