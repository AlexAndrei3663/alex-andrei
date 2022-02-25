import { useForm } from "react-hook-form";

export default function Formulario(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {props.salvar(data)};

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