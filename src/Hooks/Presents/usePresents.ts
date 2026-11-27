import type { IMercadoPago } from "../../interface/IMercadoPago";
import type { IProduto } from "../../interface/IProduto";
import { PostMercadoPagoAPI, SearchPresents, SearchPresentsId } from "../../Services/Presents/PresentsService";

export default function FuncoesTela(){

    async function ListPresent(){
        const resposta = await SearchPresents()
        return resposta;
    }
    async function  ListPresentId(id:string) {
        const resposta = await SearchPresentsId(id)
        return resposta;
    }
    async function PostMercadoPago(id:IProduto) : Promise<IMercadoPago>{
        const resposta = await PostMercadoPagoAPI(id)
        return resposta
    }
    return{
        ListPresent,
        ListPresentId,
        PostMercadoPago
    }

}