import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {Link} from 'react-router-dom'

function BtnLgn() {
  return (
    <div>
      <div className='flex gap-5 justify-center'>
            <Link className='flex justify-center items-center gap-3 border border-gray-200 rounded-xl shadow-md w-44 h-16' to="http://www.google.com"><FcGoogle /> <span className='hidden md:block'>Google</span></Link> 
            <Link className='flex justify-center items-center gap-3 border border-gray-200 rounded-xl shadow-md w-44 h-16' to="https://www.facebook.com"><FaFacebook className='text-blue-800'/><span className='hidden md:block'> Faceebook</span></Link>
            </div>
    </div>
  )
}

export default BtnLgn
