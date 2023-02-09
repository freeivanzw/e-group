import styled from 'styled-components';
import icon from '../../../assets/sprite.svg';

const SearchJobStyled = styled.div`
    margin: 0 0 12px 0;
    display: flex;
    align-items: center;
    color: ${({theme, search}) => search ? theme.color.success : theme.color.danger };
    
    svg {
      margin-right: 8px;
      width: 16px;
      height: 16px;
      fill: ${({theme, search}) => search ? theme.color.success : theme.color.danger };
    }
`

export const SearchJob = (props) => {
  return <SearchJobStyled search={props.search}>
    <svg>
      <use xlinkHref={icon + `#${props.search ? 'accept' : 'close'}`}></use>
    </svg>
    {props.children}
  </SearchJobStyled>
}