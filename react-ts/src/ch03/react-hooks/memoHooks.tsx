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