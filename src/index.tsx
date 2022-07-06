import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: "Hi, how are you", likesCount: 12},
    {id: 2, message: "123", likesCount: 5},
    {id: 3, message: "hello world", likesCount: 2},
    {id: 4, message: "post test", likesCount: 11},
    {id: 5, message: "post test", likesCount: 1},
]
let dialogsData = [
    {id: 1, name: "Nikita"},
    {id: 2, name: "Lova"},
    {id: 3, name: "Serg"},
    {id: 4, name: "Dima"},
    {id: 5, name: "Slava"},
]
let messageData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Yo"},
    {id: 3, message: "Hello"},
    {id: 4, message: "World"},
    {id: 5, message: "qqww"},
]
ReactDOM.render(<App posts={posts}
                     dialogsData={dialogsData}
                     messageData={messageData}
    />, document.getElementById('root')
);