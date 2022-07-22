import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/state";


const Profile = (props:ProfileType) => {
    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.posts} addPost={props.addPost}/>
            </div>
        </div>


    )
}

export default Profile;
