import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize, onPageClick, currentPage } = props;

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => onPageClick(currentPage === 1 ? 1 : currentPage - 1)}
          >
            Previous
          </a>
        </li>
        {pages.map((page) => (
          <React.Fragment>
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => onPageClick(page)}>
                {page}
              </a>
            </li>
          </React.Fragment>
        ))}
        <li className="page-item">
          <a
            className="page-link"
            onClick={() =>
              onPageClick(
                currentPage === pages.length ? pages.length : currentPage + 1
              )
            }
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
