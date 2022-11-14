import React, { useState, useRef, useImperativeHandle } from 'react'

const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null)

  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date()
      const message = `Hello, it's ${date.toLocaleString()} now`
      setMessage(message)
    },
  }))

  return <>{message !== null ? <p>{message}</p> : null}</>
})

export const Parent = () => {
  const childRef = useRef<{ showMessage: () => void }>(null)
  const onClick = () => {
    if (childRef.current !== null) {
      childRef.current.showMessage()
    }
  }

  return (
    <>
      <button onClick={onClick}>Show Message</button>
      <Child ref={childRef} />
    </>
  )
}