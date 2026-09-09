'use client';
import "./header.css";
import { useNavigate } from "react-router-dom";

interface headerProp {
    onNavigate?: () => void;
    cursor?: string; 
}

export default function header({ onNavigate, cursor }: headerProp) {

    const navigate = useNavigate();
    return (
        <section className="header">

            <img 
                className="logo"
                src="https://cdn.awsli.com.br/598/598767/produto/348894699/sua-logo-aqui-2-i3b0147lmi.png"
                alt=""
                onClick={onNavigate}
                style={{
                    cursor: cursor
                }}
            />


            <section className="menu">
                
                <a href="#nossa-historia">NOSSA HISTÓRIA</a>
                <a href="#galeria">GALERIA</a>
                <a onClick={() => navigate("/presenteScreen")}>PRESENTES</a>

                <button onClick={() => document.getElementById("evento")?.scrollIntoView()} className="button"> CONFIRMAR PRESENÇA</button>
            </section>
        </section>
    )
}