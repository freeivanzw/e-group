import React from 'react';
import LoginForm from './LoginForm';
import {withFormik} from 'formik';
import {connect} from 'react-redux';
import {loginThunk} from '../../store/reducers/authReducer';
import {Navigate} from 'react-router';
import {compose} from 'redux';

class LoginWrap extends React.Component {
  render() {

    if (this.props.isAuth) {
      return <Navigate to="/" replace />
    }

    return <LoginForm
      validateEmail={validateEmail}
      validatePassword={validatePassword}
      handleSubmit={this.props.handleSubmit}
      errors={this.props.errors}
      loginThunk={this.props.loginThunk}
      captchaUrl={this.props.captchaUrl}
    />
  }
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

const LoginFormHOC = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    remember: false,
    captcha: '',
  }),

  handleSubmit: (values, {props, setErrors }) => {
    const {email, password, remember, captcha} = values;
    props.loginThunk(email, password, remember, captcha, setErrors)
  },

  displayName: 'LoginForm',
});

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


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  LoginFormHOC,
)(LoginWrap);