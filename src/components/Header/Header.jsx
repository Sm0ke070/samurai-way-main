import React from 'react';
import './Header.module.css';
import classes from './Header.module.css'

const Header =() => {
    return(
        <header className={classes.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="site logo"/>
        </header>
    )
}

export default Header;