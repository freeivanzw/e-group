import React from 'react';
import Paginator from './Paginator';

class PaginatorWrap extends React.Component {

  render() {
    return <Paginator
      totalUsers={this.props.totalUsers}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      changePage={this.props.changePage}
    />
  }
}

export default PaginatorWrap