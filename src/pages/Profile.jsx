import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../component/Navbar'
import { FaEye } from "react-icons/fa";
import CardProfile from '../component/CardProfile';


function Profile() {

return (
    <>
    <Navbar name="navbarprofile" />
    <div className='bg-white pt-6 flex md:hidden justify-center gap-14  rounded-lg'>
        <div className='border-b-orange-500 border-b-2 pb-6'>Account Settings</div>
        <Link to="/orderhistory">Order History</Link>
    </div>
    <main className='pt-14 px-20 pb-24 flex gap-8 justify-center bg-gray-300'>
    <CardProfile />
    <div className='hidden md:flex flex-col gap-12'>
        <div className='bg-white pt-6 flex gap-14 pl-12 pr-[487px] rounded-lg'>
            <div className='border-b-orange-500 border-b-2 pb-6'>Account Settings</div>
            <Link to="/orderhistory">Order History</Link>
        </div>
        <div className='bg-white pt-6 pb-16 flex flex-col gap-12  px-8 rounded-lg'>
            <div className='flex flex-col gap-4'>
            <span>Details Information</span>
            <hr></hr>
            </div>
            <form className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-3'>
                <label htmlFor="">First Name</label>
                <div>
                    <input className='py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44' type="text" placeholder='Jonas' />
                </div>
                </div>
                <div className='flex flex-col gap-3'>
                <label htmlFor="">Last Name</label>
                <div>
                    <input className='py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44' type="text" placeholder='El Rodriguez'/>
                </div>
                </div>
                <div className='flex flex-col gap-3'>
                <label htmlFor="">E-mail</label>
                <div>
                    <input className='py-5 pl-6 border rounded-xl border-gray-300 outline-none pr-44' type="text" placeholder='jonasrodrigu123@gmail.com'/>
                </div>
                </div>
                <div className='flex flex-col gap-3'>
                <label htmlFor="">Phone Number</label>
                <div className='py-5 pl-6 border rounded-xl border-gray-300 flex gap-5'>
                    <span className='border-r-2 border-r-gray-300 pr-5 text-gray-300'>+62</span>
                    <input className=' outline-none' type="text" placeholder='81445687121'/>
                </div>
                </div>
            </form>
        </div>
        <div className='bg-white pt-6 pb-16 flex flex-col gap-12  px-8 rounded-lg'>
            <div className='flex flex-col gap-4'>
            <span>Account and Privacy</span>
            <hr />
            </div>
            <form className='flex gap-8'>
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
        </div>
    <Link to='/orderhistory' className='bg-orange-400 hover:bg-orange-600 text-white w-80 h-14 flex justify-center items-center rounded-xl'> Update changes</Link>
    </div>
    </main>
    </>
)
}

export default Profile
