import { useState } from "react";
import styles from "./VisualizarPage.module.css";
import dados from "../../data/materiais.json";

export default function VisualizarPage() {
    const disciplinas = dados.disciplinas;

    const [disciplinaSelecionada, setDisciplinaSelecionada] = useState(null);

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Visualizar Disciplinas</h1>
            {!disciplinaSelecionada && (
                <div className={styles.lista}>
                    {disciplinas.map((disciplina) => (
                        <div key={disciplina.id} className={styles.card}>
                            <h2>{disciplina.nome}</h2>
                            <p>
                                {disciplina.materiais.length > 0
                                    ? `${disciplina.materiais.length} materiais disponíveis`
                                    : "Nenhum material disponível"}
                            </p>

                            <button
                                className={styles.botao}
                                onClick={() => setDisciplinaSelecionada(disciplina)}
                            >
                                Visualizar Materiais
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {disciplinaSelecionada && (
                <div className={styles.materiaisContainer}>
                    <button
                        className={styles.voltar}
                        onClick={() => setDisciplinaSelecionada(null)}
                    >
                        Voltar
                    </button>

                    <h2>{disciplinaSelecionada.nome}</h2>

                    {disciplinaSelecionada.materiais.length === 0 && (
                        <p>Essa disciplina ainda não possui materiais.</p>
                    )}

                    {disciplinaSelecionada.materiais.map((material) => (
                        <div key={material.id} className={styles.materialItem}>
                            <span>{material.titulo}</span>
                            <span>{material.tipo}</span>
                            <span>{material.dataPublicacao}</span>

                            <a href={material.arquivo} download>
                                Download
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
