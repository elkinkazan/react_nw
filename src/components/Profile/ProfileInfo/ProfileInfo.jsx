import React from 'react';
import styles from './ProfileInfo.module.css';
import flower1 from './../../../img/flowers.jpeg'

const ProfileInfo = () => {
  return (
    <div className={styles.description}>
      <img className={styles.flower1} src={flower1} alt='flower1' />
      <p> <q>She is a flower <br/> But also the sun <br/> That lets her bloom</q></p>
    </div>
)
}

export default ProfileInfo;
