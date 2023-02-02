import FormElement from '../common/Form/FormElement';

const ProfileEdit = (props) => {
  const {handleSubmit} = props;

  return <form
    onSubmit={handleSubmit}
  >

    <span>Редагування профілю</span>
    <FormElement
      type="text"
      name="aboutMe"
    >Про мене</FormElement>
    <button type="submit">edit</button>
  </form>
}

export default ProfileEdit;