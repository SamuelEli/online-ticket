import React ,{Component} from 'react';
import { Meteor } from 'meteor/meteor';
import route from '/imports/routing/router.js';
import Footer from '/imports/ui/Footer.jsx';
import  Navbar from '/imports/ui/Navbar.jsx';



export default class  ReserveForm extends Component{
  constructor(props) {
      super(props);
      this.state = {value: '' ,fullname:'' , number:'', email:'', Addressname:''};
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    onChange(state,event){
      let val = {};

     val[state] = event.target.value;
     this.setState(val)
    }

    handleSubmit(event) {
      event.preventdefault();
    }

    render() {
      return (
        <div>
          <Navbar ContactUs={'active'}/>

         <div className="ContactForm">
          <h1>Reserve Ticket</h1>
                  <h5>Home Page</h5>
           <form onSubmit={this.handleSubmit}>
        {/* <em><h1 classNconfirmame="h11"> Contact Us</h1></em> */}

      <div>
        <div className="row">
          <div className="input-field col s12">
        <label>
          <input
            type="text"
            placeholder="Full name/User name"
            value={this.state.name}
            onChange={(event)=>{this.onChange('name',event)}}/>
        </label>
      </div>
    </div>
    </div>

      <div>
        <div className="row">
          <div className="input-field col s12">
        <label>
          <input
            type="number"
            placeholder="number"
            value={this.state.number}
            onChange={(event)=>{this.onChange('number',event)}}/>
       </label>
      </div>
    </div>
  </div>


      <div>
        <div className="row">
          <div className="input-field col s12">
        <label>
          <input
            type="text"
            placeholder="Address name"
            value={this.state.Address}
            onChange={(event)=>{this.onChange('Address',event)}}/>
       </label>
     </div>
   </div>
 </div>

     <div>
       <div className="row">
         <div className="input-field col s12">
       <label>
          <input
             type="email"
             placeholder="Email"
             value={this.state.email}
             onChange={(event)=>{this.onChange('email',event)}}/>
        </label> <br/> <br/>
     </div>
      <div>
      </div>
    </div>
            <button type="Primary" className="btn btn-primary">confirm</button>
     </div>
  </form>
  <br/>
  <br/>
  <br/>
    </div>
  <Footer/>
  </div>
      );
    }
  }
