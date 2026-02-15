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
    const [disciplinaParaEditar, setDisciplinaParaEditar] = useState();

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

    function adicionarDisciplina(novaDisciplina) {
        setDisciplinas([...disciplinas, novaDisciplina]);
    }

    function atualizarDisciplina(disciplinaAtualizada) {
        setDisciplinas(disciplinas.map(disc => disc.id === disciplinaAtualizada.id ? disciplinaAtualizada : disc));
        fecharModal();
    }

    function abrirModalCriacao() {
        setModalAberto(true);
    }

    function abrirModalEdicao(disciplina) {
        setDisciplinaParaEditar(disciplina);
        setModalAberto(true);
    }

    function fecharModal() {
        setModalAberto(false);
    }

    function toggleStatus(id) {
        const disciplinaStatus = disciplinas.map(disc => {
            if (disc.id === id) {
                return {
                    ...disc,
                    status: disc.status === "ativa" ? "inativa" : "ativa"
                };
            }
            return disc;
        });

        setDisciplinas(disciplinaStatus);
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

                <button onClick={abrirModalCriacao} className={styles.btnCriarDisciplina}>Criar Disciplina</button>
            </div>

            {modalAberto && (
                <ModalDisciplina
                    onClose={fecharModal}
                    adicionarDisciplina={adicionarDisciplina}
                    disciplinaParaEditar={disciplinaParaEditar}
                    onAtualizarDisciplina={atualizarDisciplina}
                />
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
                            <CardDisciplina
                                key={disc.id}
                                disc={disc}
                                onAbrirModalEdicao={abrirModalEdicao}
                                onToggleStatus={toggleStatus}/>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}