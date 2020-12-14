import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
        return (
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li><NavLink to="/profile">Home</NavLink></li>
              <li><NavLink to="/dialogues">Messages</NavLink></li>
              {/*<li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/music">Music</NavLink></li>
              <li><NavLink to="/settings">Settings</NavLink></li>*/}
              <li><NavLink to="/users">Users</NavLink></li>
            </ul>
          </nav>
        );
}

export default Navbar;
