import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {BASE_URL} from '../../../index';

const UserLinkStyled = styled.div`
  flex: 1 1 auto;
  
  a {
    width: 100%;
    text-decoration: none;
    color: ${({theme}) => theme.color.text};
  }
`

export const UserLink = (props) => {
  return <UserLinkStyled {...props}>
    <NavLink to={BASE_URL + props.to}>{props.children}</NavLink>
  </UserLinkStyled>
}