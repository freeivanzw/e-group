import styled from 'styled-components';

const UserCardStyled = styled.div`
  display: flex;
  align-items: center;
`

export const UserCard = (props) => {
  return <UserCardStyled>
    {props.children}
  </UserCardStyled>
}