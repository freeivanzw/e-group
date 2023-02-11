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
            <Route path="/" element={<div>start page</div>}/>
            <Route path="login" element={<LoginWrap />}/>
            <Route path="profile" element={<ProfileWrap />}/>
            <Route path="profile/edit" element={<ProfileEditWrap />}/>
            <Route path="users" element={<UsersWrap />}/>
            <Route path="users/:id" element={<UserItemWrap />}/>
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
            element={<Navigate to="/login" replace />}
          />
          <Route path="login" element={<LoginWrap />}/>
        </Routes>
      </AppComponent>
    </CenterContainer>
    <FooterSite />
  </div>
}