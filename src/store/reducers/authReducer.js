import {authAsync, profileAsync, securityAsync} from '../../api/social-api';

const initialState = {
  myProfile: null,
  isAuth: null,
  captchaUrl: undefined,
  initialApp: false,
}

const SET_AUTH = 'SET_AUTH';
const SET_MY_PROFILE = 'SET_MY_PROFILE';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';
const SET_INITIAL_APP = 'SET_INITIAL_APP';

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case (SET_AUTH): {
      return {
        ...state,
        isAuth: action.isAuth
      }
    }
    case (SET_MY_PROFILE): {
      return {
        ...state,
        myProfile: action.myProfile
      }
    }
    case (SET_CAPTCHA_URL): {
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }
    }
    case (SET_INITIAL_APP): {
      return {
        ...state,
        initialApp: true
      }
    }
    default: {
      return state;
    }
  }
}

const setAuthAC = (isAuth) => ({type: SET_AUTH, isAuth: isAuth});
const setMyProfileAC = (myProfile) => ({type: SET_MY_PROFILE, myProfile: myProfile});
const setCaptchaUrlAC = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl: captchaUrl})
const setInitialAppAC = () => ({type: SET_INITIAL_APP})

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

export const loginThunk = (email, password, rememberMe, captcha, setErrors) => {
  return (dispatch) => {
    authAsync.login(email, password, rememberMe, captcha)
      .then((data) => {
        if (data.resultCode === 0) {
          profileAsync.getMyProfile(data.data.userId)
            .then((data) => {
              dispatch(setAuthAC(true));
              dispatch(setMyProfileAC(data))
            })
        } else if (data.resultCode === 1) {
          setErrors({responseMessage: data.messages})
        } else if (data.resultCode === 10) {
          securityAsync.getCaptchaUrl()
            .then((data) => {
              dispatch(setCaptchaUrlAC(data.url))
            })
        }
      })
  }
}

export const logoutThunk = () => {

  return (dispatch) => {
    authAsync.logout()
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setAuthAC(false));
          dispatch(setMyProfileAC(null))
        }
      })
  }
}





