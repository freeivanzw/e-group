import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getMyStatusThunk, updateMyStatusThunk} from '../../store/reducers/profileReducer';

class ProfileWrap extends React.Component {
  state = {
    profileStatus: this.props.profile.status,
    statusEdit: false,
  }

  componentDidMount() {
    this.props.getMyStatusThunk()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profile.status !== this.props.profile.status) {
      this.setState({
        profileStatus: this.props.profile.status,
      })
    }
  }

  setEditingStatus = () => {
    if (!this.state.statusEdit) {
      this.setState({
        statusEdit: true,
      })
    } else {
      this.setState({
        statusEdit: false,
      })

      if (this.props.profile.status !== this.state.profileStatus) {
        this.props.updateMyStatusThunk(this.state.profileStatus)
      }
    }
  }

  changeStatus = (e) => {
    this.setState({
      profileStatus: e.target.value
    })
  }

  render() {
    return <Profile
      {...this.props.profile}
      profileStatus={this.state.profileStatus}
      changeStatus={this.changeStatus}
      statusEdit={this.state.statusEdit}
      setEditingStatus={this.setEditingStatus}
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
    getMyStatusThunk: () => {
      dispatch(getMyStatusThunk())
    },
    updateMyStatusThunk: (status) => {
      dispatch(updateMyStatusThunk(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWrap);