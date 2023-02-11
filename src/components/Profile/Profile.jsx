import {UserPhoto} from './styled/UserPhoto';
import {ProfileStyle} from './styled/ProfileStyle';
import {UserContent} from './styled/UserContent';
import {UserBox} from './styled/UserBox';
import {AboutMeStyled} from './styled/AboutMeStyled';
import {SearchJob} from './styled/SearchJob';
import {SocialLink} from './styled/SocialLink';
import {SocialList} from './styled/SocialList';
import {EditProfile} from './styled/EditProfile';
import {Status} from './styled/Status';
import {StatusEdit} from './styled/StatusEdit';



const Profile = (props) => {
  const {
    fullName, aboutMe, contacts,
    lookingForAJob, status, profileStatus,
    changeStatus, statusEdit, setEditingStatus,
    photos, chooseBibPhoto, editBibPhoto
  } = props;

  return <ProfileStyle>
    <UserPhoto src={photos.large}>
      <input type="file" value={chooseBibPhoto} onChange={editBibPhoto}/>
    </UserPhoto>
    <UserContent>
      <EditProfile to="edit">Редагувати профіль</EditProfile>
      <UserBox src={photos.small}>{fullName}</UserBox>
      <SearchJob search={lookingForAJob}>{lookingForAJob ? 'шукаю роботу' : 'не шукаю роботу'}</SearchJob>
      {status && !statusEdit
        ? <Status
        setEditingStatus={setEditingStatus}
        >{status}</Status>
        : <StatusEdit
          profileStatus={profileStatus}
          changeStatus={changeStatus}
          setEditingStatus={setEditingStatus}
        ></StatusEdit>
      }
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