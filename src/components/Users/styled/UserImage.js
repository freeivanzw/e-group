import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import noPhoto from '../../../assets/no_photo-user.png'

const UserImageStyled = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  margin-right: 12px;
  
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

export const UserImage = (props) => {
  const {link, photo, alt} = props;
  return <UserImageStyled>
    <NavLink to={link} >
      <img src={photo ? photo : noPhoto} alt={alt}/>
    </NavLink>
  </UserImageStyled>
}