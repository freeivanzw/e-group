import React from 'react';
import {connect} from 'react-redux';
import {setAuthThunk} from '../../store/reducers/profileReducer';
import {Loader} from '../common/Loader/Loader';
import {AuthorizedTemp, UnauthorizedTemp} from './Templates';

class App extends React.Component {
  componentDidMount() {
    this.props.setAuthThunk()
  }

  render() {
    if (!this.props.initialApp) {
      return <Loader/>
    }

    if (!this.props.isAuth) {
      return <UnauthorizedTemp />
    }


    return <AuthorizedTemp />
  }
}

const mapStateToProps = (state) => {
  return {
    initialApp: state.auth.initialApp,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthThunk: () => {
      dispatch(setAuthThunk())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);