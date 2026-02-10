import ListaMateriais from "../../components/ListaMateriais/ListaMateriais"
import AdicionarMateriais from "../../components/AdicionarMateriais/AdicionarMateriais"

import styles from './MateriaisPage.module.css'
import {useState, useEffect} from 'react'

export default function MateriaisPage() {
    const [materiais, setMateriais] = useState([
        {titulo: 'Fundamentos do React', descricao: "Aula 1 de Fundamento do React", nomeArquivo: "Aula1-Fundamento do React", id: 1, tipoArquivo: "PDF"},
        {titulo: 'Fundamentos do React', descricao: "Aula 2 de Fundamento do React", nomeArquivo: "Aula2-FR", id: 2, tipoArquivo: "PDF"},
        {titulo: 'Python', descricao: "Logica de Programação em Python", nomeArquivo: "LogicaEmPythonFoto", id: 3, tipoArquivo: "PNG"},
        {titulo: 'Materiais Complementares', descricao: "Arrays, Vetores, Pilhas...", nomeArquivo: "TiposDeAgrupamentos", id: 4, tipoArquivo: "PDF"},
        {titulo: 'JavaScript Avançado', descricao: "Promises e Async/Await", nomeArquivo: "JS-Async", id: 5, tipoArquivo: "PDF"},
        {titulo: 'CSS Grid Layout', descricao: "Guia completo de Grid", nomeArquivo: "GridLayout", id: 6, tipoArquivo: "DOCX"},
        {titulo: 'Git e GitHub', descricao: "Controle de versão para iniciantes", nomeArquivo: "GitBasico", id: 7, tipoArquivo: "PDF"},
        {titulo: 'Diagrama ER', descricao: "Modelagem de banco de dados", nomeArquivo: "DiagramaER", id: 8, tipoArquivo: "JPG"},
    ]);

    const adicionarMaterial = (novoMaterial) => {
        setMateriais([...materiais, novoMaterial]);
    }

    const excluirMaterial = (id) => {
        setMateriais(materiais.filter(material=> material.id !== id));
    }

    return (
        <div className={styles.container}>
            <h1>Materiais Didáticos</h1>
            <AdicionarMateriais adicionarMaterial={adicionarMaterial} />
            <ListaMateriais materiais={materiais} excluirMaterial={excluirMaterial} />


        </div>
    )

}

