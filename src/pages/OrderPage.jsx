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
                <div className='flex border-gray-400 border py-3.5 px-6 gap-3.5'>
                    <div className='bg-red-900 overflow-hidden w-48 h-28 rounded'>
                        <img src={Spider} alt="" />
                    </div>
                    <div className='flex flex-col gap-3.5'>
                        <div className='text-2xl font-semibold'>Spider-Man: Homecoming</div>
                        <div className='flex gap-2' >
                            <div className='px-5 h-8 bg-gray-400 rounded-3xl flex justify-center items-center' >Action</div>
                            <div className='px-5 h-8 bg-gray-400 rounded-3xl flex justify-center items-center' >Adventure</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>Regular - 13:00 PM</div>
                            <div>Change</div>
                        </div>
                    </div>
                </div>
                <span className='text-2xl font-bold'>Choose Your Seat</span>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <span className='text-sm text-gray-500 font-semibold'>Screen</span>
                    <div className='border border-gray-500 rounded-3xl  w-screen max-w-lg h-1 ml-6'></div>
                    <div className='flex justify-between'>
                        <div className='grid grid-cols-8 gap-1.5'>
                            <button>A</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button>B</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button>C</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-blue-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-blue-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button>D</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button>E</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button>F</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button>G</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button></button>
                            <button className='flex items-end justify-center' >1</button>
                            <button className='flex items-end justify-center' >2</button>
                            <button className='flex items-end justify-center' >3</button>
                            <button className='flex items-end justify-center' >4</button>
                            <button className='flex items-end justify-center' >5</button>
                            <button className='flex items-end justify-center' >6</button>
                            <button className='flex items-end justify-center' >7</button>
                        </div>
                        <div className='grid grid-cols-8 gap-1.5'>
                            <button></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-pink-300 rounded'></button>
                            <button className='w-7 aspect-square bg-pink-300 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            <button></button>
                            <button className='flex justify-center items-end'>9</button>
                            <button className='flex justify-center items-end'>10</button>
                            <button className='flex justify-center items-end'>11</button>
                            <button className='flex justify-center items-end'>12</button>
                            <button className='flex justify-center items-end'>13</button>
                            <button className='flex justify-center items-end'>14</button>
                            <button className='flex justify-center items-end'>15</button>
                        </div>
                    </div>
                </div>
                <span className='text-lg font-semibold'>Seating key</span>
                <div className='flex gap-10 text-sm'>
                    <div className='flex gap-4 items-center'>
                    <div className='w-7 aspect-square bg-gray-200 rounded'></div>
                    <div>Available</div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='w-7 aspect-square bg-blue-700 rounded'></div>
                        <div>Selected</div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='w-7 aspect-square bg-pink-300 rounded'></div>
                        <div>Love nest</div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='w-7 aspect-square bg-gray-700 rounded'></div>
                        <div>Sold</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-11'>
                <div className='flex flex-col gap-0.5'>
                    <div className='px-6 bg-white rounded-t-lg py-10 flex flex-col gap-8'>
                        <div className='flex flex-col justify-center items-center gap-2'>
                        <img src={cine} alt="" />
                        <div>CineOne21 Cinema</div>
                        </div>
                        <div className='flex justify-between gap-5'>
                            <div>Movie selected</div>
                            <div>Spider-Man: Homecoming</div>
                        </div>
                        <div className='flex justify-between gap-5'>
                            <div>Tuesday, 07 July 2020</div>
                            <div>13:00pm</div>
                        </div>
                        <div className='flex justify-between gap-5'>
                            <div>One ticket price</div>
                            <div>$10</div>
                        </div>
                        <div className='flex justify-between gap-5'>
                            <div>Seat choosed</div>
                            <div>C4, C5, C6</div>
                        </div>
                    </div>
                    <div className='px-6 bg-white rounded-b-lg py-10 flex justify-between'>
                        <div>Total Payment</div>
                        <div>$30</div>
                    </div>
                </div>
                <div className='w-96 h-14 rounded-lg bg-blue-600 flex justify-center items-center text-white'>Checkout now</div>
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
