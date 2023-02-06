import {authAsync, profileAsync, securityAsync} from '../../api/social-api';
import {setMyProfileAC} from './profileReducer';

const initialState = {
  isAuth: null,
  captchaUrl: undefined,
  initialApp: false,
}

const SET_AUTH = 'SET_AUTH';
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

export const setAuthAC = (isAuth) => ({type: SET_AUTH, isAuth: isAuth});
export const setCaptchaUrlAC = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl: captchaUrl})
export const setInitialAppAC = () => ({type: SET_INITIAL_APP})


export const loginThunk = (email, password, rememberMe, captcha, setErrors) => {
  return (dispatch) => {
    authAsync.login(email, password, rememberMe, captcha)
      .then((data) => {
        if (data.resultCode === 0) {
          profileAsync.getMyProfile(data.data.userId)
            .then((data) => {
              dispatch(setAuthAC(true));
              dispatch(setMyProfileAC(data))
              dispatch(setCaptchaUrlAC(undefined))
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






