// Samuel
import React,{Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import route from '/imports/routing/router.js';
import Footer from './Footer';
import  Navbar from '/imports/ui/Navbar.jsx';
import LogIn from '/imports/ui/LogIn.jsx';
import { Row, Input } from 'react-materialize';

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
            <div className="container">
              <p className="signup-title btnpara">sign up</p>
              <p className="btnpara"> Already have an account? <a className="waves-effect waves-light modal-trigger" href="#modal1" id="LoginButton">Log In here</a></p><br/>

              <div className="">
                  <div className="row">
                    <form onSubmit = {this.getUserData} className="needs-validation">

                      <div className="col s12 m6">
                        <div className="input-field">
                          <i className="material-icons prefix">account_circle</i>
                          <input type="text" className="form-control" name="name" required />
                          <label>FULL NAME</label>
                        </div>
                      </div>

                        <div className="col s12 m6">
                          <div className="input-field">
                            <i className="material-icons prefix">email</i>
                            <input type="email" className="form-control" name="email" label="Email Address" required/>
                            <label>EMAIL</label>
                          </div>
                        </div>

                        <div className="col s12 m6">
                          <div className="input-field">
                            <i className="material-icons prefix">phone</i>
                            <input type="number" className="form-control" name="phone" label="Telephone" required/>
                            <label>TELEPHONE</label>
                          </div>
                        </div>

                         <div className="col s12 m6">
                          <div className="input-field">
                            <i className="material-icons prefix">visibility</i>
                            <input type="password"  className="form-control" name="password"  label="Password" required/>
                            <p style={{color:"red"}}>{this.state.error2}</p>
                            <label>PASSWORD</label>
                          </div>
                        </div>


                        <div className="col s12 m6">
                          <div className="input-field">
                              <i className="material-icons prefix">picture_in_picture</i>
                              <input  type="number" id="icon_prefix" name="idNumber" className="validate" required/>
                              <label htmlFor="icon_prefix">NRC/DRIVING LINCENSE NUMBER</label>
                          </div>
                        </div>


                        <div className="col s12 m6">
                          <div className="input-field">
                            <i className="material-icons prefix">visibility</i>
                            <input type="password" className="form-control" name="password2" label="Confirm password" required/>
                            <p style={{color:"red"}}>{this.state.error}</p>
                            <label>CONFIRM PASSWORD</label>
                          </div>
                        </div>

                          <Row>
                              <Input name='group1' type='radio' label='Male' className='with-gap' />
                              <Input name='group1' type='radio' label='Female' className='with-gap' />
                              <Input name='group1' type='radio' label='Other' className='with-gap' />
                          </Row>

                          <Row>
                              <Input name='group2' type='checkbox' label='DO YOU ACCEPT OUR TERMS AND CONDITIONS?' />
                          </Row>

                        <div className="text-center">
                          <input type="submit" value="CREATE ACCOUNT" className="waves-effect waves-dark btn amber accent-4"/>
                        </div>
                    </form>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      )
    }
  }
