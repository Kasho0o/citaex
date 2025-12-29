// Spanish provinces with immigration offices
export const PROVINCES = [
  "A Coruña",
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
  "Islas Baleares",
  "Jaén",
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

// Common procedure types
export const PROCEDURE_TYPES = [
  "ASIGNACIÓN DE NIE",
  "TOMA DE HUELLAS (EXPEDICIÓN DE TARJETA)",
  "RECOGIDA DE TARJETA DE IDENTIDAD DE EXTRANJERO (TIE)",
  "CERTIFICADO DE REGISTRO DE CIUDADANO DE LA UE",
  "CARTA DE INVITACIÓN",
  "AUTORIZACIÓN DE REGRESO",
  "CERTIFICADOS (DE RESIDENCIA, DE NO RESIDENCIA Y DE CONCORDANCIA)",
  "SOLICITUD DE ASILO",
  "RENOVACIÓN DE AUTORIZACIÓN",
  "PRÓRROGA DE ESTANCIA",
  "REAGRUPACIÓN FAMILIAR",
] as const;

// Plan types
export const PLANS = {
  FREE: "free",
  PRO: "pro",
  PREMIUM: "premium",
} as const;

// Plan limits
export const PLAN_LIMITS = {
  [PLANS.FREE]: {
    searches: 1,
    checkInterval: 300, // 5 minutes
    alerts: ["email"],
  },
  [PLANS.PRO]: {
    searches: 5,
    checkInterval: 60, // 1 minute
    alerts: ["email", "telegram"],
  },
  [PLANS.PREMIUM]: {
    searches: Infinity,
    checkInterval: 30, // 30 seconds
    alerts: ["email", "telegram", "sms"],
  },
} as const;

// Alert types
export const ALERT_TYPES = {
  AVAILABILITY: "availability",
  VERIFICATION: "verification",
  ERROR: "error",
} as const;

// Check status
export const CHECK_STATUS = {
  SUCCESS: "success",
  ERROR: "error",
  NO_SLOTS: "no_slots",
} as const;
