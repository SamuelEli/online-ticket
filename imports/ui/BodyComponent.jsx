import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
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
            </div>
        )
    }
}



