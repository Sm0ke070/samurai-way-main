import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {postsType} from "../../../App";

/*type postsType={
    id:number,
    message:string,
    likesCount:number,
}*/

type MyPostsType={
    posts:Array<postsType>
}
const MyPosts = (props:MyPostsType) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={style.postBlock}>
            My post
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <div className={style.posts}>
                    {postElements}
                </div>
            </div>
        </div>

    )
}

export default MyPosts;