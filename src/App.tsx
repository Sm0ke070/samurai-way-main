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

export type postsType={
    id:number,
    message:string,
    likesCount:number,
}
export type dialogsDataType = {
    id: number,
    name: string,
}
export type messageDataType = {
    id: number,
    message: string,
}
type AppType={
    posts:Array<postsType>
    dialogsData:Array<dialogsDataType>
    messageData:Array<messageDataType>
}

const App = (props:AppType) => {
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

                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData} />}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
