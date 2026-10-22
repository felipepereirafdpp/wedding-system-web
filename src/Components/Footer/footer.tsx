'use client';

import { useNavigate } from 'react-router-dom';
import logoFooter from '../../Assets/images/logoFooter.png';
import "./footer.css";

export default function Footer() {
    const navigate = useNavigate();

    const irParaPresentes = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate("/presenteScreen");
    };

    return (
        <footer className="footer">
            <div className="conteudoFooter">
                <div className="siglaFooter">
                    <img className="footerIMG" src={logoFooter} alt="Logo" />
                </div>

                <div className="containerFooter">
                    <nav className="navegacao" aria-label="Navegação do rodapé">
                        <h2 className="tituloFooter">NAVEGAÇÃO</h2>
                        <ul className="listaFooter">
                            <li><a href="#nossa-historia">Nossa História</a></li>
                            <li><a href="#galeria">Galeria</a></li>
                            <li><a href="/presenteScreen" onClick={irParaPresentes}>Presente</a></li>
                        </ul>
                    </nav>

                    <div className="contato">
                        <h2 className="tituloFooter">CONTATO</h2>
                        <ul className="listaFooter">
                            <li><a href="mailto:thaispastori@gmail.com">thaispastori@gmail.com</a></li>
                            <li><a href="tel:1699990000">1699990000</a></li>
                        </ul>
                    </div>

                    <div className="presentes">
                        <h2 className="tituloFooter">LISTA DE PRESENTES</h2>
                        <a className="linkPresentes" href="/presenteScreen" onClick={irParaPresentes}>
                            Ver lista de presentes ➝
                        </a>
                    </div>
                </div>
            </div>

            <div className="baseFooter">
                <hr className="linhaFooter" />
                <p className="direitos">© 2026 Desenvolvido por EvoCode</p>
            </div>
        </footer>
    );
}