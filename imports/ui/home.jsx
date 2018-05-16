import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import 'react-materialize';
import { Row, Input } from 'react-materialize';
//Code provided by Enoch
export default class Header extends Component {
  <div>
    <div className="header">
      <div className="container">
        <nav>
          <div className="nav-wrapper">
            <h6><a href="#" className="brand-logo">Online Bus Services</a></h6>
            <ul className="right hide-on-med-and-down">
              <li> <a href="#" active="true">Home</a></li>
              <li> <a href="#" className="button">Routes</a></li>
              <li> <a href="#" className="waves-effect btn amber accent-4">Contact Us</a></li>
            </ul>
          </div>
        </nav>
        <header className="intro">
          <div className="row">
            <div className="container">
              <div className="col s12">
                <h3>Get yourself a ticket from the comfort of your home</h3>
              </div>
            </div>
            <div className="col s12 l4">
              <p className="flow-text left-align">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae corrupti impedit tempora voluptas nostrum quod error nisi hic quas, nihil rem earum commodi tempora voluptas nostrum quod error nisi hic quas, nihil. <i className="material-icons">sentiment_very_satisfied</i> </p>
              <p><a href="#" className="waves-effect btn-large amber accent-4">Learn more</a></p>
            </div>
            <div className="col s12 l8">
              <div className="">
              {/* <div className="input-field">
                    <div className="card-panel white">
                      <Input s={3} type='select' defaultValue='2'>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                      </Input>
                      <Input s={3} type='select' defaultValue='2'>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                      </Input>
                      Input s={3} type="date" className="datepicker" value="Pick a Day"/>
                      <Input s={3} type="time" className="timepicker" value="Pick a Time"/>
                      <a href="#" className="waves-effect btn-large amber accent-4 left-align">Learn more</a>
                    </div>
                  </div> */}
                </div>
                {/* CARD TRY OUT */}
                <div className="card hoverable">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="img/black.svg" alt=""/>
                  </div>
                  <div>
                    <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                    <p><a href="#">Click to reserve your Ticket</a></p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i>Tell us where you want to go <i className="material-icons left"></i></span>
                    <div>
                      <form action="">
                        <div className="input-field">
                          <div className="white">
                            <Input s={12} type='select' defaultValue=''>
                              <option value=''>From</option>
                              <option value='1'>Kitwe</option>
                              <option value='2'>Lusaka</option>
                              <option value='3'>Kasama</option>
                              <option value='4'>Solwezi</option>
                              <option value='5'>Chipata</option>
                              <option value='6'>Livingstone</option>
                              <option value='7'>Mansa</option>
                              <option value='8'>Mongu</option>
                            </Input>
                            <Input s={12} type='select' defaultValue=''>
                              <option value=''>To</option>
                              <option value='1'>Kitwe</option>
                              <option value='2'>Lusaka</option>
                              <option value='3'>Kasama</option>
                              <option value='4'>Solwezi</option>
                              <option value='import '/imports/api/reservation/methods.js';5'>Chipata</option>
                              <option value='6'>Livingstone</option>
                              <option value='7'>Mansa</option>
                              <option value='8'>Mongu</option>
                            </Input>
                            <Input s={12} type="date" className="datepicker" placeholder="Pick a Day"/>
                            <Input s={12} type="time" className="timepicker" placeholder="Pick a Time"/>
                            <a href="#" className="waves-effect btn-large amber accent-4 left-align">Learn more</a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>import '/imports/api/reservation/methods.js';
            </div>
          </header>
        </div>
      </div>
    </div>
  }
}
import '/imports/api/reservation/methods.js';
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.timepicker');
  var instances = M.Timepicker.init(elems, options);
});
