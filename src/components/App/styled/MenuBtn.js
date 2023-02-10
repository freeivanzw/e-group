import styled from 'styled-components';
import icon from '../../../assets/sprite.svg';

const MenuBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 16px auto;
  padding: 0;
  height: 30px;
  background-color: transparent;
  border: none;
  
  svg {
    margin-right: 6px;
    width: 16px;
    height: 16px;
    fill: ${({theme}) => theme.color.text}
  }
`;

export const MenuBtn = (props) => {
  return <MenuBtnStyled {...props}>
    <svg>
      <use xlinkHref={icon + `#menu`}></use>
    </svg>
    <span>{props.children}</span>
  </MenuBtnStyled>
}