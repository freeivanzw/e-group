import {SearchJob} from '../Profile/styled/SearchJob';
import {SocialLink} from '../Profile/styled/SocialLink';
import {SocialList} from '../Profile/styled/SocialList';
import {UserPhoto} from '../Profile/styled/UserPhoto';
import {UserContent} from '../Profile/styled/UserContent';
import {ProfileStyle} from '../Profile/styled/ProfileStyle';
import {AboutMeStyled} from '../Profile/styled/AboutMeStyled';
import {UserBox} from '../Profile/styled/UserBox';

const UserItem = (props) => {
  const {photos, fullName, contacts, lookingForAJob, aboutMe} = props;

  const socialList = [];

  for (let contact in contacts) {
    if (contacts[contact] && contact !== 'vk') {
      socialList.push(<SocialLink href={contacts[contact]} icon={contact}/>)
    }
  }

  return <ProfileStyle>
    <UserPhoto src={photos.large} />
    <UserContent>
      <UserBox src={photos.small}>{fullName}</UserBox>
      {aboutMe && <AboutMeStyled>{aboutMe}</AboutMeStyled>}
      <SearchJob search={lookingForAJob}>{lookingForAJob ? 'шукаю роботу' : 'не шукаю роботу'}</SearchJob>
      {socialList.length > 0 && <SocialList>
        {socialList}
      </SocialList>}

    </UserContent>
  </ProfileStyle>
}

export default UserItem;