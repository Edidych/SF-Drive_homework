import React from "react";

import "./InfoPhoneMail.scss";

function InfoPhoneMail() {
    return (
        <div className="main-contact-data">
            <div className="main-contact-data__blockMail">
                <p attr="connect-header">Электронная почта</p>
                <p attr="connect-info changeColorlink">drive@skillfactory.com</p>
            </div>
            <div className="main-contact-data__blockPhone">
                <p attr="connect-header">Телефон</p>
                <p attr="connect-info changeColorlink">+7 912 123-45-67</p>
            </div>
        </div>
    );
}

export default InfoPhoneMail;