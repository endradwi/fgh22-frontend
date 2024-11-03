import React from 'react'
import logo from '../assets/imagelogo.png'
import {Link} from 'react-router-dom'

function NavbarHome() {
return (
    <div>
    <nav className='px-6 md:px-32 py-7 flex justify-between shadow items-center text-sm'>
    <img className='h-16 w-20' src={logo} alt="viteLogo" />
    <ul className='flex gap-14 text-xl'>
        <li>
        <Link to="/homepage">Home</Link>
        </li>
        <li>
        <Link to="/homepage">Movie</Link>
        </li>
        <li>
        <a href="#">Buy Ticket</a>
        </li>
    </ul>
    <div className='flex gap-3'>
        <Link to="/register" className='border-orange-600 border rounded-2xl px-4 py-3 text-red-700'>Signup</Link>
        <Link to="/login" className='border-orange-600 border rounded-2xl px-4 py-3 bg-orange-600 text-white'>Signin</Link>
    </div>
    </nav>
    </div>
)
}

export default NavbarHome
