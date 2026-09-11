import axios from "axios";

export const urlAPI = axios.create({
    baseURL: "http://casamento.runasp.net/api"
});