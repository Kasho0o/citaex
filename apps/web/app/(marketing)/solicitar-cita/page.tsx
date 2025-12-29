"use client";

import { useState } from "react";
import { Button } from "@repo/ui/components";

// Spanish provinces with extranjería offices
const PROVINCES = [
  "Álava",
  "Albacete",
  "Alicante",
  "Almería",
  "Asturias",
  "Ávila",
  "Badajoz",
  "Barcelona",
  "Burgos",
  "Cáceres",
  "Cádiz",
  "Cantabria",
  "Castellón",
  "Ciudad Real",
  "Córdoba",
  "Cuenca",
  "Girona",
  "Granada",
  "Guadalajara",
  "Guipúzcoa",
  "Huelva",
  "Huesca",
  "Illes Balears",
  "Jaén",
  "La Coruña",
  "La Rioja",
  "Las Palmas",
  "León",
  "Lleida",
  "Lugo",
  "Madrid",
  "Málaga",
  "Murcia",
  "Navarra",
  "Ourense",
  "Palencia",
  "Pontevedra",
  "Salamanca",
  "Santa Cruz de Tenerife",
  "Segovia",
  "Sevilla",
  "Soria",
  "Tarragona",
  "Teruel",
  "Toledo",
  "Valencia",
  "Valladolid",
  "Vizcaya",
  "Zamora",
  "Zaragoza",
] as const;

// Offices by province (simplified - in production this would be more comprehensive)
const OFFICES_BY_PROVINCE: Record<string, string[]> = {
  Madrid: [
    "Comisaría de Aluche",
    "Comisaría de Arganzuela",
    "Comisaría de Moratalaz",
    "Comisaría de Tetuán",
    "Oficina de Extranjería - Madrid",
  ],
  Barcelona: [
    "Comisaría de Les Corts",
    "Comisaría de Sant Martí",
    "Oficina de Extranjería - Barcelona",
  ],
  Valencia: ["Comisaría de Valencia", "Oficina de Extranjería - Valencia"],
  Sevilla: ["Comisaría de Sevilla", "Oficina de Extranjería - Sevilla"],
  // Default for other provinces
  default: ["Comisaría de Policía", "Oficina de Extranjería"],
};

// Procedure types from official Cita Previa Extranjería
const PROCEDURES = [
  "POLICIA - ASILO - SOLICITUD DE PROTECCIÓN INTERNACIONAL",
  "POLICIA - AUTORIZACIONES DE REGRESO",
  "POLICIA - CARTA DE INVITACIÓN",
  "POLICIA - CERTIFICADO DE REGISTRO DE CIUDADANO DE LA U.E.",
  "POLICIA - CERTIFICADOS Y ASIGNACIÓN NIE",
  "POLICIA - CERTIFICADOS (NO RESIDENTES)",
  "POLICIA - EXPEDICIÓN DE TARJETA DE IDENTIDAD DE EXTRANJERO (TIE)",
  "POLICIA - INFORMACIÓN",
  "POLICIA - RECOGIDA DE TARJETA DE IDENTIDAD DE EXTRANJERO (TIE)",
  "POLICIA - RENOVACIÓN DE TARJETA DE IDENTIDAD DE EXTRANJERO (TIE)",
  "POLICIA - SOLICITUD DE AUTORIZACIÓN DE RESIDENCIA TEMPORAL POR CIRCUNSTANCIAS EXCEPCIONALES - ARRAIGO",
  "POLICIA - TOMA DE HUELLAS (EXPEDICIÓN DE TARJETA) Y RENOVACIÓN DE TARJETA DE LARGA DURACIÓN",
  "POLICIA-TRAMITE GESTORIA/TRAMITE DE PRESENTACION RECURSOS",
  "POLICIA-EXP.TARJETA ASOCIADA AL ACUERDO DE RETIRADA CIUDADANOS BRITANICOS Y SUS FAMILIARES (BREXIT)",
  "POLICIA-SOLICITUD DE AUTORIZACIONES DE RESIDENCIA ARRAIGO",
] as const;

// Common nationalities
const NATIONALITIES = [
  "Afgana",
  "Alemana",
  "Argentina",
  "Argelina",
  "Brasileña",
  "Británica",
  "Búlgara",
  "Camerunesa",
  "China",
  "Colombiana",
  "Cubana",
  "Dominicana",
  "Ecuatoriana",
  "Filipina",
  "Francesa",
  "Italiana",
  "Marroquí",
  "Mexicana",
  "Nigeriana",
  "Pakistaní",
  "Peruana",
  "Polaca",
  "Rumana",
  "Rusa",
  "Senegalesa",
  "Ucraniana",
  "Venezolana",
  "Otra",
] as const;

