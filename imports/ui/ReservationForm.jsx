import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '/imports/ui/Navbar';
import Footer from '/imports/ui/Footer.jsx';
import { Row, Input } from 'react-materialize';

export default class ReservationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            idNumber: '',
            group1: '',
            group2: '',
            error: '',
            error2: ''
        }
    }

    getUserData =(e) =>{
        e.preventDefault();
        const {target} = e;
        const firstName = target.firstName.value;
        const lastName = target.lastName.value;
        const email = target.email.value;
        const phoneNumber = target.phoneNumber.value;
        const idNumber = target.idNumber.value;
        const group1 = target.group1.value;
        const group2 = target.group2.value;
        
        if(phoneNumber.length !== 10) {
            this.setState({
                error: 'Please enter a valid Phone Number!'
            })
        } return;
        

        if(idNumber.length !== 11) {
            this.setState({
                error2: 'Please enter a valid ID Number!'
            })
        }
        
    }

    


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
                                    <form action="" onSubmit={this.getUserData}>
                                        <div className="input-field">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input id="icon_prefix" name="firstName" type="text" className="validate" required/>
                                            <label htmlFor="icon_prefix">FIRST NAME</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input id="icon_prefix" name="lastName" type="text" className="validate" required/>
                                            <label htmlFor="icon_prefix">LAST NAME</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">email</i>
                                            <input id="icon_prefix" name="email" type="email"  className="validate"/>
                                            <label htmlFor="icon_prefix">EMAIL</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">phone</i>
                                            <input id="icon_prefix" name="phoneNumber" type="tel" className="validate" required/>
                                            <label htmlFor="icon_prefix">PHONE NUMBER</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">picture_in_picture</i>
                                            <input id="icon_prefix" name="idNumber" type="tel" className="validate" required/>
                                            <label htmlFor="icon_prefix">ID NUMBER</label>
                                        </div>
                                        <span>GENDER</span>
                                        <br/>
                                        <br/>
                                        <Row>
                                            <Input name='group1' type='radio' label='Male' className='with-gap' />
                                            <Input name='group1' type='radio' label='Female' className='with-gap' />
                                            <Input name='group1' type='radio' label='Other' className='with-gap' />
                                        </Row>
                                        <Row>
                                            <Input name='group2' type='checkbox' label='DO YOU ACCEPT OUR TERMS AND CONDITIONS?' />
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