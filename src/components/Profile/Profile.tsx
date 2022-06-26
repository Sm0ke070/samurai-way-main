import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pokai_Bucht_auf_Oahu.jpg/1200px-Pokai_Bucht_auf_Oahu.jpg"
                    alt="" width="600px"/>
            </div>
            <div>AVA</div>
            <MyPosts/> {/*  MY POSTS.JSX  */}
        </div>


    )
}

export default Profile;
