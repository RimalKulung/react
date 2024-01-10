import UserContextProvider from './context/UserContextProvider'
import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React with chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
