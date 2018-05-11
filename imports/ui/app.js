import React, { Component } from 'react'
import {ContactForm} from '/imports/ui/ContactForm.jsx';
import CreateAccount from '/imports/ui/CreateAccount.jsx';
// import CreateAccount from '/imports/ui/footerPage.jsx';

export default class App extends React.Component{
    render(){
        return(
            <div>
            <ContactForm/>
            <CreateAccount/>
            </div>
        );
    }
}