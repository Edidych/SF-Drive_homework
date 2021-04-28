import * as React from "react";

import "./DriverLicense.scss";


function DriverLicense() {
    return(
        <form>
            <legend>Водительское удостоверение</legend>
            <div className="main-driverLicense">
                <span>Серия и номер</span><input type="text" placeholder="0000 000000" />
            </div>
            <div className="main-driverLicense">
             <span>Дата выдачи</span><input type="text" placeholder="00.00.0000" />
            </div>
        </form>
    );
}

export default DriverLicense;