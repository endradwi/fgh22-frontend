import React from 'react'
import logo from '../assets/imagelogo.png'
import {Link} from 'react-router-dom'
import profile from '../assets/profileimg.png'
import { FiCalendar } from "react-icons/fi";
import image from '../assets/image1.jpg'
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";


function AdminPage() {

return (
    <>
    <nav className='px-32 py-7 flex justify-between shadow items-center text-sm'>
    <img className='h-16 w-20' src={logo} alt="viteLogo" />
    <ul className='flex gap-14 text-xl'>
        <li>
        <a href="#">Dasboard</a>
        </li>
        <li>
        <a href="#" className='text-orange-600'>Movie</a>
        </li>
    </ul>
    <div className='flex gap-3'>
        <select name="" id="">
            <option value="">Location</option>
        </select>
        <img className='w-14 h-12 rounded-full' src={profile} alt="" />
    </div>
    </nav>
    <main className='pt-14 px-20 pb-24 flex justify-center bg-gray-300'>
    <div className='bg-white flex flex-col rounded-2xl gap-10 pt-7 pr-9 pb-10 pl-14 w-full'>
        <div className='flex justify-between items-center'>
            <span className='text-2xl font-bold'>List Movie</span>
            <form className='flex gap-3.5'>
                <label htmlFor=""/>
                <div className='bg-gray-300 rounded-xl py-3.5 px-5 md:flex items-center gap-10 hidden'>
                <FiCalendar className='text-gray-600' />
                <select name="" id="" className='text-base font-semibold bg-transparent text-gray-600 outline-none '>
                    <option value="">November 2023</option>
                </select>
                </div>
               <Link to="/addmovie" className='h-14 w-36 bg-orange-600 text-white rounded-xl flex justify-center items-center'><FaPlus className='block md:hidden text-2xl mr-5'/>Add Movies</Link>
            </form>
            
            </div>
            <div className='bg-gray-300 rounded-xl py-3.5 px-5 flex items-center gap-10 md:hidden'>
                <FiCalendar className='text-gray-600' />
                <select name="" id="" className='text-base font-semibold bg-transparent text-gray-600 outline-none '>
                    <option value="">November 2023</option>
                </select>
        </div>
        <div className='w-full overflow-x-scroll'>
        <table className='text-center w-full '>
            <thead>
                <tr className=' border-b-2 border-gray-200 '>
                    <td className='p-5'>No</td>
                    <td className='p-5'>Thumbnail</td>
                    <td className='p-5'>Movie Name</td>
                    <td className='p-5'>Category</td>
                    <td className='p-5'>Released Date</td>
                    <td className='p-5'>Duration</td>
                    <td className='p-5'>Action</td>
                </tr>
            </thead>
            <tbody>
                <tr className=' border-b-2 border-gray-200 '>
                    <td className='p-5'>1</td>
                    <td className='p-5 flex justify-center'><img className='h-12 w-10' src={image} alt="" /></td>
                    <td className='p-5'>Spiderman HomeComing</td>
                    <td className='p-5'>Action, Adventure</td>
                    <td className='p-5'>07/05/2023</td>
                    <td className='p-5'>2 Hours 15 Minute</td>
                    <td className='p-5 flex gap-2'>
                        <div className='py-2 px-2 text-black rounded-xl bg-orange-600'><FaEye /> </div>
                        <div className='py-2 px-2 text-black rounded-xl bg-orange-400'><FaPen /> </div>
                        <div className='py-2 px-2 text-black rounded-xl bg-red-600'><FaTrash /> </div>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-200 '>
                    <td className='p-5'>1</td>
                    <td className='p-5 flex justify-center'><img className='h-12 w-10' src={image} alt="" /></td>
                    <td className='p-5'>Spiderman HomeComing</td>
                    <td className='p-5'>Action, Adventure</td>
                    <td className='p-5'>07/05/2023</td>
                    <td className='p-5'>2 Hours 15 Minute</td>
                    <td className='p-5 flex gap-2'>
                        <div className='py-2 px-2 text-black rounded-xl bg-orange-600'><FaEye /> </div>
                        <div className='py-2 px-2 text-black rounded-xl bg-orange-400'><FaPen /> </div>
                        <div className='py-2 px-2 text-black rounded-xl bg-red-600'><FaTrash /> </div>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-200 '>
                    <td className='p-5'>1</td>
                    <td className='p-5 flex justify-center'><img className='h-12 w-10' src={image} alt="" /></td>
                    <td className='p-5'>Spiderman HomeComing</td>
                    <td className='p-5'>Action, Adventure</td>
                    <td className='p-5'>07/05/2023</td>
                    <td className='p-5'>2 Hours 15 Minute</td>
                    <td className='p-5 flex gap-2'>
                        <div className='py-2 px-2 text-black rounded-xl bg-orange-600'><FaEye /> </div>
                        <div className='py-2 px-2 text-black rounded-xl bg-orange-400'><FaPen /> </div>
                        <div className='py-2 px-2 text-black rounded-xl bg-red-600'><FaTrash /> </div>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-200 '>
                    <td className='p-5'>1</td>
                    <td className='p-5 flex justify-center'><img className='h-12 w-10' src={image} alt="" /></td>
                    <td className='p-5'>Spiderman HomeComing</td>
                    <td className='p-5'>Action, Adventure</td>
                    <td className='p-5'>07/05/2023</td>
                    <td className='p-5'>2 Hours 15 Minute</td>
                    <td className='p-5 flex gap-2'>
                        <div className='py-2 px-2 text-black rounded-xl bg-orange-600'><FaEye /> </div>
                        <div className='py-2 px-2 text-black rounded-xl bg-orange-400'><FaPen /> </div>
                        <div className='py-2 px-2 text-black rounded-xl bg-red-600'><FaTrash /> </div>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-200 '>
                    <td className='p-5'>1</td>
                    <td className='p-5 flex justify-center'><img className='h-12 w-10' src={image} alt="" /></td>
                    <td className='p-5'>Spiderman HomeComing</td>
                    <td className='p-5'>Action, Adventure</td>
                    <td className='p-5'>07/05/2023</td>
                    <td className='p-5'>2 Hours 15 Minute</td>
                    <td className='p-5 flex gap-2'>
                        <div className='py-2 px-2 text-black rounded-xl bg-orange-600'><FaEye /> </div>
                        <div className='py-2 px-2 text-black rounded-xl bg-orange-400'><FaPen /> </div>
                        <div className='py-2 px-2 text-black rounded-xl bg-red-600'><FaTrash /> </div>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-200 '>
                    <td className='p-5'>1</td>
                    <td className='p-5 flex justify-center'><img className='h-12 w-10' src={image} alt="" /></td>
                    <td className='p-5'>Spiderman HomeComing</td>
                    <td className='p-5'>Action, Adventure</td>
                    <td className='p-5'>07/05/2023</td>
                    <td className='p-5'>2 Hours 15 Minute</td>
                    <td className='p-5 flex gap-2'>
                        <div className='py-2 px-2 text-black rounded-xl bg-orange-600'><FaEye /> </div>
                        <div className='py-2 px-2 text-black rounded-xl bg-orange-400'><FaPen /> </div>
                        <div className='py-2 px-2 text-black rounded-xl bg-red-600'><FaTrash /> </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        <div className='flex justify-center gap-2'>
            <button className='text-gray-600 bg-orange-600 rounded-lg flex justify-center items-center py-1 px-3.5'>1</button>
            <button className='text-gray-600 bg-gray-300 rounded-lg flex justify-center items-center py-1 px-3.5'>2</button>
            <button className='text-gray-600 bg-gray-300 rounded-lg flex justify-center items-center py-1 px-3.5'>3</button>
            <button className='text-gray-600 bg-gray-300 rounded-lg flex justify-center items-center py-1 px-3.5'>4</button>
        </div>
    </div>
    </main>
    </>
)
}

export default AdminPage
