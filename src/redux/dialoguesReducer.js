const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

let initialState = {
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
};

const dialoguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let newObj = {
            id: 7,
            message: state.newMessage
          };
      state.messages.push(newObj);
      state.newMessage = '';

      return state;
    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.message;

      return state;
    default:
      return state;
  }
}

export let addNewMessageCreator = () => ({type: ADD_NEW_MESSAGE});
export let updateNewMessageCreator = (message) => ({type: UPDATE_NEW_MESSAGE, message: message});

export default dialoguesReducer;
