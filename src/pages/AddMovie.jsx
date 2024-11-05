import React from 'react'
import logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'
import profile from '../assets/profileimg.png'


function AddMovie() {

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
        <div className='bg-white rounded-xl pl-9 pt-12 pr-14 pb-11 flex flex-col gap-7'>
            <span className='text-2xl font-bold'>Add New Movie</span>
            <form className='flex flex-col pl-5 gap-6'>
                <div className="flex flex-col gap-3" >
                <label htmlFor="">Upload Image</label>
                <div>
                    <input type="file" className='hidden'/>
                    <button className='bg-blue-400 w-28 h-8 rounded-md'>Upload</button>
                </div>
                </div>
                <div className="flex flex-col gap-3" >
                <label htmlFor="">Movie Name</label>
                <div>
                    <input className='border border-gray-200 rounded-md py-6 pl-9  pr-80 box-border outline-none' type="text" placeholder='Spider-Man: Homecoming'/>
                </div>
                </div>
                <div className="flex flex-col gap-3" >
                <label htmlFor="">Category</label>
                <div  >
                    <input className='border border-gray-200 rounded-md py-6 pl-9  pr-80 box-border outline-none' type="text" placeholder='Action, Adventure, Sci-Fi'/>
                </div>
                </div>
                <div className="flex md:flex-row flex-col gap-3 w-full">
                    <div className='w-full md:w-64'>
                    <label htmlFor="">Release date</label>
                    <div className='md:w-64 w-full'>
                    <input className='border border-gray-200 rounded-md py-6 pl-9 box-border outline-none w-full' type="text" placeholder='07/05/2020'/>
                    </div>
                    </div>
                    <div>
                    <label htmlFor="">Duration (hour / minute)</label>
                    <div className='w-full md:w-32 md:flex-row flex-col flex gap-6'>
                    <input className='border border-gray-200 w-full md:w-28 rounded-md py-6 px-12 box-border outline-none' type="text" placeholder='2'/>
                    <input className='border border-gray-200 w-full md:w-32 rounded-md py-6 px-12 box-border outline-none' type="text" placeholder='13'/>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                <label htmlFor="">Director Name</label>
                <div >
                    <input className='border border-gray-200 rounded-md py-6 pl-9  pr-80 box-border outline-none' type="text" placeholder='Jon Watts'/>
                </div>
                </div>
                <div className="flex flex-col gap-3" >
                <label htmlFor="">Cast</label>
                <div>
                    <input className='border border-gray-200 rounded-md py-6 pl-9  pr-80 box-border outline-none' type="text" placeholder='Tom Holland, Michael Keaton, Robert Dow..'/>
                </div>
                </div>
                <div className="flex flex-col gap-3" >
                <label htmlFor="">Synopsis</label>
                <div>
                    <textarea name="" id="" placeholder='Thrilled by his experience with the Avengers, Peter returns home, where he
                    lives with his Aunt May, |' className='border border-gray-200 rounded-md py-6 pl-9  pr-80 box-border outline-none'></textarea>
                </div>
                </div>
                <div className="flex flex-col gap-3" >
                <label htmlFor="">Add Location</label>
                <div>
                    <input className='border border-gray-200 rounded-md py-6 pl-9  pr-80 box-border outline-none' type="text" placeholder='Purwokerto, Bandung, Bekasi'/>
                </div>
                </div>
                <div className="flex flex-col gap-3" >
                <label htmlFor="">Set  Date & Time</label>
                <div>
                    <select name="" id="">
                        <option value="">Set a date</option>
                    </select>
                </div>
                </div>
                <div className="flex gap-3 items-center" >
                <div className='py-1.5 px-5 border border-gray-300 rounded-md'>+</div>
                <div>08:30am</div>
                <div>10:30pm</div>
                </div>
                <hr />
                <button className='bg-yellow-700 h-14 rounded-lg'>Save Movie</button>
            </form>
        </div>
    </main>
    </>
)
}

export default AddMovie
