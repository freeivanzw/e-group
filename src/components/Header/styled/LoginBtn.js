import styled from 'styled-components';

export const LoginBtn = styled.div`
  & a {
    text-decoration: none;
    color: ${({theme}) => theme.color.link};
  }
`