import axios from "axios";

export const urlAPI = axios.create({
    baseURL: "http://casamento.runasp.net/api"
});
export const urlAPIMERCADOPAGO = axios.create({
    baseURL: "http://casamento.runasp.net/api/Payments/"
})