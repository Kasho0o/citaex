"use client";

import { useEffect, useState } from "react";

const SPANISH_DAYS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const SPANISH_MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export function MadridClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set initial time
    setTime(new Date());

    // Update every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) {
    // Return placeholder to prevent hydration mismatch
    return (
      <div className="flex flex-col items-end gap-0.5 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-lg">🇪🇸</span>
          <span className="font-semibold text-[#004A8F]">Madrid</span>
        </div>
        <div className="font-mono text-xs text-gray-600">--:--:--</div>
      </div>
    );
  }

  // Get Madrid time
  const madridTime = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(time);

  // Get Madrid date
  const madridDate = time.toLocaleString("es-ES", {
    timeZone: "Europe/Madrid",
  });
  const date = new Date(madridDate);
  const dayName = SPANISH_DAYS[date.getDay()];
  const day = date.getDate();
  const monthName = SPANISH_MONTHS[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className="hidden flex-col items-end gap-0.5 text-sm lg:flex">
      <div className="flex items-center gap-2">
        <span className="text-lg">🇪🇸</span>
        <span className="font-semibold text-[#004A8F]">Madrid</span>
      </div>
      <div className="font-mono text-base font-semibold text-[#C60B1E]">
        {madridTime}
      </div>
      <div className="text-xs text-gray-600">
        {dayName}, {day} {monthName} {year}
      </div>
    </div>
  );
}
