import { useState, useReducer } from 'react'

export const Counter = ({ initialValue }: { initialValue: number }) => {
  const [count, setCount] = useState(initialValue)

  return (
    <>
      <button onClick={() => { setCount(prevCount => prevCount - 1) }}>-</button>
      <p>{count}</p>
      <button onClick={() => { setCount(prevCount => prevCount + 1) }}>+</button>
    </>
  )
}

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case 'INCREMENT':
      return currentCount + 1
    case 'DECREMENT':
      return currentCount - 1
    case 'DOUBLE':
      return currentCount * 2
    case 'RESET':
      return 0
    default:
      return currentCount
  }
}

const reducer2 = (currentCount: number, action: Action) => {
  return {
    'INCREMENT': currentCount + 1,
    'DECREMENT': currentCount - 1,
    'DOUBLE': currentCount * 2,
    'RESET': 0,
  }[action]
}

export const DoubleCounter = ({ initialValue }: { initialValue: number }) => {
  const [count, dispatch] = useReducer(reducer2, initialValue)

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => dispatch('DECREMENT')}>-</button>
      <button onClick={() => dispatch('INCREMENT')}>+</button>
      <button onClick={() => dispatch('DOUBLE')}>x2</button>
      <button onClick={() => dispatch('RESET')}>RESET</button>
    </>
  )
}