import { useEffect, useRef, useState } from 'react'

const ROOT_MARGIN = '0px 0px -8% 0px'

/** Fires once when the element scrolls into view. */
export function useInView() {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsInView(true)
        observer.disconnect()
      },
      { rootMargin: ROOT_MARGIN, threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}
