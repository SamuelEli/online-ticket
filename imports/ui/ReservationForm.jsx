import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import route from '/imports/routing/router.js';
import 'react-materialize';
import { Row, Input } from 'react-materialize';


export default class ReservationForm extends Component {
    render() {
        return(
            <div>
                <div className="header">
                    <div className="container">
                        <nav>
                            <div className="nav-wrapper">
                                <h6><a href="#" className="brand-logo"> <span id="logo"> On|Bus Services </span> </a></h6>
                                <a className="button-collapse" data-activates="mobile-nav" href="#">
                                    <i className="material-icons">menu</i>
                                </a>
                                
                                <ul className="right hide-on-med-and-down">
                                    <li> <a href="#" active="true">Home</a></li>
                                    <li> <a href="#" id="button">Routes</a></li>
                                    <li> <a href="#" className="waves-effect btn amber accent-4">Contact Us</a></li>
                                </ul>
                                <ul className="side-nav" id="mobile-nav" >
                                    <li> <a href="#" active="true">Home</a></li>
                                    <li> <a href="#" id="button">Routes</a></li>
                                    <li> <a href="#" className="waves-effect btn amber accent-4">Contact Us</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}