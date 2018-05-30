// Samuel
import React,{Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import route from '/imports/routing/router.js';
import Footer from './Footer';
import  Navbar from '/imports/ui/Navbar.jsx';
import LogIn from '/imports/ui/LogIn.jsx';

export default class CreateAccount extends Component {
  constructor(props){
    super(props);
    this.state = {
       error :"",
       error2 :"",
      }
    }

    // popupLogIn
      componentDidMount(){
        $('.modal').modal();
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

      if(password.length <=6) {
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
    <div className="modal-content">
      <LogIn/>
    </div>
    <div id="modal1" className="modal modal-fixed-footer">
    </div>
    <a href="#" className="modal-close waves-effect waves-green btn-flat"></a>
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
            <p className="signup-title btnpara">sign up</p>
            <p className="btnpara"> Already have an account? <a className="waves-effect waves-light modal-trigger" href="#modal1" id="LoginButton">Log In here</a></p><br/>

              <div className="CreateAccount">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <form onSubmit = {this.getUserData} className="needs-validation">
                        <div className="input-field">
                          <i className="material-icons prefix">account_circle</i>
                          <input type="text" className="form-control" name="name" required />
                          <label>Full name</label>
                        </div><br/>

                        <div className="input-field">
                        <i className="material-icons prefix">email</i>
                            <input type="email" className="form-control" name="email" label="Email Address" required/>
                            <label>email</label>
                        </div>
                        <br/>

                        <div className="input-field">
                        <i className="material-icons prefix">phone</i>
                            <input type="number" className="form-control" name="phone" label="Telephone" required/>
                            <label>Telephone</label>
                        </div>
                        <br/>

                        <div className="input-field">
                        <i className="material-icons prefix">visibility</i>
                            <input type="password"  className="form-control" name="password"  label="Password" required/>
                            <p style={{color:"red"}}>{this.state.error2}</p>
                            <label>Password</label>
                        </div>
                        <br/>

                        <div className="input-field">
                        <i className="material-icons prefix">visibility</i>
                            <input type="password" className="form-control" name="password2" label="Confirm password" required/>
                            <p style={{color:"red"}}>{this.state.error}</p>
                            <label>Confirm password</label>
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
