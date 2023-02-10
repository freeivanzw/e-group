import styled from 'styled-components';

const UsersBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export const UsersBox = (props) => {
  return <UsersBoxStyled {...props}>
    {props.children}
  </UsersBoxStyled>
}