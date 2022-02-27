import { useEffect, useState } from "react";
import { listService } from "../services/listService";
import Formulario from "../forms/Formulario";
import Listagem from "./Listagem";

export default function QuestoesForm() {
    const [questoes, setQuestoes] = useState([]);

    const listItens = async () => {
        const questoes = await listService();
        if(questoes)
            setQuestoes(questoes.data.data);
    };

    useEffect(() => {
        listItens()
    }, []);

    return(
        <>
            <Formulario save={() => {listItens()}}/>
            <br /><br />
            <Listagem questoes={questoes}/>
        </>
    )
}