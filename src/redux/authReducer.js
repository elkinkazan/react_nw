const AUTHORIZE = 'AUTHORIZE '

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuthorized: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case AUTHORIZE: {
      return (
        {...state,
         ...action.data,
         isAuthorized: true
        })
    }
    default:
      {return state}
  }
}


export let authorize = ({id, email, login}) => ({type: AUTHORIZE, data:{id, email, login}})

export default authReducer;
