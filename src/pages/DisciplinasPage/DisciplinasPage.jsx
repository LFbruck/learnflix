import styles from "./DisciplinasPage.module.css";
import getDisciplinas from "../../services/disciplinasService";
import { useEffect, useState } from "react";
import { CardDisciplina } from "../../components";
import ModalDisciplina from "../../components/ModalDisciplina";

export default function DisciplinasPage() {
    const [disciplinas, setDisciplinas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [termoBusca, setTermoBusca] = useState("");
    const [modalAberto, setModalAberto] = useState(false);

    const disciplinasFiltradas = disciplinas.filter(disc =>
        disc.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
        disc.codigo?.toLowerCase().includes(termoBusca.toLowerCase())
    );

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

    function abrirModal() {
        setModalAberto(true);
    }

    function fecharModal() {
        setModalAberto(false);
    }

    useEffect(() => {
        carregarDisciplinas();
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Disciplinas</h1>

            <div className={styles.containerBusca}>
                <input
                    type="text"
                    placeholder="Digite o nome ou código da disciplina..."
                    value={termoBusca}
                    onChange={e => setTermoBusca(e.target.value)}
                    className={styles.inputBusca}
                />

                <button onClick={abrirModal} className={styles.btnCriarDisciplina}>Criar Disciplina</button>
            </div>

            {modalAberto && (
                <ModalDisciplina onClose={fecharModal} disciplinas={disciplinas}/>
            )}

            {loading ? (
                <p>Carregando Disciplinas...</p>
            ) : (
                <div className={styles.gridCards}>
                    {error ? (
                        <p>Erro ao carregar disciplinas: {error}</p>
                    ) : disciplinasFiltradas.length === 0 ? (
                        <p>Nenhuma disciplina encontrada.</p>
                    ) : (
                        disciplinasFiltradas.map(disc => (
                            <CardDisciplina key={disc.id} {...disc} />
                        ))
                    )}
                </div>
            )}
        </div>
    );
}