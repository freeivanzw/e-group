import styled from 'styled-components';
import noPhoto from '../../../assets/no_photo-user.png'

const UserPhotoStyled = styled.div`
    margin-bottom: 20px;
    display: block;
    width: 100%;
    height: auto;
    position: relative;

    @media (min-width: 480px) {
      width: 50%; 
      max-width: 320px;
    }
  
    & input[type=file] {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
`

const UserBigImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 50%;
  `

export const UserPhoto = (props) => {
  return <UserPhotoStyled>
    <UserBigImage src={props.src ? props.src : noPhoto}/>
    {props.children}
  </UserPhotoStyled>
};