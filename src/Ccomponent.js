import React, { Component } from 'react'
import Menu from './Afcomponent';

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             visibility: false
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            visibility: !state.visibility
        }));
    }
    
    render() {
            if (this.state.visibility) {
                return (
                    <div>
                        <h1>Now you see me</h1>
                        <button onClick={this.handleClick} >Click</button>
                    </div>
                );
            }
            else {
                return (
                    <div>                    
                        <button onClick={this.handleClick} >Click</button>
                    </div>
                )
            }
    }
}

Ccomponent.defaultProps = { name: 'Ignaty'}
