import styled from 'styled-components';

const PaginatorListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  
  li {
    margin: 0 5px;
  }
`

export const PaginatorList = (props) => {
  return <PaginatorListStyled {...props}>
    {props.children}
  </PaginatorListStyled>
}