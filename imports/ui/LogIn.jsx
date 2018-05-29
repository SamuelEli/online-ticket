// Samuel Eli
import React,{Component} from 'react';
import  { Meteor }  from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import route from '/imports/routing/router.js';


export default class Login extends Component{
    // constructor(props){
    //   super(props);
    // }

    logIn=(e)=>{
      e.preventDefault();
      const {target} =e;
      const email = e.target.email.value;
      const password = e.target.password.value;
      Meteor.loginWithPassword(email,password, (error)=>{
        error?
         console.log(error.reason):
        //  email = Meteor.user().emails[0].address
         route.go('BodyComponent?email='+email)
      });
    }

      render(){
          return(

            <div className="container">
            <div className="field">
          <div className="field">
         <form className="col s12" onSubmit = {this.logIn}>

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
        <button type="submit" className="waves-effect waves-light btn modal-trigger" id="LoginButton"> LogIn</button>
         </form>
       </div>
      </div>
      </div>
          );
      }
  }