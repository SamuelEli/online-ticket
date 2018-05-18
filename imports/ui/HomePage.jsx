import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { ReactDOM } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Navbar from '/imports/ui/Navbar';
import Header from '/imports/ui/Header';
import BodyComponent from '/imports/ui/BodyComponent';
import Footer from '/imports/ui/Footer';


export default class HomePage extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                <Header/>
                <BodyComponent/>
                <Footer/>
            </div>
        )
    }
}
