import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <nav className='px-32 py-7 flex justify-between shadow items-center text-sm'>
        <div><img src={reactLogo} alt="viteLogo" /></div>
        <ul className='flex gap-14'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Movie</a>
          </li>
          <li>
            <a href="#">Buy Ticket</a>
          </li>
        </ul>
        <div className='flex gap-3'>
          <a href="#" className='border-red-700 border rounded-2xl px-4 py-3 text-red-700'>Signin</a>
          <a href="#" className='border-red-700 border rounded-2xl px-4 py-3 bg-red-600 text-white'>Signup</a>
        </div>
      </nav>
    </>
  )
}

export default App
