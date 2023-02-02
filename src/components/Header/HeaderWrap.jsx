import React from 'react';
import Header from './Header'
import {connect} from 'react-redux';
import {logoutThunk} from '../../store/reducers/authReducer';

class HeaderWrap extends React.Component {

  render() {
    return <Header
      isAuth={this.props.isAuth}
      userName={this.props.userName}
      logout={this.props.logout}
      captcha={this.props.captcha}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userName: state.profile.myProfile?.fullName,
    captcha: state.auth.captcha,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logoutThunk())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWrap);