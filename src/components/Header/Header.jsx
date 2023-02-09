import {NavLink} from 'react-router-dom';
import {LogoHeader} from './styled/LogoHeader';
import {Logout} from './styled/Logout';
import {SiteHeader} from './styled/SiteHeader';
import {UserBox} from './styled/UserBox';
import {UserName} from './styled/UserName';
import {LoginBtn} from './styled/LoginBtn';
import {CenterContainer} from '../../theme/components/CenterContainer';

const Header = (props) => {
  const {isAuth, userName, logout} = props;
  return <SiteHeader>
    <CenterContainer>
      <LogoHeader><NavLink to="/">eGroup</NavLink></LogoHeader>
      {isAuth
        ? <UserBox>
          <UserName><NavLink to="profile">{userName}</NavLink></UserName>
          <Logout type="button" onClick={logout}>Вийти</Logout>
        </UserBox>
        : <LoginBtn>
            <NavLink to="login">Увійти</NavLink>
        </LoginBtn>
      }
    </CenterContainer>
  </SiteHeader>
}

export default Header;