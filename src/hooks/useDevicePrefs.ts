import { useEffect, useState } from 'react'

export function useDevicePrefs() {
  const [reduced, setReduced] = useState(false)
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqFine = window.matchMedia('(pointer: fine)')
    setReduced(mqReduced.matches)
    setFine(mqFine.matches)

    const onReduced = (e: MediaQueryListEvent) => setReduced(e.matches)
    const onFine = (e: MediaQueryListEvent) => setFine(e.matches)
    mqReduced.addEventListener('change', onReduced)
    mqFine.addEventListener('change', onFine)
    return () => {
      mqReduced.removeEventListener('change', onReduced)
      mqFine.removeEventListener('change', onFine)
    }
  }, [])

  return { reduced, fine }
}
