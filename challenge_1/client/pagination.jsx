import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({nextPage, count}) => {
  return (
    <ReactPaginate
      activeClassName={'active'}
      breakClassName={'break-me'}
      breakLabel={'...'}
      containerClassName={'pagination'}
      marginPagesDisplayed={2}
      nextLabel={'next'}
      onPageChange={nextPage}
      pageCount={Math.ceil(count / 10)}
      pageRangeDisplayed={3}
      previousLabel={'previous'}
      subContainerClassName={'pages pagination'}
    />
  );
};

export default Pagination;