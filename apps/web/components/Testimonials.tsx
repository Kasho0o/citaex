"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Review {
  id: number;
  name: string;
  country: string;
  city: string;
  tramite: string;
  rating: number;
  review: string;
  created_at: string;
}

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

function ReviewCard({ review }: { review: Review }) {
  const date = new Date(review.created_at);
  const dateStr = date.toLocaleDateString("es-ES", { month: "long", year: "numeric" });
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {review.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="font-semibold text-gray-800">{review.name}</div>
            <div className="text-sm text-gray-500">{review.country} - {review.city}</div>
          </div>
        </div>
        <StarRating rating={review.rating} />
      </div>
      
      <p className="text-gray-600 leading-relaxed mb-4">
        &ldquo;{review.review}&rdquo;
      </p>
      
      <div className="flex items-center justify-between text-sm">
        <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full font-medium">
          {review.tramite}
        </span>
        <span className="text-gray-400 capitalize">{dateStr}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false })
        .limit(20);

      if (!error && data) {
        setReviews(data);
      }
      setLoading(false);
    }
    fetchReviews();
  }, []);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 6);
  const totalReviews = reviews.length;
  const avgRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

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
            <div className="text-4xl font-bold text-red-600">{avgRating}/5</div>
            <div className="text-gray-600">Valoracion media</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">52</div>
            <div className="text-gray-600">Provincias</div>
          </div>
        </div>

        {/* Reviews Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-4 border-red-200 border-t-red-600 rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-gray-500">Cargando opiniones...</p>
          </div>
        ) : reviews.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {displayedReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            {totalReviews > 6 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-3 border-2 border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {showAll ? "Ver menos" : `Ver mas opiniones (${totalReviews - 6}+)`}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl max-w-md mx-auto">
            <p className="text-gray-500 mb-4">Se el primero en dejar una opinion</p>
            <a href="/dejar-opinion" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700">
              Dejar opinion
            </a>
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
