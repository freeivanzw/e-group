import styled from 'styled-components';

const EditFormProfileStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`

export const EditFormProfile = (props) => {
  return <EditFormProfileStyled {...props}>
    {props.children}
  </EditFormProfileStyled>
}