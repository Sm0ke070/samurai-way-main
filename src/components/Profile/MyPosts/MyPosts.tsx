import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={style.postBlock}>
            My post
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <div className={style.posts}>
                    <Post message="Hi, how are you"/>
                    <Post message="123"/>
                    <Post message="hello world"/>
                </div>
            </div>
        </div>

    )
}

export default MyPosts;