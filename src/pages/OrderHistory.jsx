import React from 'react'
import logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'
import profile from '../assets/profileimg.png'
import cine from '../assets/Cine.svg'
import qr from '../assets/qr.svg'


function Profile() {

return (
    <>
    <nav className='px-32 py-7 flex justify-between shadow items-center text-sm'>
    <div><img src={logo} alt="viteLogo" /></div>
    <ul className='flex gap-14'>
        <li>
        <a href="#">Home</a>
        </li>
        <li>
        <a href="#">Movie</a>
        </li>
        <li>
        <a href="#">Buy Ticket</a>
        </li>
    </ul>
    <div className='flex gap-3'>
        <select name="" id="">
            <option value="">Location</option>
        </select>
        <img className='w-14 h-12 rounded-full' src={profile} alt="" />
    </div>
    </nav>
    <main className='pt-14 px-20 pb-24 flex gap-8 justify-center bg-gray-300'>
    <div className='flex flex-col gap-0.5'>
        <div className='bg-white px-10 py-10 rounded-t-lg flex flex-col gap-8 justify-center items-center'>
            <div className='flex justify-between'>
                <div>INFO</div>
                <div>000</div>
            </div>
            <img className='w-[136px] aspect-square rounded-full' src={profile} alt="" />
            <div className='flex flex-col justify-center items-center gap-1'>
            <div>Jonas El Rodriguez</div>
            <div>Moviegoers</div>
            </div>
        </div>
        <div className='bg-white px-10 py-10 rounded-b-lg flex flex-col gap-8'>
            <span>Loyalty Points</span>
            <div className='bg-orange-400 py-5 pl-5 pr-32 rounded-xl flex flex-col gap-5 text-white'>
                <div>Moviegoers</div>
                <div>320 
                    <span>points</span>
                </div>
            </div>
            <div>
                <div>180 points become a master</div>
                <div></div>
            </div>
        </div>
    </div>
    <div className='flex flex-col gap-12'>
        <div className='bg-white pt-6 flex gap-14 pl-12 pr-[487px] rounded-lg'>
            <div>Account Settings</div>
            <div className='border-b-black border-b-2 pb-6'>Order History</div>
        </div>
        <div className='flex flex-col gap-0.5'>
            <div className='bg-white py-10 flex gap-12  px-12 rounded-t-lg justify-between' >
                <div className='flex flex-col gap-1' >
                    <div className='text-sm'>Tuesday, 07 July 2020 - 04:30pm</div>
                    <div className='text-2xl font-semibold'>Spider-Man: Homecoming</div>
                </div>
                <img src={cine} alt="" />
            </div>
            <div className='bg-white py-10 flex justify-between gap-12  px-12 rounded-b-lg' >
                <div className='flex gap-4'>
                    <div className='bg-red-200 w-48 h-10 flex justify-center items-center text-sm font-bold rounded'>Ticket in active</div>
                    <div className='bg-red-200 flex justify-center items-center text-sm font-bold rounded w-44 h-10'>Not Paid</div>
                </div>
                <select name="" id="">
                    <option value=""> Show Details</option>
                </select>
            </div>
        </div>
        <div className='flex flex-col gap-0.5'>
            <div className='bg-white py-10 flex gap-12  px-12 rounded-t-lg justify-between' >
                <div className='flex flex-col gap-1' >
                    <div className='text-sm'>Tuesday, 07 July 2020 - 04:30pm</div>
                    <div className='text-2xl font-semibold'>Spider-Man: Homecoming</div>
                </div>
                <img src={cine} alt="" />
            </div>
            <div className='bg-white py-10 flex flex-col justify-between gap-12  px-12 rounded-b-lg' >
                <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <div className='bg-red-200 w-48 h-10 flex justify-center items-center text-sm font-bold rounded'>Ticket in active</div>
                    <div className='bg-red-200 flex justify-center items-center text-sm font-bold rounded w-44 h-10'>Not Paid</div>
                </div>
                <select name="" id="">
                    <option value=""> Show Details</option>
                </select>
                </div>
                <div className='flex flex-col gap-5'>
                    <span className='text-lg'>Ticket Information</span>
                    <div className='flex justify-between'>
                        <div className='flex gap-3'>
                            <div>No. Rekening Virtual</div>
                            <div>:</div>
                        </div>
                        <div className='flex'>
                            <div>12321328913829724</div>
                            <div>Copy</div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-14'>
                            <div>Total Payment</div>
                            <div>:</div>
                        </div>
                        <div>$30</div>
                    </div>
                    <p>Pay this payment bill before it is due, on June 23, 2023. If the bill has not been paid by the specified time, it will be forfeited</p>
                    <button className='flex justify-start py-3 px-9 bg-orange-300 rounded-md max-w-48'>Cek Pembayaran</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-0.5'>
            <div className='bg-white py-10 flex gap-12  px-12 rounded-t-lg justify-between' >
                <div className='flex flex-col gap-1' >
                    <div className='text-sm'>Tuesday, 07 July 2020 - 04:30pm</div>
                    <div className='text-2xl font-semibold'>Spider-Man: Homecoming</div>
                </div>
                <img src={cine} alt="" />
            </div>
            <div className='bg-white py-10 flex flex-col  gap-12  px-12 rounded-b-lg' >
                <div className='justify-between flex'>
                <div className='flex gap-4'>
                    <div className='bg-red-200 w-48 h-10 flex justify-center items-center text-sm font-bold rounded'>Ticket in active</div>
                    <div className='bg-red-200 flex justify-center items-center text-sm font-bold rounded w-44 h-10'>Not Paid</div>
                </div>
                <select name="" id="">
                    <option value=""> Show Details</option>
                </select>
                </div>
                <div className='flex flex-col gap-5'>
                    <span className='text-lg'>Ticket Information</span>
                    <div className='flex gap-11'>
                        <img src={qr} alt="" />
                        <div className='flex flex-col justify-around'>
                            <div className='flex gap-6'>
                                <div className='flex flex-col'>
                                <div>Category</div>
                                <div>PG-13</div>
                                </div>
                                <div className='flex flex-col'>
                                <div>Time</div>
                                <div>2:00pm</div>
                                </div>
                                <div className='flex flex-col'>
                                <div>Seats</div>
                                <div>C4, C5, C6</div>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className='flex flex-col'>
                                <div>Movie</div>
                                <div>Spider-Man: ..</div>
                                </div>
                                <div className='flex flex-col'>
                                <div>Date</div>
                                <div>07 Jul</div>
                                </div>
                                <div className='flex flex-col'>
                                <div>Count</div>
                                <div>3 pcs</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-2'>
                            <div>Total</div>
                            <div>$30.00</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </main>
    </>
)
}

export default Profile
