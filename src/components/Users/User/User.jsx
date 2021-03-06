import React from 'react';
import styles from './User.module.css';
import {NavLink} from 'react-router-dom';
import {usersAPI} from './../../../api/usersAPI'


let User = (props) => {
  return (
    <div className={styles.user}>
        <div className={styles.group}>
          <NavLink to={'/profile/' + props.id}>
            <img src={props.photoUrl} alt='flower' className={styles.photo}/>
          </NavLink>
          {
          props.followed?
          <button disabled={props.followingIds.some(u => u === props.id)}
                  onClick={()=>{props.doUnfollow(props.id)}}
           >unfollow</button>
          :
          <button disabled={props.followingIds.some(u => u === props.id)}
                  onClick={()=>{

            props.setFollowing(true,props.id);
            console.log(props.followingInProgress);
            usersAPI.follow(props.id)
                 .then(data=>
                 {if(data.resultCode === 0){props.toggle(props.id)};props.setFollowing(false,props.id);})}}
           >follow</button>
          }
        </div>
        <div className={styles.group}>
          <span>{props.name}</span>
          <span>{props.status}</span>
        </div>
    </div>
  )
}

export default User;
