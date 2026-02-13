import styles from "./ModalDisciplina.module.css";

export default function ModalDisciplina({ onClose }) {
    return (
        <div onClick={onClose} className={styles.overlay}>
            <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
                <button onClick={onClose} className={styles.btnFechar}>
                    x
                </button>

                <h2>Criar Disciplina</h2>

                <div className={styles.acoes}>
                    <button onClick={onClose}>Cancelar</button>
                    <button>Salvar</button>
                </div>
            </div>
        </div>
    );
}