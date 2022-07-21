import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {appStateType, messageType} from "../../App";

/*type dialogsDataType = {
    id: number,
    name: string,
}
type messageDataType = {
    id: number,
    message: string,
}*/

type dialogsType = {
    //dialogsData: Array<dialogsType>,
    //messageData: Array<messageType>,
    appState: appStateType[]
}
const Dialogs = (props: dialogsType) => {
    let dialogsElements = props.appState.map(d => <DialogItem name={d.dialogs.name} id={d.dialogs.id}/>)
    let messagesElement = props.appState.map(m => <Message message={m.messages.message} id={m.messages.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;