import { useState } from 'react'
import './App.css'
import { Nav,Home,Swipper, Services } from './components/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Home/>
      <Swipper/>
      <Services/>
    </>
  )
}

export default App
