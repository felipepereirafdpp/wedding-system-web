import { SearchPresents } from "../../Services/Presents/PresentsService";

export default function FuncoesTela(){

    async function ListPresent(){
        const resposta = await SearchPresents()
        return resposta;
    }

    return{
        ListPresent
    }

}