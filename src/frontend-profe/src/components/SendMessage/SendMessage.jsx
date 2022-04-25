import { useContext, useState } from "react"
import { Context } from "../../storage/SharedStorage"
import { authPost, authToken, API_URL } from "../../aux_api"

function SendMessage() {

    const [store,] = useContext(Context);
    const { id, password } = store;

    const [message, setMessage] = useState("")

    function changeMessageHandler(event) {
        setMessage(event.target.value);
    }

    function clickHandler() {
        const token = authToken(id, password);
        const data = JSON.stringify({ content: message });
        authPost(API_URL + "/message/", token, data);
    }

    return (
        <>
            <div className="flexEnviar">
                <input className="tamañoInput" onChange={changeMessageHandler} type="text" value={message} placeholder="Escribe tu mensaje" />
                <button className="botonRedondo colorAzul" onClick={clickHandler}>Enviar</button>
            </div>
        </>
    )
}

export default SendMessage