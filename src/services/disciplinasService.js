export default async function getDisciplinas() {
    const response = await fetch("/data/mock-disciplinas.json");

    if (!response.ok) {
        throw new Error("Erro ao buscar disciplinas");
    }

    return response.json();
}