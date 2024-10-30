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
import Spider from '../assets/spider.svg'

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
    <div className='flex bg-[url(./assets/spiderman.svg)] bg-cover bg-center py-36 px-32 relative '>
        <div className='flex absolute gap-4'>
            <img src={Spider} alt="" />
            <div className='flex flex-col'>
                <div className='flex-1'></div>
                <div className='flex-1 flex flex-col gap-6'>
                <div className='text-3xl font-bold'>Spider-Man: Homecoming</div>
                    <div className='flex gap-2'>
                        <span className='py-1 px-5 rounded-2xl bg-orange-600'>Action</span>
                        <span className='py-1 px-5 rounded-2xl bg-orange-600'>Adventure</span>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <div className='text-sm text-orange-300'>Release date</div>
                            <div className='text-base'>June 28, 2017</div>
                        </div>
                        <div>
                            <div className='text-sm text-orange-300'> Directed by</div>
                            <div className='text-base'>Jon Watss</div>
                        </div>
                        <div>
                            <div className='text-sm text-orange-300'>Duration</div>
                            <div className='text-base'>2 hours 13 minutes </div>
                        </div>
                        <div>
                            <div className='text-sm text-orange-300'>Casts</div>
                            <div className='text-base'>Tom Holland, Michael Keaton, Robert Downey Jr</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <main className='px-32 pb-12 pt-72 flex flex-col gap-12'>
    <div className='flex flex-col gap-2 '>
        <span className='text-xl font-semibold'>Synopsis</span>
        <p className='max-w-2xl text-orange-700'>Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. </p>
    </div>
    <div className='flex flex-col gap-9'>
       <div>Book Tickets</div>
       <form className='flex flex-col gap-3'>
        <div className='flex gap-72'>
        <label htmlFor="">Choose Date</label>
        <label htmlFor="">Choose Time</label>
        <label htmlFor="">Choose Location</label>
        </div>
        <div className='flex gap-5 justify-between'>
            <select className='py-3.5 pl-16 pr-24 bg-gray-200 rounded outline-none' name="" id="">
                <option value="">21/07/20</option>
            </select>
            <select className='py-3.5 pl-16 pr-24 bg-gray-200 rounded outline-none' name="" id="">
                <option value="">08 : 30 AM</option>
            </select>
            <select className='py-3.5 pl-16 pr-24 bg-gray-200 rounded outline-none' name="" id="">
                <option value="">Purwokerto</option>
            </select>
            <button className='bg-orange-600 px-16 py-4 rounded'>Filter</button>
        </div>
       </form>
    </div>
    <div className=' flex flex-col gap-12'>
        <div className='flex gap-9'>
            <span>Choose Cinema</span>
            <span>39 Result</span>
        </div>
        <div className='flex justify-between'>
            <div className='border-1 border border-black py-9 px-8'>
            <img className='w-52 h-20' src={edu} alt="" />
            </div>
            <div className='border-1 border border-black py-14 px-8'>
            <img className='w-52 h-20' src={hiflix} alt="" />
            </div>
            <div className='border-1 border border-black py-12 px-5'>
            <img className='w-56 h-20' src={cine} alt="" />
            </div>
            <div className='border-1 border border-black py-9 px-8'>
            <img className='w-52 h-20' src={edu} alt="" />
            </div>
        </div>
        <div className='flex justify-center gap-2'>
            <span className='flex justify-center items-center p-2 bg-orange-200 rounded'>1</span>
            <span className='flex justify-center items-center p-2 bg-orange-200 rounded'>2</span>
            <span className='flex justify-center items-center p-2 bg-orange-200 rounded'>3</span>
            <span className='flex justify-center items-center p-2 bg-orange-200 rounded'>4</span>
        </div>
        <div className='flex justify-center items-center py-5 px-10 bg-red-300 max-w-10'>Book Now</div>
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
