import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profileReducer';
import dialoguesReducer from './dialoguesReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunk from 'redux-thunk'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;
