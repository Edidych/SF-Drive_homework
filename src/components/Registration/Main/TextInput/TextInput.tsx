import * as React from "react";
import classnames from "classnames";

import "./TextInput.scss"



const TextInput = ({fieldName, type, placeholder, width, handleChange, handleBlur}) => {

    const inputClasses = classnames({
        ["formWrapper-block_input"]: true, 
        ["formWrapper-block_inputSmall"]: width === "short"
    });

    return(
        <input 
            onChange={handleChange}
            onBlur={handleBlur} 
            id={fieldName}
            className={inputClasses}
            type={type}
            placeholder={placeholder} 
        />
    )
}

export default TextInput
