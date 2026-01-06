"use client";

import { useState, useEffect } from 'react';

export default function MadridClock() {
  const [time, setTime] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES', {
          timeZone: 'Europe/Madrid',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        setTime(timeString);
      } catch {
        // Fallback if time formatting fails
        setTime('--:--:--');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="text-sm">🇪🇸 Madrid</div>;

  return (
    <div className="text-sm text-right">
      <div className="text-gray-600">🇪🇸 Madrid</div>
      <div className="font-mono font-bold text-red-700">{time}</div>
    </div>
  );
}
