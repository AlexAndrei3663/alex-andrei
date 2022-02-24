import { useForm } from "react-hook-form";
import { questaoService } from "./QuestaoService";
import { Link } from "react-router-dom";
import '../App.css';

export default function Formulario() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => questaoService(data);
    
    return(
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Pergunta: </label>
                <input {...register("pergunta")}></input> <br />

                <label>Resposta: </label>
                <input {...register("resposta")}></input> <br />

                <input type="submit" />
            </form>
            <br /><br />
            <nav> <Link to="/"> Voltar </Link> </nav>
        </div>
    )
}