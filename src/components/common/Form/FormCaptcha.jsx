import styled from 'styled-components';
import {Field} from 'formik';

const FormCaptcha = (props) => {
  const {captchaUrl, name} = props;
  return <FormCaptchaStyle>
    <img src={captchaUrl} alt="captcha"/>
    <Field type="text" name={name} />
  </FormCaptchaStyle>
}

const FormCaptchaStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 12px;
  
  img {
    display: block;
    width: 150px;
    height: auto;
    margin-bottom: 4px;
  }
  
  input {
    border: 1px solid gray;
    border-radius: 3px;
    width: 100px;
    height: 30px;
    padding: 0 10px;
  }
`

export default FormCaptcha;