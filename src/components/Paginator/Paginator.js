import {PaginatorList} from './styled/PaginatorList';
import {PaginatorBtn} from './styled/PaginatorBtn';

const Paginator = (props) => {
  const {totalUsers, pageSize, currentPage, changePage } = props;

  let pagesCountTotal = Math.ceil(totalUsers / pageSize);

  return <nav>
    <PaginatorList>
      {currentPage > 3 ? <li><PaginatorBtn onClick={() => changePage(1)}>1</PaginatorBtn></li> : ''}
      {currentPage > 4 ? <li>...</li> : ''}
      {currentPage > 2 ? <li><PaginatorBtn onClick={() => changePage(currentPage - 2)}>{currentPage - 2}</PaginatorBtn></li> : ''}
      {currentPage > 1 ? <li><PaginatorBtn onClick={() => changePage(currentPage - 1)}>{currentPage - 1}</PaginatorBtn></li> : ''}
      <li><PaginatorBtn current={true}>{currentPage}</PaginatorBtn></li>
      {currentPage < (pagesCountTotal - 1) ? <li><PaginatorBtn onClick={() => changePage(currentPage + 1)}>{currentPage + 1}</PaginatorBtn></li> : '' }
      {currentPage < (pagesCountTotal - 2) ? <li><PaginatorBtn onClick={() => changePage(currentPage + 2)}>{currentPage + 2}</PaginatorBtn></li> : '' }
      {currentPage < (pagesCountTotal - 4) ? <li>...</li> : ''}
      {currentPage < (pagesCountTotal - 3) ? <li><PaginatorBtn onClick={() => changePage(pagesCountTotal)}>{pagesCountTotal}</PaginatorBtn></li> : ''}
    </PaginatorList>
  </nav>
}

export default Paginator