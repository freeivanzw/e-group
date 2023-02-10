import styled from 'styled-components';
import icon from '../../../assets/sprite.svg';

const CloseSiteMenuStyled = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  height: 30px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
`

export const CloseSiteMenu = (props) => {
  return <CloseSiteMenuStyled {...props}>
    <svg>
      <use xlinkHref={icon + `#close`}></use>
    </svg>
    <span>{props.children}</span>
  </CloseSiteMenuStyled>
}