import React from 'react'
import profile from '../assets/profileimg.png'
import logo from '../assets/imagelogo.png'
import {Link} from 'react-router-dom'

function NavbarProfile() {
  return (
    <div>
    <nav className='px-32 py-7 flex justify-between shadow items-center text-sm'>
    <img className='h-16 w-20' src={logo} alt="viteLogo" />
    <ul className='flex gap-14 text-xl'>
        <li>
       <Link to="/"> Home</Link>
        </li>
        <li>
        <Link to='/homepage'>Movie</Link>
        </li>
        <li>
        <Link to='/homepage'>Buy Ticket</Link>
        </li>
    </ul>
    <div className='flex gap-3'>
        <select name="" id="">
            <option value="">Location</option>
        </select>
        <img className='w-14 h-12 rounded-full' src={profile} alt="" />
    </div>
    </nav>
    </div>
  )
}

export default NavbarProfile
