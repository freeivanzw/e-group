import styled from 'styled-components';
import {H1} from '../common/Titles/Titles';

export const LoginFromStyle = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  
  ${H1} {
    text-align: center;
  }
`