import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import route from '/imports/routing/router.js';
import Posts from '../api/blog/collections.js';


export default ({main, routeProps}) => {
    return (
        <div id = 'app'>
        {React.createElement(main, routeProps)}
        </div>
    )
}
