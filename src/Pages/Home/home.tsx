import "./home.css"
import iconImg from '../../Assets/images/icon.png';


export default function HomePage() {

    return (

        <main className="main">


            <section className="container">
                <section className="header">
                    <img className="logo" src="https://cdn.awsli.com.br/598/598767/produto/348894699/sua-logo-aqui-2-i3b0147lmi.png" alt="" />
                    <section className="menu">
                        <h2>NOSSA HISTÓRIA</h2>
                        <h2>GALERIA</h2>
                        <h2>PRESENTES</h2>
                        <button className="button">CONFIRMAR PRESENÇA</button>
                    </section>
                </section>
                <section className="central">
                    <h1 className="name">Thais & José</h1>
                    <h2 className="day">SÁBADO, 16 DE ABRIL DE 2027 - MATÃO, SP</h2>
                    <h2 className="messageHome">“O amor não se vê com os olhos, mas com o coração”</h2>
                </section>

            </section>
                <section className="icon-details">
                    <img className="icon" src={iconImg} alt="Ícone de detalhes" />
                </section>
                <section className="story">
                    <img className="casal" src="https://media.discordapp.net/attachments/1007462190095278201/1532084542314381394/IMG_4496.png?ex=6a7816ab&is=6a76c52b&hm=d9ab92bf2451b8d16114bd70a696b8394d3a3169e6f9a1fb95535fd52a180871&=&format=webp&quality=lossless&width=474&height=640" alt="" />
                    <section className="text">
                        <h2 className="textTitle">NOSSA HISTÓRIA</h2>
                        <h1 className="titleStory">8 anos, um mesmo caminho</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, earum eligendi? Nemo, officiis. Unde ratione aspernatur vel qui quasi adipisci maxime fugit corporis enim porro, laborum aliquam ex nostrum deserunt fugiat. Laborum dolorum quod accusantium magnam excepturi tempora qui repudiandae deserunt </p>
                        <img className="imgText" src={iconImg} alt="ícone de detalhes" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem eius dolorum vitae repellendus ab optio adipisci. Animi molestiae deleniti, quaerat, alias porro officia dolore, optio ut maxime expedita veniam!</p>
                        <h2 className="nameCasal">Thais & José</h2>
                    </section>
            </section>

            <section className="events">
                <h2>Cerimônia e Recepção</h2>
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