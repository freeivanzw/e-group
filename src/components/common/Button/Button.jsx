import styled from 'styled-components';

const Button = (props) => {
  const {children} = props;

  return <ButtonStyle type="submit" {...props}>
    {children}
  </ButtonStyle>
}

const ButtonStyle = styled.button`
  font-size: 18px;
  line-height: 1.2;
  padding: 0 10px;
  min-height: 36px;
  border-radius: 3px;
  width: ${(props) => !props.large ? 'auto' : '100%'};
  border: none;
  background-color: #d5d5d5;
  box-shadow: 0px 1px 10px rgb(0 0 0 / 0%);
  transition: 0.3s;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0px 1px 10px rgb(0 0 0 / 8%);
  }
`

export default Button;