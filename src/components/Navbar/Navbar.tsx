import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>
                    <div className={style.btn}>Profile</div>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>
                    <div className={style.btn}>Messages</div>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.activeLink}>
                    <div className={style.btn}>News</div>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.activeLink}>
                    <div className={style.btn}>Music</div>
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.activeLink}>
                    <div className={style.btn}>Settings</div>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;