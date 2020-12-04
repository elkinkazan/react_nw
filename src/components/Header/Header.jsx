import React from 'react';
import styles from './Header.module.css';
import logo from './../../img/logo.jpg';
import {NavLink} from 'react-router-dom'

const Header = () => {
        return (
          <header className={styles.header}>
            <img src={logo} alt='logo' width='280px' height='200px' />
            <p className={styles.title}>Social-network for flowers</p>
            <NavLink to='/login'>login</NavLink>
          </header>
        );
}

export default Header;
