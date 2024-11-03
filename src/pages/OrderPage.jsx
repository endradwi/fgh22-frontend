import React from 'react'
import cine from '../assets/Cine.svg'
import { IoCheckmark } from "react-icons/io5";
import {Link} from 'react-router-dom'
import Spider from '../assets/spider.svg'
import NavbarHome from '../component/NavbarHome'
import Footer from '../component/Footer'

function OrderPage() {

return (
    <>
    <NavbarHome/>
    <main className='px-32 pt-8 pb-32 gap-8 flex flex-col justify-center items-center bg-gray-300'>
        <div className='flex items-center gap-4'>
            <div className='flex flex-col justify-center items-center gap-3'>
            <div className='bg-green-800 aspect-square rounded-full w-14 text-white flex justify-center items-center'><IoCheckmark className='h-7 w-7'/></div>
            <div>Dates And Time</div>
            </div>
            <div className='border-t-2 border-dashed border-black w-16'></div>
            <div className='flex flex-col justify-center items-center gap-3'>
            <div className='bg-orange-400 aspect-square rounded-full w-14 text-white flex justify-center items-center'>2</div>
            <div>Seat</div>
            </div>
            <div className='border-t-2 border-dashed border-black w-16'></div>
            <div className='flex flex-col justify-center items-center gap-3'>
            <div className='bg-gray-500 aspect-square rounded-full w-14 text-white flex justify-center items-center'>3</div>
            <div>Payment</div>
            </div>
        </div>
        <div className='flex gap-4'>
            <div className='flex flex-col px-6 pb-16 pt-10 bg-white rounded-md gap-8'>
                <div className='flex border-gray-400 border py-3.5 px-6 gap-3.5'>
                    <div className='overflow-hidden w-48 h-28 rounded'>
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
                            <button className='w-16 h-7 bg-pink-300 col-span-2 rounded'></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded'></button>
                            {/* <button className='w-7 aspect-square bg-gray-200 rounded'></button> */}
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
            <Link to="/payment"> <div className='w-96 h-14 rounded-lg bg-orange-600 flex justify-center items-center text-white'>Checkout now</div></Link>
            </div>
        </div>
    </main>
    <Footer/>
    </>
)
}

export default OrderPage
