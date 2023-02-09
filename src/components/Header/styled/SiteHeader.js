import styled from 'styled-components';
import {CenterContainer} from '../../../theme/components/CenterContainer';

export const SiteHeader = styled.header`
  padding: 10px 0;
  background-color: #fff;
  box-shadow: ${({theme}) => theme.color.shadow};
  
  ${CenterContainer} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

