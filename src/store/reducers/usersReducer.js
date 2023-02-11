import {followAsync, profileAsync, usersAsync} from '../../api/social-api';

const initialState = {
  usersList: null,
  userPageSize: 12,
  totalUsers: null,
  currentUsersPage: 1,
  usersDetails: null,
}

const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_USER_FOLLOWING = 'SET_USER_FOLLOWING';
const UPDATE_CURRENT_USERS_PAGE = 'UPDATE_CURRENT_USERS_PAGE';
const SET_USERS_DETAILS = 'SET_USERS_DETAILS';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case (SET_USERS): {
      return {
        ...state,
        usersList: [
          ...action.usersList
        ]
      }
    }
    case (SET_TOTAL_USERS): {
      return {
        ...state,
        totalUsers: action.totalUsers
      }
    }
    case (SET_USER_FOLLOWING): {
      return {
        ...state,
        usersList: state.usersList.map((el) => {
            if (el.id === action.payload.id) {
              return {
                ...el,
                followed: action.payload.followed,
              }
            }
            return el;
          })

      }
    }
    case (UPDATE_CURRENT_USERS_PAGE): {
      return {
        ...state,
        currentUsersPage: action.currentUsersPage
      }
    }
    case (SET_USERS_DETAILS): {
      return {
        ...state,
        usersDetails: action.usersDetails
      }
    }
    default: {
      return state
    }
  }
}

export const setUsersAC = (usersList) => ({type: SET_USERS, usersList: usersList});
export const setTotalUsersAC = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers: totalUsers});
export const updateCurrentUserPageAC = (userPage) => ({type: UPDATE_CURRENT_USERS_PAGE, currentUsersPage: userPage});
export const setUserFollowingAC = (id, followed) => ({type: SET_USER_FOLLOWING, payload: {id: id, followed: followed}});
export const setUserDetailsAC = (usersDetails) => ({type: SET_USERS_DETAILS, usersDetails: usersDetails});

export const getUserPageThunk = (pageNumber) => {
  return (dispatch, getState) => {
    usersAsync.getUsers(pageNumber, getState().users.userPageSize)
      .then((data) => {
        dispatch(setTotalUsersAC(data.totalCount))
        dispatch(setUsersAC(data.items))
      })
  }
}

export const updateUserPageThunk = (currentPage) => {
  return (dispatch) => {
    dispatch(updateCurrentUserPageAC(currentPage));
  }
}

export const setUserFollowingThunk = (id, followed) => {
  return (dispatch) => {
    if (!followed) {
      followAsync.followUser(id)
        .then((data) => {
          if(data.resultCode === 0) {
            dispatch(setUserFollowingAC(id, true))
          }
        })
    } else {
      followAsync.unfollowUser(id)
        .then((data) => {
          if(data.resultCode === 0) {
            dispatch(setUserFollowingAC(id, false))
          }
        })
    }
  }
}

export const setUserDetailsThunk = (id) => {
  return (dispatch) => {
    profileAsync.getProfile(id)
      .then((data) => {
        dispatch(setUserDetailsAC(data))
      })
  }
}