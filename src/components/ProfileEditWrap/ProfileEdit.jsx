import FormElement from '../common/Form/FormElement';
import Button from '../common/Button/Button';
import FormCheck from '../common/Form/FormCheck';

const ProfileEdit = (props) => {
  const {handleSubmit, errors} = props;
  return <form
    onSubmit={handleSubmit}
  >

    <span>Редагування Інформації</span>
    <FormElement type="text" name="fullName" error={errors.fullName}>Моє ім'я</FormElement>
    <FormElement type="text" name="aboutMe" error={errors.aboutMe}>Про мене</FormElement>
    <FormElement type="text" name="facebookUrl" error={errors.facebookUrl}>facebook</FormElement>
    <FormElement type="text" name="githubUrl" error={errors.githubUrl}>github</FormElement>
    <FormElement type="text" name="instagramUrl" error={errors.instagramUrl}>instagramUrl</FormElement>
    <FormElement type="text" name="mainLinkUrl" error={errors.mainLinkUrl}>mainLink</FormElement>
    <FormElement type="text" name="twitterUrl" error={errors.twitterUrl}>twitter</FormElement>
    <FormElement type="text" name="websiteUrl" error={errors.websiteUrl}>website</FormElement>
    <FormElement type="text" name="youtubeUrl" error={errors.youtubeUrl}>youtube</FormElement>
    <FormCheck type="checkbox" name="lookingForAJob">Шукаю роботу</FormCheck>
    <FormElement type="textarea" name="lookingForAJobDescription" error={errors.lookingForAJobDescription}>Текст шукаю роботу</FormElement>
    <Button type="submit" disabled={Object.keys(errors).length}>Зберегти</Button>
  </form>
}

export default ProfileEdit;