import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '/imports/ui/Navbar';
import Footer from '/imports/ui/Footer.jsx';
import { Row, Input } from 'react-materialize';

export default class ReservationForm extends Component {
    render() {
        return(
            <div>
            
                <div>
                    <Navbar/>
                    <br/>
                    <br/>

                    <div className="backgroud-page">
                        <div className="container">
                            <div className="row">
                                <div className="col s12 m6">
                                    <h5 className="center heading">Fill in the form to Reserve your Ticket</h5>
                                    <form action="">
                                        <div className="input-field">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input id="icon_prefix" type="text" className="validate"/>
                                            <label for="icon_prefix">Last Name</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input id="icon_prefix" type="text" className="validate"/>
                                            <label for="icon_prefix">Last Name</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">email</i>
                                            <input id="icon_prefix" type="email" className="validate"/>
                                            <label for="icon_prefix">Email</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">phone</i>
                                            <input id="icon_prefix" type="tel" className="validate"/>
                                            <label for="icon_prefix">Phone Number</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">picture_in_picture</i>
                                            <input id="icon_prefix" type="tel" className="validate"/>
                                            <label for="icon_prefix">ID Number</label>
                                        </div>

                                        <Row>
                                            <Input name='group1' type='radio' value='male' label='Male' className='with-gap' />
                                            <Input name='group1' type='radio' value='female' label='Female' className='with-gap' />
                                            <Input name='group1' type='radio' value='other' label='Other' className='with-gap' />
                                        </Row>
                                        <Row>
                                            <Input name='group1' type='checkbox' value='' label='Do you accept our Terms & Conditions?' />
                                            {/* <p>Do you accept our Terms & Conditions?</p> */}
                                        </Row>
                                        <p>
                                            <a href="#" className="waves-effect btn amber accent-4">Learn more</a>
                                        </p>
                                        
                                    </form>
                                </div>
                                <div className="col s12 m6">
                                    <h5 className="center heading">Fill in the form to Reserve your Ticket</h5>
                                    <p className="align-center-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor at esse ea possimus eum tempora aliquid ab sit natus accusamus, iste placeat eius rem provident ullam, doloribus, nemo unde sed.
                                    Odio nam laborum quaerat, fugit commodi repellat voluptas recusandae necessitatibus dolor quae, harum praesentium. Molestiae autem accusamus eos mollitia nemo. Atque dolorem amet aliquam perferendis cupiditate mollitia consectetur quod perspiciatis.
                                    Consectetur accusamus nesciunt magnam corporis iste, saepe dicta voluptatum necessitatibus impedit tenetur nobis distinctio sunt laboriosam animi maiores aspernatur illum laudantium exercitationem debitis. Consectetur, fugiat ea? Debitis doloribus harum consequuntur?</p>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <Footer/>
                </div>
            </div>
        )
    }
}