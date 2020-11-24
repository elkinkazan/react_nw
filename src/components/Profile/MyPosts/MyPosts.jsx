import React from 'react';
import styles from './MyPosts.module.css';


const MyPosts = (props) => {

let newElement = React.createRef();

let onButtonClick = () => {
  props.addNewPost();
}

let onButtonChange = (e) => {
  let text = e.target.value;
  props.updateNewText(text);
}

        return (
            <div className={styles.posts}>
              <div className={styles.addPost}>
                <textarea className={styles.posts__txt}
                          ref={newElement}
                          value={props.newText}
                          onChange={onButtonChange}>
                </textarea>
                <button className={styles.posts__btn}
                        onClick={onButtonClick}>
                Add Post</button>
              </div>
              {props.info}
            </div>

        );
}

export default MyPosts;
