import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>
                    <div>Profile</div>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>
                    <div>Messages</div>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.activeLink}>
                    <div>News</div>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.activeLink}>
                    <div>Music</div>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.activeLink}>
                    <div>Settings</div>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;