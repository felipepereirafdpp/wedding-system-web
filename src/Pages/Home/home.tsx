import "./home.css"


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



            <section className="story"> 
                <h2>Nossa história</h2>
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