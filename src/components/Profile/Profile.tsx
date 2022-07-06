import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type postsType={
    id:number,
    message:string,
    likesCount:number,
}
type ProfileType={
    posts:Array<postsType>
}
const Profile = (props:ProfileType) => {
    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.posts}/>
            </div>
        </div>


    )
}

export default Profile;
