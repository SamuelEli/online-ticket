import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import HomePage from './HomePage';




export default ({main, routeProps}) => {
  return (
        <div id="app">
            {React.createElement(main, routeProps)}
        </div>
    )
}
