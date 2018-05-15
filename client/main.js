import '/imports/startup/client/index.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import 'react-materialize';
// import { render } from 'react-dom';
// import App from '../imports/ui/app.jsx';
import Home from './../imports/ui/Home';

//  Meteor.startup(() => {
//   render(<App />, document.getElementById('render-target'));
// });

Meteor.startup(() => {
    Tracker.autorun(function() { 
        let App = (
            <div>
                <Home/>           
            </div>
        )
        ReactDOM.render(App, document.getElementById('render-target'));
    });
})