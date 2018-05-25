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
    <div class="modal-content">
    <LogIn/>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat"></a>
    </div>
    </div>
      )
    }
    render() {
      return(
      <div>
          <Navbar CreateAccount={'active'}/>
          {this.renderLogin()}
        <div><br/>
            <div className="Container">
             <div id="AccountTitle">
         
             
                </div>
                <div className="CreateAccount">
              <div className="row justify-content-center">
               <div className="col-md-4">
          <div className="text-center">
          </div>
            <form onSubmit = {this.getUserData} className="needs-validation">
                <div className="form-group">
                    <input type="text" className="form-control" name="name" id="formGroupExampleInput" placeholder="Full name" required />
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" name="email" id="formGroupExampleInput2" placeholder="Email Address" required/>
                </div>

                <div className="form-group">
                    <input type="number" className="form-control" name="phone" id="formGroupExampleInput2" placeholder="Telephone" required/>
                </div>

                <div className="form-group">
                    <input type="password"  className="form-control" name="password" id="formGroupExampleInput2" placeholder="Password"required/>
                    <p style={{color:"red"}}>{this.state.error2}</p>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" name="password2" id="formGroupExampleInput2" placeholder="Confirm password"required/>
                    <p style={{color:"red"}}>{this.state.error}</p>
                </div>
               
                <div className="text-center">
                <input type="submit" value="CreateAccount" id="submitbtn"/>
                </div>
            </form>
            <br/>
            <p> Already have an account?<a className="waves-effect waves-light btn modal-trigger" href="#modal1" id="LoginButton">Login</a></p>
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

  