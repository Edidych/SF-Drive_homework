import * as React from "react";



function Password() {
    return(
        <form>
            <fieldset>
                <legend>Пароль</legend>
                <label>Придумайте пароль</label><input type="text" placeholder="•••••••••••••••••••" />
                <label>Повторите пароль</label><input type="text" placeholder="•••••••••••••••••••" />
            </fieldset>
        </form>
    );
}

export default Password;