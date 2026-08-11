import "./home.css";
import { useEffect, useState } from "react";
import CountdownNumber from "./CountdownNumber";
import iconImg from '../../Assets/images/icon.png';
import iconCasal from '../../Assets/images/IMG_4496.png';
import Location from "./location";


export default function HomePage() {
    const dataCasamento = new Date("2027-04-16T00:00:00");

    const [tempo, setTempo] = useState(
        dataCasamento.getTime() - Date.now()
    );

    useEffect(() => {
        const intervalo = setInterval(() => {
            const diferenca = dataCasamento.getTime() - Date.now();

            setTempo(diferenca);
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const dias = Math.floor(tempo / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempo / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((tempo / (1000 * 60)) % 60);
    const segundos = Math.floor((tempo / 1000) % 60);

    return (
        <main className="main">

            <section className="container">

                <section className="header">
                    <img
                        className="logo"
                        src="https://cdn.awsli.com.br/598/598767/produto/348894699/sua-logo-aqui-2-i3b0147lmi.png"
                        alt=""
                    />

                    <section className="menu">
                        <h2>NOSSA HISTÓRIA</h2>
                        <h2>GALERIA</h2>
                        <h2>PRESENTES</h2>
                        <button className="button">
                            CONFIRMAR PRESENÇA
                        </button>
                    </section>
                </section>

                <section className="central">

                    <h1 className="name">
                        Thais & José
                    </h1>

                    <h2 className="day">
                        SÁBADO, 16 DE ABRIL DE 2027 - MATÃO, SP
                    </h2>

                    <h2 className="messageHome">
                        “O amor não se vê com os olhos, mas com o coração”
                    </h2>

                    <section className="countdown">
                        <CountdownNumber value={dias.toString()} label="DIAS" />
                        <span className="separator">:</span>
                        <CountdownNumber value={horas.toString().padStart(2, "0")} label="HORAS" />
                        <span className="separator">:</span>
                        <CountdownNumber value={minutos.toString().padStart(2, "0")} label="MIN" />
                        <span className="separator">:</span>
                        <CountdownNumber value={segundos.toString().padStart(2, "0")} label="SEG" />
                    </section>
                </section>
            </section>

            <section>
                <section className="icon-details">
                    <img className="icon" src={iconImg} alt="Ícone de detalhes" />
                </section>
                <section className="story">
                    <img className="casal" src={iconCasal} alt="" />
                    <section className="text">
                        <h2 className="textTitle">NOSSA HISTÓRIA</h2>
                        <h1 className="titleStory">8 anos, um mesmo caminho</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, earum eligendi? Nemo, officiis. Unde ratione aspernatur vel qui quasi adipisci maxime fugit corporis enim porro, laborum aliquam ex nostrum deserunt fugiat. Laborum dolorum quod accusantium magnam excepturi tempora qui repudiandae deserunt </p>
                        <img className="imgText" src={iconImg} alt="ícone de detalhes" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem eius dolorum vitae repellendus ab optio adipisci. Animi molestiae deleniti, quaerat, alias porro officia dolore, optio ut maxime expedita veniam!</p>
                        <h2 className="nameCasal">Thais & José</h2>
                    </section>
                </section>
            </section>


            <section className="events">

    <section className="infoEvents">

        <h2 className="textEvents">
            SUA PRESENÇA É O NOSSO MAIOR PRESENTE
        </h2>
        <h1 className="titleEvents">
            CONFIRME COM A GENTE
            <br />
            ATÉ 20 DE NOVEMBRO
        </h1>
        <p className="description">
            Preencha o formulário rápido com seu nome,
            restrições alimentares e se vai levar acompanhante.
        </p>

    </section>

    <Location />

</section>


            <section className="gallery">
                <h2>Nossa história em fotos</h2>
            </section>

            <section className="gifts">
                <h2>Lista de presentes</h2>
            </section>

            <section className="footer">
                <h2>Esperamos você!</h2>
            </section>

        </main>
    );
}