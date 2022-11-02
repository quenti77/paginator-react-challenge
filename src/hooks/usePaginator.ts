import { useMemo } from "react"

export interface Page {
  number: number
  label: string
  type: "separator" | "page" | "current"
}

export function usePaginator(maxPage: number, currentPage: number, around: number) {
  return useMemo(() => {
    const pages = []
    let separator = false
    for (let i = 1; i <= maxPage; i += 1) {
      const page: Page = {
        number: i,
        label: i.toString(),
        type: "page",
      }

      const isFirstSeparator = i > (around + 1) && i < (currentPage - around)
      const isLastSeparator = i > (currentPage + around) && i < (maxPage - around)

      if (!(isFirstSeparator || isLastSeparator)) {
        separator = false
      }

      if (isFirstSeparator || isLastSeparator) {
        if (separator) {
          continue
        }
        page.type = "separator"
        page.label = "..."
        separator = true
      }

      if (i === currentPage) {
        page.type = "current"
      }

      pages.push(page)
    }
    return pages
  }, [maxPage, currentPage, around])
}
