import React,{Component} from 'react';
// import { Meteor } from 'meteor/meteor';
// import { Accounts } from 'meteor/accounts-base';
// import route from '/imports/routing/router.js';
// import Footer from '/imports/ui/Footer.jsx';
// import  Navbar from '/imports/ui/Navbar.jsx';
// l
// export default class CreateAccount extends Component {

//     constructor(props){
//       super(props);
//       this.state = {
//         error :"",
//         error2 :"",

//       }
//     }
  //   goToContacts = () => {
  //     route.go('/dashboard',{_id:this.state.name},{});
  // }
  //   getUserData =(e) =>{
  //     e.preventDefault();
  //     const {target} = e;
  //     const name = target.name.value;
  //     const email = target.email.value;
  //     const phone = target.phone.value;
  //     const password = target.password.value;
  //     const password2 = target.password2.value;

  //    if(password.trim()!==password2.trim()){
  //      this.setState({
  //        error: "Passwords do not match"
  //      })
  //      return;
  //    };
  //    if(password.length <=6
  //    ){
  //      this.setState({
  //        error2: "Password too short"
  //      })
  //      return;
  //    }
  //    const user = {
  //      email,
  //      password,

  //      profile: {
  //        name,
  //        phone,
  //      },
  //      createdAt: new Date()
  //    }
  //    Accounts.createUser(user,error=>{
  //      error ? console.log(error.reason) : console.log("Account Created Successfully")
  //    }) ;

  //   }

  //   render(){
  //     return(
        
  //       <div>
  //         <Navbar CreateAccount={'active'}/>
  //       <div>
  //         <div className="CreateAccount">
  //         <div className="row justify-content-center">
  //         <div className="col-md-4">
  //         <div className="text-center">
  //         <h4> create account</h4>
  //         </div>
  //           <form onSubmit = {this.getUserData} className="needs-validation">
  //               <div className="form-group">
  //                   <label className="col-form-label" htmlFor="formGroupExampleInput">Organization Name</label>
  //                   <input type="text" className="form-control" name="name" id="formGroupExampleInput" placeholder="Enter Name" required />
  //               </div>
  //               <div className="form-group">
  //                   <label className="col-form-label" htmlFor="formGroupExampleInput2">Email Address</label>
  //                   <input type="email" className="form-control" name="email" id="formGroupExampleInput2" placeholder="Enter Email Address" required/>
  //               </div>
  //               <div className="form-group">
  //                   <label className="col-form-label" htmlFor="formGroupExampleInput2">Contact Number</label>
  //                   <input type="number" className="form-control" name="phone" id="formGroupExampleInput2" placeholder="Enter Phone Number" required/>
  //               </div>
  //               <div className="form-group">
  //                   <label className="col-form-label" htmlFor="formGroupExampleInput2">Password</label>
  //                   <input type="password" className="form-control" name="password" id="formGroupExampleInput2" placeholder="Choose Password"  required/>
  //                   <p style={{color:"red"}}>{this.state.error2}</p>
  //               </div>
  //               <div className="form-group">
  //                   <label className="col-form-label" htmlFor="formGroupExampleInput2">Confirm Password</label>
  //                   <input type="password" className="form-control" name="password2" id="formGroupExampleInput2" placeholder="Enter Password Again"required/>
  //                   <p style={{color:"red"}}>{this.state.error}</p>
  //               </div>
  //               <div className="form-group">
  //                   <label className="col-form-label" htmlFor="formGroupExampleInput2">Location</label>
  //                   <input type="text" className="form-control" name="location" id="formGroupExampleInput2" placeholder="Enter Town Name" required/>
  //               </div><br/>
  //               <div className="text-center">
  //               <input type="submit" value="CreateAccount" id="submitbtn"/>
  //               </div>
  //           </form><br/>
  //           <div className="text-center">
  //               <p>Sign up Now!</p>
  //           </div>

  //       </div>
  //       </div>
  //     </div>
  //       </div>
  //       <Footer/>
  //       </div>
  //     )
  //   }
  // }
  // samuel
