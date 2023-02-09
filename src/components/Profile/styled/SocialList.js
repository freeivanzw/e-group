import styled from 'styled-components';

const SocialListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    
    li {
      margin: 0 6px 6px 0;
      transition: 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }
`

export const SocialList = (props) => {
  return <SocialListStyled>
    {props.children.map((element, id) => {
      if (element.props.href) {
        return <li key={id}>{element}</li>
      }
    })}
  </SocialListStyled>
}