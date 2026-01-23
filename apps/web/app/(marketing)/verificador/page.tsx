import type { Metadata } from "next";
import DocumentChecker from "@/components/DocumentChecker";

export const metadata: Metadata = {
  title: "Verificador de Documentos GRATIS - ¿Tienes todo para tu cita?",
  description: "Verifica gratis si tienes todos los documentos necesarios para tu cita de extranjería. Análisis con IA para NIE, TIE, arraigo, asilo, nacionalidad y más.",
  keywords: ["verificar documentos extranjería", "documentos cita nie", "documentos toma huellas", "checklist extranjería"],
};

export default function VerificadorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 py-12 px-4">
      <DocumentChecker />
      
      {/* SEO Content */}
      <div className="max-w-2xl mx-auto mt-12 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          ¿Por qué usar nuestro verificador?
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-2xl mb-2">📋</div>
            <div className="font-medium text-gray-800">Checklist Personalizado</div>
            <p className="text-gray-600 mt-1">Según tu trámite específico</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-2xl mb-2">🤖</div>
            <div className="font-medium text-gray-800">Análisis con IA</div>
            <p className="text-gray-600 mt-1">Detecta errores comunes</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-2xl mb-2">💯</div>
            <div className="font-medium text-gray-800">100% Gratis</div>
            <p className="text-gray-600 mt-1">Sin compromiso</p>
          </div>
        </div>
      </div>
    </div>
  );
}
