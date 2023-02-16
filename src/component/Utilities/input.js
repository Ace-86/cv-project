import React from "react";


//create input box for cv form to be used
const Input = ({ type, name, placeholder, obChange, value }) => {
    return (
        <InputWrapper
            onChange={onChange}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            />
    );
};

export default Input