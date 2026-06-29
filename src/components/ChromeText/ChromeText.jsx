import { useEffect, useRef } from 'react'

function ChromeText({ as: Tag = 'h1', children, className = '', ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (el) {
      el.classList.add('play-shine')
      const timer = setTimeout(() => el.classList.remove('play-shine'), 2500)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <Tag ref={ref} className={`chrome-text ${className}`} {...props}>
      {children}
    </Tag>
  )
}

export default ChromeText
