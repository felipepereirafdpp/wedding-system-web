import { useEffect, useRef, useState } from "react";
import "./CountdownNumber.css";

interface CountdownNumberProps {
    value: string;
    label: string;
}

/**
 * Exibe um número do contador (dias/horas/min/seg) com uma animação
 * de "virada de folha" (calendário/placar antigo) sempre que `value` muda.
 *
 * Não contém nenhuma lógica de contagem — apenas recebe o valor já
 * calculado e cuida exclusivamente da animação visual.
 */
export default function CountdownNumber({ value, label }: CountdownNumberProps) {
    const [displayValue, setDisplayValue] = useState(value);
    const [previousValue, setPreviousValue] = useState(value);
    const [isFlipping, setIsFlipping] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (value === displayValue) return;

        setPreviousValue(displayValue);
        setDisplayValue(value);
        setIsFlipping(true);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setIsFlipping(false);
        }, 500);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <div className="countdownItem">
            <div className="numberFlip">
                {/* placa de trás: já mostra o valor novo */}
                <span className="numberPlate numberPlate--back">{displayValue}</span>

                {/* placa da frente: mostra o valor antigo e "cai" revelando o de trás */}
                {isFlipping && (
                    <span
                        className="numberPlate numberPlate--front numberPlate--flipping"
                        aria-hidden="true"
                    >
                        {previousValue}
                    </span>
                )}
            </div>
            <small>{label}</small>
        </div>
    );
}