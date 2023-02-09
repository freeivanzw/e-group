import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import icon from '../../../assets/sprite.svg';

const EditProfileStyled = styled.div`
    margin-left: auto;
    
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      color: ${({theme}) => theme.color.text};
      
      &:hover {
        text-decoration: underline;
      }
    }
    
    svg {
      width: 18px;
      height: 18px;
      margin-right: 8px;
      fill: ${({theme}) => theme.color.text};
    }
`

export const EditProfile = (props) => {
  return <EditProfileStyled>
    <NavLink to={props.to}>
      <svg>
        <use xlinkHref={icon + `#edit`}></use>
      </svg>
      {props.children}
    </NavLink>
  </EditProfileStyled>
}