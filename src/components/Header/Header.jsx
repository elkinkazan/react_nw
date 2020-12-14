import React from 'react';
import styles from './Header.module.css';
import logo from './../../img/logo.jpg';
import {NavLink} from 'react-router-dom'

const Header = (props) => {
        return (
          <header className={styles.header}>
            <img src={logo} alt='logo' width='280px' height='200px' />
                <p className={styles.title}>Social-network for flowers</p>
                {props.isAuthorized? <div className={styles.link}>{props.login}</div>:
                 <NavLink to='/login' className={styles.link}>login</NavLink>}
          </header>
        );
}

export default Header;
