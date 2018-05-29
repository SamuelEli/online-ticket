import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import 'react-materialize';
import { Row, Input } from 'react-materialize';
import route from '/imports/routing/router.js';



export default class Home extends Component {
    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div id="about center-align">
                                <h2 className="title">About Us</h2>
                                <div>
                                <p className="about">ON bus tickets is a project purely inspired by young people with bright ideas in the spring time of life.
                                 As web developers we understand that making a travel isn’t just in the destination, it’s in the experience. Our website understands that not every client is familiar with this country so we’d like you to trust  that we will allow to decide which bus operators suite your preferences with a variety of coaches anytime, anywhere. As ON bus tickets, we believe in the social aspect of every user’s embarkation. We would love for you to visit again, well, maybe a little more than twice. However, our main speciality is in working with one operator at a time.</p>
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
                        <p>Your probably asking/thinking, if other websites already exist for similar purposes, what is the need for another?
                        Think of it this way, no man who ever achieved the extraordinary escaped the truth of innovation. The
                        desire to grow as individuals and as a business but most importantly as a team is guarantee enough that we will strive our hardest to give you what you ask for and maybe a little more. Which brings us  back to the age old saying; easier said than done which means that every decision we make is accountable by our beloved clients.</p>
                    </div>
                </div>
                {/* </div> */}
                <div className="component-three">
                    <div className="component-two">
                        <div className="component-one">
                            <div>
                                <div className="container">
                                    <p>We have always wanted to be the kind of leaders that are able to convey a vision as clearly as possible, especially with our clients. Sure the application of this principal to make a web application for day-to-day routings may present some difficulties, there is still a lot that can be done with major travel buses in terms of user experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
