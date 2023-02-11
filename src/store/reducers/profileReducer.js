import {authAsync, profileAsync} from '../../api/social-api';
import {setAuthAC, setInitialAppAC} from './authReducer';

const initialState = {
  myProfile: {
    status: null,
  },
}

const SET_MY_PROFILE = 'SET_MY_PROFILE';
const SET_MY_STATUS = 'SET_MY_STATUS';
const UPDATE_MY_PHOTO = 'UPDATE_MY_PHOTO';

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
    case (UPDATE_MY_PHOTO): {
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          photos: action.photos,
        }
      }
    }
    default: {
      return state;
    }
  }
}

export const setMyProfileAC = (myProfile) => ({type: SET_MY_PROFILE, myProfile: myProfile});
export const setMyStatusAC = (status) => ({type: SET_MY_STATUS, status: status});
export const updateMyPhotosAC = (photos) => ({type: UPDATE_MY_PHOTO, photos: photos})

export const setAuthThunk = () => {
  return (dispatch) => {
    authAsync.checkMe()
      .then((data) => {
        if (data.resultCode === 0) {
          profileAsync.getProfile(data.data.id)
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
          console.error(data.messages)
        }
      })
  }
}

export const getMyStatusThunk = () => {
  return (dispatch, getState) => {
    profileAsync.getUserStatus(getState().profile.myProfile.userId)
      .then((data) => {
        dispatch(setMyStatusAC(data));
      })
  }
}

export const updateMyStatusThunk = (status) => {
  return (dispatch) => {
    profileAsync.updateMyStatus(status)
      .then((data) => {
        dispatch(setMyStatusAC(status));
      })
  }
}

export const updateMyPhotosThunk = (formData) => {
  return (dispatch) => {
    profileAsync.updatePhoto(formData)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(updateMyPhotosAC(data.data.photos))
        }
      })
  }
}


