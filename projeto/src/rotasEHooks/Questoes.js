import { useState } from "react";
import '../App.css';

export default function Questoes(props) {
    const [random, setRandom] = useState(Math.floor(Math.random() * props.questoes.length))
    const [questao, setQuestao] = useState(props.questoes[random])
    const [resposta, setResposta] = useState()

    return(
        <div>
            <h1>Teste de conhecimento</h1>

            <p>{questao.pergunta}</p>
            <button onClick={() => {
                setRandom(Math.floor(Math.random() * props.questoes.length))
                setQuestao(props.questoes[random])
                setResposta()       
            }}>
                Mudar pergunta
            </button>

            <button onClick={() => setResposta(questao.resposta)}>
                Mostrar resposta
            </button>
            
            <p>{resposta}</p>
        </div>
    )
}