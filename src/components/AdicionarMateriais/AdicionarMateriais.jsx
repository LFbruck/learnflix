import styles from "./AdicionarMateriais.module.css"
import {useState} from "react";


export default function AdicionarMateriais() {

    const [titulo, setTitulo] = useState("");

    const [descricao, setDescricao] = useState("");

    const [arquivo, setArquivo] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Titulo: </label>
            <input type="text" value={titulo} placeholder= "Titulo do Material" onChange={(e) => setTitulo(e.target.value)} required={true} />
            <label>Descrição: </label>
            <textarea  value={descricao} placeholder= "Descrição do Conteudo" onChange={(e) => setDescricao(e.target.value)}  />
            <label>Upload Arquivo: </label>
            <input type="file" onChange={(e) => setArquivo(e.target.files[0]) } accept=".jpg,.png, .pdf, .doc, .docx" required={true} /><button type="submit" disabled={loading}>
            {loading ? 'Carregando...' : 'Adicionar Material'}
        </button>
        </form>

    );
}