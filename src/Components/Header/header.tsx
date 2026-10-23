'use client';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

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
            <img
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9oRKSF-DOsDkBojDIu-1w5gKBywU0hR-4RMsDpMokqw&s=10"
                alt="Logo"
                onClick={onNavigate}
                style={{ cursor: cursor}}
            />

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