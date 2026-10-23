'use client';

import "./home.css";
import { useEffect, useState, useCallback, useRef } from "react";
import CountdownNumber from "./CountdownNumber";

import imgCasal1 from '../../Assets/images/Galeria1.jpg';
import imgCasal2 from '../../Assets/images/Galeria2.jpg';
import imgCasal3 from '../../Assets/images/Galeria3.jpg';
import imgCasal4 from '../../Assets/images/Galeria4.jpg';
import imgCasal5 from '../../Assets/images/Galeria5.jpg';
import imgCasal6 from '../../Assets/images/Galeria6.jpg';
import imgCasal7 from '../../Assets/images/Galeria7.jpg';
import imgCasal8 from '../../Assets/images/Galeria8.jpg';
import imgCasal9 from '../../Assets/images/Galeria9.jpg';
import imgCasal10 from '../../Assets/images/Galeria10.jpg';
import imgCasal11 from '../../Assets/images/Galeria11.jpg';
import imgCasal12 from '../../Assets/images/Galeria12.jpg';
import Location from "./location";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import SplashScreen from "../../Components/SplashScreen/SplashScreen";

export default function HomePage() {
    
    const tlRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const root = tlRef.current;
        if (!root) return;

        const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
        let io: IntersectionObserver | undefined;

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((e) => {
                        if (e.isIntersecting) {
                            e.target.classList.add("is-visible");
                            observer.unobserve(e.target);
                        }
                    });
                },
                { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
            );
            items.forEach((el) => observer.observe(el));
            io = observer;
        } else {
            items.forEach((el) => el.classList.add("is-visible"));
        }

        const track = root.querySelector<HTMLElement>(".tl-track");
        let raf = 0;

        const update = () => {
            if (!track) return;
            const r = track.getBoundingClientRect();
            const p = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height));
            root.style.setProperty("--prog", p.toFixed(4));
        };

        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            if (io) io.disconnect();
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);
    const marcos = [
        { ano: "2019", titulo: "Nos conhecemos", texto: "Onde tudo começou.", img: imgCasal1 },
        { ano: "2021", titulo: "Primeira viagem", texto: "Nosso primeiro destino juntos.", img: imgCasal2 },
        { ano: "2024", titulo: "Moramos juntos", texto: "Um lar para dividir.", img: imgCasal3 },
        { ano: "2026", titulo: "O pedido", texto: "E a resposta foi sim.", img: imgCasal4 },
    ];
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
        {
            img: imgCasal1,
            title: 'Breakfast',
        },
        {
            img: imgCasal2,
            title: 'Burger',
        },
        {
            img: imgCasal3,
            title: 'Camera',
        },
        {
            img: imgCasal4,
            title: 'Coffee',
        },
        {
            img: imgCasal5,
            title: 'Hats',
        },
        {
            img: imgCasal6,
            title: 'Breakfast',
        }, {
            img: imgCasal7,
            title: 'Breakfast',
        },
        {
            img: imgCasal8,
            title: 'Burger',
        },
        {
            img: imgCasal9,
            title: 'Camera',
        },
        {
            img: imgCasal10,
            title: 'Coffee',
        },
        {
            img: imgCasal11,
            title: 'Hats',
        },
        {
            img: imgCasal12,
            title: 'Breakfast',
        }


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

                {/* <section id="nossa-historia" ref={tlRef} className="tl-section">
                    <header className="tl-head" data-reveal>
                        <span className="tl-eyebrow">NOSSA HISTÓRIA</span>
                        <h2 className="tl-title">
                            8 anos, <span>um mesmo caminho</span>
                        </h2>
                    </header>

                    <div className="tl-track">
                        <span className="tl-line" aria-hidden="true" />
                        <span className="tl-line-fill" aria-hidden="true" />

                        <ol className="tl-list">
                            {marcos.map((m, i) => (
                                <li
                                    key={m.ano}
                                    className={`tl-item ${i % 2 ? "tl-item--right" : ""}`}
                                    data-reveal
                                >
                                    <span className="tl-dot" aria-hidden="true" />
                                    <figure className="tl-photo">
                                        <img src={m.img} alt={m.titulo} loading="lazy" />
                                    </figure>
                                    <div className="tl-info">
                                        <span className="tl-year">{m.ano}</span>
                                        <span className="tl-name">{m.titulo}</span>
                                        {m.texto && <span className="tl-text">{m.texto}</span>}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="tl-finale" data-reveal>
                        <div className="tl-rings" aria-hidden="true">
                            <span className="tl-ring tl-ring--left" />
                            <span className="tl-ring tl-ring--right" />
                        </div>

                        <span className="tl-finale-label">O GRANDE DIA</span>
                        <time className="tl-finale-date" dateTime="2027-04-16">
                            17 · 04 · 2027
                        </time>
                    </div>
                </section> */}


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
                        <h1 className="titleGalery">ALGUNS MOMENTOS NOSSOS</h1>
                    </section>
                    <section className="containerGalery">
                        <ImageList
                            variant="masonry"
                            cols={5}
                            gap={12}
                            sx={{
                                width: '100%',
                                margin: 0,
                            }}
                        >
                            {itemData.map((item, index) => (
                                <ImageListItem
                                    key={`${item.img}-${index}`}
                                    sx={{ width: '100%' }}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            display: 'block',
                                            borderRadius: '4px',
                                        }}
                                    />
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

