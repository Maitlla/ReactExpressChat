import { useContext, useState } from "react";
import { Context } from "../../storage/SharedStorage";
import { API_URL, post } from "../../aux_api";
import "./SignUp.css"

function SignUp () {

    const [ store, setStore ] = useContext(Context);

    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");

    function userInputChangeHandler ( event ) {
        setUserName(event.target.value)
    }

    function passwordInputChangeHandler ( event ) {
        setPassword(event.target.value)
    }

    async function clickHandler () {
        const newStore = {...store};
        const data = JSON.stringify({userName, password});
        newStore.id = await post(API_URL+"/login/",data);
        newStore.password = password;
        setStore(newStore);
    }

    return(
        <>
            <h3 className="marginTop">Usuario y contraseña</h3>
            <input className="tamañoInput" onChange={userInputChangeHandler} type="text" placeholder="User name"/>
            <input className="tamañoInput" onChange={passwordInputChangeHandler} type="password" placeholder="Password"/>
            <button onClick={clickHandler}>Iniciar Sesión</button>
        </>
    )
}

export default SignUp