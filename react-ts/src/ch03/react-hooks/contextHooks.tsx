import React, { useContext } from 'react'

type User = {
  id: number
  name: string
}

const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {
  const user = useContext(UserContext)

  return user && <p>Hello, {user.name}</p>
}

const Child = () => {
  const now = new Date()

  return (
    <>
    <p>Current: {now.toLocaleString()}</p>
    <GrandChild />
    </>
  )
}

export const Parent = () => {
  const user: User = {
    id: 1,
    name: "Alice",
  }
  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  )
}