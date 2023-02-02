import {authAsync, profileAsync} from '../../api/social-api';
import {setAuthAC, setInitialAppAC} from './authReducer';

const initialState = {
  myProfile: null,
}

const SET_MY_PROFILE = 'SET_MY_PROFILE';

export const profileReducer = (state = initialState, action ) => {
  switch (action.type){
    case (SET_MY_PROFILE): {
      return {
        ...state,
        myProfile: action.myProfile
      }
    }
    default: {
      return state;
    }
  }
}

export const setMyProfileAC = (myProfile) => ({type: SET_MY_PROFILE, myProfile: myProfile});

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