import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card count ={0}/>
      <Card count ={2}/>
      <Card />
    </>
  )
}

export default App
