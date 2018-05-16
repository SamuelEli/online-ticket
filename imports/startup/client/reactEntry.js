import { meteor } from 'meteor/meteor';
//import '/imports/startup/server/index.js'; //Linking the server code in our index
import React from 'react';
import { render } from 'react-dom';
import App from '../imports/ui/App';

fn = () => {
    render(<App/>, document.getElementById('render-target'));
}
Meteor.startup(fn);