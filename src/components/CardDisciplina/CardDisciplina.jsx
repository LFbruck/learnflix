import styles from './CardDisciplina.module.css';

export default function CardDisciplina({ nome, codigo, alunosMatriculados, status }) {
    return (
        <article className={styles.card}>
            <h2 className={styles.title}>{nome}</h2>

            <div className={styles.info}>
                <p className={styles.codigo}>Código: {codigo}</p>
                <p className={styles.alunos}> Alunos: {alunosMatriculados}</p>
                <span className={styles.status}>{status}</span>
            </div>

            <div className={styles.btns}>

            </div>
        </article>
    );
}