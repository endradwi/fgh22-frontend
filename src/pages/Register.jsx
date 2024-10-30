import React from 'react'
import logo from '../assets/logo.svg'

function Register() {

return (
    <>
    <div className='bg-[url(./assets/bg.svg)] relative bg-no-repeat bg-cover flex flex-col gap-5 pt-20 w-screen pb-16 h-screen px-96 justify-center items-center '>
      {/* <div className='w-screen h-screen bg-blue-400 absolute'></div> */}
        <img src={logo} alt="" />
        <div className='rounded-lg bg-white px-20 pt-9 pb-14 flex flex-col justify-between gap-11 items-center'>
            <div className='flex items-center gap-6'>
            <div className='bg-orange-300 aspect-square w-12 rounded-full flex justify-center items-center'>1</div>
            <div className='border-t-2 border-black w-16 border-dashed'></div>
            <div className='bg-orange-300 aspect-square w-12 rounded-full flex justify-center items-center'>2</div>
            <div className='border-t-2 border-black w-16 border-dashed'></div>
            <div className='bg-orange-300 aspect-square w-12 rounded-full flex justify-center items-center'>3</div>
            </div>
            <form className='flex flex-col gap-6'>
            <label htmlFor="email">Email</label>
            <div>
            <input className='outline-none border-gray-400 border-solid border py-5 rounded pl-6 pr-56' type="email" id='email' name='email' placeholder='Enter your email' />
            </div>
            <label htmlFor="password">Password</label>
            <div>
            <input className='outline-none border-gray-400 border-solid border py-5 rounded pl-6 pr-56' type="text" id='password' name='password' placeholder='Enter your password' />
            </div>
            <div>
            <input type="checkbox" id='agree' name='agree'/>
            <label htmlFor="agree">I agree to terms & conditions</label>
            </div>
            <div>
            <button className='bg-orange-400 rounded px-10 w-full max-w-md h-16'>Join For Free Now</button>
            </div>
            </form>
            <span>Already have an account? Log in</span>
            <div>
            <a href="">Google</a>
            <a href="">Faceebook</a>
            </div>
        </div>
    </div>
    </>
)
}

export default Register
