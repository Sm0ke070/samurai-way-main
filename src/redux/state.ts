export type postsType = {
    id: number,
    message: string,
    likesCount: number,

}
export type dialogsType = {
    id: number,
    name: string,
}
export type messageType = {
    id: number,
    message: string,
}
export type appStateType = {
    profilePage: {
        posts: postsType[],
    }
    dialogsPage: {
        messages: messageType[],
        dialogs: dialogsType[],
    }
}
export type AppType = {
    state: appStateType,
    addPost: (postText: string) => void,

}
export type ProfileType={
    posts:postsType[]
    addPost: (postText: string) => void,
}
export type MyPostsType = {
    posts: postsType[]
    addPost: (postText: string) => void,
}
export type dialogsPropsType = {
    dialogs: dialogsType[],
    message: messageType[],
}
let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 12},
            {id: 2, message: "123", likesCount: 5},
            {id: 3, message: "hello world", likesCount: 2},
            {id: 4, message: "post test", likesCount: 11},
            {id: 5, message: "post test", likesCount: 1},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Yo"},
            {id: 3, message: "Hello"},
            {id: 4, message: "World"},
            {id: 5, message: "qqww"},
        ],
        dialogs: [
            {id: 1, name: "Nikita"},
            {id: 2, name: "Lova"},
            {id: 3, name: "Serg"},
            {id: 4, name: "Dima"},
            {id: 5, name: "Slava"},
        ],
    },
}

export const addPost = (postText: string) => {
    const newPost= {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
}

export default state;

//addPostCallBack:(postText: string)=>void,


