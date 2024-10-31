import React from 'react'
import logo from '../assets/logo.svg'
import edu from '../assets/ebv.svg'
import cine from '../assets/Cine.svg'
import hiflix from '../assets/hiflix.svg'
import fb from '../assets/facebook.svg'
import ig from '../assets/instagram.svg'
import twit from '../assets/twitter.svg'
import yt from '../assets/youtube.svg'
import {Link} from 'react-router-dom'
import gpay from '../assets/gpay.svg'
import gopay from '../assets/gopay.svg'
import bca from '../assets/bca.svg'
import dana from '../assets/dana.svg'
import bri from '../assets/bri.svg'
import ovo from '../assets/ovo.svg'
import visa from '../assets/visa.svg'
import paypal from '../assets/paypal.svg'

function OrderPage() {

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
        <Link to="/register" className='border-red-700 border rounded-2xl px-4 py-3 text-red-700'>Signup</Link>
        <Link to="/login" className='border-red-700 border rounded-2xl px-4 py-3 bg-red-600 text-white'>Signin</Link>
    </div>
    </nav>
    <main className='px-32 pt-8 pb-32 gap-8 flex flex-col justify-center items-center bg-gray-300'>
        <div className='flex items-center gap-6'>
            <div className='bg-blue-300 aspect-square rounded-full w-12 flex justify-center items-center'>1</div>
            <div className='border-t-2 border-dashed border-black w-16'></div>
            <div className='bg-blue-300 aspect-square rounded-full w-12 flex justify-center items-center'>2</div>
            <div className='border-t-2 border-dashed border-black w-16'></div>
            <div className='bg-blue-300 aspect-square rounded-full w-12 flex justify-center items-center'>3</div>
        </div>
        <div className='flex gap-4'>
            <div className='flex flex-col px-6 pb-16 pt-10 bg-white rounded-md gap-8'>
                <span>Payment Info</span>
                <form className='flex flex-col gap-8'>
                    <label htmlFor="">DATE & TIME</label>
                    <div>
                        <input className='border-b-2 border-black w-screen max-w-2xl outline-none pb-2' type="text" />
                    </div>
                    <label htmlFor="">MOVIE TITLE</label>
                    <div>
                        <input className='border-b-2 border-black w-screen max-w-2xl outline-none pb-2' type="text" />
                    </div>
                    <label htmlFor="">CINEMA NAME</label>
                    <div>
                        <input className='border-b-2 border-black w-screen max-w-2xl outline-none pb-2' type="text" />
                    </div>
                    <label htmlFor="">NUMBER OF TICKETS</label>
                    <div>
                        <input className='border-b-2 border-black w-screen max-w-2xl outline-none pb-2' type="text" />
                    </div>
                    <label htmlFor="">TOTAL PAYMENT</label>
                    <div>
                        <input className='border-b-2 border-black w-screen max-w-2xl outline-none pb-2' type="text" />
                    </div>
                    <span>Personal Information</span>
                    <label htmlFor="">Full Name</label>
                    <div>
                        <input className='border border-black w-screen max-w-2xl outline-none py-5 pl-11' type="text" />
                    </div>
                    <label htmlFor="">Email</label>
                    <div>
                        <input className='border border-black w-screen max-w-2xl outline-none py-5 pl-11' type="text" />
                    </div>
                    <label htmlFor="">Phone Number</label>
                    <div>
                        <input className='border border-black w-screen max-w-2xl outline-none py-5 pl-11' type="text" />
                    </div>
                </form>
                <span>Payment Method</span>
                <div className='grid grid-cols-4 gap-5'>
                    <div className='py-3 rounded-md border border-gray-300 flex justify-center items-center'>
                        <img src={gpay} alt="" />
                    </div>
                    <div className='py-3 rounded-md border border-gray-300 flex justify-center items-center'>
                        <img src={visa} alt="" />
                    </div>
                    <div className='py-3 rounded-md border border-gray-300 flex justify-center items-center'>
                        <img src={gopay} alt="" />
                    </div>
                    <div className='py-3 rounded-md border border-gray-300 flex justify-center items-center'>
                        <img src={paypal} alt="" />
                    </div>
                    <div className='py-3 rounded-md border border-gray-300 flex justify-center items-center'>
                        <img src={dana} alt="" />
                    </div>
                    <div className='py-3 rounded-md border border-gray-300 flex justify-center items-center'>
                        <img src={bca} alt="" />
                    </div>
                    <div className='py-3 rounded-md border border-gray-300 flex justify-center items-center'>
                        <img src={bri} alt="" />
                    </div>
                    <div className='py-3 rounded-md border border-gray-300 flex justify-center items-center'>
                        <img src={ovo} alt="" />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </main>
    <footer className='flex flex-col gap-12 px-32 py-12'>
    <div className='flex justify-between'>
        <div className='flex flex-col gap-7'>
        <img className='w-40' src={logo} alt="" />
        <div>Stop waiting in line. Buy tickets
        conveniently, watch movies quietly.</div>
        </div>
        <div className='flex flex-col gap-3.5 text-sm'>
        <div className='text-base font-bold'>Explore</div>
        <div>Cinemas</div>
        <div>Movies List</div>
        <div>Notification</div>
        </div>
        <div className='flex flex-col gap-3.5 text-sm'>
        <div className='text-base font-bold'>Our Sponsor</div>
        <img className='w-32' src={edu} alt="" />
        <img className='w-44' src={cine} alt="" />
        <img className='w-20' src={hiflix} alt="" />
        </div>
        <div className='flex flex-col gap-3.5 text-sm pr-16'>
        <div className='text-base font-bold'>Follow us</div>
        <div className='flex gap-4'>
            <img src={fb} alt="" />
            <span>Tickitz Cinema id</span>
        </div>
        <div className='flex gap-4'>
            <img src={ig} alt="" />
            <span>tickitz.id</span>
        </div>
        <div className='flex gap-4'>
            <img src={twit} alt="" />
            <span>tickitz.id</span>
        </div>
        <div className='flex gap-4'>
            <img src={yt} alt="" />
            <span>Tickitz Cinema id</span>
        </div>
        </div>
    </div>
    <div className='text-center'>© 2020 Tickitz. All Rights Reserved.</div>
    </footer>
    </>
)
}

export default OrderPage
