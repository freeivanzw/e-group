import {CenterContainer} from '../../theme/components/CenterContainer';
import styled from 'styled-components';

const FooterSiteStyled = styled.footer`
  padding: 10px 0;
  
  a {
    color: ${({theme}) => theme.color.text}
  }
`

const FooterSite = (props) => {
  return <FooterSiteStyled>
    <CenterContainer>
      Розроблено: <a href="https://www.linkedin.com/in/kozak-js/">Ivan Kozak</a>
    </CenterContainer>
  </FooterSiteStyled>
}

export default FooterSite;