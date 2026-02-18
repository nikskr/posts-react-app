import React, { useContext } from 'react';
import { Link } from 'react-router';
import classes from './Navbar.module.css';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context/context';

function Navbar() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    function logout(e) {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return ( 
        <div className={classes.navbar}>
            <div className={classes.navItems}>
                <Link className={classes.navItem} to='/posts'>Posts</Link>
                <Link className={classes.navItem} to='/about'>About</Link>
            </div>
            {isAuth && <MyButton style={{marginLeft: 'auto'}} onClick={logout}>Exit</MyButton>}
        </div>
    );
}

export default Navbar;