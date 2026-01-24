"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const tramites = [
  "Toma de Huellas", "NIE", "TIE", "Arraigo Social", "Arraigo Familiar",
  "Arraigo Laboral", "Asilo", "Renovacion", "Nacionalidad", "Reagrupacion Familiar", "Otro"
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
  const [formData, setFormData] = useState({
    name: "", country: "", city: "", tramite: "", rating: 5, review: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const { error: dbError } = await supabase.from("reviews").insert([{
        name: formData.name,
        country: formData.country,
        city: formData.city,
        tramite: formData.tramite,
        rating: formData.rating,
        review: formData.review,
        approved: false,
      }]);

      if (dbError) throw dbError;
      setSubmitted(true);
    } catch (err) {
      console.error("Error:", err);
      setError("Error al enviar. Por favor intenta de nuevo.");
    }
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Gracias por tu opinion!</h2>
        <p className="text-gray-600 mb-6">Tu resena ha sido guardada y aparecera en nuestra web una vez aprobada.</p>
        <Link href="/" className="block w-full bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Tu puntuacion *</label>
        <div className="flex gap-2 justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} type="button" onClick={() => setFormData({ ...formData, rating: star })}
              onMouseEnter={() => setHoveredRating(star)} onMouseLeave={() => setHoveredRating(0)}
              className="text-4xl transition-transform hover:scale-110">
              <span className={star <= (hoveredRating || formData.rating) ? "text-yellow-400" : "text-gray-300"}>
                {star <= (hoveredRating || formData.rating) ? "★" : "☆"}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tu nombre *</label>
        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Tu nombre" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Pais de origen *</label>
        <select required value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500">
          <option value="">Selecciona tu pais</option>
          {countries.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad en Espana *</label>
        <select required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500">
          <option value="">Selecciona ciudad</option>
          {cities.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tramite *</label>
        <select required value={formData.tramite} onChange={(e) => setFormData({ ...formData, tramite: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500">
          <option value="">Selecciona tramite</option>
          {tramites.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tu experiencia *</label>
        <textarea required rows={4} value={formData.review} onChange={(e) => setFormData({ ...formData, review: e.target.value })}
          placeholder="Como fue tu experiencia con CitaEx?" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" disabled={formData.review.length < 20 || isSubmitting}
        className={`w-full py-4 rounded-xl font-medium text-lg ${formData.review.length >= 20 && !isSubmitting ? "bg-red-600 text-white hover:bg-red-700" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
        {isSubmitting ? "Enviando..." : "Enviar opinion"}
      </button>
    </form>
  );
}
