import styled from 'styled-components';
import icon from '../../../assets/sprite.svg';

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

export const Logout = (props) => {
  return <StyledLogout {...props}>
    {props.children}
    <svg>
      <use xlinkHref={`${icon}#logout`}></use>
    </svg>
  </StyledLogout>
}