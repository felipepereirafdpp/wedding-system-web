import "./presenteScreen.css";
import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"
import { useNavigate } from "react-router-dom";

export default function PresenteScreen() {
    const navigate = useNavigate();
    return (
        <section>

            <Header 
            onNavigate={() => navigate("/")}
            cursor="pointer"
            />

            <main>
                <section className="containerPrincipal">
                    <h1></h1>
                </section>
            </main>
            <Footer />
        </section>
    );
}