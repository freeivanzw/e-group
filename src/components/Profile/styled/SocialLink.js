import styled from 'styled-components';
import icon from '../../../assets/sprite.svg';

const SocialLinkStyled = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    
    svg {
      width: 20px;
      height: 20px;
    }
`

export const SocialLink = (props) => {
  return <SocialLinkStyled href={props.href} target="_blank">
    <svg>
      <use xlinkHref={icon + `#${props.icon}`}></use>
    </svg>
  </SocialLinkStyled>
}