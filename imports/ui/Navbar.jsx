// Samuel Eli
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CreateAccount from './CreateAccount';
import Operators from './Operators';


goToHome = () => {
    route.go('/')
}

goToRoutes = () => {
    route.go('/Routes')
}

goToReservationForm = () => {
    route.go('/ReservationForm')
}

gotToCreateAccount = () => {
    route.go('/CreateAccount')
}

goToRoutes = () => {
    route.go('/Routes')
}

goToOperators = () => {
    route.go('/Operators')
}

export default class Navbar extends Component {
    componentDidMount(){
        $.ajax({
            type: "GET",
            url: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js",
            dataType: "script"
        });
        
        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"
        }).appendTo("head");
        
        $(document).ready(function(){
            setTimeout(()=>{
            // M.toast({html: 'I am a toast!'})
            $('.sidenav').sidenav();
        },2000)
    });
}

render(){
    return (

<div>
   <nav className="Navbar">
        <div className="container">
            <div className="nav-wrapper">
                <div className="nav-wrapper">
                    <h6><a href="/" className="brand-logo" onClick={this.goToHome}> <span id="logo"> On|Bus Services</span></a></h6>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li> <a href="/" onClick={this.goToHome}>Home</a></li>
                        <li> <a href="/Routes" onClick={this.goToRoutes} id="button">Route</a></li>
                        <li> <a  href="/CreateAccount"  onClick={this.goToCreateAccount} className="waves-effect btn amber accent-4">SignUp/Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    
    <ul className="sidenav" id="mobile-demo">
    <div className="input-field"><i className="material-icons prefix">home</i>
       <li><a href="/" onClick={this.goToHome}>Home</a></li>
       </div>
       <div className="input-field"><i className="material-icons prefix">airport_shuttle</i>
       <li><a href="/Routes" onClick={this.goToRoutes}>Route</a></li>
       </div>
       <li><a  href="/CreateAccount"  onClick={this.goToCreateAccount}>SignUp/Login</a></li>
    </ul>
</div>
)}}

//     meteor.userId()?
//     <>
//     <ul className="right hide-on-med-and-down">
//     <li> <a href="/" onClick={this.goToHome}>Home</a></li>
//     <li> <a href="/Routes" onClick={this.goToRoutes} id="button">Route</a></li>
//     <li> <a onClick={this.SignOut} className="">SignOut</a></li>
//     </ul>
//     </>
//     :
//     <>
//     <ul className="right hide-on-med-and-down">
//     <li> <a href="/" onClick={this.goToHome}>Home</a></li>
//     <li> <a href="/Routes" onClick={this.goToRoutes} id="button">Route</a></li>
//     <li> <a  href="/CreateAccount"  onClick={this.goToCreateAccount} className="">SignUp/Login</a></li>
// </ul>
//     </> */}

//  LogOut=(e) => {
//     preventDefault();
//     Meteor.logout();
//   FlowRouter.go('/')
// }
