import React from 'react'
import logo from '../assets/logo.svg'

function Login() {

return (
    <>
    <div className='bg-[url(./assets/bg.svg)] relative bg-no-repeat bg-cover flex flex-col gap-5 pt-20 w-screen pb-16 h-screen px-96 justify-center items-center '>
        <div className='rounded-lg bg-white px-20 pt-9 pb-14 flex flex-col justify-between gap-11 '>
            <div className='text-3xl font-bold'>Welcome Back👋</div>
            <div className='text-lg text-gray-600 max-w-sm'>Sign in with your data that you entered during
            your registration</div>
            <form className='flex flex-col gap-6'>
            <label htmlFor="email">Email</label>
            <div>
            <input className='outline-none border-gray-400 border-solid border py-5 rounded pl-6 pr-56' type="email" id='email' name='email' placeholder='Enter your email' />
            </div>
            <label htmlFor="password">Password</label>
            <div>
            <input className='outline-none border-gray-400 border-solid border py-5 rounded pl-6 pr-56' type="text" id='password' name='password' placeholder='Enter your password' />
            </div>
            <span className='text-right text-blue-700 text-base'>Forgot your password?</span>
            <div>
            <button className='bg-orange-400 rounded px-10 w-full max-w-md h-16'>Login</button>
            </div>
            </form>
            <div>
            <a href="">Google</a>
            <a href="">Faceebook</a>
            </div>
        </div>
    </div>
    </>
)
}

export default Login
