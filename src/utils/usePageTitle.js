import { useEffect } from 'react'

const BASE_TITLE = 'CookBox'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE_TITLE}` : BASE_TITLE
  }, [title])
}
