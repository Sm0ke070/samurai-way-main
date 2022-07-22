import style from './../Dialogs.module.css';
import {messageType} from '../../../redux/state'


const Message = (props: messageType) => {
    return (
        <div className={style.dialog}>
            {props.message}
        </div>
    )
}

export default Message;