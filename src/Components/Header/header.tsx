'use client';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../Assets/images/Tipografia.png";

interface headerProp {
    onNavigate?: () => void;
    cursor?: string;
}

export default function Header({ onNavigate, cursor }: headerProp) {
    const navigate = useNavigate();
    const [aberto, setAberto] = useState(false);

    const fechar = () => setAberto(false);

    const irParaPresentes = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        fechar();
        navigate("/presenteScreen");
    };

    const irParaEvento = () => {
        fechar();
        document.getElementById("evento")?.scrollIntoView({ behavior: "smooth" });
    };

    // fecha com Esc e quando a tela volta para o tamanho de desktop
    useEffect(() => {
        const aoTeclar = (e: KeyboardEvent) => {
            if (e.key === "Escape") fechar();
        };
        const aoRedimensionar = () => {
            if (window.innerWidth > 860) fechar();
        };
        window.addEventListener("keydown", aoTeclar);
        window.addEventListener("resize", aoRedimensionar);
        return () => {
            window.removeEventListener("keydown", aoTeclar);
            window.removeEventListener("resize", aoRedimensionar);
        };
    }, []);

    return (
        <header className="header">
            <div
                className="brand"
                role="button"
                tabIndex={0}
                aria-label="Início"
                onClick={onNavigate}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') onNavigate?.();
                }}
                style={{ cursor: cursor }}
            >
    
                <span className="brandText" aria-hidden="true">
                    <span className="brandLetter">T</span>

                    <svg className="brandSprig" viewBox="0 0 100 70">
                        <defs>
                            <path id="leaf" d="M0 0 C3 -4.5 9 -4.5 14 0 C9 4.5 3 4.5 0 0Z" />
                        </defs>

                        {/* haste */}
                        <path className="sprigStem" d="M92 62 Q50 40 8 10" />

                        {/* folhas viradas pra cima */}
                        <use href="#leaf" transform="translate(75 53) rotate(-104)" />
                        <use href="#leaf" transform="translate(58 43) rotate(-104)" />
                        <use href="#leaf" transform="translate(42 33) rotate(-104)" />
                        <use href="#leaf" transform="translate(25 22) rotate(-104)" />

                        {/* folhas viradas pra esquerda */}
                        <use href="#leaf" transform="translate(75 53) rotate(-194)" />
                        <use href="#leaf" transform="translate(58 43) rotate(-194)" />
                        <use href="#leaf" transform="translate(42 33) rotate(-194)" />
                        <use href="#leaf" transform="translate(25 22) rotate(-194)" />

                        {/* folha da ponta */}
                        <use href="#leaf" transform="translate(8 10) rotate(-149)" />
                    </svg>

                    <span className="brandLetter">JH</span>
                </span>
            </div>


            <button
                type="button"
                className={`hamburger ${aberto ? "open" : ""}`}
                onClick={() => setAberto((v) => !v)}
                aria-label={aberto ? "Fechar menu" : "Abrir menu"}
                aria-expanded={aberto}
                aria-controls="menu-principal"
            >
                <span />
                <span />
                <span />
            </button>

            <nav
                id="menu-principal"
                className={`menu ${aberto ? "open" : ""}`}
                aria-label="Menu principal"
            >
                <a href="#galeria" onClick={fechar}>GALERIA</a>
                <a href="/presenteScreen" onClick={irParaPresentes}>PRESENTES</a>

                <button type="button" onClick={irParaEvento} className="button">
                    CONFIRMAR PRESENÇA
                </button>
            </nav>
        </header>
    );
}