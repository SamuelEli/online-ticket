import { Meteor } from 'meteor/meteor';
import React,{Component} from 'react';
import route from '/imports/routing/router.js';



export default class Navbar extends Component{

  // goToHome =()=>{
  //   route.go('/');
  // }

  goToContact= ()=>{

  route.go("/ContactUs");
}
goToCreate= ()=>{

route.go("/CreateAccount");
}

goToLogIn= ()=>{

route.go("/LogIn");
}





  render(){
    return(
      <div>
           <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="CreateAccount">CreateAccount</a></li>
                          {/* <li><a href="Home">Home</a></li> */}
                           <li><a href="ReserveForm">ReserveForm</a></li>
                           <li><a href="ContactUs">ContactUs</a></li>
                           {/* <li><a href="LogIn">LogIn</a></li> */}
                    </ul>
              </div>
          </nav>
      </div>
    );
  }
}
