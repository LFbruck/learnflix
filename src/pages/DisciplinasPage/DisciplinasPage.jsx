import styles from "./DisciplinasPage.module.css";
import getDisciplinas from "../../services/disciplinasService";
import { useEffect, useState } from "react";
import { CardDisciplina } from "../../components";

export default function DisciplinasPage() {
    const [disciplinas, setDisciplinas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function carregarDisciplinas() {
        try {
            const data = await getDisciplinas();
            console.log("Dados carregados: ", data);
            setDisciplinas(data.disciplinas);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        carregarDisciplinas();
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <h1 className={styles.title}>Disciplinas</h1>
                <button className={styles.btnCriarDisciplina}>Criar Disciplina</button>
            </div>
            {loading ? (
                <p>Carregando Disciplinas...</p>
            ) : (
                <div className={styles.gridCards}>
                    {error ? (
                        <p>Erro ao carregar disciplinas: {error}</p>
                    ) : (
                        disciplinas.filter(d => d.status).length === 0 ? (
                                <p>Nenhuma disciplina ativa no momento. Clique em "Criar Disciplina" para começar.</p>
                            ) : (
                                disciplinas
                                    .filter(d => d.status)
                                    .map(disc => <CardDisciplina key={disc.id} {...disc}/>)
                            ))}
                </div>
            )}
        </div>
    );
}