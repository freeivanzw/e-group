import styled from 'styled-components';

const SiteNavStyled = styled.nav`
  display: ${(props) => props.opened ? 'flex' : 'none'};
  flex-direction: column;
  padding: 40px 10px 10px 10px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;

  li + li {
    margin-top: 6px;
  }
  
  a {
    display: block;
    text-decoration: none;
    color: ${({theme}) => theme.color.text};
  }
  
  @media (min-width: 760px) {
    display: flex;
    position: relative;
    left: auto;
    top: auto;
    width: 200px;
    height: auto;
    align-self: stretch;
    padding: 10px 10px 10px 0;
    border-right: 1px solid ${({theme}) => theme.color.border};
    
    li + li {
      margin-top: 10px;
    }
    
    a {
      font-size: 16px;
      line-height: 1.2;
      transition: 0.3s;
      
      &:hover {
        color:  ${({theme}) => theme.color.primary};
      }
    }
  }
`;

export const SiteNav = (props) => {
  return <SiteNavStyled {...props}>
    {props.children}
  </SiteNavStyled>
}