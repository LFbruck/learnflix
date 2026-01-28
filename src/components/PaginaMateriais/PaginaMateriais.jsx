import ListaMateriais from "../ListaMateriais/ListaMateriais"
import AdicionarMateriais from "../AdicionarMateriais/AdicionarMateriais"

import styles from './PaginaMateriais.module.css'
import {useState, useEffect} from 'react'

export default function PaginaMateriais() {
    const [materiais, setMateriais] = useState([
        {titulo: 'Fundamentos do React', descricao: "Aula de Fundamento do React", nomeArquivo: "Aula2-Fundamento do React", id: 1, tipoArquivo: "PDF"},
    ]);

    const adicionarMaterial = (novoMaterial) => {
        setMateriais([...materiais, novoMaterial]);
    }

    const excluirMaterial = (id) => {
        setMateriais(materiais.filter(material=> material.id !== id));
    }

    return (
        <div className={styles.container}>
            <AdicionarMateriais adicionarMaterial={adicionarMaterial} />
            <ListaMateriais materiais={materiais} excluirMaterial={excluirMaterial} />


        </div>
    )

}

