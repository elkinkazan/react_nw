import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './MyPosts/Post/Post'


const Profile = (props) => {

  let eachPost = props.profilePage.postInfo.map((post)=> <Post message={post.post} src={post.src} />)

        return (
          <div>
            <ProfileInfo />
            <MyPostsContainer info={eachPost}
                              dispatch={props.dispatch}
                              newText={props.profilePage.newText}/>
          </div>
        );
}

export default Profile;
