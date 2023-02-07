import {authAsync, profileAsync} from '../../api/social-api';
import {setAuthAC, setInitialAppAC} from './authReducer';

const initialState = {
  myProfile: {
    status: null,
  },
}

const SET_MY_PROFILE = 'SET_MY_PROFILE';
const SET_MY_STATUS = 'SET_MY_STATUS';

export const profileReducer = (state = initialState, action ) => {
  switch (action.type){
    case (SET_MY_PROFILE): {
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          ...action.myProfile
        }
      }
    }
    case (SET_MY_STATUS): {
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          status: action.status
        }
      }
    }
    default: {
      return state;
    }
  }
}

export const setMyProfileAC = (myProfile) => ({type: SET_MY_PROFILE, myProfile: myProfile});
export const setMyStatusAC = (status) => ({type: SET_MY_STATUS, status: status})

export const setAuthThunk = () => {
  return (dispatch) => {
    authAsync.checkMe()
      .then((data) => {
        if (data.resultCode === 0) {
          profileAsync.getMyProfile(data.data.id)
            .then((data) => {
              dispatch(setAuthAC(true));
              dispatch(setMyProfileAC(data))
              dispatch(setInitialAppAC())
            })
        } else {
          dispatch(setAuthAC(false));
          dispatch(setMyProfileAC(null))
          dispatch(setInitialAppAC())
        }
      })
  }
}

export const updateMyProfileThunk = (myProfile) => {
  return (dispatch) => {
    profileAsync.updateMyProfile(myProfile)
      .then((data) => {
        if(data.resultCode === 0) {
          dispatch(setMyProfileAC(myProfile))
        } else if (data.resultCode === 1) {
          data.messages.map((error) => {
            console.error(error)
          })
        }
      })
  }
}

export const setMyStatusThunk = () => {

  return (dispatch, getState) => {
    profileAsync.getUserStatus(getState().profile.myProfile.userId)
      .then((data) => {
        dispatch(setMyStatusAC(data));
      })
  }
}



