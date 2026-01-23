"use client";

import { useState } from "react";

// =====================================================
// EDITA AQUI TUS REVIEWS - Solo cambia este array
// =====================================================
const reviews = [
  {
    name: "Maria",
    country: "Venezuela",
    city: "Madrid",
    tramite: "Toma de Huellas",
    rating: 5,
    text: "Llevaba 3 meses intentando conseguir cita para huellas sin exito. Con CitaEx en 5 dias ya tenia mi cita confirmada. Muy profesionales y siempre respondiendo por WhatsApp.",
    date: "Enero 2026"
  },
  {
    name: "Carlos",
    country: "Colombia",
    city: "Barcelona",
    tramite: "Arraigo Social",
    rating: 5,
    text: "Excelente servicio. Me ayudaron con la cita para arraigo social cuando ya habia perdido la esperanza. El precio es justo y solo pague cuando tuve la cita confirmada.",
    date: "Enero 2026"
  },
  {
    name: "Fatima",
    country: "Marruecos",
    city: "Valencia",
    tramite: "Renovacion TIE",
    rating: 5,
    text: "Mi TIE estaba a punto de caducar y no encontraba cita. CitaEx me consiguio cita en menos de una semana. Muy recomendado!",
    date: "Diciembre 2025"
  },
  {
    name: "Andres",
    country: "Ecuador",
    city: "Sevilla",
    tramite: "NIE",
    rating: 5,
    text: "Servicio muy rapido y profesional. Me mantuvieron informado todo el tiempo por WhatsApp. Conseguieron mi cita para NIE en 4 dias.",
    date: "Diciembre 2025"
  },
  {
    name: "Olena",
    country: "Ucrania",
    city: "Madrid",
    tramite: "Asilo",
    rating: 5,
    text: "Muy agradecida con CitaEx. En una situacion muy dificil me ayudaron a conseguir la cita que necesitaba. Gracias por la paciencia y el buen trato.",
    date: "Noviembre 2025"
  },
  {
    name: "Luis",
    country: "Peru",
    city: "Malaga",
    tramite: "Toma de Huellas",
    rating: 5,
    text: "Increible servicio! La pagina oficial nunca tenia citas disponibles. CitaEx me aviso en cuanto salio una y la reservaron para mi. 100% recomendado.",
    date: "Noviembre 2025"
  },
];
// =====================================================

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {review.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-gray-800">{review.name}</div>
            <div className="text-sm text-gray-500">{review.country} - {review.city}</div>
          </div>
        </div>
        <StarRating rating={review.rating} />
      </div>
      
      <p className="text-gray-600 leading-relaxed mb-4">
        &ldquo;{review.text}&rdquo;
      </p>
      
      <div className="flex items-center justify-between text-sm">
        <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full font-medium">
          {review.tramite}
        </span>
        <span className="text-gray-400">{review.date}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <span>★</span> Opiniones verificadas
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Miles de personas ya han conseguido su cita con nuestra ayuda
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">15,000+</div>
            <div className="text-gray-600">Citas conseguidas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">4.9/5</div>
            <div className="text-gray-600">Valoracion media</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">52</div>
            <div className="text-gray-600">Provincias</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        {/* Show More Button */}
        {reviews.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border-2 border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {showAll ? "Ver menos" : `Ver mas opiniones (${reviews.length - 3}+)`}
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ya usaste nuestro servicio?</p>
          <a
            href="/dejar-opinion"
            className="inline-flex items-center gap-2 bg-white border-2 border-red-600 text-red-600 px-6 py-3 rounded-xl font-medium hover:bg-red-50 transition-colors"
          >
            <span>★</span> Deja tu opinion
          </a>
        </div>
      </div>
    </section>
  );
}
