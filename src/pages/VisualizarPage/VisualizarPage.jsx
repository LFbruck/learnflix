import styles from "./VisualizarPage.module.css";
import dados from "../../data/materiais.json";

export default function VisualizarPage() {
    const disciplinas = dados.disciplinas;

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Visualizar Disciplinas</h1>

            <div className={styles.lista}>
                {disciplinas.map((disciplina) => (
                    <div key={disciplina.id} className={styles.card}>
                        <h2>{disciplina.nome}</h2>

                        <p>
                            {disciplina.materiais.length > 0 ?  `${disciplina.materiais.length} materiais disponíveis`
                                : "Nenhum material disponível"}
                        </p>

                        <button className={styles.botao}>
                            Acessar Materiais
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}