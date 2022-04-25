import { useContext } from "react";
import { Context } from "../../storage/SharedStorage";

function Logout() {

    const [store, setStore] = useContext(Context);

    function clickHandler() {
        const newStore = { ...store };
        newStore.id = 0;
        setStore(newStore);
    }

    return (
        <>
            <div className="flexSalir">
                <h3 className="marginTop colorMorado">Salir del chat</h3>
                <button className="marginLeft botonRedondo colorVioleta" onClick={clickHandler}>Salir</button>
            </div>
        </>
    )
}

export default Logout