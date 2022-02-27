import { useForm } from "react-hook-form";
import { submitService } from "../services/submitService";

export default function Formulario(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        const response = await submitService(data)
        if(response){
            props.listItens()
        }
    };

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
        </>
    )    
}