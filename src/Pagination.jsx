import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber); // Updatingg curnt page when page button is clicked
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex justify-between items-center mt-2">
      <button
        className={`px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 ${
          currentPage === 1 ? "text-gray-400 cursor-not-allowed" : ""
        }`}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <div className="flex space-x-2">
        {[1, 2, 3, 4].map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-3 py-1 rounded ${
              currentPage === pageNumber
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-200"
            }`}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className={`px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 ${
          currentPage === 4 ? "text-gray-400 cursor-not-allowed" : ""
        }`}
        onClick={handleNextClick}
        disabled={currentPage === 4}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
