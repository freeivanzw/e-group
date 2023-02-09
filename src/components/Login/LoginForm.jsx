import FormElement from '../common/Form/FormElement';
import FormCheck from '../common/Form/FormCheck';
import FormCaptcha from '../common/Form/FormCaptcha';
import Button from '../common/Button/Button';
import {LoginFromStyle} from './styled/LoginStyled';
import {H1} from '../common/Titles/Titles';

const LoginForm = (props) => {
  const {handleSubmit, errors, captchaUrl, validateEmail, validatePassword} = props;

  return <LoginFromStyle
    onSubmit={handleSubmit}
    error={errors.responseMessage}
  >
    <H1>Увійти</H1>
    <FormElement
      type="email"
      name="email"
      validate={validateEmail}
      error={errors.email}
    >Емейл</FormElement>
    <FormElement
      type="password"
      name="password"
      validate={validatePassword}
      error={errors.password}
    >Пароль</FormElement>
    <FormCheck
      type="checkbox"
      name="remember"
    >Запамятати мене</FormCheck>
    {captchaUrl
      && <FormCaptcha
        captchaUrl={captchaUrl}
        name="captcha"
      />
    }
    <Button large={true}>Увійти</Button>
  </LoginFromStyle>
}

export default LoginForm;