import style from './../Dialogs.module.css';

type MessageType = {
    message: string;
    id: number;
}
const Message = (props: MessageType) => {
    return (
        <div className={style.dialog}>
            {props.message}
        </div>
    )
}

export default Message;