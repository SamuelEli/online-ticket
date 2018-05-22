import React,{Component} from 'react';
import  Meteor  from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-password';
import route from '/imports/routing/router.js';
import Navbar  from '/imports/ui/Navbar.jsx';

export default class Login extends Component{
    constructor(props){
      super(props);
    }
    
    logUserIn=(e)=>{
      e.preventDefault();
      const {target} =e;
      const email = e.target.email.value;
      const password = e.target.password.value;
      Meteor.loginWithPassword(email,password, err=>{
        err? console.log(err.reason):
        //  email = Meteor.user().emails[0].address
         route.go('/useraccount?email='+email);
      })
    }
   
      render() {
          return (
            <div>
              <Navbar CreateAccount={'active'}/>
              <h4 id="loginHeader">SignIn</h4>
              <div className="field">
                <form className="col s12" onSubmit = {this.logUserIn}>
                
                  <div className="row">
                    <div className=" col">
                    </div>
                      <div className="input-field">
                        <input name="email" type="email" className="validate"/>
                        <label type="email">Email</label>
                      </div>
                    </div>
                  <div className="row">
                  <div className=" col s4">
                  </div>
                    <div className="input-field ">
                      <input name="password" type="password" className="validate"/>
                      <label type="password">Password</label>
                    </div>
                  </div>
                  <button type="Primary" className="btn btn-primary waves-effect waves-light center"id="login-button">
                  SignIn
                  </button>
                </form>              
              </div>
            </div>
      
          )
      }
  }