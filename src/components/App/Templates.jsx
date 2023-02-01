import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HeaderWrap from '../Header/HeaderWrap';
import SiteNavWrap from '../SiteNav/SiteNavWrap';
import LoginWrap from '../Login/LoginWrap';
import ProfileWrap from '../Profile/ProfileWrap';
import UsersWrap from '../Users/UsersWrap';
import UserItemWrap from '../UserItem/UserItemWrap';
import {Navigate} from 'react-router';
import {AppComponent} from './AppStyled';


export const AuthorizedTemp = () => {
  return <div className="app_wrapper">
    <HeaderWrap />
    <div className="app_row">
      <SiteNavWrap />
      <AppComponent>
        <Routes>
          <Route path="/" element={<div>start page</div>}/>
          <Route path="login" element={<LoginWrap />}/>
          <Route path="profile" element={<ProfileWrap />}/>
          <Route path="users" element={<UsersWrap />}/>
          <Route path="users/:id" element={<UserItemWrap />}/>
        </Routes>
      </AppComponent>
    </div>
  </div>
}

export const UnauthorizedTemp = () => {
  return <div className="app_wrapper">
    <HeaderWrap />
    <div className="app_row">
      <AppComponent>
        <Routes>
          <Route
            path="*"
            element={<Navigate to="/login" replace />}
          />
          <Route path="login" element={<LoginWrap />}/>
        </Routes>
      </AppComponent>
    </div>
  </div>
}