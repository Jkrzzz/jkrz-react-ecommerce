import React, { useLayoutEffect } from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const a = Math.ceil(totalProducts / productsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="default-pagination lab-ul">
      <li>
        <a
          href="#"
          onClick={() => {
            if (0 < activePage < pageNumbers.length) {
              paginate(activePage - 1);
            }
          }}
        >
          <i className="icofont-rounded-left"></i>
        </a>
      </li>
      {pageNumbers.map((a) => (
        <li
          key={a}
          className={`page-item ${a === activePage ? "bg-warning" : ""}`}
        >
          <button className="bg-transparent" onClick={() => paginate(a)}>
            {a}
          </button>
        </li>
      ))}
      <li>
        <a
          href="#"
          onClick={() => {
            if (activePage < pageNumbers.length) {
              paginate(activePage + 1);
            }
          }}
        >
          <i className="icofont-rounded-right"></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
