import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
        return (
            <div className={styles.post}>
              <img src={props.src}
              alt ='flower' className={styles.post__ava}/>
              <p>{props.message}</p>
            </div>

        );
}

export default Post;
