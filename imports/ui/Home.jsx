import React,{Component} from 'react';
import  Meteor  from 'meteor/meteor';
import route from '/imports/routing/router.js';
import Footer from '/imports/ui/Footer.jsx';
import  Navbar from '/imports/ui/Navbar.jsx';


 export default class Home extends Component{


  render(){
    return(
      <div>
        {/* {this.loggedOn()} */}
        <Navbar  Home ={'active'}/>
        <br/>
        <Footer/>
      </div>
    );
  }
}
