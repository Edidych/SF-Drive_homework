import React from "react";

import "./TeamCards.scss";

function TeamCards() {
    return (
        <section>
            <h2 attr="main-team-header">Команда</h2>
            <div class="main-team-cards">
                <div class="main-team-cards__blockPerson">
                    <img src="<%=require('./asset/teamFoto1.jpg')%>" alt="Фото участника команды" />
                    <p class="main-team-cards__name">Иван Иванов</p>
                    <p class="main-team-cards__position">СЕО</p>
                </div>
                <div class="main-team-cards__blockPerson">
                    <img src="<%=require('./asset/teamFoto2.jpg')%>" alt="Фото участника команды" />
                    <p class="main-team-cards__name">Алексей Смирнов</p>
                    <p class="main-team-cards__position">Frontend-разработчик</p>
                </div>
                <div class="main-team-cards__blockPerson" attr="deskView">
                    <img src="<%=require('./asset/teamFoto3.jpg')%>" alt="Фото участника команды" />
                    <p class="main-team-cards__name">Денис Ярцев</p>
                    <p class="main-team-cards__position">Backend-разработчик</p>
                </div>
                <div class="main-team-cards__blockPerson" attr="deskView">
                    <img src="<%=require('./asset/teamFoto4.jpg')%>" alt="Фото участника команды" />
                    <p class="main-team-cards__name">Николай Морозов</p>
                    <p class="main-team-cards__position">Дизайнер</p>
                </div>
            </div>
            <div class="main-team-cards" attr="mobileView">
                <div class="main-team-cards__blockPerson">
                    <img src="<%=require('./asset/teamFoto3.jpg')%>" alt="Фото участника команды" />
                    <p class="main-team-cards__name">Денис Ярцев</p>
                    <p class="main-team-cards__position">Backend-разработчик</p>
                </div>
                <div class="main-team-cards__blockPerson">
                    <img src="<%=require('./asset/teamFoto4.jpg')%>" alt="Фото участника команды" />
                    <p class="main-team-cards__name">Николай Морозов</p>
                    <p class="main-team-cards__position">Дизайнер</p>
                </div>
            </div>
            <div class="main-team-cards">
                <div class="main-team-cards__blockPerson">
                    <img src="<%=require('./asset/teamFoto5.jpg')%>" alt="Фото участника команды" />
                    <p class="main-team-cards__name">Ирина Деева</p>
                    <p class="main-team-cards__position">Копирайтер</p>
                </div>
                <div class="main-team-cards__blockPerson">
                    <img src="<%=require('./asset/teamFoto6.jpg')%>" alt="Фото участника команды" />
                    <p class="main-team-cards__name">Мария Стрелкова </p>
                    <p class="main-team-cards__position">SMM</p>
                </div>
            </div>
        </section>
    );
}

export default TeamCards;