import React, { Component } from 'react'
import Fcomponent from './Fcomponent'
import './newStyle.css';
import Home from './Home'
import About from './About'
import Users from './Users'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }
    
    render () {
        return(
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/Users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }

}

