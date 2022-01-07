import React, { useState, useEffect } from "react";
import "./pagination.css";

const Pagination = ({
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit,
  currentPage,
  setCurrentPage,
}) => {
  const pages = Math.round(data.length / dataLimit);

  //   const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage === 1) {
      return;
    }
    window.scrollTo({
      behavior: "smooth",
      //   top: Math.max(
      //     document.body.scrollHeight,
      //     document.documentElement.scrollHeight
      //   ),
      top: 0,
    });
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;

    // if (Math.floor(pages / start) === 1) {
    //   console.log(pages, start, pageLimit, (pageLimit + start) % (start + 1));
    //   //   return new Array(pageLimit - (pages % (start + 1)))
    //   return new Array((pageLimit + start) % (start + 1))
    //     .fill()
    //     .map((_, idx) => start + idx + 1);
    // }

    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      <div className="dataContainer">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className={`next ${currentPage >= pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </>
  );
};

export default Pagination;
