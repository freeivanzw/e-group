import React from 'react';
import UserItem from './UserItem';
import {connect} from 'react-redux';
import {useLocation, useNavigate, useParams} from 'react-router';
import {compose} from 'redux';
import {setUserDetailsThunk} from '../../store/reducers/usersReducer';
import {Loader} from '../common/Loader/Loader';

class UserItemWrap extends React.Component {
  state = {
    id: null,
  }

  componentDidMount() {
    this.setState({
      id: this.props.router.params.id
    })


  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      this.props.setUserDetailsThunk(this.state.id);
    }
  }

  render() {
    if (!this.props.userProfile) {
      return <Loader />
    }

    return <UserItem
      {...this.props.userProfile}
    />
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );

  }

  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.users.usersDetails,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserDetailsThunk: (id) => {
      dispatch(setUserDetailsThunk(id))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(UserItemWrap);