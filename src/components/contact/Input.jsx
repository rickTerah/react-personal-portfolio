import React from 'react';

const input = ({ name, label, error, ...rest }) => {
    return ( 
            <div className="form__group">
                <label className="form__label" htmlFor={name}>{label}</label>
                <input 
                {...rest} 
                name={name} 
                id={name} 
                className="form__input" 
                placeholder={label} />
                {error && <div className="alert alert-danger">
                    <p className="alert-error">{error}</p>
                </div>}
            </div>
     );
}

export default input;