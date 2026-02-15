import styles from './CardDisciplina.module.css';

export default function CardDisciplina({ disc, onAbrirModalEdicao }) {

    return (
        <article className={styles.card}>
            <h2 className={styles.title}>{disc.nome}</h2>

            <div className={styles.info}>
                <p className={styles.codigo}><span className={styles.span}>Código:</span> {disc.codigo}</p>
                <p className={styles.alunos}><span className={styles.span}>Alunos:</span> {disc.alunosMatriculados}</p>
                <span className={disc.status === "ativa" ? styles.status : styles.statusInativa }><span className={styles.span}>Status:</span> {disc.status}</span>
            </div>

            <div className={styles.btns}>
                <button onClick={() => onAbrirModalEdicao(disc)} type={"button"} className={styles.btnEditar}>Editar</button>
            </div>
        </article>
    );
}