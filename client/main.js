import '/imports/startup/client/index.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import 'react-materialize';
import { render } from 'react-dom';
import {App} from './../imports/ui/App';
import Home from './../imports/ui/Home';
import ReservationForm from './../imports/ui/ReservationForm';

 Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

// Meteor.startup(() => {
//     Tracker.autorun(function() { 
//         let App = (
//             <div>
//                 <Home/>
//                 <ReservationForm/>          
//             </div>
//         )
//         ReactDOM.render(App, document.getElementById('render-target'));
//     });
// })