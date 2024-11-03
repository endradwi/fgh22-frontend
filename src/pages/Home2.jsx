import React from 'react'
import {Link} from 'react-router-dom'
import NavbarHome from '../component/NavbarHome'
import Footer from '../component/Footer'
import image1 from '../assets/movie1.webp'
import { IoIosSearch } from "react-icons/io";
import Newslatter from '../component/Newslatter'
import { IoMdArrowRoundForward } from "react-icons/io";

function Home() {

return (
    <>
    <NavbarHome/>
    <div className='bg-[url(./assets/bg.svg)] w-screen h-96 bg-cover bg-center overflow-hidden '>
    <div className='w-screen h-96 bg-cover bg-black absolute  opacity-50'></div>
        <div className='flex gap-3 flex-col relative py-36 px-32'>
        <div className='text-lg text-white font-bold'>LIST MOVIE OF THE WEEK</div>
        <div className='text-5xl font-medium max-w-screen-sm text-white'>Experience the Magic of Cinema: Book Your Tickets Today</div>
        </div>
    </div>
    <main className='px-32 py-12 flex flex-col gap-12'>
    <div className='flex gap-5 '>
        <div>
            <form className='flex flex-col gap-3'>
                <label htmlFor="">Cari Event</label>
                <div className='border border-gray-300 rounded-xl flex pt-5 pb-6 pl-5 gap-5'>
                <IoIosSearch className='w-8 h-8' />
                <input type="text" name='searchMovie' placeholder='New Born Expert'/>
                </div>
            </form>
        </div>
        <div className='flex flex-col gap-6'>
            <div>Filter</div>
            <div className='flex gap-3'>
                <span className='py-2.5 px-6 bg-orange-500 text-gray-300 rounded-lg'>Thriller</span>
                <span className='py-2.5 px-6 text-gray-300 rounded-lg'>Horror</span>
                <span className='py-2.5 px-6 text-gray-300 rounded-lg'>Romantic</span>
                <span className='py-2.5 px-6 text-gray-300 rounded-lg'>Adventure</span>
                <span className='py-2.5 px-6 text-gray-300 rounded-lg'>Sci-fi</span>
            </div>
        </div>
    </div>
    <div className='flex flex-col gap-8'>
    <div className='flex gap-6 flex-wrap justify-between'>
        <div className='flex flex-col gap-3'>
            <div className='w-56 rounded-lg overflow-hidden'>
                <img className='w-60 ' src={image1} alt="" />
            </div>
            <div className='flex justify-start'>Black Widow</div>
            <div className='flex gap-2'>
                <span className='w-20 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold'>Action</span>
                <span className='w-24 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold' >Advanture</span>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='w-56 rounded-lg overflow-hidden'>
                <img className='w-60 ' src={image1} alt="" />
            </div>
            <div className='flex justify-start'>Black Widow</div>
            <div className='flex gap-2'>
                <span className='w-20 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold'>Action</span>
                <span className='w-24 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold' >Advanture</span>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='w-56 rounded-lg overflow-hidden'>
                <img className='w-60 ' src={image1} alt="" />
            </div>
            <div className='flex justify-start'>Black Widow</div>
            <div className='flex gap-2'>
                <span className='w-20 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold'>Action</span>
                <span className='w-24 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold' >Advanture</span>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='w-56 rounded-lg overflow-hidden'>
                <img className='w-60 ' src={image1} alt="" />
            </div>
            <div className='flex justify-start'>Black Widow</div>
            <div className='flex gap-2'>
                <span className='w-20 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold'>Action</span>
                <span className='w-24 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold' >Advanture</span>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='w-56 rounded-lg overflow-hidden'>
                <img className='w-60 ' src={image1} alt="" />
            </div>
            <div className='flex justify-start'>Black Widow</div>
            <div className='flex gap-2'>
                <span className='w-20 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold'>Action</span>
                <span className='w-24 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold' >Advanture</span>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='w-56 rounded-lg overflow-hidden'>
                <img className='w-60 ' src={image1} alt="" />
            </div>
            <div className='flex justify-start'>Black Widow</div>
            <div className='flex gap-2'>
                <span className='w-20 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold'>Action</span>
                <span className='w-24 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold' >Advanture</span>
            </div>
        </div>
        
    </div>
        <div className='flex justify-center gap-5'>
            <div className='bg-orange-400 aspect-square w-14 rounded-full flex justify-center items-center' >1</div>
            <div className='bg-gray-300 aspect-square w-14 rounded-full flex justify-center items-center' >2</div>
            <div className='bg-gray-300 aspect-square w-14 rounded-full flex justify-center items-center' >3</div>
            <div className='bg-gray-300 aspect-square w-14 rounded-full flex justify-center items-center' >4</div>
            <div className='bg-gray-300 aspect-square w-14 rounded-full flex justify-center items-center' ><IoMdArrowRoundForward className='h-8 w-8'/></div>
        </div>
    </div>
    <Newslatter/>
    </main>
    <Footer/>
    </>
)
}

export default Home
