import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import HeaderWrap from './components/Header/HeaderWrap';
import SiteNavWrap from './components/SiteNav/SiteNavWrap';
import UsersWrap from './components/Users/UsersWrap';
import UserItemWrap from './components/UserItem/UserItemWrap';
import ProfileWrap from './components/Profile/ProfileWrap';
import LoginWrap from './components/Login/LoginWrap';
import {connect} from 'react-redux';
import {setAuthThunk} from './store/reducers/authReducer';




class App extends React.Component {
  componentDidMount() {
    this.props.setAuthThunk()
  }

  render() {
    return <div className="app_wrapper">
      <HeaderWrap />
      <div className="app_row">
        <SiteNavWrap />
        <div className="app_content">
          <Routes>
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