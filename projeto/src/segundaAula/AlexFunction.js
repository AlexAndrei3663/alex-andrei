export default function AlexFunction(props) {
    return(
        <>
            Teste Função <br/>
            Alex Andrei
            <a
            className="App-link"
            href= {"https://instagram.com/" + props.instagram}
            target="_blank"
            rel="noopener noreferrer"
            >
            {"@" + props.instagram}
            </a> 
        </>
    )
}