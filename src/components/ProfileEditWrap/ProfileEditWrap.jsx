import React from 'react';
import ProfileEdit from './ProfileEdit';
import {withFormik} from 'formik';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {setAuthAC} from '../../store/reducers/authReducer';

class ProfileEditWrap extends React.Component {
  componentDidMount() {
    // console.log(this.props.handleSubmit)
  }

  render() {
    return <ProfileEdit
      handleSubmit={this.props.handleSubmit}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    fullName: state.profile.myProfile.fullName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthAC: (value) => {
      dispatch(setAuthAC(value))
    }
  }
}

const ProfileEditHOC = withFormik({
  mapPropsToValues: () => ({
    aboutMe: '',
  }),
  handleSubmit: (values, {props, setErrors }) => {
    console.log(props)
    props.setAuthAC(false)
  },
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  ProfileEditHOC,
)(ProfileEditWrap);