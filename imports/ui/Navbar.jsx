import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import route from './router.js';
import 'react-materialize';
import { Row, Input } from 'react-materialize';



goToHome = () => {
    route.go('/')
}

goToRoutes = () => {
    route.go('/Routes')
}

goToContactUs = () => {
    route.go('/ContactUs')
}



export default class Navbar extends Component {
    render() {
        return(
            <div>
                <div>
                    <nav>
                        <div className="nav-wrapper">
                            <div className="container">
                                <h6><a href="" onClick={this.goToHome} className="brand-logo"> <span id="logo"> On|Bus Services </span> </a></h6>
                                    <ul className="right hide-on-med-and-down">
                                        <li> <a href="/" onClick={this.goToHome} >Home</a></li>
                                        <li> <a href="" onClick={this.goToRoutes} id="button">Routes</a></li>
                                        <li> <a href="" onClick={this.goToContactUs} className="waves-effect btn amber accent-4">Contact Us</a></li>
                                    </ul>
                            </div>        
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}