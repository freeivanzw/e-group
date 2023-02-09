import styled from 'styled-components';

export const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;