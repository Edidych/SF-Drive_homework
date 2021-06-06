import * as React from "react";
import classnames from "classnames";

import "./PasswordInput.scss"



const PasswordInput = ({fieldName, type, placeholder, width, icon, iconChange, descriptionIcon, handleChange, handleBlur}) => {
    const [iconUrl, setIconUrl] = React.useState(icon)

    const handleClick = () => {
        if (iconUrl === icon) {
            setIconUrl(iconChange)
        }
        if (iconUrl === iconChange) {
            setIconUrl(icon)
        }
    }

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
            <input 
                onChange={handleChange}
                onBlur={handleBlur} 
                id={fieldName}
                className={InputWithImgClasses}
                type={type}
                placeholder={placeholder} 
            />
            <button 
                className={BtnInInputClasses} 
                type="button"
                onClick={handleClick}
            >
                    <img 
                        src={iconUrl} 
                        alt={descriptionIcon}
                    />
            </button>
        </div>
    )
}

export default PasswordInput


// прокинуть пропсы через спред оператор