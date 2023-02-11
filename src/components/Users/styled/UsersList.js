import styled from 'styled-components';

const UsersListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
  
  li + li {
    margin-top: 12px;
  }
`

export const UsersList = (props) => {
  return <UsersListStyled>
    {props.children}
  </UsersListStyled>
}