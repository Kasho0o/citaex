"use client";

import { useState } from "react";

interface ReviewData {
  name: string;
  country: string;
  city: string;
  tramite: string;
  rating: number;
  review: string;
  canPublish: boolean;
  photo: boolean;
}

const tramites = [
  "Toma de Huellas",
  "NIE",
  "TIE",
  "Arraigo Social",
  "Arraigo Familiar",
  "Arraigo Laboral",
  "Asilo",
  "Renovacion",
  "Nacionalidad",
  "Reagrupacion Familiar",
  "Otro"
];

const countries = [
  "Venezuela", "Colombia", "Ecuador", "Peru", "Argentina", "Bolivia",
  "Honduras", "Nicaragua", "Cuba", "Republica Dominicana", "Mexico",
  "Marruecos", "Ucrania", "Pakistan", "India", "China", "Otro"
];

const cities = [
  "Madrid", "Barcelona", "Valencia", "Sevilla", "Malaga", "Murcia",
  "Alicante", "Zaragoza", "Bilbao", "Granada", "Otra"
];

export default function ReviewForm() {
  const [formData, setFormData] = useState<ReviewData>({
    name: "",
    country: "",
    city: "",
    tramite: "",
    rating: 5,
    review: "",
    canPublish: true,
    photo: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with review
    const message = `Nueva Opinion de Cliente:

Nombre: ${formData.name}
Pais: ${formData.country}
Ciudad: ${formData.city}
Tramite: ${formData.tramite}
Puntuacion: ${"★".repeat(formData.rating)}${"☆".repeat(5 - formData.rating)} (${formData.rating}/5)

Opinion:
"${formData.review}"

Permiso publicar: ${formData.canPublish ? "SI" : "NO"}
Tiene foto: ${formData.photo ? "SI" : "NO"}`;

    // Open WhatsApp with the review
    const whatsappUrl = `https://wa.me/923221430630?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✓</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Gracias por tu opinion!</h2>
        <p className="text-gray-600 mb-6">
          Tu experiencia nos ayuda a mejorar y ayuda a otros a confiar en nuestro servicio.
        </p>
        <a
          href="/"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          Volver al inicio
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
      {/* Rating */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tu puntuacion *
        </label>
        <div className="flex gap-2 justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setFormData({ ...formData, rating: star })}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="text-4xl transition-transform hover:scale-110"
            >
              {star <= (hoveredRating || formData.rating) ? (
                <span className="text-yellow-400">★</span>
              ) : (
                <span className="text-gray-300">☆</span>
              )}
            </button>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-1">
          {formData.rating === 5 && "Excelente!"}
          {formData.rating === 4 && "Muy bueno"}
          {formData.rating === 3 && "Bueno"}
          {formData.rating === 2 && "Regular"}
          {formData.rating === 1 && "Malo"}
        </p>
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tu nombre *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Como quieres que aparezca tu nombre"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
        />
        <p className="text-xs text-gray-400 mt-1">Puede ser solo tu nombre, sin apellido</p>
      </div>

      {/* Country */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Pais de origen *
        </label>
        <select
          required
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
        >
          <option value="">Selecciona tu pais</option>
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ciudad en Espana *
        </label>
        <select
          required
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
        >
          <option value="">Selecciona tu ciudad</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* Tramite */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Que tramite hiciste con nosotros? *
        </label>
        <select
          required
          value={formData.tramite}
          onChange={(e) => setFormData({ ...formData, tramite: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
        >
          <option value="">Selecciona el tramite</option>
          {tramites.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Review Text */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cuenta tu experiencia *
        </label>
        <textarea
          required
          rows={4}
          value={formData.review}
          onChange={(e) => setFormData({ ...formData, review: e.target.value })}
          placeholder="Como fue tu experiencia con CitaEx? Cuanto tiempo tardaron en conseguir tu cita? Recomendarias el servicio?"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
        />
        <p className="text-xs text-gray-400 mt-1">Minimo 20 caracteres</p>
      </div>

      {/* Permissions */}
      <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.canPublish}
            onChange={(e) => setFormData({ ...formData, canPublish: e.target.checked })}
            className="w-5 h-5 mt-0.5 rounded border-gray-300 text-red-600 focus:ring-red-500"
          />
          <span className="text-sm text-gray-700">
            Autorizo a CitaEx a publicar mi opinion en su pagina web y redes sociales
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.photo}
            onChange={(e) => setFormData({ ...formData, photo: e.target.checked })}
            className="w-5 h-5 mt-0.5 rounded border-gray-300 text-red-600 focus:ring-red-500"
          />
          <span className="text-sm text-gray-700">
            Tengo una foto de mi TIE/NIE que puedo compartir como prueba (opcional)
          </span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={formData.review.length < 20}
        className={`w-full py-4 rounded-xl font-medium text-lg transition-all ${
          formData.review.length >= 20
            ? "bg-red-600 text-white hover:bg-red-700"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Enviar mi opinion
      </button>

      <p className="text-center text-xs text-gray-400">
        Al enviar, se abrira WhatsApp para confirmar tu opinion
      </p>
    </form>
  );
}
