import React from 'react'
import {NavLink} from 'react-router-dom';
import {SiteNav} from './styled/SiteNav';
import {CloseSiteMenu} from './styled/CloseSiteMenu';

class SiteNavWrap extends React.Component {

  render() {
    return <SiteNav opened={this.props.opened}>
      <CloseSiteMenu onClick={this.props.changeOpenedMenu}>Закрити</CloseSiteMenu>
      <ul>
        <li><NavLink to="profile" onClick={this.props.changeOpenedMenu}>Мій профіль</NavLink></li>
        <li><NavLink to="users" onClick={this.props.changeOpenedMenu}>Користувачі</NavLink></li>
        <li><NavLink to="#">link 3</NavLink></li>
      </ul>
    </SiteNav>
  }
}

export default SiteNavWrap;