import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Row, Input } from 'react-materialize';
import route from '/imports/routing/router.js';





export default class Header extends Component {
    render() {
        return(
            <div>
                <div className="header">
                    <div className="container">
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
                                            <span className="card-title activator grey-text text-accent-4">Click on image<i className="material-icons right">more_vert</i></span>
                                            {/* <p><a href="#">Click to reserve your Ticket</a></p> */}
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
                                                            <a href="#" className="waves-effect btn-large amber accent-4 left-align p2">Reserve Ticket</a>
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
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.timepicker');
    var instances = M.Timepicker.init(elems, options);
});