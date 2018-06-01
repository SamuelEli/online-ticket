import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';



export default class Operators extends Component {




    constructor(){
        super()

        this.state ={
            label:'CHOOSE AN OPERATER'
        }

    }

    componentDidMount() {
        getUserId =() => {
            const Id = Meteor.userId();
            console.log(Id);
        }

        
    }

    book(index,operator){

            const children = $('.operator');
            const child =children[index];
            $(child).removeClass('operator');
            $('.operator').hide('slow')
             const msg = 'CONGRATULATIONS! '+operator;   
            this.setState({label:msg});




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
                    <h4>{this.state.label}</h4>
                    <div className="row">
                        <div className="col s12 m4">
                            <div onClick={this.book.bind(this,0,'YOU HAVE CHOSEN ON-BUS SERVICES')} className="card hoverable operator operator">
                                <div className="card-image">
                                    <img className="activator" src="images/Boarding.jpeg" alt=""/>
                                </div>
                                <div className="card-content">
                                    <p className="card-title">ON-BUS SERVICES</p>
                                    <div className="card-action">
                                        <a href="" onClick={this.getUserId}>Select </a>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div onClick={this.book.bind(this,1,'YOU HAVE CHOSEN SHALOM BUS SERVICES')} className="card hoverable operator">
                                <div className="card-image">
                                    <img className="activator" src="images/shalom.jpg" alt=""/>
                                </div>
                                <div className="card-content">
                                    <p className="card-title">SHALOM BUS SERVICES</p>
                                    <div className="card-action">
                                        <a href="" onClick={this.getUserId}>Select </a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div  onClick={this.book.bind(this,2,'YOU HAVE CHOSEN EURO AFRICA BUS SERVICES')} className="card hoverable operator">
                                <div className="card-image">
                                    <img className="activator" src="images/euro.jpeg" alt=""/>
                                </div>
                                <div className="card-content">
                                    <p className="card-title">EURO AFRICA BUS SERVICES</p>
                                    <div className="card-action">
                                        <a href="" onClick={this.getUserId}>Select </a>
                                        
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
