import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsDataType, messageDataType} from "../../App";

/*type dialogsDataType = {
    id: number,
    name: string,
}
type messageDataType = {
    id: number,
    message: string,
}*/

type dialogsType = {
    dialogsData:Array<dialogsDataType>,
    messageData:Array<messageDataType>,
}
const Dialogs = (props:dialogsType) => {
    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.messageData.map(m => <Message message={m.message} id={m.id}/>)

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