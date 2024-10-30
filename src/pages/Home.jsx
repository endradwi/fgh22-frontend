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

function Home() {

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
    <main className='px-32 py-12 flex flex-col gap-12'>
    <div className='flex'>
        <div className='flex-1 flex gap-3 flex-col'>
        <div className='text-lg text-blue-700 font-bold'>MOVIE TICKET PURCHASES #1 IN INDONESIA</div>
        <div className='text-5xl font-medium'>Experience the Magic of Cinema: Book Your Tickets Today</div>
        <div className='font-normal text-base text-gray-500'>Sign up and get the ticket with a lot of discount</div>
        </div>
        <div className='flec-1'>
        <div className='w-20 border-2 border-black'>adasdadsadahfgadgfha</div>
        <div className='w-20 border-2 border-black'>adasdadsadahfgadgfha</div>
        <div className='w-20 border-2 border-black'>adasdadsadahfgadgfha</div>
        <div className='w-20 border-2 border-black'>adasdadsadahfgadgfha</div>
        </div>
    </div>
    <div className='flex flex-col gap-6 '>
        <div className='text-lg text-blue-700 font-bold'>WHY CHOOSE US</div>
        <div className='text-3xl'>Unleashing the Ultimate Movie Experience</div>
        <div className='flex justify-between gap-8'>
        <div className='flex flex-col gap-5 '>
            <div className='aspect-square bg-red-400 w-14 rounded-full'></div>
            <div className='text-lg font-bold'>Guaranteed</div>
            <div className='text-blue-300 text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
        </div>
        <div className='flex flex-col gap-5 '>
            <div className='aspect-square bg-red-400 w-14 rounded-full'></div>
            <div className='text-lg font-bold'>Guaranteed</div>
            <div className='text-blue-300 text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
        </div>
        <div className='flex flex-col gap-5 '>
            <div className='aspect-square bg-red-400 w-14 rounded-full'></div>
            <div className='text-lg font-bold'>Guaranteed</div>
            <div className='text-blue-300 text-base font-normal'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
        </div>
        </div>
    </div>
    <div className='flex flex-col text-center gap-8'>
        <div className='text-lg text-blue-600 font-bold'>MOVIES</div>
        <div className='text-3xl'>Exciting Movies That Should Be Watched Today</div>
        <div className='h-72 w-72 bg-slate-400'></div>
        <div className='text-blue-700 text-lg font-bold'>View All</div>
    </div>
    <div className='flex flex-col gap-7'>
        <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-3.5'>
            <div className='text-lg font-bold text-blue-700'>UPCOMING MOVIES</div>
            <div className='text-3xl font-normal'>Exciting Movie Coming Soon</div>
        </div>
        <div className='flex gap-2'>
            <div className='aspect-square bg-red-400 w-14 rounded-full'></div>
            <div className='aspect-square bg-red-400 w-14 rounded-full'></div>
        </div>
        </div>
        <div className='h-72 w-72 bg-slate-400'></div>
    </div>
    <div className='px-40 py-20 bg-red-600 rounded-2xl flex flex-col items-center gap-12'>
        <div className='text-5xl text-white font-normal'>Subscribe to our newsletter</div>
        <div>
        <form className='flex gap-3'>
            <label htmlFor="name"></label>
            <input  className='py-4 px-5 outline-none rounded bg-transparent border-white border placeholder-white' type="text" id='name' name='name' placeholder='First name' />
            <label htmlFor=""></label>
            <input  className='py-4 px-5 outline-none rounded bg-transparent border-white border placeholder-white' type="email" id='email' name='email' placeholder='Email address'/>
            <button className='py-4 px-11 bg-white rounded-lg text-red-700' >Click Me</button>
        </form>
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

export default Home
