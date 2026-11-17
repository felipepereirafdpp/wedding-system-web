'use client';

import "./home.css";
import { useEffect, useState, useCallback } from "react";
import CountdownNumber from "./CountdownNumber";

import imgCasal1 from '../../Assets/images/Galeria1.jpg';
import imgCasal9 from '../../Assets/images/Galeria2.jpg';
import imgCasal3 from '../../Assets/images/Galeria3.jpg';
import imgCasal4 from '../../Assets/images/Galeria4.jpg';
import imgCasal5 from '../../Assets/images/Galeria5.jpg';
import imgCasal6 from '../../Assets/images/Galeria6.jpg';
import imgCasal7 from '../../Assets/images/Galeria7.jpg';
import imgCasal8 from '../../Assets/images/Galeria8.jpg';
import imgCasal2 from '../../Assets/images/Galeria9.jpg';
import imgCasal10 from '../../Assets/images/Galeria10.jpg';
import imgCasal11 from '../../Assets/images/Galeria11.jpg';
import imgCasal12 from '../../Assets/images/Galeria12.jpg';
import imgCasal13 from '../../Assets/images/Galeria12.jpg';
import Location from "./location";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import SplashScreen from "../../Components/SplashScreen/SplashScreen";

export default function HomePage() {

    const dataCasamento = new Date("2027-04-17T00:00:00");

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

    const [showSplash, setShowSplash] = useState(() => {
        return sessionStorage.getItem("splashShown") !== "true";
    });

    const handleSplashFinish = useCallback(() => {
        sessionStorage.setItem("splashShown", "true");
        setShowSplash(false);
    }, []);

    const abrirWhatsApp = () => {
        const numero = "5516997179656";
        const mensagem = "Olá!Gostaria de confirmara presença no casamento da Thais e do Jose .";

        const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.location.href = link;
    };

    const itemData = [
        { img: imgCasal1, title: 'Breakfast', orientation: 'portrait' },
        { img: imgCasal2, title: 'Burger', orientation: 'portrait' },
        { img: imgCasal3, title: 'Camera', orientation: 'portrait' },
        { img: imgCasal4, title: 'Coffee', orientation: 'landscape' },
        { img: imgCasal5, title: 'Hats', orientation: 'landscape' },
        { img: imgCasal6, title: 'Breakfast', orientation: 'landscape' },
        { img: imgCasal8, title: 'Burger', orientation: 'portrait' },
        { img: imgCasal9, title: 'Camera', orientation: 'portrait' },
        { img: imgCasal11, title: 'Hats', orientation: 'portrait' },
        { img: imgCasal12, title: 'Breakfast', orientation: 'portraitTall' },
        { img: imgCasal7, title: 'Breakfast', orientation: 'landscape' },
        { img: imgCasal10, title: 'Coffee', orientation: 'landscape' },
        { img: imgCasal13, title: 'Novo', orientation: 'landscape' },
    ];


    return (
        <>
            {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

            <main className="main">

                <section className="container">

                    <Header />


                    <section className="central">
                        <h2 className="messageHome">
                            VAMOS CELEBRAR O NOSSO AMOR
                        </h2>

                        <h1 className="name">
                            Thais & José Henrique
                        </h1>

                        <h2 className="day">
                            SÁBADO, 17 DE ABRIL DE 2027 - MATÃO, SP
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

                


                <section id="evento" className="events">

                    <div className="infoEvents">
                        <h3 className="textEvents">
                            SUA PRESENÇA É O NOSSO MAIOR PRESENTE
                        </h3>

                        <div className="second-block-Text">
                            <h2 className="titleEvents">
                                <span className="titleEventsMain">
                                    ESPERAMOS CELEBRAR COM VOCÊ
                                </span>
                                <span className="titleEventsDeadline">
                                    CONFIRME SUA PRESENÇA ATÉ 20 DE NOVEMBRO
                                </span>
                            </h2>
                            <p className="description">
                                Sua presença é muito importante para nós! <br />
                                Clique abaixo e confirme sua presença diretamente pelo WhatsApp. <br />
                                Será um prazer celebrar esse momento com você.
                            </p>
                        </div>

                        <button onClick={abrirWhatsApp} className="button-presence">
                            CONFIRMAR PRESENÇA
                        </button>
                    </div>

                    <div className="mapEvent">
                        <Location />
                    </div>

                </section>

                <section id="galeria" className="gallery">
                    <section className="headerGalery">
                        <h2 className="textGalery">GALERIA</h2>
                        <h1 className="titleGalery">UM POUCO DE NÓS</h1>
                    </section>
                    <section className="containerGalery">
                        <ImageList>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} className={`gItem ${item.orientation}`}>
                                    <img src={item.img} alt={item.title} loading="lazy" />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </section>
                </section>

                <Footer />


            </main>
        </>
    );
}

