import React, { Component } from 'react';
import Input from './Input';
import Joi from 'joi-browser';

class Form extends Component {
    state ={
        fields: {},
        errors: {}
    };

    validateField = () => {
        const options = {abortEarly: false};
        const { error } = Joi.validate(this.state.fields, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };
    validateProperty = ({ name, value }) => {
        
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name]}

        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    handleFormChange = ({currentTarget: input }) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const fields = {...this.state.fields};
        fields[input.name] = input.value;
        this.setState({fields, errors});
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validateField();
        this.setState({errors: errors || {} }); 
        if (!errors) return;
        this.doSubmit();
    };

    renderInput(name, label, type='text'){
        const { fields, errors } = this.state
        return (
            <Input 
                value={fields[name]}
                name={name}
                type={type}
                label={label} 
                error={errors[name]}
                onChange={this.handleFormChange}
            />
        )
    }

    renderButton = label => {
        return (
        <button className="btn btn--green"
        disabled={this.validateField()}
        >{label}</button>
        );
    }
}
 
export default Form;