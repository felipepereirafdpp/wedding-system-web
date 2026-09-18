
import type { IPresents } from "../../interface/IPresents";
import { urlAPI } from "../api";


export async function SearchPresents(): Promise <IPresents[]> {
    const resposta = await urlAPI.get("/presents")
    console.log(resposta.status)

    return resposta.data
}