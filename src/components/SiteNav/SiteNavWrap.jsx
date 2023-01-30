import React from 'react'
import {NavLink} from 'react-router-dom';

class SiteNavWrap extends React.Component {

  render() {
    return <nav>
      <ul>
        <li><NavLink to="#">link 1</NavLink></li>
        <li><NavLink to="#">link 2</NavLink></li>
        <li><NavLink to="#">link 3</NavLink></li>
      </ul>
    </nav>
  }
}

export default SiteNavWrap;