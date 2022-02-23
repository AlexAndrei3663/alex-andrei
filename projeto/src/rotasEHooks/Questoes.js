import { useState } from "react";
import '../App.css';

export default function Questoes(props) {
    const [random, setRandom] = useState(Math.floor(Math.random() * props.questoes.length))
    const [questao, setQuestao] = useState(props.questoes[random])
    const [exibir, setExibir] = useState(false)

    return(
        <div>
            <h1>Teste de conhecimento</h1>

            <p>{questao.pergunta}</p>
            <button onClick={() => {
                setRandom(Math.floor(Math.random() * props.questoes.length))
                setQuestao(props.questoes[random])
                setExibir(false)       
            }}>Mudar pergunta</button>
            <button onClick={() => setExibir(!exibir)}>
                {exibir?<>Ocultar</>:<>Mostrar</>} resposta
            </button>
            {exibir === true && <p>{questao.resposta}</p>}
        </div>
    )
}