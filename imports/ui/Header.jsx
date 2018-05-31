import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Row, Input } from 'react-materialize';
import route from '/imports/routing/router.js';

goToOperators = () => {
    route.go('/Operators')
}





export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'From',
            value: 'To'
        }
    }

    componentWillMount(){
        handleChange =(e) => {
            this.setState({value: e.target.value});
        }
        handleSubmit = (e) => {
            e.preventDefault();
            
        }

        // $(document).ready(function(){
        //     setTimeout(()=>{
        //     $('.select').material_select();
        //     },100000)
        // });
        
    }
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
                                                <form action="" onSubmit={this.handleSubmit}>
                                                    <div className="input-field"> 
                                                        <div className="white">
                                                            
                                                            <Input s={12} type='select' defaultValue={this.state.value} onChange={this.handleChange} name="select">
                                                                <option value='from'>From</option>
                                                                <option value='kitwe'>Kitwe</option>
                                                                <option value='lusaka'>Lusaka</option>
                                                                <option value='kasama'>Kasama</option>
                                                                <option value='solwezi'>Solwezi</option>
                                                                <option value='chipata'>Chipata</option>
                                                                <option value='livingstone'>Livingstone</option>
                                                                <option value='mansa'>Mansa</option>
                                                                <option value='mongu'>Mongu</option>
                                                            </Input>
                                                            <Input s={12} type='select' defaultValue={this.state.value} onChange={this.handleChange} name="select">
                                                            <option value='to'>To</option>
                                                                <option value='kitwe'>Kitwe</option>
                                                                <option value='lusaka'>Lusaka</option>
                                                                <option value='kasama'>Kasama</option>
                                                                <option value='solwezi'>Solwezi</option>
                                                                <option value='chipata'>Chipata</option>
                                                                <option value='livingstone'>Livingstone</option>
                                                                <option value='mansa'>Mansa</option>
                                                                <option value='mongu'>Mongu</option>
                                                            </Input>
                                                            
                                                            <Input s={12} name='date' type='date' onChange={function(e, value) {}} placeholder="Pick a Day" />
                                                            <Input s={12} name='time' type='time' onChange={function(e, value) {}} placeholder="Pick a Time" />
                                                            <a href="/Operators" className="waves-effect btn-large amber accent-4 left-align p2" onClick={this.goToOperators}>Reserve Ticket</a>
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
