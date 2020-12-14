import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import flowers from './../../img/flowers.jpeg'

const Users = (props) => {
  let eachUser = props.users.map( user =>
      <User key={user.id} photoUrl={user.photos.small?user.photos.small: flowers} name={user.name}
            status={user.status}
            id={user.id} followed={user.followed} toggle={props.toggle}
            setFollowing={props.setFollowing}
            followingInProgress={props.followingInProgress} doUnfollow={props.doUnfollow}
            followingIds={props.followingIds}/>);
  let pageCount = Math.ceil(props.count/ props.pageSize);
  let pageMax = pageCount > 20 ? 20 : pageCount;
  let pages = [];
  for (let i = 1; i <= pageMax; i++){
       pages.push(i)
  };
  return (
           <div className={styles.userWrapper}>
             <div>
               {pages.map(page => {
                   return <span className = {props.currentPage === page && styles.pageSelected}
                          onClick = {(e)=> {props.onPageChange(page)}}>{page}</span>})}
             </div>
             {eachUser}
           </div>
         )
}


export default Users;
