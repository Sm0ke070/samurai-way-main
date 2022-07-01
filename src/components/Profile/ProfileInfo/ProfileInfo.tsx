import style from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pokai_Bucht_auf_Oahu.jpg/1200px-Pokai_Bucht_auf_Oahu.jpg"
                    alt="" width="1000px" height="200px"/>
            </div>
            <div className={style.descriptionBlock}>
                AVA+description
            </div>
        </div>
    )
}

export default ProfileInfo;