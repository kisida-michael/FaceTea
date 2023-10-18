import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Menu from './components/Menu'
import Reviews from './components/ReviewSection'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full bg-secondary-100'>
      
      <div className="mx-auto min-h-screen">
     
        <Header />
        <Menu />
        <Reviews />
       
      </div>
      </div>
  )
}

export default App

