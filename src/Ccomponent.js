import React, { Component } from 'react'
import Fcomponent from './Fcomponent'
import Fncomponent from './Fncomponent'
import './newStyle.css';

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }


        handleChange(event) {
            this.setState({
                inputValue: event.target.value
            })
        }

    render () {
        return(
            <div>
                <Fcomponent 
                    input={this.state.inputValue}
                    handleChange={this.handleChange} />
                <Fncomponent namee={this.state.inputValue} />
            </div>
        )
    }

}

