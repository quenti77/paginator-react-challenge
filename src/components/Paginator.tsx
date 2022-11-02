import { useEffect } from "react"
import { Page, usePaginator } from "../hooks/usePaginator"

interface PaginatorProps {
  maxPage: number
  currentPage: number
  around: number
  changePage: (page: number) => void
}

function Paginator({ maxPage, currentPage, around, changePage }: PaginatorProps) {
  useEffect(() => {
    if (currentPage > maxPage) {
      changePage(1)
    }
  }, [currentPage, maxPage])

  const pages = usePaginator(maxPage, currentPage, around)

  const handlePageChange = (page: Page) => {
    if (page.type === "page") {
      changePage(page.number)
    }
  }

  const buttons = pages.map((page, index) => {
    let className = ""
    if (page.type === "separator") {
      className = "separator"
    }
    if (page.type === "current") {
      className = "active"
    }
    return (
      <button
        key={index}
        className={`page-btn ${className}`}
        onClick={() => handlePageChange(page)}
      >
        {page.label}
      </button>
    )
  })

  return (
    <div className="paginator">
      {buttons}
    </div>
  )
}

export default Paginator
