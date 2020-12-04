import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = (props) => {

let newElement = React.createRef();

let onButtonClick = () => {
  props.addNewPost();
};

let onButtonChange = (e) => {
  let text = e.target.value;
  props.updateNewText(text);
};

let eachPost = props.info.map((post)=> <Post message={post.post} key={post.id} src={post.src} />);

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
              {eachPost}
            </div>

        );
}

export default MyPosts;
