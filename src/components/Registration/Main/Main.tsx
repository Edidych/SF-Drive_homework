import * as React from "react";
import classnames from "classnames";
import {useFormik} from "formik";

import "./Main.scss";

import HeadersSteps from "./HeadersSteps/HeadersSteps";
import blockForm from "./../../registrConfig.js";


const initialValues = blockForm.reduce((result, {fieldName, placeholder}) => {
    return {...result, [fieldName]:placeholder}
}, {})
console.log(initialValues)

function Main() {
    const {handleSubmit, handleChange, values} = useFormik({
        initialValues: initialValues,
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
                            {header && <legend className="formWrapper-block_header">{header}</legend>} {/* // h1 */}
                            <div className="formWrapper-block_info">
                                <span>{fieldLabel}</span>
                                <input 
                                onChange={handleChange}
                                id={fieldName}
                                className={inputClasses} 
                                type={type} 
                                placeholder={placeholder} 
                                />
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