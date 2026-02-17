import React from 'react';
import { Link } from 'react-router';
import classes from './Navbar.module.css';

function Navbar() {
    return ( 
        <div className={classes.navbar}>
            <div className={classes.navItems}>
                <Link className={classes.navItem} to='/posts'>Posts</Link>
                <Link className={classes.navItem} to='/about'>About</Link>
            </div>
        </div>
    );
}

export default Navbar;