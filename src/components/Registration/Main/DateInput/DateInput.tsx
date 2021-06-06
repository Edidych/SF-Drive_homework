import * as React from "react";
import classnames from "classnames";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./DateInput.scss"



const DateInput = ({fieldName, type, placeholder, width, icon, descriptionIcon, handleChange, handleBlur}) => {
    const [startDate, setStartDate] = React.useState(new Date());

    const InputWithImgClasses = classnames({
        ["formWrapper-block_imgInInput"]: true, 
        ["formWrapper-block_imgInInputSmall"]: width === "short"
    });
    const BtnInInputClasses = classnames({
        ["btnInInputShort"]: true,
        ["btnInInputLong"]: width === "long"
    });

    return(

        <div className="formWrapper-block_forInput">
            <DatePicker 
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                // onChange={handleChange}
                onBlur={handleBlur} 
                id={fieldName}
                className={InputWithImgClasses}
                type={type}
                placeholder={placeholder} 
            />
            <button 
                className={BtnInInputClasses} 
                type="button"
            >
                    <img 
                        src={icon} 
                        alt={descriptionIcon}
                    />
            </button>
        </div>
    )
}

export default DateInput
