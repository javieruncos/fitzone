import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center" className='text-center pt-7'>
       <h1 className='text-xl'>SR Gym Fitness</h1>
      </section>
    </>
  )
}

export default App
