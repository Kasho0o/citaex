import type { Metadata } from "next";
import ReviewForm from "@/components/ReviewForm";

export const metadata: Metadata = {
  title: "Deja tu Opinion - CitaEx",
  description: "Comparte tu experiencia con CitaEx. Tu opinion nos ayuda a mejorar y ayuda a otros a conocer nuestro servicio.",
};

export default function DejarOpinionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⭐</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Tu opinion es muy importante
          </h1>
          <p className="text-gray-600">
            Gracias por confiar en CitaEx. Cuentanos como fue tu experiencia.
          </p>
        </div>

        <ReviewForm />

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Tu opinion puede ayudar a otras personas en la misma situacion.</p>
          <p className="mt-2">Gracias por tomarte el tiempo de compartir tu experiencia.</p>
        </div>
      </div>
    </div>
  );
}
