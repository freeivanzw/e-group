import React from 'react';
import Login from './Login';
import LoginForm from './LoginForm';
import {withFormik} from 'formik';
import {connect} from 'react-redux';
import {loginThunk} from '../../store/reducers/authReducer';
import {Navigate} from 'react-router';

class LoginWrap extends React.Component {
  render() {

    if (this.props.isAuth) {
      return <Navigate to="/" replace />
    }

    return <Login>
      <LoginFormHOC
        loginThunkLink={this.props.loginThunk}
        captchaUrl={this.props.captchaUrl}
        validateEmail={validateEmail}
        validatePassword={validatePassword}
      />
    </Login>
  }
}

const LoginFormHOC = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    remember: false,
    captcha: '',
  }),

  handleSubmit: (values, {props, setErrors }) => {
    const {email, password, remember, captcha} = values;
    props.loginThunkLink(email, password, remember, captcha, setErrors)
  },

  displayName: 'LoginForm',
})(LoginForm);

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
}

const mapStateToProps = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginThunk: (email, password, rememberMe, captcha, setErrors) => {
      dispatch(loginThunk(email, password, rememberMe, captcha, setErrors))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginWrap);