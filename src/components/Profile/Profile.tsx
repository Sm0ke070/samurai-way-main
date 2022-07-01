import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        </div>


    )
}

export default Profile;
