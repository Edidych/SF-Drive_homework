import * as React from "react";

import HeadersSteps from "./HeadersSteps/HeadersSteps";
import InfoAboutYou from "./InfoAboutYou/InfoAboutYou";
import Passport from "./Passport/Passport";
import DriverLicense from "./DriverLicense/DriverLicense";
import Password from "./Password/Password";

import "./Main.scss";


function Main() {
    return(
        <main className="main">
            <HeadersSteps />
            <InfoAboutYou />
            <Passport />
            <DriverLicense />
            <Password />
        </main>
    );
}

export default Main;