import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import image1 from '../assets/movie1.webp'
import image2 from '../assets/image1.jpg'
import image3 from '../assets/image2.jpg'
import image4 from '../assets/image3.jpg'
import image5 from '../assets/image4.jpg'

function MovieCard(props) {
  const [image, Setimage] = useState([])

  React.useEffect(()=> {
    fetch('https://localhost:8888/movies')
    //  method: "GET", 
    // .then(res=>res.json())
    // .then(response=>(Setimage(response.results)))
  },[])
  
  return (
    <div>
            <div className='flex gap-3'>
            {image.map((data=>(  
              <div className='flex flex-col'>
                <div className=' group w-[264px] h-[405px] rounded-xl overflow-hidden relative'>
                <img className='w-[264px] h-[405px] absolute' src={data.image} alt={data.name} />
                <div className='w-full h-full bg-[rgba(0,0,0,0.5)] invisible group-hover:visible absolute flex 
                justify-center items-center flex-col gap-5'>
                <Link to="/detail" className='w-44 h-12 bg-orange-600 flex justify-center items-center rounded-lg 
                    text-white border-orange-700 border-2'>Detail</Link>
                    <div className='w-44 h-12  flex justify-center items-center rounded-lg 
                    text-white border-orange-700 border-2'>Buy Tiket</div>
                </div>
              </div>
              <div className='flex justify-start'>
              {data.name}</div>
              <div className='flex gap-2'>
                <span className='w-20 h-8 bg-orange-200 rounded-2xl  text-white text-xs flex justify-center items-center font-semibold'>
                  {data.species}
                </span>
                <span className='w-24 h-8 bg-orange-200 rounded-2xl text-white  text-xs flex justify-center items-center font-semibold' >
                  {data.gender}
                </span>
            </div>
              </div>              
            )))}
            <div className='text-lg text-blue-700 font-bold'>
              {props.date}
            </div>
        </div>
    </div>
  )
}

export default MovieCard
