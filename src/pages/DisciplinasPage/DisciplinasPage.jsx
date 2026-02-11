import styles from "./DisciplinasPage.module.css";

export default function DisciplinasPage() {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <h1 className={styles.title}>Disciplinas</h1>
                <button className={styles.btnCriarDisciplina}></button>
            </div>
            <div className={styles.gridCards}>
                <CardDisciplina />
            </div>
        </div>
    );
}