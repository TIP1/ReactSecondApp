import React, { Component } from 'react'

export default class Fncomponent extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.props.namee}</h1>
                <p>{this.props.input}</p>
            </div>
        )
    }
}
