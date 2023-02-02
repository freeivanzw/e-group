import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';

class ProfileWrap extends React.Component {

  render() {
    return <Profile {...this.props.profile}/>
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.myProfile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWrap);