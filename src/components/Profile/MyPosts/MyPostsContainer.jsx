import React from 'react';
import {addNewPostActionCreator , updateNewTextActionCreator} from './../../../redux/profileReducer';
import MyPosts from './MyPosts'


const MyPostsContainer = (props) => {

    let addNewPost = () => {
      props.dispatch(addNewPostActionCreator());
    }

    let updateNewText = (value) => {
      props.dispatch(updateNewTextActionCreator(value));
    }

    return <MyPosts updateNewText={updateNewText}
                    addNewPost={addNewPost}
                    info={props.info}
                    newText={props.newText}/>
}

export default MyPostsContainer;
