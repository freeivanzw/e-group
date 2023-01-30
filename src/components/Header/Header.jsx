import './Header.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  const {isAuth, userName, logout} = props;
  return <header>
    <span className="App">header</span>
    {isAuth
      ? <div>
        <span>{userName}</span>
        <button type="button" onClick={logout}>logout</button>
      </div>
      : <NavLink to="/login">Увійти</NavLink>
    }
  </header>
}

export default Header;