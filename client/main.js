import '/imports/startup/client/index.js';
import React from 'react';
// import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import route from '/imports/routing/router.js';
// import 'react-materialize';
import { render } from 'react-dom';
import App from '../imports/ui/App.jsx';
// import Home from './../imports/ui/Home';
// import Navbar from './../imports/ui/Navbar';


// Meteor.startup(() => {
//     render(<App />, document.getElementById('render-target'));
// });

// Meteor.startup(() => {
//     Tracker.autorun(function() { 
//         let App = (
//             <div>
//                 <App/>           
//             </div>
//         )
//         ReactDOM.render(App, document.getElementById('render-target'));
//     });
// })