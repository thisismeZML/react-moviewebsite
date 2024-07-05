import React from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const PaginationMovie = ({
  paginate,
  currentPage,
  totalMovies,
  moviePerPage,
  loadMoreMovies,
}) => {
  const totalPage = Math.ceil(totalMovies / moviePerPage);
  const paginationNumbers = [];

  for (let i = 1; i <= totalPage; i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className={`items-center gap-5 ${totalPage > 1 ? "flex" : "hidden"}`}>
      <button
        onClick={() => paginate(currentPage - 1)}
        className={`bg-clr-accent text-white p-2 rounded-full ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={currentPage === 1}
      >
        <MdOutlineArrowBackIos />
      </button>
      <div className="flex items-center gap-4">
        {paginationNumbers.map((num) => (
          <button
            key={num}
            onClick={() => paginate(num)}
            className={`border border-white px-4 py-1 ${
              currentPage === num ? "bg-red-500 text-white" : "bg-transparent"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
      <button
        onClick={() => paginate(currentPage + 1)}
        className={`bg-clr-accent text-white p-2 rounded-full ${
          currentPage === totalPage ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={currentPage === totalPage}
      >
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

export default PaginationMovie;
