import { Meteor } from 'meteor/meteor';
import {React} from 'react';
import { createRouter } from 'meteor/cultofcoders:meteor-react-routing';
import App from '/imports/ui/App.jsx';

export default createRouter(App);


// // import React from 'react'
// // import { FlowRouter } from 'meteor/kadira:flow-router'
// // import { mount } from 'react-mounter'

// // import App from '/imports/ui/App'
// // import HomePage from '/imports/ui/HomePage'
// // import AboutPage from '/imports/ui/AboutPage'

// // FlowRouter.route('/', {
// //   name: 'Home',
// //   action(){
// //     mount( App, {
// //       content: <HomePage />
// //     })
// //   }
// // })

// // FlowRouter.route('/about', {
// //   name: 'About',
// //   action(){
// //     mount( App, {
// //       content: <AboutPage />
// //     })
// //   }
// // })
// import React from 'react'
// import { render } from 'react-dom'
// import { BrowserRouter, Route } from 'react-router-dom'



// <Switch>
//   <Route exact path='/' component={Home}/>
//   {/* both /roster and /roster/:number begin with /roster */}
//   <Route path='/roster' component={Roster}/>
//   <Route path='/schedule' component={Schedule}/>
// </Switch>






























