import "./home.css";
import { useEffect, useState } from "react";
import CountdownNumber from "./CountdownNumber";
import iconImg from '../../Assets/images/icon.png';
import iconCasal from '../../Assets/images/IMG_4496.png'
import imgCasal1 from '../../Assets/images/img1.webp';
import imgCasal2 from '../../Assets/images/img2.webp';
import imgCasal3 from '../../Assets/images/img3.webp';
import imgCasal4 from '../../Assets/images/img4.webp';
import imgCasal5 from '../../Assets/images/img5.webp';
import logoFooter from '../../Assets/images/logoFooter.png';
import Location from "./location";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


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


    ];


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
                        <a href="#nossa-historia">NOSSA HISTÓRIA</a>
                        <a href="#galeria">GALERIA</a>
                        <a href="#presentes">PRESENTES</a>

                        <button onClick={() => document.getElementById("evento")?.scrollIntoView()} className="button"> CONFIRMAR PRESENÇA</button>
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

            <section id="nossa-historia">
                <div className="icon-details">
                    <img className="icon" src={iconImg} alt="Ícone de detalhes" />
                </div>
                <section className="story">


                    <img className="casal" src={iconCasal} alt="" />

                    <section className="text">
                        <h2 className="textTitle">NOSSA HISTÓRIA</h2>
                        <h1 className="titleStory">8 anos, um  mesmo <br /> caminho</h1>
                        <div className="textHistory">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, earum eligendi? Nemo, officiis. Unde ratione aspernatur vel qui quasi adipisci maxime fugit corporis enim porro, laborum aliquam ex nostrum deserunt fugiat. </span>
                            <img className="imgText" src={iconImg} alt="ícone de detalhes" />
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem eius dolorum vitae repellendus ab option,.</span>
                        </div>
                        <h2 className="nameCasal">Thais & José</h2>
                    </section>

                </section>
            </section>


            <section id="evento" className="events">

                <div className="infoEvents">
                    <h3 className="textEvents">
                        SUA PRESENÇA É O NOSSO MAIOR PRESENTE
                    </h3>

                    <div className="second-block-Text">
                        <h1 className="titleEvents">
                            ESPERAMOS CELEBRAR COM VOCÊ
                            <br />
                            CONFIRME SUA PRESENÇA ATÉ 20 DE NOVEMBRO
                        </h1>
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
                    <h2 className="textGalery">REGISTROS</h2>
                    <h1 className="titleGalery">ALGUNS MOMENTOS NOSSOS</h1>
                </section>
                <section className="containerGalery">
                    <ImageList
                        variant="masonry"
                        cols={3}
                        sx={{
                            width: '100%',
                            height: '100%',
                            overflowY: 'hidden',
                            overflowX: 'auto',
                            padding: '8px',
                        }}
                    >
                        {itemData.map((item) => (
                            <ImageListItem
                                key={item.img}
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
                            <h2><a href="#presentes">Presente</a></h2>
                        </section>

                        <section className="contato">
                            <h1>CONTATO</h1>
                            <h2>thaispastori@gmail.com</h2>
                            <h2>1699990000</h2>
                        </section>

                        <section className="presentes">
                            <h1>LISTA DE PRESENTES</h1>
                            <h2>Ver lista de presentes ➝</h2>
                        </section>
                    </section>
                </section>

                {/* Divisão inferior */}
                <section className="baseFooter">
                    <hr className="linhaFooter" />
                    <p className="direitos">© 2026  Desenvolvido por EvoCode </p>
                </section>
            </section>

        </main>
    );
}

