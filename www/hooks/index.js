import { useContext, useRef, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'

export function useStyledTheme() {
  return useContext(ThemeContext)
}

// https://usehooks.com/usePrevious/
export function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef()

  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current
}

// https://usehooks.com/useWindowSize/
export function useWindowSize() {
  const isClient = typeof window === 'object'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (isClient) {
      function handleResize() {
        setWindowSize(getSize())
      }

      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return windowSize
}
