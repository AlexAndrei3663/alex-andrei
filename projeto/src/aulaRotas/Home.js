import { Link } from "react-router-dom";

export default function Home(props) {
    return(
        <>
            <div>
                <p>Você gosta de pavê</p>
            </div>
            <div>
                <nav> <Link to="first-page/like"> Gosto </Link> </nav>
                <nav> <Link to="first-page/nop"> Não </Link> </nav>
                <nav> <Link to="first-page/joke"> Pavê ou pá cumê </Link> </nav>
            </div>
        </>
    )
}