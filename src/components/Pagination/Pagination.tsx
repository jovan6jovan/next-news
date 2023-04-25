import { FC, useMemo } from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const isPrevBtnDisabled = isFirstPage ? "is-disabled" : "";
  const isNextBtnDisabled = isLastPage ? "is-disabled" : "";

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
          <a
            className={`pagination-link ${active}`}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </a>
        </li>
      );
    });
  };

  return (
    <nav
      className="pagination is-right mt-6"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        <li>
          <a
            className={`pagination-previous ${isPrevBtnDisabled}`}
            onClick={handlePrevClick}
          >
            Previous
          </a>
        </li>
        {renderPageNumbers()}
        <li>
          <a
            className={`pagination-next ${isNextBtnDisabled}`}
            onClick={handleNextClick}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
