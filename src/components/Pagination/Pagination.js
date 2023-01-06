import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const Pagination = ({
  currentPage,
  lastPage,
  totalPages = 100,
  onClickNext,
  onClickPrev,
  isNextDisabled,
  isPrevDisabled,
}) => {
  return (
    <div className="pagination">
      <span className="pagesInfo">
        showing: <span className="num">{currentPage}</span> {""} to {""}
        <span className="num">{lastPage}</span> of {""}
        <span className="num">{totalPages}</span> Entries
      </span>
      <div className="buttons">
        <button
          style={{
            backgroundColor: currentPage === 0 ? "lightgray" : "#9659ff",
            cursor: currentPage === 0 ? "not-allowed" : "pointer",
          }}
          disabled={isPrevDisabled}
          onClick={onClickPrev}
        >
          <BsArrowLeft style={{ marginRight: "5px", display: "inline-block", fontSize: "15px" }} />
          prev
        </button>
        <button
          style={{
            backgroundColor: isNextDisabled ? "lightgray" : "#9659ff",
            cursor: isNextDisabled ? "not-allowed" : "",
          }}
          disabled={isNextDisabled}
          onClick={onClickNext}
        >
          next
          <BsArrowRight style={{ marginLeft: "5px", display: "inline-block", fontSize: "15px" }} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
