import {Field} from 'formik';

const LoginForm = (props) => {
  const {handleSubmit, errors, captchaUrl} = props
  return <form
    className={`${errors.responseMessage ? 'error_response' : ''}`}
    onSubmit={handleSubmit}
  >
    <label>
      <span>Емейл</span>
      <Field type="email" name="email" placeholder="Емайл" />
    </label>
    <label>
      <span>Пароль</span>
      <Field type="password" name="password" placeholder="Пароль"/>
    </label>
    <label>
      <Field type="checkbox" name="remember" />
      <span>Запамятати мене</span>
    </label>
    {captchaUrl
      && <div className="captcha_login">
        <img src={captchaUrl} alt="captcha"/>
        <Field type="text" name="captcha" />
    </div> }
    <button type="submit">Увійти</button>
  </form>
}

export default LoginForm;