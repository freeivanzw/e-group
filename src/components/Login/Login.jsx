const Login = (props) => {
  return <div className={`login_box`}>
    <span>Увійти</span>
    {props.children}
  </div>
}

export default Login;