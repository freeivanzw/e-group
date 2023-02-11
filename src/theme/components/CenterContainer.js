import styled, {css} from 'styled-components';

export const CenterContainer = styled.div`
  padding: 0 10px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
  ${(props) => props.siteContainer && css`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  `}
`