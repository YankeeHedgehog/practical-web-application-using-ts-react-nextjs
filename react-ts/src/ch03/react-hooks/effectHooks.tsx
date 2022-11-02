import { useState, useEffect, useLayoutEffect } from 'react'

const UPDATE_CYCLE = 1000
const KEY_LOCAL = 'KEY_LOCAL'

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)
    return () => {
      clearInterval(timer) // clean up function
    }
  }, [])

  useLayoutEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCAL)
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL, locale)
  }, [locale])

  return (
    <>
      <p>
        <span id="current-time-label">Current time</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          id="select-locale"
          value={locale}
          onChange={e => setLocale(getLocaleFromString(e.target.value))}>
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </>
  )
}