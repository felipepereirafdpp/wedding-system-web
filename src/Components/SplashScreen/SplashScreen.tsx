import "./splashScreen.css";
import { useEffect, useState } from "react";

interface SplashScreenProps {
    onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        const leaveTimer = setTimeout(() => setIsLeaving(true), 4800);
        const finishTimer = setTimeout(() => onFinish(), 5500);

        return () => {
            clearTimeout(leaveTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    return (
        <div className={`splashScreen ${isLeaving ? "splashLeaving" : ""}`}>

            <div className="frameWrapper">

                <svg
                    className="frameSvg"
                    viewBox="0 0 220 170"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <ellipse
                        className="frameEllipse"
                        cx="110"
                        cy="85"
                        rx="100"
                        ry="65"
                    />
                </svg>

                <div className="frameContent">
                    <h1 className="frameMonogram">T & J</h1>
                    <span className="frameLine"></span>
                    <p className="frameDate">16 . 04 . 2027</p>
                </div>

            </div>

        </div>
    );
}