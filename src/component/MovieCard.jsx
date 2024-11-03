import React from 'react'
import {Link} from 'react-router-dom'
import image1 from '../assets/movie1.webp'

function MovieCard() {
  return (
    <div>
            <div className='flex flex-col gap-3'>
            <div className=' group w-[264px] h-[405px] rounded-xl bg-yellow-300 overflow-hidden relative'>
                <img className='w-[264px] h-[405px] absolute' src={image1} alt="" />
                <div className='w-full h-full bg-[rgba(0,0,0,0.5)] invisible group-hover:visible absolute flex 
                justify-center items-center flex-col gap-5'>
                <Link to="/detail" className='w-44 h-12 bg-orange-600 flex justify-center items-center rounded-lg 
                    text-white border-orange-700 border-2'>Detail</Link>
                    <div className='w-44 h-12  flex justify-center items-center rounded-lg 
                    text-white border-orange-700 border-2'>Buy Tiket</div>
                </div>
            </div>
            <div className='flex justify-start'>Black Widow</div>
            <div className='flex gap-2'>
                <span className='w-20 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold'>Action</span>
                <span className='w-24 h-8 bg-orange-200 rounded-2xl text-xs flex justify-center items-center font-semibold' >Advanture</span>
            </div>
        </div>
    </div>
  )
}

export default MovieCard
