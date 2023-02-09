import styled from 'styled-components';
import noPhoto from '../../../assets/no_photo-user.png'

const UserPhotoStyled = styled.div`
    margin-bottom: 20px;
    display: block;
    width: 100%;
    height: auto;

    @media (min-width: 480px) {
      width: 50%; 
      max-width: 320px;
    }
`

const UserBigImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
  `

export const UserPhoto = (props) => {
  return <UserPhotoStyled>
    <UserBigImage src={props.src ? props.src : noPhoto}/>
  </UserPhotoStyled>
};