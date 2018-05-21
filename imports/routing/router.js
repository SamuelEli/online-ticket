import { Meteor } from 'meteor/meteor';
import {React} from 'react';
import { createRouter } from 'meteor/cultofcoders:meteor-react-routing';
import App from '/imports/ui/App.jsx';
// import {withTracker} from 'meteor/react-meteor-data';

export default createRouter(App);
