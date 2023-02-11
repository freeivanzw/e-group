import styled, {css} from 'styled-components';

const PaginatorBtnStyled = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.color.border};
  background-color: transparent;
  transition: 0.3s;
  cursor: pointer;
  
  &:hover {
    border-color: ${({theme}) => theme.color.primary};
  }
  
  ${({current, theme}) => current && css`
    color: ${theme.color.primary};
    border-color: ${theme.color.primary};
  `}
`

export const PaginatorBtn = (props) => {
  return <PaginatorBtnStyled {...props}>
    {props.children}
  </PaginatorBtnStyled>
}