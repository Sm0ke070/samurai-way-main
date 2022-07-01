import './Dialogs.module.css';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string;
    id: number;
}

type MessageType = {
    message: string;
}

const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props: MessageType) => {
    return (
        <div className={style.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem name="Pulya" id={1}/>
                <DialogItem name="Lova" id={2}/>
                <DialogItem name="Sergunya" id={3}/>
                <DialogItem name="Era" id={4}/>
                <DialogItem name="Asya" id={5}/>
                <DialogItem name="Nikita" id={6}/>
            </div>
            <div className={style.messages}>
                <Message message="HI-1"/>
                <Message message="HI-2"/>
                <Message message="HI-3"/>
            </div>
        </div>
    )
}

export default Dialogs;