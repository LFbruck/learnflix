import AdicionarMateriais from './AdicionarMateriais'
import ListaMateriais from './ListaMateriais'
import styles from './PaginaMateriais.module.css'
import {useState, useEffect} from 'react'

export default function PaginaMateriais() {
    const [materiais, setMateriais] = useState([
        {titulo: 'Fundamentos do React', descricao: "Aula de Fundamento do React", nomeArquivo: "Aula2-Fundamento do React", id: 1, tipoArquivo: "PDF"},
    ])

    return (
        <div className={styles.container}>

        </div>
    )

}

