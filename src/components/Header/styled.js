import React from 'react';
import styled, {css} from 'styled-components';
import icon from '../../assets/sprite.svg'
import {CenterContainer} from '../../theme/components/CenterContainer';

export const SiteHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background-color: #fff;
  box-shadow: ${({theme}) => theme.color.shadow};
  
  ${CenterContainer} {
    display: flex;
    justify-content: space-between;
  }
`;

export const LogoHeader = styled.div`
  
  & a {
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
    color: ${({theme}) => theme.color.link }
  }
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const UserName = styled.span`
  margin-bottom: 4px;
`

export const Logout = (props) => {
  const StyledLogout = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({theme}) => theme.button.bg};
    border: none;
    padding: 3px 7px;
    border-radius: 3px;
    transition: 0.3s;
    cursor: pointer;

    & svg {
      margin-left: 6px;
      fill: black;
      width: 16px;
      height: 16px;
    }

    @media (min-width: 768px) {
      &:hover {
        background-color: ${({theme}) => theme.button.bgHover};
      }
    }
  `;

  return <StyledLogout {...props}>
    {props.children}
    <svg>
      <use xlinkHref={`${icon}#logout`}></use>
    </svg>
  </StyledLogout>
}

export const LoginBtn = styled.div`
  & a {
    text-decoration: none;
    color: ${({theme}) => theme.color.link};
  }
`

