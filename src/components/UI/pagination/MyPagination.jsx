import React from 'react'

const MyPagination = ({pagesArray,paginationPage,page}) => {
  return (
    <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span
            key={p}
            className={page === p ? "page page__current" : "page"}
            onClick={() => paginationPage(p)}
          >
            {p}
          </span>
        ))}
      </div>
  )
}

export default MyPagination