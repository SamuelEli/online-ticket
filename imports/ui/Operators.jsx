import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';



export default class Operators extends Component {

    componentDidMount() {
        getUserId =() => {
            const Id = Meteor.userId();
            console.log(Id);
        }
        
    }
    

    render() {
        return(
            <div>
                <div>
                    <Navbar/>
                </div>
                <br/>
                <br/>
                <p>{this.getUserId}</p>
                <div className="container">
                    <h4>CHOOSE THE OPERATOR</h4>
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img className="activator" src="images/Boarding.jpeg" alt=""/>
                                </div>
                                <div className="card-content">
                                    <p className="card-title">ON-BUS SERVICES</p>
                                    <div className="card-action">
                                        <a href="" onClick={this.getUserId}>Select </a>
                                        <a className="btn-floating fab waves-effect waves-light red right"><i className="material-icons">add</i></a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img className="activator" src="images/shalom.jpg" alt=""/>
                                </div>
                                <div className="card-content">
                                    <p className="card-title">SHALOM BUS SERVICES</p>
                                    <div className="card-action">
                                        <a href="" onClick={this.getUserId}>Select </a>
                                        <a className="btn-floating fab waves-effect waves-light red right"><i className="material-icons">add</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img className="activator" src="images/euro.jpeg" alt=""/>
                                </div>
                                <div className="card-content">
                                    <p className="card-title">EURO AFRICA BUS SERVICES</p>
                                    <div className="card-action">
                                        <a href="" onClick={this.getUserId}>Select </a>
                                        <a className="btn-floating fab waves-effect waves-light red right"><i className="material-icons">add</i></a>
                                    </div>
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
