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
`;

export const SiteNav = (props) => {
  return <SiteNavStyled {...props}>
    {props.children}
  </SiteNavStyled>
}