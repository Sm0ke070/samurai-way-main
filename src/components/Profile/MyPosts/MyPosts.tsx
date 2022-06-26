import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <div>
                </div>
                <Post message="Hi, how are you"/> {/*  POST.JSX  */}
                <Post message="123"/> {/*  POST.JSX  */}
                <Post message="hello world"/> {/*  POST.JSX  */}
            </div>
        </div>

    )
}

export default MyPosts;