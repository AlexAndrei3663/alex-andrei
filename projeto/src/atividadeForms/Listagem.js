export default function Listagem(props) {
    return(
        <>
            <div className='App-header'>Lista</div>
            {props.questoes.map(questao => <li>{questao.pergunta} - {questao.resposta}</li>)}
        </>
    )    
}