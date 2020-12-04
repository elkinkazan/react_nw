import React from 'react';
import styles from './ProfileInfo.module.css';
import flower1 from './../../../img/flowers.jpeg'

const ProfileInfo = (props) => {
  return (
    <div className={styles.description}>
      {props.profile&&props.profile.photos.large?
      <img className={styles.user} src={props.profile.photos.large} alt='flower1' />:
      null }
      <img className={styles.flower1} src={flower1} alt='flower1' />
      <p> <q>She is a flower <br/> But also the sun <br/> That lets her bloom</q></p>
    </div>
  )
}

export default ProfileInfo;
