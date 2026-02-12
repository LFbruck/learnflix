import styles from './CardDisciplina.module.css';

export default function CardDisciplina({ nome, codigo, alunosMatriculados, status }) {
    return (
        <article className={styles.card}>
            <h2 className={styles.title}>{nome}</h2>

            <div className={styles.info}>
                <p className={styles.codigo}><span className={styles.span}>Código:</span> {codigo}</p>
                <p className={styles.alunos}><span className={styles.span}>Alunos:</span> {alunosMatriculados}</p>
                <span className={status === "ativa" ? styles.status : styles.statusInativa }><span className={styles.span}>Status:</span> {status}</span>
            </div>

            <div className={styles.btns}>

            </div>
        </article>
    );
}