import "./presenteScreen.css";
import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"
import { useNavigate } from "react-router-dom";
import { urlAPI } from "../../Services/api";
import { useEffect, useState } from "react";


export default function PresenteScreen() {
    const navigate = useNavigate();
    const [presentes, setPresentes] = useState([]);

    useEffect(() => {

        async function buscarPresentes() {
            try {
                const response = await fetch(`${urlAPI}/api/Presentes`);

                if (!response.ok) {
                    throw new Error("Erro ao buscar presentes");
                }

                const dados = await response.json();

                setPresentes(dados);

            } catch (error) {
                console.error(error);
            }
        }

        buscarPresentes();

    }, []);

    

    return (
        <section>

            <Header
                onNavigate={() => navigate("/")}
                cursor="pointer"
            />

            <main>
                <section className="containerPrincipal">
                    {presentes.map((presente) => (
                        <div key={presente.id}>
                            {presente.NamePresent}
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </section>
    );
}