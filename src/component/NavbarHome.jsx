import React from 'react'
import logo from '../assets/imagelogo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom'

function NavbarHome() {
    const [isShow, Setshow] = React.useState(false)
return (
    <div>
    <nav className='px-6 md:px-32 py-7  md:py-0 flex md:flex-row flex-col md:gap-0 gap-5 justify-between shadow items-center text-sm'>
    <div className='w-full md:w-max flex md:block justify-between'>
    <img className='h-16 w-20' src={logo} alt="viteLogo" />
    <button className='md:hidden' onClick={()=>Setshow(!isShow)}><GiHamburgerMenu/></button>
    </div>
    {isShow && (
        <>
        <ul className=' flex md:flex-row flex-col gap-14 text-xl items-center'>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/homepage">Movie</Link>
        </li>
        <li>
        <a href="#">Buy Ticket</a>
        </li>
    </ul>
    <div className='flex gap-3 md:flex-row flex-col items-center'>
        <Link to="/register" className='border-orange-600 border rounded-2xl px-4 py-3 text-red-700'>Signup</Link>
        <Link to="/login" className='border-orange-600 border rounded-2xl px-4 py-3 bg-orange-600 text-white'>Signin</Link>
    </div>
        </>
    )}
        <>
        <ul className=' md:flex md:flex-row flex-col gap-14 text-xl items-center hidden'>
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
    <div className='md:flex gap-3 md:flex-row flex-col items-center hidden'>
        <Link to="/register" className='border-orange-600 border rounded-2xl px-4 py-3 text-red-700'>Signup</Link>
        <Link to="/login" className='border-orange-600 border rounded-2xl px-4 py-3 bg-orange-600 text-white'>Signin</Link>
    </div>
        </>
    </nav>
    </div>
)
}

export default NavbarHome
