import { useSyncExternalStore } from 'react'

const useMediaQuery = (query: string): boolean => {
  const subscribe = (callback: () => void) => {
    const match = window.matchMedia(query)
    match.addEventListener('change', callback)
    return () => {
      match.removeEventListener('change', callback)
    }
  }
  const getSnapshot = () => window.matchMedia(query).matches

  return useSyncExternalStore(subscribe, getSnapshot)
}

export default useMediaQuery
