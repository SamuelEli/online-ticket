import React from 'react';
import { Meteor } from 'meteor/meteor';
import Home from './Home';
import ReservationForm from './ReservationForm';


// export default () => {
//   return (
//         <div id="app">
//             {React.createElement()}
//             <Home/>
//             <ReservationForm/>
//         </div>
//     )
// }



// import {ContactForm} from '/imports/ui/ContactForm.jsx';
// import CreateAccount from '/imports/ui/CreateAccount.jsx';
// import CreateAccount from '/imports/ui/footerPage.jsx';

export class App extends React.Component{
    render(){
        return(
            <div>
            {/* <ContactForm/> */}
            {/* <CreateAccount/> */}
            {/* <ReserveForm/> */}
            <Home/>
            {/* <ReservationForm/> */}
            </div>
        );
    }
}
