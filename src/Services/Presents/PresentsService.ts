
import type { IMercadoPago } from "../../interface/IMercadoPago";
import type { IPresents } from "../../interface/IPresents";
import type { IProduto } from "../../interface/IProduto";
import { urlAPI } from "../api";
import {urlAPIMERCADOPAGO} from "../api"


export async function SearchPresents(): Promise <IPresents[]> {
    const resposta = await urlAPI.get("/presents")
    console.log(resposta.status)

    return resposta.data
}
export async function SearchPresentsId(id:string) : Promise <IPresents> {
    const resposta = await urlAPI.get("/presents/"+id)
    console.log(resposta.status)
    return resposta.data
}
export async function PostMercadoPagoAPI(id:IProduto) : Promise <IMercadoPago>{
    const resposta = await urlAPIMERCADOPAGO.post(`/checkout/${id.id}`);
    console.log(resposta.data)
    return resposta.data
}
