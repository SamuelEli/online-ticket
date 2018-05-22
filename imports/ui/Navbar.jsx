import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-materialize';
import { Row, Input } from 'react-materialize';
import CreateAccount from './CreateAccount';


goToHome = () => {
    route.go('/')
}

goToRoutes = () => {
    route.go('/Routes')
}

goToContactUs = () => {
    route.go('/ContactUs')
}

goToReservationForm = () => {
    route.go('/ReservationForm')
}

gotToCreateAccount = () => {
    route.go('/CreateAccount')
}

goToLogin = () => {
    route.go('/Login')
}

goToRoutes = () => {
    route.go('/Routes')
}

export default class Navbar extends Component {
    render() {
        return(
            <div>
                <div>
                    <nav>
                        <div className="nav-wrapper">
                            <div className="container">
                                <h6>
                                    <a href="/" className="brand-logo" onClick={this.goToHome}> <span id="logo"> On|Bus Services </span> </a>
                                </h6>
                                <ul className="right hide-on-med-and-down">
                                    <li> <a href="/" onClick={this.goToHome}>Home</a></li>
                                    <li> <a href="/Routes" onClick={this.goToRoutes} id="button">Route</a></li>
                                    <li> <a  href="/CreateAccount"  onClick={this.goToCreateAccount} className="waves-effect btn amber accent-4">SignUp/Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
