import styled from 'styled-components';

export const LogoHeader = styled.div`
  
  & a {
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
    color: ${({theme}) => theme.color.link }
  }
`;