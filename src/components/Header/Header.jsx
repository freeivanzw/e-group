
import {NavLink} from 'react-router-dom';
import {LogoHeader, Logout, SiteHeader, UserBox, UserName, LoginBtn} from './styled';
import {CenterContainer} from '../../theme/components/CenterContainer';

const Header = (props) => {
  const {isAuth, userName, logout} = props;
  return <SiteHeader>
    <CenterContainer>
      <LogoHeader><NavLink to="/">eGroup</NavLink></LogoHeader>
      {isAuth
        ? <UserBox>
          <UserName>{userName}</UserName>
          <Logout type="button" onClick={logout}>Вийти</Logout>
        </UserBox>
        : <LoginBtn><NavLink to="/login">Увійти</NavLink></LoginBtn>
      }
    </CenterContainer>
  </SiteHeader>
}

export default Header;