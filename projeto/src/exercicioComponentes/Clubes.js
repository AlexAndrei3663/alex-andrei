import React from "react"

export default class Clubes extends React.Component {

    render(){

        const items = this.props.clubes;
        const listItems = items.map((item) =>
            <li>{item}</li>
        );

        return (
            <ul>{listItems}</ul>
        )
    }
}