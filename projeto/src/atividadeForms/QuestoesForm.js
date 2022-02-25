import { useState } from "react";
import Formulario from "./Formulario";
import Listagem from "./Listagem";

export default function QuestoesForm() {
    const [questoes, setQuestoes] = useState([])
    
    return(
        <>
            <Formulario salvar={(data) => {setQuestoes([...questoes, data])}}/>
            <br /><br />
            <Listagem questoes={questoes}/>
        </>
    )
}