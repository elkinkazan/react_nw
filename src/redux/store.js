import profileReducer from './profileReducer';
import dialoguesReducer from './dialoguesReducer';

let store = {
      _state: {
    profilePage: {
      postInfo : [
        {id: 1, post: "Hi? darlin", src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gardenia-royalty-free-image-1580854928.jpg"},
        {id: 2, post: "How are you", src: "https://www.imgonline.com.ua/examples/red-yellow-flower.jpg"},
        {id: 3, post: "Bonya message", src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
        {id: 4, post: "Super", src: "https://images.pexels.com/photos/850359/pexels-photo-850359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
        {id: 5, post: "druper messagea", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUDY9ZV7M2VlERSwI6UUSRKmaP3qkRkZqtw&usqp=CAU"},
      ],
      newText: ''
    },
    dialoguesPage: {
      dialogues : [
        {id: 1, name: "Elvira"},
        {id: 2, name: "Olya"},
        {id: 3, name: "Bonya"},
        {id: 4, name: "Dima"},
        {id: 5, name: "Kolya"},
      ],
      messages : [
        {id: 1, message: "Elvira message"},
        {id: 2, message: "Olya message"},
        {id: 3, message: "Bonya message"},
        {id: 4, message: "Dima message"},
        {id: 5, message: "Koly messagea"},
      ],
      newMessage: ''
    }
  },
      getState() {
        return this._state;
      },
      _callSubscriber() {},
      subscribe(observer) {
        this._callSubscriber = observer
      },
      dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);

        this._callSubscriber(this._state);
      }
}

window.store = store;

export default store;
