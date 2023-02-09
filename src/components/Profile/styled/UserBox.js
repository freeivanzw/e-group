import styled from 'styled-components';
import noPhoto from '../../../assets/no_photo-user.png'

const UserBoxStyled = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  `

const UserMiniPhoto = styled.img`
    margin-right: 12px;
    width: 40px;
    height: 40px;
    object-fit: contain;
    border-radius: 50%;
  `

export const UserBox = (props) => {

  return <UserBoxStyled>
    <UserMiniPhoto src={props.src ? props.src : noPhoto }/>
    {props.children}
  </UserBoxStyled>
}