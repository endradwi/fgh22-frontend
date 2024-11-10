import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import {Link} from 'react-router-dom'
import Spider from '../assets/spider.svg'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import CardOrder from '../component/CardOrder';
import { IoArrowDown } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import cine from '../assets/Cine.svg'

function OrderPage() {
const [isShow, Setshow] = React.useState(false)
React.useEffect(() => {
    window.scrollTo(0, 0);
}, []);
return (
    <>
    <Navbar tittle="navbarhome" />
    {isShow && (
        <>
        <div className='absolute w-screen h-[2030px] opacity-80 bg-black'></div>
        <div className=' flex flex-col gap-11 top-[700px] left-36 absolute'>
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
        
        </>
    )

    }
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
                <div className='flex flex-col md:flex-row md:justify-start md:items-start justify-center items-center border-gray-400 border py-3.5 px-6 gap-3.5'>
                    <div className='overflow-hidden w-full h-96 md:w-48 md:h-28 rounded'>
                        <img className='w-full' src={Spider} alt="" />
                    </div>
                    <div className='flex flex-col gap-3.5'>
                        <div className='text-4xl md:text-2xl font-semibold'>Spider-Man: Homecoming</div>
                        <div className='flex gap-2 justify-center md:justify-start' >
                            <div className='px-5 h-8 bg-gray-400 rounded-3xl flex justify-center items-center' >Action</div>
                            <div className='px-5 h-8 bg-gray-400 rounded-3xl flex justify-center items-center' >Adventure</div>
                        </div>
                        <div className='flex md:flex-row flex-col items-center md:gap-44 gap-5 md:justify-between'>
                            <div className='text-2xl md:text-base'>Regular - 13:00 PM</div>
                            <div className='w-28 h-8 flex justify-center items-center bg-orange-200 rounded-2xl text-orange-500'>Change</div>
                        </div>
                    </div>
                </div>
                <span className='text-2xl font-bold'>Choose Your Seat</span>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <span className='text-sm text-gray-500 font-semibold'>Screen</span>
                    <div className='border border-gray-500 rounded-3xl  w-screen max-w-lg h-1 ml-6'></div>
                    <div className='flex justify-between'>
                        <div className='h-full w-0.5 bg-green-500 md:hidden block' />
                        <div className='grid grid-cols-8 gap-1.5'>
                            <button className='invisible md:visible' >A</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='invisible md:visible' >B</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='invisible md:visible' >C</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-blue-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-blue-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='invisible md:visible' >D</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='invisible md:visible' >E</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='invisible md:visible' >F</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='invisible md:visible' >G</button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-700 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button className='w-7 aspect-square bg-gray-200 rounded' ></button>
                            <button></button>
                            <button className='md:flex items-end justify-center hidden' >1</button>
                            <button className='md:flex items-end justify-center hidden' >2</button>
                            <button className='md:flex items-end justify-center hidden' >3</button>
                            <button className='md:flex items-end justify-center hidden' >4</button>
                            <button className='md:flex items-end justify-center hidden' >5</button>
                            <button className='md:flex items-end justify-center hidden' >6</button>
                            <button className='md:flex items-end justify-center hidden' >7</button>
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
                            
                            <button className='md:flex justify-center items-end hidden'>9</button>
                            <button className='md:flex justify-center items-end hidden'>10</button>
                            <button className='md:flex justify-center items-end hidden'>11</button>
                            <button className='md:flex justify-center items-end hidden'>12</button>
                            <button className='md:flex justify-center items-end hidden'>13</button>
                            <button className='md:flex justify-center items-end hidden'>14</button>
                            <button className='md:flex justify-center items-end hidden'>15</button>
                        </div>
                    </div>
                        <div className='w-full md:hidden flex justify-between pl-9'>
                        <div className='w-56 h-0.5 bg-orange-400' ></div>
                        <div className='w-60 h-0.5 bg-orange-400' ></div>
                        </div>
                </div>
                <span className='text-lg font-semibold'>Seating key</span>
                <div className='flex justify-between w-80 text-2xl md:hidden'>
                    <div className='flex gap-2 items-center'>
                    <div><IoArrowDown/></div>
                    <div>A - G</div>
                    </div>
                    <div className='flex gap-2 items-center'>
                    <div><IoArrowForward /></div>
                    <div>1 - 14</div>
                    </div>
                </div>
                <div className='flex gap-20 md:gap-10 text-sm md:w-full w-96 flex-wrap'>
                    <div className='flex gap-4 items-center'>
                    <div className='md:w-7 w-10 aspect-square bg-gray-200 rounded'></div>
                    <div className='text-2xl'>Available</div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='md:w-7 w-10 aspect-square bg-blue-700 rounded'></div>
                        <div className='text-2xl'>Selected</div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='md:w-7 w-10 aspect-square bg-pink-300 rounded'></div>
                        <div className='text-2xl'>Love nest</div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='md:w-7 w-10 aspect-square bg-gray-700 rounded'></div>
                        <div className='text-2xl'>Sold</div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 md:hidden'>
                    <div className='flex justify-between'>
                    <div>Choosed</div>
                    <div>C4</div>
                    </div>
                    <div className='flex justify-between'>
                        <select className='w-64 h-14 bg-gray-200 rounded-xl px-6'  name="" id="">
                            <option value="">C</option>
                        </select>
                        <select className='w-64 h-14 bg-gray-200 rounded-xl px-6' name="" id="">
                            <option value="">4</option>
                        </select>
                    </div>
                    <button className='w-full h-14 border border-orange-300 rounded-2xl'>Add new seat</button>
                </div>
            </div>
            <CardOrder/>
        </div>
        <button onClick={()=>Setshow(!isShow)} className='ml-[-20px] block md:hidden py-4 rounded-lg text-lg font-semibold text-white px-[270px] bg-orange-500'>Submit</button>
    </main>
    <Footer/>
    </>
)
}

export default OrderPage
