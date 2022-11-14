import React, { useState, useCallback, useDebugValue } from 'react'

const useInput = () => {
  const [state, setState] = useState('')
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value)
  }, [])

  useDebugValue(`Input: ${state}`)

  return [state, onChange] as const
}

export const Input = () => {
  const [text, onChangeText] = useInput()

  return (
    <>
      <input type="text" value={text} onChange={onChangeText} />
      <p>Input: {text}</p>
    </>
  )
}