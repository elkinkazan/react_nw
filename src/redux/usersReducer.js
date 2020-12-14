import {usersAPI} from './../api/usersAPI';

const TOGGLE = 'TOGGLE';
const SET_USERS = 'SET_USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_USERS_PAGE = 'SET_USERS_PAGE';
const UPDATE_USERS_PAGE = 'UPDATE_USERS_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FOLLOWING = 'SET_FOLLOWING';

const initialState = {
    users: [],
    count: 2,
    pageSize: 3,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false,
    followingIds: []
};

const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case TOGGLE: {
      return ({ ...state,
        users: [...state.users.map( u => {
        if (u.id === action.id) {
          u.followed = !u.followed
        };
        return u })]
      })
    }
    case SET_USERS: {
      return (
        {...state,
        users: action.users
        })
    }
    case SET_USERS_COUNT: {
      return (
        {...state,
        count: action.count
        })
    }
    case SET_USERS_PAGE: {
      return (
        {...state,
        pageSize: action.pageSize
        })
    }
    case UPDATE_USERS_PAGE: {
      return (
        {...state,
        currentPage: action.page
        })
    }
    case SET_IS_FETCHING: {
      return (
        {...state,
        isFetching: action.isFetching
        })
    }
    case SET_FOLLOWING: {
      return (
        {...state,
        followingInProgress: action.followingInProgress,
        followingIds:
        action.followingInProgress?
        [...state.followingIds,action.userId]:
        state.followingIds.filter(id => id !== action.userId)
        })
    }
    default:
      {return state}
  }
}

export let toggle = (id) => ({type: TOGGLE, id: id});
export let setUsers = (users) => ({type: SET_USERS, users: users})
export let setUsersCount = (count) => ({type: SET_USERS_COUNT, count:count})
export let setUsersPageSize = (pageSize) => ({type: SET_USERS_PAGE, pageSize:pageSize})
export let updateUsersPage = (page) => ({type: UPDATE_USERS_PAGE, page:page})
export let setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching:isFetching})
export let setFollowing = (followingInProgress, userId) => ({type: SET_FOLLOWING, followingInProgress, userId})

export let doUnfollow = (userId) => {
    return (dispatch) => {
      dispatch(setFollowing(true,userId));
      usersAPI.unfollow(userId)
              .then(data=>
               { if(data.resultCode === 0)
                   {dispatch(toggle(userId))};
                 dispatch(setFollowing(false,userId))
               })
    }
}

export default usersReducer;
