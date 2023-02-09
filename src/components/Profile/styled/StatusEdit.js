import styled from 'styled-components';
import icon from '../../../assets/sprite.svg';

const StatusEditStyled = styled.div`
    display: flex;
    align-items: center;

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

    input {
      min-width: 1px;
      flex: 1 1 auto;
    }
`

export const StatusEdit = (props) => {
  return <StatusEditStyled>
    <button onClick={props.setEditingStatus}>
      <svg>
        <use xlinkHref={icon + `#accept`}></use>
      </svg>
    </button>
    <input type="text" value={props.profileStatus ? props.profileStatus : ''} onInput={props.changeStatus}/>
  </StatusEditStyled>
}