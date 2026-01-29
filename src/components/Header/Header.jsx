import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>LearnFlix</h1>
                <nav className={styles.nav}>
                    <Link to={"/"} className={styles.link}>
                        HomePage
                    </Link>
                    <Link to={"/cadastro"} className={styles.link}>
                        Cadastro
                    </Link>
                </nav>
            </div>
        </header>
    )
}