import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter/*(could be any name)*/]=useState(15)

  // let counter =15

  const addValue= ()=>{
    // counter= counter+1
    setCounter(counter+1)
    console.log('clicked', counter)
    if((counter+1)>=21){
      alert('limit reached!!')
    }
  }
  
  const removeValue= ()=>{
    setCounter(counter-1)
    if((counter+1)<=1){
      alert('limit reached!!')
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
