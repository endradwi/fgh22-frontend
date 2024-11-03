import React from 'react'
import logo from '../assets/imagelogo.png'
import profile from '../assets/profileimg.png'
import {Link} from 'react-router-dom'

function NavbarAdmin() {
return (
    <div>
        <nav className='px-32 py-7 flex justify-between shadow items-center text-sm'>
    <img className='h-16 w-20' src={logo} alt="viteLogo" />
    <ul className='flex gap-14 text-xl'>
        <li>
       <Link to='/admin' className='text-orange-600'>Dasboard</Link>
        </li>
        <li>
       <Link to='/adminpage'>Movie</Link>
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

export default NavbarAdmin
