import * as React from "react";



function Passport() {
    return(
        <form>
            <fieldset>
                <legend>Паспорт</legend>
                <label>Серия и номер</label><input type="text" placeholder="0000 000000" />
                <label>Дата выдачи</label><input type="text" placeholder="01.01.1970" />
                <label>Кем выдан</label><input type="text" placeholder="Название органа выдавшего паспорт" />
                <label>Код подразделения</label><input type="text" placeholder="000-000" />
            </fieldset>
        </form>
    );
}

export default Passport;