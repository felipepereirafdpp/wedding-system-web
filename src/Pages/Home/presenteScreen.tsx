import "./presenteScreen.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { IPresents } from "../../interface/IPresents";
import FuncoesTela from "../../Hooks/Presents/usePresents";

export default function PresenteScreen() {
    const navigate = useNavigate();

    const [presentes, setPresentes] = useState<IPresents[]>([]);
    const [loading, setLoading] = useState(true);


    async function BuscarDados() {
        try {
            const dados = await FuncoesTela().ListPresent();

            setPresentes(dados);
            setLoading(false);

            console.log(dados);
        } catch (error) {
            console.error("Erro ao buscar presentes:", error);
        }
    }


    useEffect(() => {
        BuscarDados();
    }, []);

    return (
        <section className="paginaPresentes">

            <header>
                <Header
                    onNavigate={() => navigate("/")}
                    cursor="pointer"
                    
                />
            </header>

            {loading ? (
                <main className="loadingScreen">

                    <div className="loadingContent">

                        <div className="loadingContent">

                            <div className="loadingIcon">
                                <div className="ring ringA"></div>
                                <div className="ring ringB"></div>
                                <div className="ringGlow"></div>
                            </div>

                            <h2>Carregando presentes</h2>

                            <div className="loadingDots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                        </div>

                    </div>

                </main>
            ) : (
                <main className="presentesMain">

                    <section className="containerPrincipal">

                        <section className="cards">

                            {presentes.map((presente) => (
                                <div
                                    className="cardPresente"
                                    key={presente.id}
                                >

                                    <div className="cardImagem">
                                        <img
                                            src={`http://casamento.runasp.net${presente.urlFoto}`}
                                            alt={presente.namePresent}
                                        />
                                    </div>

                                    <div className="cardInfo">

                                        <h3>
                                            {presente.namePresent}
                                        </h3>

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
            )}

            <footer>
                <Footer />
            </footer>

        </section>
    );
}

