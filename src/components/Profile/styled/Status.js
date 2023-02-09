import styled from 'styled-components';
import icon from '../../../assets/sprite.svg';

const StatusStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    
    button {
      margin-right: 6px;
      width: 25px;
      height: 25px;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
    
    svg {
      display: block;
      width: 18px;
      height: 18px;
      fill: ${({theme}) => theme.color.text};
    }
`

export const Status = (props) => {
  return <StatusStyled>
    <button onClick={props.setEditingStatus}>
      <svg>
        <use xlinkHref={icon + `#edit`}></use>
      </svg>
    </button>
    <span>{props.children}</span>
  </StatusStyled>
}