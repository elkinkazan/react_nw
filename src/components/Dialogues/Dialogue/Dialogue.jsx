import React from 'react';
import styles from './Dialogue.module.css';
import {NavLink} from 'react-router-dom'

const Dialogue = (props) => {
  return (
    <div className={styles.dialogue}>
      <NavLink to={'/dialogues/' + props.id}>{props.name}</NavLink>
    </div>
  )
}
export default Dialogue;
