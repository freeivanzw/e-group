import React from 'react';
import Login from './Login';
import LoginForm from './LoginForm';
import {withFormik} from 'formik';
import {connect} from 'react-redux';
import {loginThunk} from '../../store/reducers/authReducer';

class LoginWrap extends React.Component {
  render() {

    return <Login>
      <LoginFormHOC
        loginThunkLink={this.props.loginThunk}
        captchaUrl={this.props.captchaUrl}
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

const mapStateToProps = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl
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