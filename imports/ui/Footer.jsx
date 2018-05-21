import React,{Component} from 'react';
import { Meteor } from 'meteor/meteor';
import route from '/imports/routing/router.js';



export default class  Footer extends Component{
  render(){
    return(
      <div>
      <footer className="page-footer">
            <div className="container">
              <div className="row">
                 <div className="col l6 s12">
                  <h5 className="blue-text">Footer Content</h5>
                  <p className="blue-text text-lighten-4"></p>
                </div>
                     <div className="col l4 offset-l2 s12">
             <h3 className="blue-text">Links</h3>
                  <ul>
                    <li><a className="blue-text" href="#!">ContactUs</a></li>
                    <li><a className="blue-text" href="#!"></a></li>
                    <li><a className="blue-text" href="#!">Link 3</a></li>
                    <li><a className="blue-text" href="#!">Link 4</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              © 2014 Copyright Text
              <a className="blue-text text-lighten-4 right" href="#!"><h3>More Links</h3></a>
              </div>
            </div>
          </footer>
        </div>
    );
  }
}
