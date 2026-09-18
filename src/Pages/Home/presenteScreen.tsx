import "./presenteScreen.css";
import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"
import { useNavigate } from "react-router-dom";
import { urlAPI } from "../../Services/api";
import { useEffect, useState } from "react";
import type { IPresents } from "../../interface/IPresents";
import FuncoesTela from "../../Hooks/Presents/usePresents";


export default function PresenteScreen() {
    const navigate = useNavigate();
    const [presentes, setPresentes] = useState<IPresents[]>([]);

    async function BuscarDados() {
        const dados = await FuncoesTela().ListPresent();
        setPresentes(dados);
        console.log(dados);
    }

    useEffect(() => { BuscarDados() }, [])

    return (
        <section>
            <header>
                <Header
                    onNavigate={() => navigate("/")}
                    cursor="pointer"
                />
            </header>

            <main style={{ paddingTop: 100 }}>
                <section className="containerPrincipal">
                    <section className="cards">

                        {presentes.map((presente) => (
                            <div className="cardPresente" key={presente.id}>

                                <div className="cardImagem">
                                    <img
                                        src={`http://casamento.runasp.net${presente.urlFoto}`}
                                        alt={presente.namePresent}
                                    />
                                </div>

                                <div className="cardInfo">
                                    <h3>{presente.namePresent}</h3>
                                    <p className="preco">
                                        R$ {presente.pricePresent}
                                    </p>
                                    <button className="btnPresentear">
                                        Presentear
                                    </button>
                                </div>
                            </div>
                        ))}
                    </section>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
}