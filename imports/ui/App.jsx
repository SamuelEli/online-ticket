// import React from 'react';
import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import HomePage from './HomePage';
// import Navbar from './Navbar';
// import Header from './Header';
// import BodyComponent from './BodyComponent';
// import { Footer } from './Footer';



export default ({main, routeProps}) => {
  return (
        <div id="app">
            {React.createElement(main, routeProps)}
        </div>
    )
}



// import {ContactForm} from '/imports/ui/ContactForm.jsx';
// import CreateAccount from '/imports/ui/CreateAccount.jsx';
// // import CreateAccount from '/imports/ui/footerPage.jsx';
//import { ReactDOM } from 'react-dom';


// export default class App extends Component {
//     render(){
//         return(
//             <div>
//                 <HomePage/>
//             </div>
//         );
//     }
// }
