import styled from 'styled-components';
import loaderSvg from '../../../assets/loader.svg'

export const Loader = (props) => {
  return <Loading>
    <img src={loaderSvg} alt="loader"/>
  </Loading>
}

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`