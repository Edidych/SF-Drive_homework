import * as React from "react";
import classnames from "classnames";
import {useFormik, ErrorMessage} from "formik";


import "./Main.scss";

import HeadersSteps from "./HeadersSteps/HeadersSteps";
import validationInput from "./validationInput.js";
import blockForm, {fieldComponentType} from "./registrConfig.js";
import PasswordInput from "./PasswordInput/PasswordInput";  
import DateInput from "./DateInput/DateInput";
import TextInput from "./TextInput/TextInput";



const initialValues = blockForm.reduce((result, {fieldName, value}) => {
    return {...result, [fieldName]:value}
}, {})

function Main() {

    const {handleSubmit, handleChange, values, touched, isValid, dirty, errors, handleBlur} = useFormik({
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
                {blockForm.map((formItem) => {
                    const inputClasses = classnames({
                        ["formWrapper-block_input"]: true, 
                        ["formWrapper-block_inputSmall"]: formItem.width === "short"
                    });
                    return(
                        <div key={formItem.fieldName} className="formWrapper-block">
                            {formItem.header && <legend className="formWrapper-block_header">{formItem.header}</legend>}
                            <div className="formWrapper-block_info">
                                <span>{formItem.fieldLabel}</span>

                                {formItem.component === fieldComponentType.password && 
                                    <PasswordInput
                                        {...formItem}
                                        handleChange={handleChange} 
                                        handleBlur={handleBlur} 
                                    /> 
                                }
                                {formItem.component === fieldComponentType.date && 
                                    <DateInput
                                        {...formItem}
                                        handleChange={handleChange} 
                                        handleBlur={handleBlur}
                                    /> 
                                }
                                {formItem.component === fieldComponentType.text && 
                                    <TextInput
                                        {...formItem}
                                        handleChange={handleChange} 
                                        handleBlur={handleBlur}
                                    /> 
                                }
                            </div>
                            {touched[formItem.fieldName] && errors[formItem.fieldName] ? (
                                <div className="formWrapper-block-inputValid">{errors[formItem.fieldName]}</div>
                            ): null}
                        </div>
                    )
                })}
                <div className="footer">
                    <button disabled={!isValid || !dirty} type="submit" className="footer-button">Продолжить</button>
                </div>
            </form>
        </main>

    )
}

export default Main;