interface FormData {
  // Step 1: Location
  province: string;
  office: string;
  // Step 2: Procedure
  procedure: string;
  // Step 3: Personal Details
  fullName: string;
  niePassport: string;
  nationality: string;
  dateOfBirth: string;
  mobilePhone: string;
  whatsappSameAsMobile: boolean;
  whatsappPhone: string;
  email: string;
  preferredDate: string;
  deadline: string;
  comments: string;
  // Step 4: Privacy
  acceptedPrivacy: boolean;
}

export default function SolicitarCitaPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    province: "",
    office: "",
    procedure: "",
    fullName: "",
    niePassport: "",
    nationality: "",
    dateOfBirth: "",
    mobilePhone: "",
    whatsappSameAsMobile: true,
    whatsappPhone: "",
    email: "",
    preferredDate: "",
    deadline: "",
    comments: "",
    acceptedPrivacy: false,
  });

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getOfficesForProvince = (province: string): string[] => {
    return (
      OFFICES_BY_PROVINCE[province] ||
      OFFICES_BY_PROVINCE.default ||
      ["Comisaría de Policía"]
    );
  };

  const handleSubmit = () => {
    // Format WhatsApp message
    const whatsappNumber = "+923221430630";
    const message = `🆕 NUEVA SOLICITUD DE CITA

📍 UBICACIÓN:
Provincia: ${formData.province}
Oficina: ${formData.office}

📋 TRÁMITE:
${formData.procedure}

👤 DATOS PERSONALES:
Nombre: ${formData.fullName}
NIE/Pasaporte: ${formData.niePassport}
Nacionalidad: ${formData.nationality}
Nacimiento: ${formData.dateOfBirth}
Teléfono: ${formData.mobilePhone}
WhatsApp: ${formData.whatsappSameAsMobile ? formData.mobilePhone : formData.whatsappPhone}
Email: ${formData.email}

📅 PREFERENCIA:
Fecha deseada: ${formData.preferredDate || "No especificada"}
Fecha límite: ${formData.deadline || "No especificada"}

💬 Comentarios:
${formData.comments || "Ninguno"}`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Redirect to thank you page
    window.location.href = "/solicitar-cita/gracias";
  };

  const canProceedStep1 = formData.province && formData.office;
  const canProceedStep2 = formData.procedure;
  const canProceedStep3 =
    formData.fullName &&
    formData.niePassport &&
    formData.nationality &&
    formData.dateOfBirth &&
    formData.mobilePhone &&
    formData.email;
  const canSubmit = canProceedStep3 && formData.acceptedPrivacy;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Solicitar Cita de Extranjería
          </h1>
          <p className="text-lg text-gray-600">
            Completa el formulario y te contactaremos por WhatsApp para ayudarte
            con tu cita
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-between">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  step >= s
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                } font-semibold`}
              >
                {s}
              </div>
              {s < 4 && (
                <div
                  className={`h-1 w-16 ${step > s ? "bg-blue-600" : "bg-gray-200"} sm:w-24`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          {/* Step 1: Location */}
          {step === 1 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                1. Selecciona la Ubicación
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Provincia *
                  </label>
                  <select
                    value={formData.province}
                    onChange={(e) => {
                      updateField("province", e.target.value);
                      updateField("office", ""); // Reset office when province changes
                    }}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecciona una provincia</option>
                    {PROVINCES.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.province && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Oficina *
                    </label>
                    <select
                      value={formData.office}
                      onChange={(e) => updateField("office", e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecciona una oficina</option>
                      {getOfficesForProvince(formData.province).map(
                        (office) => (
                          <option key={office} value={office}>
                            {office}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-end">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!canProceedStep1}
                  variant="primary"
                  size="lg"
                >
                  Siguiente
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Procedure */}
          {step === 2 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                2. Selecciona el Trámite
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Tipo de Trámite *
                  </label>
                  <select
                    value={formData.procedure}
                    onChange={(e) => updateField("procedure", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecciona un trámite</option>
                    {PROCEDURES.map((procedure) => (
                      <option key={procedure} value={procedure}>
                        {procedure}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  onClick={() => setStep(1)}
                  variant="outline"
                  size="lg"
                >
                  Atrás
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!canProceedStep2}
                  variant="primary"
                  size="lg"
                >
                  Siguiente
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Personal Details */}
          {step === 3 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                3. Datos Personales
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="Ej: María García López"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    NIE/Pasaporte *
                  </label>
                  <input
                    type="text"
                    value={formData.niePassport}
                    onChange={(e) => updateField("niePassport", e.target.value)}
                    placeholder="Ej: X1234567Z o AB123456"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Nacionalidad *
                  </label>
                  <select
                    value={formData.nationality}
                    onChange={(e) => updateField("nationality", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecciona nacionalidad</option>
                    {NATIONALITIES.map((nationality) => (
                      <option key={nationality} value={nationality}>
                        {nationality}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Fecha de Nacimiento *
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateField("dateOfBirth", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Teléfono Móvil *
                  </label>
                  <input
                    type="tel"
                    value={formData.mobilePhone}
                    onChange={(e) => updateField("mobilePhone", e.target.value)}
                    placeholder="Ej: +34 612 345 678"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="whatsappSame"
                    checked={formData.whatsappSameAsMobile}
                    onChange={(e) =>
                      updateField("whatsappSameAsMobile", e.target.checked)
                    }
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="whatsappSame"
                    className="text-sm text-gray-700"
                  >
                    WhatsApp es el mismo número
                  </label>
                </div>

                {!formData.whatsappSameAsMobile && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsappPhone}
                      onChange={(e) =>
                        updateField("whatsappPhone", e.target.value)
                      }
                      placeholder="Ej: +34 612 345 678"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="Ej: maria@ejemplo.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Fecha Preferida para la Cita (Opcional)
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) =>
                      updateField("preferredDate", e.target.value)
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Fecha Límite si es Urgente (Opcional)
                  </label>
                  <input
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => updateField("deadline", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Comentarios Adicionales (Opcional)
                  </label>
                  <textarea
                    value={formData.comments}
                    onChange={(e) => updateField("comments", e.target.value)}
                    rows={4}
                    placeholder="Cualquier información adicional que quieras compartir..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  onClick={() => setStep(2)}
                  variant="outline"
                  size="lg"
                >
                  Atrás
                </Button>
                <Button
                  onClick={() => setStep(4)}
                  disabled={!canProceedStep3}
                  variant="primary"
                  size="lg"
                >
                  Siguiente
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                4. Confirmar Solicitud
              </h2>

              <div className="space-y-6">
                {/* Summary */}
                <div className="rounded-lg bg-blue-50 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">
                    Resumen de tu Solicitud
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">
                        Ubicación:
                      </span>
                      <p className="text-gray-900">
                        {formData.province} - {formData.office}
                      </p>
                    </div>

                    <div>
                      <span className="font-medium text-gray-700">
                        Trámite:
                      </span>
                      <p className="text-gray-900">{formData.procedure}</p>
                    </div>

                    <div>
                      <span className="font-medium text-gray-700">Nombre:</span>
                      <p className="text-gray-900">{formData.fullName}</p>
                    </div>

                    <div>
                      <span className="font-medium text-gray-700">
                        Teléfono:
                      </span>
                      <p className="text-gray-900">{formData.mobilePhone}</p>
                    </div>

                    <div>
                      <span className="font-medium text-gray-700">Email:</span>
                      <p className="text-gray-900">{formData.email}</p>
                    </div>
                  </div>
                </div>

                {/* Privacy Policy */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={formData.acceptedPrivacy}
                    onChange={(e) =>
                      updateField("acceptedPrivacy", e.target.checked)
                    }
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-700">
                    Acepto la{" "}
                    <a href="/privacidad" className="text-blue-600 underline">
                      Política de Privacidad
                    </a>{" "}
                    y autorizo el tratamiento de mis datos personales para
                    gestionar mi solicitud de cita. Entiendo que seré contactado
                    por WhatsApp.
                  </label>
                </div>

                {/* WhatsApp Notice */}
                <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <div>
                      <p className="font-medium text-green-900">
                        Te contactaremos por WhatsApp
                      </p>
                      <p className="mt-1 text-sm text-green-700">
                        Al enviar, se abrirá WhatsApp con tu solicitud
                        pre-cargada. Te responderemos lo antes posible para
                        ayudarte con tu cita.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  onClick={() => setStep(3)}
                  variant="outline"
                  size="lg"
                >
                  Atrás
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  variant="primary"
                  size="lg"
                >
                  Enviar Solicitud por WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            ¿Necesitas ayuda?{" "}
            <a
              href="https://wa.me/923221430630"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Contáctanos por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
