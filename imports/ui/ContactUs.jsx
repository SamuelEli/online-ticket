import React,{Component} from 'react';
import  Meteor  from 'meteor/meteor';
import route from '/imports/routing/router.js';
import Footer from '/imports/ui/Footer.jsx';
import  Navbar from '/imports/ui/Navbar.jsx';
import { Modal, Button } from 'react-materialize';
import Input from 'react-materialize/lib/Input';

export  default class ContactUs extends Component {
  constructor(props) {
    super(props);
     this.state = {value: '' ,text: '', text1:'' ,email:'' ,number:'',tel:'',message:''};
  }
  handleSubmit = () =>{
    alert(
      "MESSAGE SENT."
    );
  }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
    
    onChange(state,event){
      let val = {};
      
      val[state] = event.target.value;
      this.setState(val)
    }

    render() {
      return (
        <div>

          <div className="ContactHeader">
          <div className="container">
            <Modal
    
              fixedFooter
              trigger={<Button> Contact Us</Button>}>

              <div className="">
              <div className="PopHeader">
                <h3>Contact Us</h3>
                </div>
              <form onSubmit={this.handleSubmit}>
              <div className="One">
              <label>
              <Input s={6} ref="name" label="Full Name" type="text" size="30" value={this.state.text} text="validate" onChange={(event)=>{this.onChange('text',event)}} />
              </label><br/>
              </div>

              <div className="Two">
              <label>
              <Input s={6} refs="email" label="Email" type="email"  value={this.state.emeil} className="validate" onChange={(event)=>{this,ochange('email',event)}}/>
              </label><br/>
              </div>

              <div className="Three">
              <label>
              <Input s={12} label="Number" type="number"  value={this.state.tel} id="icon_telephone" className="validate"
               onChange={(event)=>{this.onChange('tel',event)}}
               />
              </label><br/>
              </div>

              <div className="Four">
              <label>
              <Input label="Message" type="textarea"  value={this.state.text1} onChange={(event) =>{this.onChange('text1',event)}}/>
              </label>

                 <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
              </button>
              </div>
           
              </form>
              </div>
            </Modal>
          </div>
          </div>
        </div>
        );
      }
    }

// JS FOR MODAL

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  // var instances = M.Modal.init(elems, options);
});