import styles from "./DisciplinasPage.module.css";
import getDisciplinas from "../../services/disciplinasService";
import { useEffect, useState } from "react";

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
                <button className={styles.btnCriarDisciplina}></button>
            </div>
            <div className={styles.gridCards}>
                {/*<CardDisciplina />*/}
            </div>
        </div>
    );
}