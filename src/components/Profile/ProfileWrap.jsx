import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setMyStatusThunk} from '../../store/reducers/profileReducer';

class ProfileWrap extends React.Component {
  state = {
    profileStatus: this.props.profile.status,
  }

  componentDidMount() {
    this.props.setMyStatusThunk()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profile.status !== this.props.profile.status) {
      this.setState({
        profileStatus: this.props.profile.status,
      })
    }
  }

  changeStatus = (e) => {
    console.log(e.target.value)
    this.setState({
      profileStatus: e.target.value
    })
  }

  render() {
    return <Profile
      {...this.props.profile}
      profileStatus={this.state.profileStatus}
      changeStatus={this.changeStatus}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.myProfile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMyStatusThunk: () => {
      dispatch(setMyStatusThunk())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWrap);