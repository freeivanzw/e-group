import styled from 'styled-components';

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    flex: 1 1 auto;
    padding-left: 20px;
  }
`;