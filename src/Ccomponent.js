import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import Menu from './Afcomponent';
import './newStyle.css';

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            input: this.state.input,
            items: [...this.state.items, this.state.input]
        });
    }

    render () {
        return(
            <div>
                <h1>Hello world</h1>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                        Primary
                </Button>
                <form onSubmit= {this.handleSubmit}>
                    <input value= {this.state.input} onChange= {this.handleChange}/>
                    <button type="submit">Submit!</button>
                </form>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }

}

