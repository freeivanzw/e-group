import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getMyStatusThunk, updateMyPhotosThunk, updateMyStatusThunk} from '../../store/reducers/profileReducer';
import {profileAsync} from '../../api/social-api';

class ProfileWrap extends React.Component {
  state = {
    profileStatus: this.props.profile.status,
    statusEdit: false,
    chooseBibPhoto: undefined,
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

  editBibPhoto = (e) => {
    let formData = new FormData();

    if (e.target.files[0]) {
      formData.append('image', e.target.files[0])
      this.props.updateMyPhotosThunk(formData)
    }

  }

  render() {
    return <Profile
      {...this.props.profile}
      profileStatus={this.state.profileStatus}
      changeStatus={this.changeStatus}
      statusEdit={this.state.statusEdit}
      setEditingStatus={this.setEditingStatus}
      chooseBibPhoto={this.state.chooseBibPhoto}
      editBibPhoto={this.editBibPhoto}
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
    },
    updateMyPhotosThunk: (formData) => {
      dispatch(updateMyPhotosThunk(formData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWrap);