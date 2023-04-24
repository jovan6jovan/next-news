import { FC, useMemo } from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handleClick = (page: number) => {
    const earlyReturnStatement = page < 1 || page > totalPages;

    if (earlyReturnStatement) {
      return;
    }

    onPageChange(page);
  };

  const handlePrevClick = () => {
    if (!isFirstPage) {
      handleClick(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (!isLastPage) {
      handleClick(currentPage + 1);
    }
  };

  const pageNumbers = useMemo(() => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }, [totalPages]);

  const renderPageNumbers = () => {
    return pageNumbers.map((pageNumber) => {
      const active = pageNumber === currentPage ? "is-current" : "";

      return (
        <li key={pageNumber}>
          <button
            className={`pagination-link ${active}`}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </button>
        </li>
      );
    });
  };

  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        <li>
          <button
            className="pagination-previous"
            onClick={handlePrevClick}
            disabled={isFirstPage}
          >
            Previous
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            className="pagination-next"
            onClick={handleNextClick}
            disabled={isLastPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
