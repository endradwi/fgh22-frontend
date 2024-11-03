import React from 'react'
import { FaEye } from "react-icons/fa";
import {Link} from 'react-router-dom'
import BtnLgn from '../component/BtnLgn';

function Login() {

return (
    <>
    <div className='bg-[url(./assets/bg.svg)] relative bg-cover flex flex-col gap-5 w-screen h-screen justify-center items-center '>
    <div className='w-screen h-screen bg-cover bg-black absolute  opacity-50'></div>
    <div className='relative'>
    <div className='rounded-xl bg-white px-20 pt-7 pb-10 flex flex-col justify-between gap-9 w-full max-w-96 md:max-w-2xl'>
            <div className='text-3xl font-bold'>Welcome Back👋</div>
            <div className='text-lg text-gray-600 max-w-sm'>Sign in with your data that you entered during
            your registration</div>
            <form className='flex flex-col gap-6'>
            <label className='text-xl' htmlFor="email">Email</label>
            <div className='w-full'>
            <input className='outline-none w-full text-gray-700 border-gray-400 border box-border rounded py-5 pl-6 pr-56' type="email" id='email' name='email' placeholder='Enter your email' />
            </div>
            <label className='text-xl' htmlFor="password">Password</label>
            <div className='flex justify-between items-center border-gray-400 border w-full rounded pr-5'>
            <input className='outline-none text-gray-700 w-full box-border py-5 pl-6 ' type="text" id='password' name='password' placeholder='Enter your password' />
            <FaEye className='h-7 w-7 text-gray-400'/>
            </div>
            <span className='text-right text-blue-700 text-base'>Forgot your password?</span>
            <div>
            <Link to="/"><button className='bg-orange-400 rounded-lg px-10 w-full max-w-md h-16 hover:bg-orange-700 text-white'>
            Login</button></Link>
            </div>
            </form>
            <div className='flex items-center gap-2'>
                <hr className='border border-gray-300 w-48' />
                <span className='text-xs'>Or</span>
                <hr className='border border-gray-300 w-48' />
            </div>
            <BtnLgn />
        </div>
        </div>
    </div>
    </>
)
}

export default Login
