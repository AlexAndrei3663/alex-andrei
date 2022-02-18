import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function FirstPage(props) {

    const params = useParams()

    let comment = "";
    
    if(params.answer === "nop")
        comment = "Você não sabe o que está perdendo."

    return (
        <>
            <br />{comment} <br />
            Pavê é a melhor comida que existe!!!
            <nav><Link to="/second-page" >Quero a receita</Link></nav>
            <nav><Link to="/" >Voltar</Link></nav>
        </>)
}