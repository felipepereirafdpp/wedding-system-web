import { useEffect, useMemo, useState } from "react";

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isExpired: boolean;
}

/**
 * Recebe uma data alvo (Date) e retorna a contagem regressiva
 * atualizada a cada segundo, já quebrada em dias/horas/min/seg.
 */
export function useCountdown(targetDate: Date | null): CountdownParts {
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    if (!targetDate) return;

    // atualiza a cada segundo
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return useMemo(() => {
    if (!targetDate) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0, isExpired: true };
    }

    const totalMs = Math.max(targetDate.getTime() - now, 0);
    const isExpired = totalMs <= 0;

    const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalMs / (1000 * 60)) % 60);
    const seconds = Math.floor((totalMs / 1000) % 60);

    return { days, hours, minutes, seconds, totalMs, isExpired };
  }, [targetDate, now]);
}
