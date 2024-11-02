import React from 'react'
import logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'
import profile from '../assets/profileimg.png'
import graph from '../assets/graph.svg'


function AdminPage() {

return (
    <>
    <nav className='px-32 py-7 flex justify-between shadow items-center text-sm'>
    <div><img src={logo} alt="viteLogo" /></div>
    <ul className='flex gap-14'>
        <li>
        <a href="#">Dasboard</a>
        </li>
        <li>
        <a href="#">Movie</a>
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
    <div className='bg-white flex flex-col gap-10 pt-7 pr-9 pb-10 pl-14'>
        <div className='flex justify-between'>
            <span className='text-2xl font-bold'>List Movie</span>
            <form className='flex gap-3.5'>
                <label htmlFor=""/>
                <select name="" id="" className='text-base font-semibold bg-gray-300 rounded-md py-3.5 px-16'>
                    <option value="">November 2023</option>
                </select>
                <button className='h-14 w-36 bg-blue-600 rounded-xl'>Add Movies</button>
            </form>
        </div>
        <table className='text-center '>
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
                    <td className='p-5'></td>
                    <td className='p-5'>Spiderman HomeComing</td>
                    <td className='p-5'>Action, Adventure</td>
                    <td className='p-5'>07/05/2023</td>
                    <td className='p-5'>2 Hours 15 Minute</td>
                    <td className='p-5'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-200 '>
                    <td className='p-5'>1</td>
                    <td className='p-5'></td>
                    <td className='p-5'>Spiderman HomeComing</td>
                    <td className='p-5'>Action, Adventure</td>
                    <td className='p-5'>07/05/2023</td>
                    <td className='p-5'>2 Hours 15 Minute</td>
                    <td className='p-5'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-200 '>
                    <td className='p-5'>1</td>
                    <td className='p-5'></td>
                    <td className='p-5'>Spiderman HomeComing</td>
                    <td className='p-5'>Action, Adventure</td>
                    <td className='p-5'>07/05/2023</td>
                    <td className='p-5'>2 Hours 15 Minute</td>
                    <td className='p-5'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-200 '>
                    <td className='p-5'>1</td>
                    <td className='p-5'></td>
                    <td className='p-5'>Spiderman HomeComing</td>
                    <td className='p-5'>Action, Adventure</td>
                    <td className='p-5'>07/05/2023</td>
                    <td className='p-5'>2 Hours 15 Minute</td>
                    <td className='p-5'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-200 '>
                    <td className='p-5'>1</td>
                    <td className='p-5'></td>
                    <td className='p-5'>Spiderman HomeComing</td>
                    <td className='p-5'>Action, Adventure</td>
                    <td className='p-5'>07/05/2023</td>
                    <td className='p-5'>2 Hours 15 Minute</td>
                    <td className='p-5'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-200 '>
                    <td className='p-5'>1</td>
                    <td className='p-5'></td>
                    <td className='p-5'>Spiderman HomeComing</td>
                    <td className='p-5'>Action, Adventure</td>
                    <td className='p-5'>07/05/2023</td>
                    <td className='p-5'>2 Hours 15 Minute</td>
                    <td className='p-5'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div className='flex justify-center gap-2'>
            <button className='bg-blue-600 rounded-lg flex justify-center items-center py-1 px-3.5'>1</button>
            <button className='bg-blue-600 rounded-lg flex justify-center items-center py-1 px-3.5'>2</button>
            <button className='bg-blue-600 rounded-lg flex justify-center items-center py-1 px-3.5'>3</button>
            <button className='bg-blue-600 rounded-lg flex justify-center items-center py-1 px-3.5'>4</button>
        </div>
    </div>
    </main>
    </>
)
}

export default AdminPage
