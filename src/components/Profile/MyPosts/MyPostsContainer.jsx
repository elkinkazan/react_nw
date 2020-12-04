import {addNewPostActionCreator , updateNewTextActionCreator} from './../../../redux/profileReducer';
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return ({
     info: state.profilePage.postInfo,
     newText:state.profilePage.newText
   })
}
let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: ()=>{dispatch(addNewPostActionCreator())},
    updateNewText: (value)=>{dispatch(updateNewTextActionCreator(value))}
}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
