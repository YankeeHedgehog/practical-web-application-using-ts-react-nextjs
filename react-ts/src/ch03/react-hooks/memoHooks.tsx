import { useState } from "react";
import { memo, useCallback } from "react";

// not memorized
const Fizz = ({ isFizz }: { isFizz: boolean }) => {
  console.log(`Fizz is called... ${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
  isBuzz: boolean
}
// memorized
const Buzz = memo<BuzzProps>(({ isBuzz }: BuzzProps) => {
  console.log(`Buzz is called... ${isBuzz}`)
  return <span>{isBuzz ? 'Buzz' : ''}</span>
})

export const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  console.log(`Parent is called... `)
  return (
    <>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <p>{`Current count is ${count}`}</p>
      <p>
        {/* memorized component is re-rendering only when props change */}
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} />
      </p>
    </>
  )
}

type ButtonProps = {
  onClick: () => void
}

const DecrementButton = ({ onClick }: ButtonProps) => {
  console.log('Decrement button is called...')

  return <button onClick={onClick}>Decrement</button>
}

const IncrementButton = memo(({ onClick }: ButtonProps) => {
  console.log('Increment button is called...')

  return <button onClick={onClick}>Increment</button>
})

const DoubleButton = memo(({ onClick }: ButtonProps) => {
  console.log('Double button is called...')

  return <button onClick={onClick}>Double</button>
})

export const Parent2 = () => {
  const [count, setCount] = useState(0)
  const decrement = () => setCount(prevCount => prevCount - 1)
  const increment = () => setCount(prevCount => prevCount + 1)
  const double = useCallback(() => { setCount(prevCount => prevCount * 2) }, [])

  return (
    <>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      {/* useCallback can use in memorized component */}
      <DoubleButton onClick={double} />
    </>
  )
}