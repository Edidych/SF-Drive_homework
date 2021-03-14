import React from "react";

import Copyright from "./Copyright/Copyright";
import SocialNetworks from "./SocialNetworks/SocialNetworks";

import "./Footer.scss";

function Footer() {
    return (
        <footer class="footer">
            <Copyright />
            <SocialNetworks />
        </footer>
    );
}

export default Footer;