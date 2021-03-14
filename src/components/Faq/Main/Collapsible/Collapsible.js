import React from "react";

import "./Collapsible.scss";

function Collapsible() {
    return(
        <section className="main-questions">
            <div className="main-questions-block">
                <button className="main-questions-block__collapsible"><span>Могу ли я отменить бронь?</span></button>
                <div className="main-questions-block__content">
                    <p>.......</p>
                </div>
            </div>
            <div className="main-questions-block">
                <button className="main-questions-block__collapsible"><span>Могу ли я вернуть деньги, если не подошёл автомобиль?</span></button>
                <div className="main-questions-block__content">
                    <p>.......</p>
                </div>
            </div>
            <div className="main-questions-block">
                <button className="main-questions-block__collapsible"><span>Что делать, если случилось ДТП?</span></button>
                <div className="main-questions-block__content">
                    <p>.......</p>
                </div>
            </div>
            <div className="main-questions-block">
                <button className="main-questions-block__collapsible"><span >Могу ли я оставить автомобиль в удобном для меня месте?</span></button>
                <div className="main-questions-block__content">
                    <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</p>
                </div>
            </div>
            <div className="main-questions-block">
                <button className="main-questions-block__collapsible"><span>Что делать, если собственник просит заплатить ему напрямую?</span></button>
                <div className="main-questions-block__content">
                    <p>.......</p>
                </div>
            </div>
            <div className="main-questions-block">
                <button className="main-questions-block__collapsible"><span>Должен ли я заправлять автомобиль?</span></button>
                <div className="main-questions-block__content">
                    <p>.......</p>
                </div>
            </div>
        </section>
    );
}

export default Collapsible;