import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '/imports/ui/Navbar';
import Footer from '/imports/ui/Footer.jsx';
import { Row, Input } from 'react-materialize';

export default class ReservationForm extends Component {
    render() {
        return(
            <div>
            
                <div>
                    <Navbar/>
                    <br/>
                    <br/>

                    <div className="backgroud-page">
                        <div className="container">
                            <div className="">
                                <div className="col s12 m6 offset-3">
                                    <h5 className="center heading">Fill in the form to Reserve your Ticket</h5>
                                    <form action="">
                                        <div className="input-field">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input id="icon_prefix" type="text" className="validate"/>
                                            <label for="icon_prefix">FIRST NAME</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input id="icon_prefix" type="text" className="validate"/>
                                            <label for="icon_prefix">LAST NAME</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">email</i>
                                            <input id="icon_prefix" type="email" className="validate"/>
                                            <label for="icon_prefix">EMAIL</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">phone</i>
                                            <input id="icon_prefix" type="tel" className="validate"/>
                                            <label for="icon_prefix">PHONE NUMBER</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">picture_in_picture</i>
                                            <input id="icon_prefix" type="tel" className="validate"/>
                                            <label for="icon_prefix">ID NUMBER</label>
                                        </div>

                                        <span>GENDER</span>
                                        <br/>
                                        <br/>
                                        <Row>
                                            
                                            <Input name='group1' type='radio' value='male' label='Male' className='with-gap' />
                                            <Input name='group1' type='radio' value='female' label='Female' className='with-gap' />
                                            <Input name='group1' type='radio' value='other' label='Other' className='with-gap' />
                                        </Row>
                                        <Row>
                                            <Input name='group1' type='checkbox' value='' label='DO YOU ACCEPT OUR TERMS AND CONDITIONS?' />
                                        </Row>
                                        <p>
                                            <a href="#" className="waves-effect btn amber accent-4">SUBMIT</a>
                                        </p>
                                        
                                    </form>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <Footer/>
                </div>
            </div>
        )
    }
}