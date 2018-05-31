import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CreateAccount from './CreateAccount';
import Operators from './Operators';
import route from '/imports/routing/router.js'



export default class Navbar extends Component {
    componentDidMount(){
        $.ajax({
            type: "GET",
            url: "http://code.jquery.com/jquery-2.2.4.js",
            url: "http://code.jquery.com/ui/1.10.3/jquery-ui.js",
            url: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js",
            dataType: "script"
        });
        
        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css",
        }).appendTo("head");

        
        $(document).ready(function(){
            setTimeout(()=>{
            $('.sidenav').sidenav();
            },2000)
        });


        if(Meteor.userId()){
            $("#logOut2").show();
            $("#logOut1").hide();
            // console.log("you're logged in")
        } 
        else {
            $("#logOut2").hide();
            $("#logOut1").show();
            // console.log("you're logged out")
        }
    }


    goToHome = () => {
        route.go('/')
    }

    goToRoutes = () => {
        route.go('/Routes')
    }

    goToCreateAccount = () => {
        route.go('/CreateAccount')
    }

    goToOperators = () => {
        route.go('/Operators')
    }
            
    logOut = (e) => {
        e.preventDefault()
        Meteor.logout();
        window.location.reload();
        route.go('/')
    }


    render() {
        return (
            <div>
                <nav className="Navbar">
                    <div className="container">
                        <div className="nav-wrapper">
                            <div className="nav-wrapper" id="logOut2" >
                                <h6><a href="" className="brand-logo" onClick={this.goToHome}> <span id="logo"> On|Bus Services</span></a></h6>
                                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                                <ul className="right hide-on-med-and-down">
                                    <li> <a href="" onClick={this.goToHome}>Home</a></li>
                                    <li> <a href="" onClick={this.goToRoutes}>Route</a></li>
                                    <li>
                                    <button  onClick={this.logOut} className="waves-effect btn amber accent-4">LogOut</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-wrapper" id="logOut1" >
                                <h6><a href="" className="brand-logo" onClick={this.goToHome}> <span id="logo"> On|Bus Services</span></a></h6>
                                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                                <ul className="right hide-on-med-and-down">
                                    <li> <a href="" onClick={this.goToHome}>Home</a></li>
                                    <li> <a href="" onClick={this.goToRoutes}>Route</a></li>
                                    <li > <a  href=""  onClick={this.goToCreateAccount} className="waves-effect btn amber accent-4">SignUp/Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <div className="input-field"><i className="material-icons prefix">home</i>
                        <li><a href="" onClick={this.goToHome}>Home</a></li>
                    </div>
                    <div className="input-field"><i className="material-icons prefix">airport_shuttle</i>
                        <li><a href="" onClick={this.goToRoutes}>Route</a></li>
                    </div>
                    <li><a  href=""  onClick={this.goToCreateAccount}>SignUp/Login</a></li>
                </ul>
            </div>
        )
    }

}