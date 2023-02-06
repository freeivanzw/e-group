import {ProfileStyle, UserPhoto, UserContent, UserBox, AboutMeStyled, SearchJob, SocialLink, SocialList, EditProfile} from './ProfileStyled';

const Profile = (props) => {

  const {fullName, aboutMe, contacts, lookingForAJob} = props;

  return <ProfileStyle>
    <UserPhoto src="https://cdn-icons-png.flaticon.com/512/9628/9628241.png"/>
    <UserContent>
      <EditProfile to="edit">Редагувати профіль</EditProfile>
      <UserBox src="https://cdn-icons-png.flaticon.com/512/9628/9628241.png">{fullName}</UserBox>
      <SearchJob search={lookingForAJob}>{lookingForAJob ? 'шукаю роботу' : 'не шукаю роботу'}</SearchJob>
      {aboutMe && <AboutMeStyled>{aboutMe}</AboutMeStyled>}
      <SocialList>
        <SocialLink href={contacts.github} icon="github"/>
        <SocialLink href={contacts.facebook} icon="facebook"/>
        <SocialLink href={contacts.instagram} icon="instagram"/>
        <SocialLink href={contacts.twitter} icon="twitter"/>
        <SocialLink href={contacts.youtube} icon="youtube"/>
        <SocialLink href={contacts.website} icon="website"/>
        <SocialLink href={contacts.mainLink} icon="mainLink"/>
      </SocialList>
    </UserContent>

  </ProfileStyle>
}

export default Profile;