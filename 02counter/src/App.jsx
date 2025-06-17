import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter =5

  const addValue =()=>{
    if(counter >=20){
      setCounter(20)
    }
    else{
      setCounter(counter + 1)
    }
  }

  const removeValue= ()=>{
    if(counter > 0){
      setCounter(counter-1)
    }
    else{
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App
