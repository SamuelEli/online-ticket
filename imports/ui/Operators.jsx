import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';


export default class Operators extends Component {
    render() {
        return(
            <div>
                <div>
                    <Navbar/>
                </div>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img className="activator" src="images/black.svg" alt=""/>
                                    <span className="card-title">Card Title</span>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                    <div class="card-action">
                                        <a href="#">This is a link</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img className="activator" src="images/color.svg" alt=""/>
                                    <span className="card-title">Card Title</span>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img className="activator" src="images/black.svg" alt=""/>
                                    <span className="card-title">Card Title</span>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col s12 m4">
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img className="activator" src="images/color.svg" alt=""/>
                                    <span className="card-title">Card Title</span>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img className="activator" src="images/black.svg" alt=""/>
                                    <span className="card-title">Card Title</span>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img className="activator" src="images/color.svg" alt=""/>
                                    <span className="card-title">Card Title</span>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                                </div>
                                <div className="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
