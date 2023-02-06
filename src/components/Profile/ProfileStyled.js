import styled from 'styled-components';
import icon from '../../assets/sprite.svg'
import {NavLink} from 'react-router-dom';

export const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

export const UserPhoto = (props) => {
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

  return <UserPhotoStyled>
    <UserBigImage src={props.src}/>
  </UserPhotoStyled>
};

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    flex: 1 1 auto;
    padding-left: 20px;
  }
`;

export const UserBox = (props) => {
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

  return <UserBoxStyled>
    <UserMiniPhoto src={props.src}/>
    {props.children}
  </UserBoxStyled>
}

export const AboutMeStyled = styled.span`
  margin-bottom: 12px;
`

export const SearchJob = (props) => {

  const SearchJobStyled = styled.div`
    margin: 0 0 12px 0;
    display: flex;
    align-items: center;
    color: ${({theme, search}) => search ? theme.color.success : theme.color.danger };
    
    svg {
      margin-right: 8px;
      width: 16px;
      height: 16px;
      fill: ${({theme, search}) => search ? theme.color.success : theme.color.danger };
    }
  `

  return <SearchJobStyled search={props.search}>
    <svg>
      <use xlinkHref={icon + `#${props.search ? 'accept' : 'close'}`}></use>
    </svg>
    {props.children}
  </SearchJobStyled>
}


export const SocialList = (props) => {
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

  return <SocialListStyled>
    {props.children.map((element, id) => {
      if (element.props.href) {
        return <li key={id}>{element}</li>
      }
    })}
  </SocialListStyled>
}

export const SocialLink = (props) => {
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

  return <SocialLinkStyled href={props.href} target="_blank">
    <svg>
      <use xlinkHref={icon + `#${props.icon}`}></use>
    </svg>
  </SocialLinkStyled>
}

export const EditProfile = (props) => {
  const EditProfileStyled = styled.div`
    margin-left: auto;
    
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      color: ${({theme}) => theme.color.text};
      
      &:hover {
        text-decoration: underline;
      }
    }
    
    svg {
      width: 18px;
      height: 18px;
      margin-right: 8px;
      fill: ${({theme}) => theme.color.text};
    }
  `

  return <EditProfileStyled>
    <NavLink to={props.to}>
      <svg>
        <use xlinkHref={icon + `#edit`}></use>
      </svg>
      {props.children}
    </NavLink>
  </EditProfileStyled>
}