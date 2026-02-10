import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>LearnFlix</h1>
                <button className={styles.menuButton} onClick={toggleMenu} aria-label={"Menu"}>
                    <HiMenu />
                </button>
                <nav className={menuOpen ? `${styles.nav} ${styles.navOpen}` : styles.nav}>
                    <Link to={"/"} className={styles.link}>
                        HomePage
                    </Link>
                    <Link to={"/cadastro"} className={styles.link}>
                        Cadastro
                    </Link>
                    <Link to={"/login"} className={styles.link}>
                        Login
                    </Link>
                    <Link to={"/materiais"} className={styles.link}>
                        Adicionar Materiais
                    </Link>
                    <Link to={"/visualizar"} className={styles.link}>
                        Visualizar Materiais
                    </Link>
                </nav>
            </div>
        </header>
    )
}