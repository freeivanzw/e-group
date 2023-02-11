import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {getUserPageThunk, updateUserPageThunk} from '../../store/reducers/usersReducer';

class UsersWrap extends React.Component {

  componentDidMount() {
    this.props.getUserPageThunk(this.props.currentPage)
  }

  changePage = (pageNumber) => {
    this.props.getUserPageThunk(pageNumber);
    this.props.updateUserPageThunk(pageNumber);
  }

  render() {
    return <Users
      usersList={this.props.usersList}
      totalUsers={this.props.totalUsers}
      userPageSize={this.props.userPageSize}
      currentPage={this.props.currentPage}
      changePage={this.changePage}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    usersList: state.users.usersList,
    totalUsers: state.users.totalUsers,
    userPageSize: state.users.userPageSize,
    currentPage: state.users.currentUsersPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserPageThunk: (pageNumber) => {
      dispatch(getUserPageThunk(pageNumber))
    },
    updateUserPageThunk: (currentPage) => {
      dispatch(updateUserPageThunk(currentPage));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersWrap);