import {Field} from 'formik';
import styled from 'styled-components';

const FormElement = (props) => {
  const {children, type, name, validate, error} = props;
  return  <FormElementStyle>
    <span>{children}</span>
    <Field
      className={`${error ? 'error' : ''}`}
      type={type}
      name={name}
      placeholder={children}
      validate={validate}
    />
  </FormElementStyle>
}

const FormElementStyle = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 12px;
  
  span {
    font-size: 14px;
    line-height: 1.2;
    margin-bottom: 4px;
  }
  
  input {
    border: 1px solid gray;
    border-radius: 3px;
    height: 30px;
    padding: 0 10px;
   
    &.error {
      border-color: red
    }
  }
`



export default FormElement;