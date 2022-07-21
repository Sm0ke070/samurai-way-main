import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import state from "./redux/state";

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
    posts: postsType,
    dialogs: dialogsType,
    messages: messageType,
}

type AppType = {
    appState: {
        state: {
            posts: postsType[],
            dialogs: dialogsType[],
            messages: messageType[],
        }
    }
}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/* <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>*/}

                    <Route path='/profile' render={() => <Profile posts={props.appState.state.posts}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsData={props.appState.state.dialogs}
                                                  messageData={props.appState.messages}/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
