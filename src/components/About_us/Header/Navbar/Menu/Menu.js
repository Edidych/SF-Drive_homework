import React from "react";

import "./Menu.scss";

function Menu() {
    return(
        <nav>
            <ul className="header-navbar">
                <li className="header-navbar__list">
                    <a title="Информация о компании" href="">
                        <span className="header-navbar__list_text" attr="changeColorlink">О нас</span>
                    </a>
                </li>
                <li className="header-navbar__list">
                    <a title="Условия сотрудничества" href="">
                        <span className="header-navbar__list_text" attr="changeColorlink">Условия</span>
                    </a>
                </li>
                <li className="header-navbar__list">
                    <a title="Часто задаваемые вопросы" href="">
                        <span className="header-navbar__list_text" attr="changeColorlink">Частые вопросы</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;