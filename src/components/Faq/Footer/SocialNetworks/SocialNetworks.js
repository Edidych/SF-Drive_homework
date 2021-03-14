import React from "react";

import "./SocialNetworks.scss";

function SocialNetworks() {
    return (
        <div className="footer-socialNetworks">            
            <a className="footer-socialNetworks__logo" title="ссылка на профиль в VK" target="_blank" href="">
                <span className="icon-vk" attr="footer-logo changeColorlink"></span>
            </a>                
            <a className="footer-socialNetworks__logo"  title="ссылка на профиль в Instagram" target="_blank" href="">
                <span className="icon-insta" attr="footer-logo changeColorlink"></span>
            </a>                
            <a className="footer-socialNetworks__logo" title="ссылка на профиль в Facebook" target="_blank" href="">
                <span className="icon-facebook" attr="footer-logo changeColorlink"></span>
            </a>     
        </div>    
    );
}

export default SocialNetworks;