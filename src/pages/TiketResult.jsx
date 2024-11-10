import React from 'react'
import logo from '../assets/imagelogo.png'
import {Link} from 'react-router-dom'
import qr from '../assets/qr.svg'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { GoArrowDown } from "react-icons/go";


function TiketResult() {
React.useEffect(() => {
    window.scrollTo(0, 0);
}, []);
return (
    <>
    <Navbar name="navbarhome" />
    <main className=' gap-8 flex md:flex-row flex-col justify-center items-center bg-gray-300'>
    <div className='flex-1 bg-[url(./assets/bg.svg)] max-w-4xl  h-[850px] overflow-hidden relative'>
    <div className='w-screen max-w-4xl h-[850px] absolute bg-black opacity-50 flex items-center justify-center'></div>
    <div className='w-screen h-screen text-white items-center md:items-start flex flex-col px-12 py-28 md:py-96 relative gap-6'>
        <img className='w-48 h-36 block md:hidden' src={logo} alt="" />
        <div className='text-5xl font-bold'>Thankyou For Purchasing</div>
        <div className='text-2xl'>Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor integer sed magna et.</div>
        <div className='text-lg font-bold'>Please Download Your Ticket</div>
        <GoArrowDown  className='text-6xl block md:hidden'/>
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
            <div className='w-80 bg-orange-400 hover:bg-orange-600 rounded-xl text-white h-14 flex justify-center items-center' >Download</div>
            <Link to="/profile" className='w-80 bg-orange-400 hover:bg-orange-600 rounded-xl text-white h-14 flex justify-center items-center' >Done</Link>
            </div>
        </div>
    </div>
    </main>
    <Footer/>
    </>
)
}

export default TiketResult
