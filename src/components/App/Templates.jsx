import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import HeaderWrap from '../Header/HeaderWrap';
import SiteNavWrap from '../SiteNav/SiteNavWrap';
import LoginWrap from '../Login/LoginWrap';
import ProfileWrap from '../Profile/ProfileWrap';
import UsersWrap from '../Users/UsersWrap';
import UserItemWrap from '../UserItem/UserItemWrap';
import {Navigate} from 'react-router';
import {AppComponent} from './AppStyled';
import ProfileEditWrap from '../ProfileEditWrap/ProfileEditWrap';
import {MenuBtn} from './styled/MenuBtn';
import {Connect} from 'react-redux';
import {CenterContainer} from '../../theme/components/CenterContainer';
import FooterSite from '../FooterSite/FooterSite';
import {BASE_URL} from '../../index';


export const AuthorizedTemp = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const changeOpenedMenu = () => {
    setMenuOpened(!menuOpened)
  }

  return <div className="app_wrapper">
    <HeaderWrap />
    <CenterContainer siteContainer>
      <div className="app_row">
        <SiteNavWrap
          opened={menuOpened}
          changeOpenedMenu={changeOpenedMenu}
        />
        <AppComponent>
          <MenuBtn onClick={changeOpenedMenu}>Меню</MenuBtn>
          <Routes>
            <Route path={BASE_URL + '/'} element={<div>start page</div>}/>
            <Route path={BASE_URL + '/login'} element={<LoginWrap />}/>
            <Route path={BASE_URL + '/profile'} element={<ProfileWrap />}/>
            <Route path={BASE_URL + '/profile/edit'} element={<ProfileEditWrap />}/>
            <Route path={BASE_URL + '/users'} element={<UsersWrap />}/>
            <Route path={BASE_URL + '/users/:id'} element={<UserItemWrap />}/>
          </Routes>
        </AppComponent>
      </div>
    </CenterContainer>
    <FooterSite />
  </div>
}

export const UnauthorizedTemp = () => {
  return <div className="app_wrapper">
    <HeaderWrap />
    <CenterContainer siteContainer>
      <AppComponent>
        <Routes>
          <Route
            path="*"
            element={<Navigate to={BASE_URL + '/login'} replace />}
          />
          <Route path={BASE_URL + '/login'} element={<LoginWrap />}/>
        </Routes>
      </AppComponent>
    </CenterContainer>
    <FooterSite />
  </div>
}