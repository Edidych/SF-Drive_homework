import * as React from "react";


import Header from "./Registration/Header/Header";
import Main from "./Registration/Main/Main";

import "./AppFonts.scss";

function AppRegistration() {
    return(
        <div className="font">
            <Header />
            <Main />
        </div>
    );
}

export default AppRegistration;