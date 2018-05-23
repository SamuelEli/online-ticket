// Samuel
import React,{Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import route from '/imports/routing/router.js';
import Footer from './Footer';
import  Navbar from '/imports/ui/Navbar.jsx';
import LogIn from '/imports/ui/LogIn.jsx';
import {Row, Icon, Input} from 'react-materialize';

export default class CreateAccount extends Component {
  constructor(props){
    super(props);
    this.state = {
       error :"",
       error2 :"",
      }
    }
    
    // popupLog
      componentDidMount(){
        $(document).ready(function(){
          $('.modal').modal();
        });
            
      }



    goToContacts = () => {
      route.go('/dashboard',{_id:this.state.name},{});
    }
    
    getUserData =(e) =>{
      e.preventDefault();
      const {target} = e;
      const name = target.name.value;
      const email = target.email.value;
      const phone = target.phone.value;
      const password = target.password.value;
      const password2 = target.password2.value;
      
      if(password.trim()!==password2.trim()){
        this.setState({
          error: "Passwords do not match"
        })
        return;
      };
      
      if(password.length <=6
      ){
        this.setState({
          error2: "Password too short"
        })
        return;
      }
      const user = {
        email,
        password,
        profile: {
          name,
          phone,
        },
        createdAt: new Date()
      }
      
      Accounts.createUser(user,error=>{
        error ? console.log(error.reason) : console.log("Account Created Successfully")
      }) ;
     route.go('/');
    }

    renderLogin(){
      return(

      // loginForm
  <div id="modal1" className="modal">
    <div class="modal-content">
    <LogIn/>
    </div>
    <div class="modal-footer">
    </div>
    </div>
      )
    }
    render() {
      return(
        <div>
          <Navbar CreateAccount={'active'}/>
          {this.renderLogin()}
          <div>
            <br/>
            <div className="Container">
            <p className="btnpara"> Already have an account? <a href="#modal1" id="LoginButton">Log In here</a></p>
              <div className="CreateAccount">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <form onSubmit = {this.getUserData} className="needs-validation">
                        <div className="input-field">
                          <i className="material-icons prefix">account_circle</i>
                          <input type="text" className="form-control" name="name" label="Full name" required />
                          <label for="icon_prefix">Full name</label>
                        </div>

                        <div className="input-field">
                        <i className="material-icons prefix">email</i>
                            <input type="email" className="form-control" name="email" label="Email Address" required/>
                            <label for="icon_prefix">email</label>
                        </div>
                        <br/>

                        <div className="input-field">
                        <i className="material-icons prefix">phone</i>
                            <input type="number" className="form-control" name="phone" label="Telephone" required/>
                            <label for="icon_prefix">Telephone</label>
                        </div>
                        <br/>

                        <div className="input-field">
                        <i className="material-icons prefix">visibility</i>
                            <input type="password"  className="form-control" name="password"  label="Password" required/>
                            <p style={{color:"red"}}>{this.state.error2}</p>
                            <label for="icon_prefix">Password</label>
                        </div>
                        <br/>

                        <div className="input-field">
                        <i className="material-icons prefix">visibility</i>
                            <input type="password" className="form-control" name="password2" label="Confirm password" required/>
                            <p style={{color:"red"}}>{this.state.error}</p>
                            <label for="icon_prefix">Confirm password</label>
                        </div>
                        <br/>
                      
                        <div className="text-center">
                          <input type="submit" value="CreateAccount" id="submitbtn"/>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          <Footer/> 
          </div>
        </div>
      )
    }
  }