import styles from "./CadastroPage.module.css";
import FormularioCadastro from "../../components/FormularioCadastro";
import { useNavigate } from "react-router-dom";

export default function CadastroPage() {
    const navigate = useNavigate();

    function handleCadastro(data) {
        alert("Usuário cadastrado com sucesso!");
        console.log("Dados:", data);
         navigate("/login");
     }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cadastro de Usuário</h1>
            <div className={styles.wrapper}>
                <FormularioCadastro onSubmit={handleCadastro} />
            </div>
        </div>
    );
}