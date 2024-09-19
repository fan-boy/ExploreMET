import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = (props:PaginationProps) => {
  
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= props.totalPages) {
      props.onPageChange(page);
    }
  };

  const renderPageNumbers = () => {


    const pageNumbers = [];

    const maxPagesToShow = 10;
    let startPage = 1;
    let endPage = props.totalPages;

    
    if (props.totalPages > maxPagesToShow) {
      const middle = Math.floor(maxPagesToShow / 2);

      if (props.currentPage <= middle) {
        endPage = maxPagesToShow;
      } else if (props.currentPage + middle >= props.totalPages) {
        startPage = props.totalPages - maxPagesToShow + 1;
      } else {
        startPage = props.currentPage - middle;
        endPage = props.currentPage + middle;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-4 py-2 mx-1 ${i === props.currentPage ? 'bg-gray-800 text-gray-100' : 'bg-gray-200'}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center mt-4">
      {/* Previous Button */}
      <button
        className="px-4 py-2 mx-1 bg-gray-200"
        onClick={() => handlePageChange(props.currentPage - 1)}
        disabled={props.currentPage === 1}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Next Button */}
      <button
        className="px-4 py-2 mx-1 bg-gray-200"
        onClick={() => handlePageChange(props.currentPage + 1)}
        disabled={props.currentPage === props.totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
