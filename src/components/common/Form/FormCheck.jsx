import {Field} from 'formik';
import styled from 'styled-components';

const FormCheck = (props) => {
  const {type, name, children} = props;

  return  <FormCheckStyle>
    <Field type={type} name={name} />
    <span>{children}</span>
  </FormCheckStyle>
}

const FormCheckStyle = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  width: 100%;
  
  input {
    margin-right: 6px;
  }
`

export default FormCheck;