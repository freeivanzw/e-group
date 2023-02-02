const Profile = (props) => {

  const {fullName, aboutMe} = props;

  return <div className="profile">
    <span>моє імя: {fullName}</span><br/>
    <span>про мене: {aboutMe}</span>



  </div>
}

export default Profile;