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
import qr from '../assets/qr.svg'


function TiketResult() {

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
    <main className=' gap-8 flex justify-center items-center bg-gray-300'>
    <div className='flex-1 bg-[url(./assets/bg.svg)] max-w-4xl w-screen  h-screen overflow-hidden'>
    <div className='w-screen max-w-4xl h-screen absolute bg-black opacity-50 flex items-center justify-center'></div>
    <div className='w-screen h-screen text-white flex flex-col px-12 py-96 relative gap-6 max-w-2xl'>
        <div className='text-5xl font-bold'>Thankyou For Purchasing</div>
        <div className='text-2xl'>Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor integer sed magna et.</div>
        <div className='text-lg font-bold'>Please Download Your Ticket</div>
    </div>
    </div>
    <div className='flex-1'>
        <div className='px-28 pt-24 pb-12 flex flex-col gap-6 justify-center items-center'>
            <div className='bg-white px-4 py-8 max-w-xl flex gap-10 flex-col justify-center items-center relative overflow-hidden rounded-lg'>
                <img src={qr} alt="" />
                <div className='flex items-center absolute top-52'>
                    <div className='aspect-square w-8 bg-slate-300 rounded-full'></div>
                    <div className='border-t-2 border-dashed border-gray-700 w-56'></div>
                    <div className='aspect-square w-8 bg-slate-300 rounded-full'></div>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div>
                        <div>Movie</div>
                        <div>Spider-Man: ..</div>
                    </div>
                    <div>
                        <div>Category</div>
                        <div>PG-13</div>
                    </div>
                    <div>
                        <div>Date</div>
                        <div>07 Jul</div>
                    </div>
                    <div>
                        <div>Time</div>
                        <div>2:00pm</div>
                    </div>
                    <div>
                        <div>Count</div>
                        <div>3 pcs</div>
                    </div>
                    <div>
                        <div>Seats</div>
                        <div>C4, C5, C6</div>
                    </div>
                </div>
                <div className='flex border border-gray-300 rounded py-2.5 px-6 gap-24'>
                    <div>Total</div>
                    <div>$30.00</div>
                </div>
            </div>
            <div className='flex flex-col gap-2.5 justify-center items-center'>
            <div className='w-80 bg-orange-400 rounded h-14 flex justify-center items-center' >Download</div>
            <div className='w-80 bg-orange-400 rounded h-14 flex justify-center items-center' >Done</div>
            </div>
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

export default TiketResult
