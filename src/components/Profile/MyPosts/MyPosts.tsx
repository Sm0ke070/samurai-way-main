import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsType} from '../../../redux/state'


const MyPosts = (props: MyPostsType) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text);
        }
    }
    return (
        <div className={style.postBlock}>
            My post
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={addPost}>Add post</button>
                <div className={style.posts}>
                    {postElements}
                </div>
            </div>
        </div>

    )
}

export default MyPosts;