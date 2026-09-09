'use client';

import { useNavigate } from 'react-router-dom';
import logoFooter from '../../Assets/images/logoFooter.png';
import "./footer.css";

export default function Footer(){
    const navigate = useNavigate();
    return(
        <section className="footer">
                <section className="conteudoFooter">
                    <section className="siglaFooter">
                        <img className="footerIMG" src={logoFooter} alt="Logo" />
                    </section>

                    <section className="containerFooter">
                        <section className="navegacao">
                            <h1>NAVEGAÇÃO</h1>
                            <h2><a href="#nossa-historia">Nossa História</a> </h2>
                            <h2><a href="#galeria">Galeria</a></h2>
                            <h2><a onClick={() => navigate("/presenteScreen")}>Presente</a></h2>
                        </section>

                        <section className="contato">
                            <h1>CONTATO</h1>
                            <h2>thaispastori@gmail.com</h2>
                            <h2>1699990000</h2>
                        </section>

                        <section className="presentes">
                            <h1>LISTA DE PRESENTES</h1>
                            <a onClick={() => navigate("/presenteScreen")}>Ver lista de presentes ➝</a>
                        </section>
                    </section>
                </section>


                <section className="baseFooter">
                    <hr className="linhaFooter" />
                    <p className="direitos">© 2026  Desenvolvido por EvoCode </p>
                </section>
            </section>
    )
}

