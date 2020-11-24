import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialoguesReducer from './dialoguesReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer
});

let store = createStore(reducers);

export default store;
