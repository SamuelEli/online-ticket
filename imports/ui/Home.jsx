import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Input } from 'react-materialize';
import ReservationForm from '/imports/ui/ReservationForm';
import ContactUs from './ContactUs';


export default class Home extends Component {
    render() {
        return(
            <div>
                <div className="header">
                    <div className="container">
                        <nav>
                            <div className="nav-wrapper">
                                <h6><a href="#" className="brand-logo"> <span id="logo"> On|Bus Services </span> </a></h6>
                                <a className="button-collapse sidenav-trigger" data-target="mobile-nav" href="#">
                                    <i className="material-icons">menu</i>
                                </a>
                                
                                <ul className="right hide-on-med-and-down">
                                    <li> <a href="#" active="true" className="active">Home</a></li>
                                    <li> <a href="#" id="button">Routes</a></li>
                                    <li> <a href="ReservationForm" className="waves-effect btn amber accent-4">Contact Us</a></li>
                                </ul>
                                <ul className="side-nav" id="mobile-nav" >
                                    <li> <a href="#" active="true">Home</a></li>
                                    <li> <a href="#" id="button">Routes</a></li>
                                    <li> <a href="ReservationForm" className="waves-effect btn amber accent-4">ReservationForm</a></li>
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
                                    <p className="left-align paragraph-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae corrupti impedit tempora voluptas nostrum quod error nisi hic quas, nihil rem earum commodi tempora voluptas nostrum quod error nisi hic quas, nihil. <i className="material-icons">sentiment_very_satisfied</i> </p>
                                    <p>
                                        <a href="#" className="waves-effect btn-large amber accent-4">Learn more</a>
                                    </p>
                                </div>
                                <div className="col s12 l8">

                                    {/* CARD TRY OUT */}
                                
                                    <div className="card hoverable">
                                        <div className="card-image waves-effect waves-block waves-light">
                                            <img className="activator" src="images/black.svg" alt=""/>
                                        </div>
                                        <div>
                                            <span className="card-title activator amber-text text-accent-4">Card Title<i className="material-icons right">more_vert</i></span>
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
                                                                <option value='5'>Chipata</option>
                                                                <option value='6'>Livingstone</option>
                                                                <option value='7'>Mansa</option>
                                                                <option value='8'>Mongu</option>
                                                            </Input>
                                                            <Input s={12} type="date" className="datepicker" placeholder="Pick a Day"/>
                                                            <Input s={12} type="time" className="timepicker" placeholder="Pick a Time"/>
                                                            <a href="#" className="waves-effect btn-large amber accent-4 left-align p2">Reserve</a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div id="about center-align">
                                <h2 className="title">About Us</h2>
                                <div>
                                    <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem id dicta deserunt sit quae saepe recusandae ratione itaque nulla, omnis quos eius in suscipit corporis non qui ipsa dolor.Eos sit facere deleniti vitae cum eaque velit ipsum odit distinctio est eius natus, recusandae placeat blanditiis maxime ducimus pariatur nisi similique iure reiciendis omnis laboriosam earum accusamus. Perferendis, fugiat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="component">
                    <div>
                        <div className="container">
                                <div className="row">
                                    <div className="center-align">
                                        <h2 className="title">Beautiful places our services will take you to</h2>
                                    </div>

                                    <div className="items">
                                        <div className="col s12 l4">
                                            <div className="left-align">
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laborum voluptate commodi asperiores! Exercitationem, sapiente consequuntur nobis, fugit praesentium inventore eveniet tempora blanditiis qui quis minus suscipit cum eius reiciendis.</p>
                                            </div>
                                        </div>
                                        <div className="col s12 l4">
                                            <div className="center-align">
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laborum voluptate commodi asperiores! Exercitationem, sapiente consequuntur nobis, fugit praesentium inventore eveniet tempora blanditiis qui quis minus suscipit cum eius reiciendis.</p>
                                            </div>
                                        </div>
                                        <div className="col s12 l4">
                                            <div className="right-alight">
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laborum voluptate commodi asperiores! Exercitationem, sapiente consequuntur nobis, fugit praesentium inventore eveniet tempora blanditiis qui quis minus suscipit cum eius reiciendis.</p>
                                            </div>
                                        </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="new">
                        <p>NEW CLASSLorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sequi harum neque animi at dignissimos velit blanditiis similique, hic, eveniet magnam? Autem eius voluptates necessitatibus! Ea sint earum necessitatibus et.
                        Obcaecati temporibus tempora ipsum, corrupti doloribus ea suscipit molestias magnam sint. Iste incidunt dolore modi assumenda explicabo, doloremque est, voluptas quaerat exercitationem non dicta. Quidem labore autem vel similique voluptates!
                        Nobis obcaecati nemo reprehenderit rem, explicabo dolorem est non aliquam maiores. Deserunt nesciunt, quidem numquam eos dolore, unde sapiente esse labore perspiciatis saepe, nostrum aperiam tempora odit at eius natus?</p>
                    </div>
                </div>
                {/* </div> */}
                <div className="component-three">
                    <div className="component-two">
                        <div className="component-one">
                            <div>
                                <div className="container">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quibusdam odit porro dolorum dolor ad nam omnis sunt debitis magni at numquam, ducimus, neque praesentium repellendus amet quo iure perferendis?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>             
                <div>
                    <footer className="page-footer">
                        <div className="container">
                            <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Footer Content</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div className="col l4 offset-l2 s12 right-align">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="footer-copyright black">
                            <div className="container">
                                &copy; 2018
                            <a className="grey-text text-lighten-4 right" href="#!">Terms and Conditions</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.timepicker');
//     var instances = M.Timepicker.init(elems, options);
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
//   });