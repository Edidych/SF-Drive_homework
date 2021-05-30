import * as React from "react";
import classnames from "classnames";
import {useFormik, ErrorMessage} from "formik";


import "./Main.scss";

import HeadersSteps from "./HeadersSteps/HeadersSteps";
import validationInput from "./validationInput.js";
import blockForm from "./../../registrConfig.js";


const initialValues = blockForm.reduce((result, {fieldName, value}) => {
    return {...result, [fieldName]:value}
}, {})
// console.log(initialValues.firstName)



function Main() {

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: initialValues,
        validationSchema: validationInput,
        onSubmit: (values) => {
            console.log(values)
        }
    })
    
    return(
        
        <main className="formWrapper" >
            <HeadersSteps />
            <form onSubmit={handleSubmit}> 
                {blockForm.map(({fieldLabel, fieldName, width, type, placeholder, header, icon}) => {
                    const inputClasses = classnames({
                        ["formWrapper-block_input"]: true, 
                        ["formWrapper-block_inputSmall"]: width === "small",
                        ["imgCalendar"]: icon === "calendar",
                        ["imgEyes"]: icon === "eyes"
                    });
                    return(
                        <div key={fieldName} className="formWrapper-block">
                            {header && <legend className="formWrapper-block_header">{header}</legend>}
                            <div className="formWrapper-block_info">
                                <span>{fieldLabel}</span>
                                <input 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id={fieldName}
                                className={inputClasses}
                                type={type}
                                placeholder={placeholder} 
                                />
                                {touched[fieldName] && errors[fieldName] ? (
                                    <div>{errors[fieldName]}</div>
                                ): null}
                            </div>
                        </div>
                    )
                })}
                <div className="footer">
                    <button type="submit" className="footer-button">Продолжить</button>
                </div>
            </form>
        </main>

    )
}

export default Main;