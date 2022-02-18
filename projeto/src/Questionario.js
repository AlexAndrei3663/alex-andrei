import React from "react"

export default class Questionario extends React.Component {

    constructor(props) {
        super(props);
        this.state = { answerLabel: "" }
    }

    showAnswer = () =>{
        this.setState({answerLabel: this.props.answer})
    }

    render(){
        return (
            <>
                {this.props.question}
                <button onClick={this.showAnswer}>
                    Mostrar resposta
                </button>
                {this.state.answerLabel}
            </>
        )
    }
}