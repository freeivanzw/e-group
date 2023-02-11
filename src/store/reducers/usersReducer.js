import {usersAsync} from '../../api/social-api';

const initialState = {
  usersList: null,
  userPageSize: 12,
  totalUsers: null,
  currentUsersPage: 1,
}

const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const UPDATE_CURRENT_USERS_PAGE = 'UPDATE_CURRENT_USERS_PAGE';

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
    case (UPDATE_CURRENT_USERS_PAGE): {
      return {
        ...state,
        currentUsersPage: action.currentUsersPage
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

