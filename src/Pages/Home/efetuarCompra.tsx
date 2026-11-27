import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { IPresents } from "../../interface/IPresents";
import FuncoesTela from "../../Hooks/Presents/usePresents";
import "./efetuarCompra.css"



export default function EfetuarPagemnto() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [presente, setPresente] = useState<IPresents>();
    const [loading, setLoading] = useState(true);
    

    const fechar = () => navigate("/presenteScreen");

    useEffect(() => {
        async function buscar() {
            try {
                if (!id) return;
                setPresente(await FuncoesTela().ListPresentId(id));
            } catch (error) {
                console.error("Erro ao buscar o presente:", error);
            } finally {
                setLoading(false); // some o spinner mesmo se der erro
            }
        }
        buscar();
    }, [id]);

    // fecha com ESC e trava a rolagem da página de fundo
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") navigate("/presenteScreen");
        };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [navigate]);


    if (loading) {
        return (
            <div className="modalOverlay">
                <div className="spinnerBox">
                    <div className="spinner"></div>
                </div>
            </div>
        );
    }


    async function TelaMercadoPago() {
    try {
        const dados = await FuncoesTela().PostMercadoPago({
            id: id
        });

        if (dados.checkoutUrl) {
            window.location.href = dados.checkoutUrl;
        }
    } catch (error) {
        console.error("Erro ao iniciar pagamento:", error);
    }
}



    return (
        <div className="modalOverlay" onClick={fechar}>

            <div
                className="box-detalhe-produto"
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="btnFechar" onClick={fechar} aria-label="Fechar">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>

                <div className="detalheImagem">
                    {presente?.urlFoto && (
                        <img
                            src={`http://casamento.runasp.net${presente.urlFoto}`}
                            alt={presente.namePresent}
                        />
                    )}
                </div>

                <div className="detalheInfo">
                    <span className="detalheEyebrow">Presente</span>
                    <h1>{presente?.namePresent}</h1>
                    <p className="detalhePreco">
                        <small>R$</small> {presente?.pricePresent}
                    </p>
                    <p className="detalheDescricao">{presente?.descriptionPresent}</p>

                    <button className="btnConfirmarPresente" onClick={() => TelaMercadoPago()}>Presentear</button>
                </div>
            </div>
        </div>
    );
}