import React from 'react';
import Joi from 'joi-browser';
import Form from './Form';
import './Contact.scss';

class Contact extends Form {
        state ={
        fields: {name:'', email:'', message:''},
        errors: {}
    };

    schema = {
        name:Joi.string().required().label('Name'),
        email:Joi.string().required().label('Email'),
        message:Joi.string().required().label('Message')
    };
   
    doSubmit = () => {
        console.log('Submitted');
    }
    render() { 
    return ( 
        <section className="contact">
            <div className="contact-me">
                <h2>Contact Me</h2>
            </div>
            <form onSubmit={this.handleSubmit} className="form">
                {this.renderInput('name', 'Name')}
                {this.renderInput('email', 'Email')}
                {this.renderInput('message', 'Message')}
                {this.renderButton("Submit")}
            </form>
        </section>
        );
    }
}
 
export default Contact;