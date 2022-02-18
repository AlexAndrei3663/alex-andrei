import { Link } from "react-router-dom";

export default function SecondPage(props) {
    return (
        <>
            <h1>PAVÊ DE CHOCOLATE</h1>
            <h2>INGREDIENTES</h2>
            <ul>
                <li>1 pacote de bolacha maisena</li>
                <li>1/2 copo de leite</li>
                <li>1 colher (sobremesa) da chocolate em pó</li>
                <li>Creme branco:</li>
                <ul>
                    <li>1 lata de leite condensado</li>
                    <li>1 lata de leite de vaca (use a medida da lata de leite condensado)</li>
                    <li>1 colher (sobremesa) de amido de milho</li>
                    <li>2 gemas</li>
                </ul>
                <li>Creme de chocolate:</li>
                <ul>
                    <li>1 lata de leite condensado</li>
                    <li>1 lata de leite de vaca (use a medida da lata de leite condensado)</li>
                    <li>1 colher (sobremesa) de amido de milho</li>
                    <li>2 gemas</li>
                    <li>4 colheres de chocolate em pó</li>
                </ul>
                <li>Cobertura:</li>
                <ul>
                    <li>4 claras</li>
                    <li>4 colheres de açúcar</li>
                    <li>1 lata de creme de leite sem soro</li>
                </ul>
            </ul>                
            
            <h2>MODO DE PREPARO</h2>
            
            <p>Em uma tigela, misture o leite e o chocolate em pó até que esteja completamente dissolvido.</p>
            <p>Molhe as bolachas no leite e reserve.</p>

            <p>Creme branco:</p>
            <p>Em uma panela, leve todos os ingredientes ao fogo médio e misture até obter uma consistência grossa e cremosa.</p>
            
            <p>Creme de chocolate:</p>
            <p>Repita o processo feito no creme branco.</p>

            <p>Para a cobertura:</p>
            <p>Bata as claras em neve com o açúcar até obter um creme consistente, adicione o creme de leite e misture delicadamente.</p>
            
            <p>Montagem:</p>
            <p>Em um refratário grande, despeje o creme branco, metade das bolachas, creme de chocolate, bolachas e claras em neve.</p>
            
            <p>Repita o processo até preencher todo o refratário e leve à geladeira por 40 minutos.</p>   
            <nav>
                <Link to="/" >Voltar</Link>
            </nav>
        </>)
}