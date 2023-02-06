import React from 'react';
import ProfileEdit from './ProfileEdit';
import {withFormik} from 'formik';
import {compose} from 'redux';
import {connect} from 'react-redux';
import * as Yup from 'yup';
import {updateMyProfileThunk} from '../../store/reducers/profileReducer';

class ProfileEditWrap extends React.Component {

  render() {
    return <ProfileEdit
      handleSubmit={this.props.handleSubmit}
      errors={this.props.errors}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    myProfile: state.profile.myProfile,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMyProfileThunk: (myProfile) => {
      dispatch(updateMyProfileThunk(myProfile))
    }
  }
}

const ProfileEditHOC = withFormik({
  validationSchema:  Yup.object().shape({
    aboutMe: Yup.string()
      .max(150, 'Too Long!'),
    fullName: Yup.string()
      .required(),
    facebookUrl: Yup.string()
      .url(),
    githubUrl: Yup.string()
      .url(),
    instagramUrl: Yup.string()
      .url(),
    mainLinkUrl: Yup.string()
      .url(),
    twitterUrl: Yup.string()
      .url(),
    websiteUrl: Yup.string()
      .url(),
    youtubeUrl: Yup.string()
      .url(),
    lookingForAJobDescription: Yup.string()
      .required(),
  }),
  mapPropsToValues: (props) => {
    return ({
      fullName: props.myProfile.fullName,
      aboutMe: props.myProfile.aboutMe,
      facebookUrl: props.myProfile.contacts.facebook ? props.myProfile.contacts.facebook : '',
      githubUrl: props.myProfile.contacts.github ? props.myProfile.contacts.github : '',
      instagramUrl: props.myProfile.contacts.instagram ? props.myProfile.contacts.instagram : '',
      mainLinkUrl: props.myProfile.contacts.mainLink ? props.myProfile.contacts.mainLink : '',
      twitterUrl: props.myProfile.contacts.twitter ? props.myProfile.contacts.twitter : '',
      websiteUrl: props.myProfile.contacts.website ? props.myProfile.contacts.website : '',
      youtubeUrl: props.myProfile.contacts.youtube ? props.myProfile.contacts.youtube : '',
      lookingForAJob: props.myProfile.lookingForAJob,
      lookingForAJobDescription: props.myProfile.lookingForAJobDescription,
    })
  },


  handleSubmit: (values, {props, setErrors }) => {
    props.updateMyProfileThunk({
      ...props.myProfile,
      aboutMe: values.aboutMe,
      contacts: {
        facebook: values.facebookUrl === '' ? null : values.facebookUrl,
        github: values.githubUrl === '' ? null : values.githubUrl,
        instagram: values.instagramUrl === '' ? null : values.instagramUrl,
        mainLink: values.mainLinkUrl === '' ? null : values.mainLinkUrl,
        twitter: values.twitterUrl === '' ? null : values.twitterUrl,
        website: values.websiteUrl === '' ? null : values.websiteUrl,
        youtube: values.youtubeUrl === '' ? null : values.youtubeUrl,
      },
      lookingForAJob: values.lookingForAJob,
      lookingForAJobDescription: values.lookingForAJobDescription
    })
  },
})




export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  ProfileEditHOC,
)(ProfileEditWrap);