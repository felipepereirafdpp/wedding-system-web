export const urlAPI = "http://casamento.runasp.net";

export async function buscarPresentes() {
    const response = await fetch(`${urlAPI}/api/presents`);

    if (!response.ok) {
        throw new Error("Erro ao buscar os presentes");
    }

    return await response.json();
}