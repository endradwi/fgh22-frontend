import React from 'react'
import {Link} from 'react-router-dom'
import { FaEye } from "react-icons/fa";

function ProfilePage() {
return (
    <div>
     <div className='absolute bg-black opacity-90 w-[675px] ml-[-170px] h-[1015px] mt-[-55px]'></div>   
    <div className='flex flex-col gap-12 absolute ml-[-50px]'>
        <div className='bg-white pt-6 pb-16 flex flex-col gap-2  px-8 rounded-lg'>
            <div className='flex flex-col gap-4'>
            <span className='text-4xl'>Account Settings</span>
            <span>Details Information</span>
            <hr></hr>
            </div>
            <form className='grid gap-3'>
                <div className='flex flex-col gap-1'>
                <label htmlFor="">First Name</label>
                <div>
                    <input className='py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44' type="text" placeholder='Jonas' />
                </div>
                </div>
                <div className='flex flex-col gap-1'>
                <label htmlFor="">Last Name</label>
                <div>
                    <input className='py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44' type="text" placeholder='El Rodriguez'/>
                </div>
                </div>
                <div className='flex flex-col gap-1'>
                <label htmlFor="">E-mail</label>
                <div>
                    <input className='py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44' type="text" placeholder='jonasrodrigu123@gmail.com'/>
                </div>
                </div>
                <div className='flex flex-col gap-1'>
                <label htmlFor="">Phone Number</label>
                <div className='py-5 pl-6 border rounded-xl border-gray-300 flex gap-5'>
                    <span className='border-r-2 border-r-gray-300 pr-5 text-gray-300'>+62</span>
                    <input className=' outline-none' type="text" placeholder='81445687121'/>
                </div>
                </div>
            </form>
            <div className='flex flex-col gap-4'>
            <span>Account and Privacy</span>
            <hr />
            </div>
            <form className='flex flex-col gap-2'>
                <div className='flex flex-col gap-3'>
                <label htmlFor="">New Password</label>
                <div className='flex py-5 w-96 border rounded-xl border-gray-300 justify-between px-7'>
                    <input className=' outline-none' type="text" placeholder='Write your password'/>
                    <FaEye className='h-7 w-7 text-gray-400'/>
                </div>
                </div>
                <div className='flex flex-col gap-3'>
                <label htmlFor="">Confirm Password</label>
                <div className='flex py-5 w-96 border rounded-xl border-gray-300 justify-between px-7'>
                    <input className='outline-none' type="text" placeholder='Confirm your password'/>
                    <FaEye className='h-7 w-7 text-gray-400'/>
                </div>
                </div>
            </form>
    <Link to='/orderhistory' className='bg-orange-400 hover:bg-orange-600 text-white w-full h-14 flex justify-center items-center rounded-xl'> Update changes</Link>
        </div>
    </div>
    </div>
)
}

export default ProfilePage
