import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import HeaderWrap from './components/Header/HeaderWrap';
import SiteNavWrap from './components/SiteNav/SiteNavWrap';
import UsersWrap from './components/Users/UsersWrap';
import UserItemWrap from './components/UserItem/UserItemWrap';
import ProfileWrap from './components/Profile/ProfileWrap';
import LoginWrap from './components/Login/LoginWrap';
import {connect} from 'react-redux';
import {setAuthThunk} from './store/reducers/authReducer';
import {Global} from './AppStyled';
import {Loader} from './components/common/Loader/Loader';

class App extends React.Component {
  componentDidMount() {
    this.props.setAuthThunk()
  }

  render() {
    if (!this.props.initialApp) {
      return <Loader/>
    }

    return <div className="app_wrapper">
      <Global/>
      <HeaderWrap />
      <div className="app_row">
        <SiteNavWrap />
        <div className="app_content">
          <Routes>
            <Route path="/" element={<div>start page</div>}/>
            <Route path="login" element={<LoginWrap />}/>
            <Route path="profile" element={<ProfileWrap />}/>
            <Route path="users" element={<UsersWrap />}/>
            <Route path="users/:id" element={<UserItemWrap />}/>
          </Routes>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    initialApp: state.auth.initialApp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthThunk: () => {
      dispatch(setAuthThunk())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);