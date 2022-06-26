import React from 'react';

const Navbar = () =>{
    return(
        <nav className="nav">
            <div><a href="Profile">Profile</a></div>
            <div><a href="Messages">Messages</a></div>
            <div><a href="News">News</a></div>
            <div><a href="Music">Music</a></div>
            <div><a href="Settings">Settings</a></div>
        </nav>
    )
}

export default Navbar;