import Logout from "../../components/Logout/Logout"
import Messages from "../../components/Messages/Messages"
import SendMessage from "../../components/SendMessage/SendMessage"

function Chat () {
    return (
        <>
            <Logout/>
            <Messages/>
            <SendMessage/>
        </>
    )
}

export default Chat