const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_TEXT = 'UPDATE_NEW_TEXT';

let initialState = {
  postInfo : [
    {id: 1, post: "Hi? darlin", src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gardenia-royalty-free-image-1580854928.jpg"},
    {id: 2, post: "How are you", src: "https://www.imgonline.com.ua/examples/red-yellow-flower.jpg"},
    {id: 3, post: "Bonya message", src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
    {id: 4, post: "Super", src: "https://images.pexels.com/photos/850359/pexels-photo-850359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {id: 5, post: "druper messagea", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUDY9ZV7M2VlERSwI6UUSRKmaP3qkRkZqtw&usqp=CAU"},
  ],
  newText: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newObj = {
        id: 6,
        post: state.newText,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUDY9ZV7M2VlERSwI6UUSRKmaP3qkRkZqtw&usqp=CAU"
      }
      state.postInfo.push(newObj);
      state.newText = '';

      return state;
    case UPDATE_NEW_TEXT:
      state.newText = action.text;
      return state;
    default:
      return state;
  }
}

export let addNewPostActionCreator = () => ({type: ADD_NEW_POST});
export let updateNewTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT, text: text});

export default profileReducer;
