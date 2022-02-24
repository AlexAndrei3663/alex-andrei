import { useState } from "react";
import { useForm } from "react-hook-form";
import Listagem from "./Listagem";

export default function QuestoesForm() {
    const [questoes, setQuestoes] = useState([])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {setQuestoes([...questoes, data])};
    
    return(
        <>
            <div className="App-header">Formulário</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Pergunta: </label>
                <input {...register("pergunta")}></input> <br />

                <label>Resposta: </label>
                <input {...register("resposta")}></input> <br />

                <input type="submit" />
            </form>
            <br /><br />
            <Listagem questoes={questoes}/>
        </>
    )
}