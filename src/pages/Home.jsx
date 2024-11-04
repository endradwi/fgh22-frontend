import React from 'react'
import image1 from '../assets/movie1.webp'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import {Link} from 'react-router-dom'
import { TbShieldCheckFilled } from "react-icons/tb";
import { TbCircleCheckFilled } from "react-icons/tb";
import { HiChatAlt2 } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

import NavbarHome from '../component/NavbarHome'
import Footer from '../component/Footer'
import Newslatter from '../component/Newslatter'
import MovieCard from '../component/MovieCard'

function Home() {

return (
    <>
    <NavbarHome />
    <main className='max-w-xl md:max-w-none md:px-32 py-12 flex flex-col gap-12'>
    <div className='flex flex-col md:flex-row  items-center text-center md:text-left md:justify-between gap-5 md:gap-0'>
        <div className='flex gap-3 flex-col'>
        <div className='text-lg text-orang-600 font-bold'>MOVIE TICKET PURCHASES #1 IN INDONESIA</div>
        <div className='text-5xl font-medium max-w-xl'>Experience the Magic of Cinema: Book Your Tickets Today</div>
        <div className='font-normal text-base text-gray-500'>Sign up and get the ticket with a lot of discount</div>
        </div>
        <div>
            <div className='columns-2 gap-2'>
                <img className='rounded-t-2xl h-[213px]' src={image1} alt="" />
                <img className='rounded-b-2xl mt-2 h-[250px]' src={image2} alt="" />
                <img className='rounded-t-2xl mb-2 h-[240px]' src={image3} alt="" />
                <img className='rounded-b-2xl h-[223px]' src={image4} alt="" />
            </div>
        </div>
    </div>
    <div className='flex flex-col gap-6'>
        <div className='text-lg text-orange-500 font-bold flex justify-center items-center md:block'>WHY CHOOSE US</div>
        <div className='text-3xl min-w-96 max-w-xl md:max-w-md flex justify-center items-center md:block'>Unleashing the Ultimate Movie Experience</div>
        <div className='flex flex-col md:flex-row md:justify-between gap-8'>
        <div className='flex flex-col gap-5 justify-center items-center md:items-start'>
            <div className='aspect-square bg-orange-200 text-orange-600 w-14 rounded-full flex justify-center items-center'>
            <TbShieldCheckFilled className='w-8 h-8'/>
            </div>
            <div className='text-lg font-bold'>Guaranteed</div>
            <div className='text-yellow-700 text-base font-normal max-w-72'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
        </div>
        <div className='flex flex-col gap-5 justify-center items-center md:items-start'>
            <div className='aspect-square bg-orange-200 text-orange-600 w-14 rounded-full flex justify-center items-center'>
            <TbCircleCheckFilled className='h-8 w-8'/>
            </div>
            <div className='text-lg font-bold'>Guaranteed</div>
            <div className='text-yellow-700 text-base font-normal max-w-72'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
        </div>
        <div className='flex flex-col gap-5 justify-center items-center md:items-start'>
            <div className='aspect-square bg-orange-200 text-orange-600 w-14 rounded-full flex justify-center items-center'>
            <HiChatAlt2 className='h-8 w-8'/>
            </div>
            <div className='text-lg font-bold'>Guaranteed</div>
            <div className='text-yellow-700 text-base font-normal max-w-72'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
        </div>
        </div>
    </div>
    <div className='flex flex-col text-center gap-8'>
        <div className='text-lg text-orange-600 font-bold'>MOVIES</div>
        <div className='text-3xl'>Exciting Movies That Should Be Watched Today</div>
    <div className='flex gap-6 flex-shrink-0 overflow-x-scroll justify-between'>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        
    </div>
    <Link to="/homepage"> <div className='text-orange-700 text-lg font-bold flex justify-center items-center gap-3'>View All <IoMdArrowRoundForward className='h-6 w-6'/></div></Link>
    </div>
    <div className='flex flex-col gap-7'>
        <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-3.5'>
            <div className='text-lg font-bold text-orange-700'>UPCOMING MOVIES</div>
            <div className='text-3xl font-normal'>Exciting Movie Coming Soon</div>
        </div>
        <div className='flex gap-2'>
            <div className='aspect-square bg-gray-400 text-white w-14 rounded-full flex justify-center items-center'>
            <IoMdArrowRoundBack className='h-8 w-8'/>
            </div>
            <div className='aspect-square bg-orange-400 text-white w-14 rounded-full flex justify-center items-center'>
            <IoMdArrowRoundForward className='h-8 w-8'/>
            </div>
        </div>
        </div>
        <div className='flex gap-6 flex-shrink-0 justify-between overflow-x-scroll'>
            <MovieCard/>  
            <MovieCard/>  
            <MovieCard/>  
            <MovieCard/>  
            <MovieCard/>  
            <MovieCard/>  
            <MovieCard/>   
        </div>
    </div>
    <Newslatter />
    </main>
    <Footer />
    </>
)
}

export default Home
