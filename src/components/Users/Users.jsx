import {UsersBox} from './styled/UsersBox';
import {UsersList} from './styled/UsersList';
import {UserCard} from './styled/UserCard';
import {UserImage} from './styled/UserImage';
import {UserLink} from './styled/UserLink';
import PaginatorWrap from '../Paginator/PaginatorWrap';
import {connect} from 'react-redux';
import {SubscribeBtn} from './styled/SubscribeBtn';

const Users = (props) => {
  const {usersList, toggleFollowUser} = props;

  return <UsersBox>
    {(usersList)
      ? <UsersList>
        {usersList.map((user) => <li key={user.id}>
          <UserCard>
            <UserImage
              link={`profile/${user.id}`}
              photo={user.photos.small}
              alt={`користувач ${user.name}`}>
            </UserImage>
            <UserLink to={`/users/${user.id}`}>{user.name}</UserLink>
            <SubscribeBtn
              isSubscribed={user.followed}
              onClick={() => toggleFollowUser(user.id, user.followed)}
            >{!user.followed ? 'Підписатись' : 'Відписатись'}</SubscribeBtn>
          </UserCard>
        </li>)}
      </UsersList>
      : <span>користувачів не знайдено</span>
    }

    <PaginatorWrap
      totalUsers={props.totalUsers}
      pageSize={props.userPageSize}
      currentPage={props.currentPage}
      changePage={props.changePage}/>
  </UsersBox>
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);