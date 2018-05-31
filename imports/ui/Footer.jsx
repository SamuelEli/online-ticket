import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import { Meteor } from 'meteor/meteor';



export default class Footer extends Component {
    render() {
        return(
                <div>
                    <footer className="footer">
                        <div className="container" id="footer">
                            <div className="row">
                            <div className="col l6 s12">
                            
                                <h5>
                                    <a href="/" className="brand-logo" onClick={this.goToHome}> <span id="logo-footer"> On|Bus Services </span> </a>
                                </h5>

                
                                <p className="grey-text text-darken-1">This website and its content is copyright <br/> of  <span id="logo-footer-small"> <a>On|Bus Services</a> </span>. All rights reserved.</p>
                            </div>
                            <div className="col l4 offset-l2 s12 right-align">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="footer-copyright black" id="footer-copyright">
                            <div className="container">
                            © 2018
                            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                            </div>
                        </div>
                    </footer>
                </div>
        )
    }
}
