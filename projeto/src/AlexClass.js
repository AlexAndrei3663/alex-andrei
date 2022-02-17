import React from "react"

export default class AlexClass extends React.Component {
    render(){
        return (
            <>
                Teste Classe <br/>
                Meu insta:
                <a
                className="App-link"
                href= {"https://instagram.com/" + this.props.instagram}
                target="_blank"
                rel="noopener noreferrer"
                >
                {"@" + this.props.instagram}
                </a> 
            </>
        )
    }
}

