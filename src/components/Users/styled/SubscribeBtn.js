import styled, {css} from 'styled-components';

const SubscribeBtnStyled = styled.button`
  color: ${({theme}) => theme.color.primary};
  padding: 3px 8px;
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.color.primary};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  
  ${(props) => props.isSubscribed && css`
    color: ${({theme}) => theme.color.textContrast};
    background-color: ${({theme}) => theme.color.primary};
  `}
  
`

export const SubscribeBtn = (props) => {
  return <SubscribeBtnStyled {...props}>
    {props.children}
  </SubscribeBtnStyled>
}
