
import React, { Component } from 'react';
import '/imports/startup/client/index.js';
import route from '/imports/routing/router.js';
import {withTracker} from 'meteor/react-meteor-data';
import Posts from '/imports/api/blog/collections.js';



// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
/*$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
  }).resize();
  function onExpand(expanded, record) {
    console.log('onExpand', expanded, record);
  }*/

// import React from 'react';
// import { Meteor } from 'meteor/meteor';
// import { render } from 'react-dom';
// import App from '../imports/ui/app.jsx';
//
//  Meteor.startup(() => {
//   render(<App />, document.getElementById('render-target'));
// });
