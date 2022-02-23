import { Link } from "react-router-dom";

export default function Menu(props) {
    return(
        <div className="App-header">
            <h1>Você gostaria de um jogo?</h1>
            <nav> <Link to="jogo/"> Vamos lá </Link> </nav>
        </div>
    )
}