import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import {Link} from 'react-router-dom'
import cine from '../assets/Cine.svg'
import qr from '../assets/qr.svg'
import Navbar from '../component/Navbar'
import { IoIosArrowUp } from "react-icons/io";
import CardProfile from '../component/CardProfile';


function Profile() {
const [isShow, Setshow] = React.useState(false)
const [isDown, Setdown] = React.useState(false)
React.useEffect(() => {
    window.scrollTo(0, 0);
}, []);
return (
    <>
<Navbar name="navbaradmin" />
<div className='bg-white pt-6 flex gap-14 md:hidden justify-center rounded-lg'>
    <Link to='/profile'>Account Settings</Link>
    <div className='border-b-orange-500 border-b-2 pb-6'>Order History</div>
</div>
    <main className='pt-14 px-20 pb-24 flex gap-8 justify-center bg-gray-300'>
<div className='md:block hidden'>
<CardProfile/>
</div>
    <div className='flex flex-col gap-12'>
        <div className='bg-white pt-6 hidden md:flex gap-14 pl-12 pr-[487px] rounded-lg'>
            <Link to='/profile'>Account Settings</Link>
            <div className='border-b-orange-500 border-b-2 pb-6'>Order History</div>
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
                <div className='flex md:flex-row flex-col items-center md:gap-0 gap-5 justify-between'>
                <div className='flex gap-4'>
                    <div className='bg-green-200 text-green-400 w-48 h-10 flex justify-center items-center text-sm font-bold rounded'>Ticket in active</div>
                    <div className='bg-red-200 text-red-400 flex justify-center items-center text-sm font-bold rounded w-44 h-10'>Not Paid</div>
                </div>
                <button className='flex items-center gap-5' onClick={()=>Setshow(!isShow)}>
                    <div>Show Detail</div> 
                    {!isShow && <IoIosArrowDown/>}{isShow && <IoIosArrowUp/>}
                </button>
                </div>
                {isShow && (
            <div className='flex flex-col gap-5'>
            <span className='text-lg'>Ticket Information</span>
            <div className='flex md:flex-row flex-col justify-between items-start md:items-center'>
                <div className='flex gap-3'>
                    <div>No. Rekening Virtual</div>
                    <div>:</div>
                </div>
                <div className='flex items-center gap-3 justify-between md:justify-start'>
                    <div className='text-3xl md:text-lg'>12321328913829724</div>
                    <div className='py-3 px-5 border-orange-500 rounded-xl border'>Copy</div>
                </div>
            </div>
            <div className='flex md:flex-row flex-col md:gap-0 gap-5 justify-between'>
                <div className='flex gap-14'>
                    <div>Total Payment</div>
                    <div>:</div>
                </div>
                <div className='text-orange-500 md:text-md text-3xl'>$30</div>
            </div>
            <p className='max-w-2xl'>Pay this payment bill before it is due,on<span className='text-red-600'>  June 23, 2023.</span> If the bill has not been paid by the specified time, it will be forfeited</p>
        <Link to="/admin">  <button className='flex md:justify-start justify-center py-3 px-9 bg-orange-400 hover:bg-orange-600 text-white rounded-md w-full md:max-w-48'>Cek Pembayaran</button> </Link>
        </div>
                )}
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
                <div className='md:justify-between items-center md:gap-0 gap-5 md:flex-row flex-col flex'>
                <div className='flex gap-4'>
                    <div className='bg-gray-200 text-gray-600 w-48 h-10 flex justify-center items-center text-sm font-bold rounded'>Ticket Used</div>
                    <div className='bg-blue-200 text-blue-600 flex justify-center items-center text-sm font-bold rounded w-44 h-10'>Paid</div>
                </div>
                <button className='flex items-center gap-5' onClick={()=>Setdown(!isDown)}>
                    <div>Show Detail</div> 
                    {!isDown && <IoIosArrowUp/>}{isDown && <IoIosArrowDown/>}
                </button>
                </div>
                {!isDown && (
                    <div className='flex flex-col gap-5'>
                    <span className='text-lg'>Ticket Information</span>
                    <div className='flex md:flex-row flex-col gap-11'>
                        <img src={qr} alt="" />
                        <div className='flex flex-col justify-around md:gap-0 gap-5'>
                            <div className='flex gap-6 md:justify-start justify-between'>
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
                            <div className='flex gap-6 md:justify-start justify-between'>
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
                )
                }

            </div>
            
        </div>
    </div>
    </main>
    </>
)
}

export default Profile
