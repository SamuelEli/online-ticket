import React from 'react';
import { Meteor } from 'meteor/meteor';


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
//
// export default class App extends React.Component{
//     render(){
//         return(
//             <div>
//             <ContactForm/>
//             <CreateAccount/>
//             <ReserveForm/>
//             </div>
//         );
//     }
// }
